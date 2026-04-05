import React, { useContext, useState } from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartContext } from './CartContext';
import OrderProof from './OrderProof';
import '../styles/Cart.css';

export default function Cart({ isOpen, onClose }) {
    const { cart, removeFromCart, updateQuantity, addOrder } = useContext(CartContext);
    const [latestOrder, setLatestOrder] = useState(null);
    const [showProof, setShowProof] = useState(false);

    if (!isOpen && !showProof) return null;

    const handleCheckout = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const order = {
            orderId: 'PJ-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            items: [...cart],
            total: total,
            timestamp: new Date().toISOString()
        };
        addOrder(order);
        setLatestOrder(order);
        setShowProof(true);
    };

    const handleCloseProof = () => {
        setShowProof(false);
        setLatestOrder(null);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="cart-overlay" onClick={onClose}>
                    <div className="cart-content" onClick={(e) => e.stopPropagation()}>
                        <div className="cart-header">
                            <h2>Your Cart</h2>
                            <button className="close-cart" onClick={onClose}><X /></button>
                        </div>

                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <div className="empty-cart">
                                    <ShoppingBag size={48} />
                                    <p>Your cart is empty</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.cartId} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-meta">{item.pickupOption.toUpperCase()} | Qty: {item.quantity}</p>
                                            <div className="item-controls">
                                                <div className="quantity-controls">
                                                    <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>+</button>
                                                </div>
                                                <button className="remove-item" onClick={() => removeFromCart(item.cartId)}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="item-price">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="cart-footer">
                                <div className="total">
                                    <span>Total</span>
                                    <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
                                </div>
                                <button className="checkout-button" onClick={handleCheckout}>Complete Order</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {showProof && latestOrder && (
                <OrderProof order={latestOrder} onClose={handleCloseProof} />
            )}
        </>
    );
}
