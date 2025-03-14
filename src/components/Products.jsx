import { useContext, useState } from 'react';
import image1 from "../assets/pexels-brunoscramgnon-1337825.jpg";
import image2 from "../assets/pexels-charlotte-may-5946659.jpg";
import image3 from "../assets/pexels-element5-775032.jpg";
import image4 from "../assets/pexels-fotios-photos-1161547.jpg";
import image5 from "../assets/pexels-marceloverfe-27584413.jpg";
import image6 from "../assets/pexels-rkftr-4335613.jpg";
import '../styles/Products.css';
import { Context } from './ThemeContext';

const products = [
    {
        id: 1,
        name: "Fresh Orange Juice",
        description: "Pure and refreshing orange juice made from fresh fruits",
        price: 4.99,
        image: image1
    },
    {
        id: 2,
        name: "Berry Blast",
        description: "A delicious mix of fresh berries",
        price: 5.99,
        image: image2
    },
    {
        id: 3,
        name: "Green Detox",
        description: "Healthy blend of green vegetables and fruits",
        price: 6.99,
        image: image3
    },
    {
        id: 4,
        name: "Tropical Paradise",
        description: "Exotic blend of tropical fruits",
        price: 7.99,
        image: image4
    },
    {
        id: 5,
        name: "Mango Tango",
        description: "Sweet and tangy mango juice",
        price: 5.99,
        image: image5
    },
    {
        id: 6,
        name: "Watermelon Fresh",
        description: "Refreshing watermelon juice",
        price: 4.99,
        image: image6
    }
];

const categories = [
    "All",
    "Customer Favorite",
    "Best Product",
    "Special Product",
    "New Arrival",
    "Limited Edition",
    "Top Rated"
];

export default function Products({ onProductClick }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const { theme, ToggleTheme } = useContext(Context)

    return (
        <div className={theme === "light" ? "container" : "dark-container"}>
            <section id="products" className={theme === "light" ? "products-section" : "dark-products-section"}>
                <div className="products-header">
                    <h2>Our Products</h2>
                    <p>
                        Explore our Juice Collection, where freshness meets flavor. Our juices are made from the finest fruits,
                        offering a delicious and refreshing experience in every bottle.
                    </p>
                </div>

                <div className="categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`category-button ${activeCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
                            onClick={() => onProductClick(product)}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="quick-view">Quick View</button>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <span className="price">${product.price.toFixed(2)}</span>
                                    <button className="order-button">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
}