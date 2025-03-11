import { useContext, useState } from 'react';
import '../styles/Products.css';
import { Context } from './ThemeContext';

const products = [
    {
        id: 1,
        name: "Fresh Orange Juice",
        description: "Pure and refreshing orange juice made from fresh fruits",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Berry Blast",
        description: "A delicious mix of fresh berries",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Green Detox",
        description: "Healthy blend of green vegetables and fruits",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1610970881699-44a5587144e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Tropical Paradise",
        description: "Exotic blend of tropical fruits",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1546173159-315724eb42c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Mango Tango",
        description: "Sweet and tangy mango juice",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Watermelon Fresh",
        description: "Refreshing watermelon juice",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1527661591475-5bcf8dba9f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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