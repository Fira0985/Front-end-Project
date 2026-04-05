import { useContext, useState, useMemo } from "react";
import { ClipLoader } from "react-spinners";
import image1 from "../assets/pexels-brunoscramgnon-1337825.jpg";
import image2 from "../assets/pexels-charlotte-may-5946659.jpg";
import image3 from "../assets/pexels-element5-775032.jpg";
import image4 from "../assets/pexels-fotios-photos-1161547.jpg";
import image5 from "../assets/pexels-marceloverfe-27584413.jpg";
import image6 from "../assets/pexels-rkftr-4335613.jpg";
import "../styles/Products.css";
import { Context } from "./ThemeContext";

const products = [
    { id: 1, name: "Fresh Orange Juice", description: "Pure and refreshing orange juice made from fresh fruits", price: 4.99, image: image1, type: ["All", "Top Rated", "New Arrival"], ingredients: ["Orange", "Vitamin C"] },
    { id: 2, name: "Berry Blast", description: "A delicious mix of fresh berries", price: 5.99, image: image2, type: ["All", "New Arrival"], ingredients: ["Strawberry", "Blueberry", "Raspberry"] },
    { id: 3, name: "Green Detox", description: "Healthy blend of green vegetables and fruits", price: 6.99, image: image3, type: ["All", "New Arrival", "Customer Favorite"], ingredients: ["Kale", "Spinach", "Apple", "Lemon"] },
    { id: 4, name: "Tropical Paradise", description: "Exotic blend of tropical fruits", price: 7.99, image: image4, type: ["All", "Best Product"], ingredients: ["Pineapple", "Mango", "Coconut"] },
    { id: 5, name: "Mango Tango", description: "Sweet and tangy mango juice", price: 5.99, image: image5, type: ["All", "Special Product", "New Arrival", "Limited Edition"], ingredients: ["Mango", "Orange", "Lime"] },
    { id: 6, name: "Watermelon Fresh", description: "Refreshing watermelon juice", price: 4.99, image: image6, type: ["All", "Limited Edition"], ingredients: ["Watermelon", "Mint"] }
];

const categories = [
    "All", "Customer Favorite", "Best Product", "Special Product",
    "New Arrival", "Limited Edition", "Top Rated"
];

export default function Products({ onProductClick, searchQuery = "" }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentList, setCurrentList] = useState("All");
    const [isLoading, setIsLoading] = useState(false);

    const { theme } = useContext(Context);

    function updateList(type) {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentList(type);
            setIsLoading(false);
        }, 800);
    }

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = product.type.includes(currentList);
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [currentList, searchQuery]);

    return (
        <div className={theme === "light" ? "container" : "dark-container"}>
            <section id="products" className={theme === "light" ? "products-section" : "dark-products-section"}>
                <div className="products-header">
                    <h2>Our Juice Collection</h2>
                    <p>Discover the freshest blends or search for your favorite ingredient.</p>
                </div>

                <div className="categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                updateList(category);
                            }}
                            className={`category-button ${activeCategory === category ? "active" : ""}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="loader-container">
                        <ClipLoader color="#ff6600" size={50} />
                    </div>
                ) : (
                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className={`product-card ${hoveredProduct === product.id ? "hovered" : ""}`}
                                    onClick={() => onProductClick(product)}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                >
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-overlay">
                                            <button className="quick-view">Customize Order</button>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p className="ingredients-list">
                                            <strong>Ingredients:</strong> {product.ingredients.join(", ")}
                                        </p>
                                        <div className="product-footer">
                                            <span className="price">${product.price.toFixed(2)}</span>
                                            <button className="order-button">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No juices found matching "{searchQuery}"</p>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}
