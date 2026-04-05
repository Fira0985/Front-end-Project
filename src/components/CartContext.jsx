import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem("orders");
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const addToCart = (product, details) => {
        setCart((prevCart) => {
            // We allow multiple entries for the same product if details (instructions, etc.) differ
            // but for simplicity here, we'll just add it as a new entry
            return [...prevCart, { ...product, ...details, cartId: Date.now() }];
        });
    };

    const removeFromCart = (cartId) => {
        setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
    };

    const updateQuantity = (cartId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.cartId === cartId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
        clearCart();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                orders,
                addOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
