import { useContext } from 'react';
import '../styles/AboutUs.css';
import { Context } from './ThemeContext';
import storyImage from "../assets/pexels-suju-1233319.jpg";

export default function AboutUs() {
    const reviews = [
        {
            id: 1,
            text: "FiraJuice is my go-to for refreshing, natural energy! The Orange Juice is unmatched.",
            author: "Sarah Johnson",
            role: "Health Enthusiast"
        },
        {
            id: 2,
            text: "I love the transparency. You know exactly what's in every bottle. Organic and delicious!",
            author: "Michael Chen",
            role: "Fitness Trainer"
        },
        {
            id: 3,
            text: "Great variety and the delivery service is so convenient. Five stars!",
            author: "Emma Davis",
            role: "Food Blogger"
        }
    ];

    const stats = [
        { label: "Happy Customers", value: "50K+" },
        { label: "Juice Varieties", value: "25+" },
        { label: "Local Farms", value: "15+" },
        { label: "Daily Production", value: "5K+" }
    ];

    const { theme } = useContext(Context);

    return (
        <section id="about" className={theme === "light" ? "about-section" : "dark-about-section"}>
            <div className="about-container">
                <div className="about-header">
                    <h2>About FiraJuice</h2>
                    <div className="story-container">
                        <div className="story-text">
                            <h3>Our Story</h3>
                            <p>
                                Founded in 2010, FiraJuice started with a simple mission: to make fresh, organic juice accessible to everyone. What began in a small kitchen has grown into a community staple, but our values remain the same. We believe in the power of nature to nourish and energize.
                            </p>
                            <h3>Our Mission</h3>
                            <p>
                                To provide the highest quality organic beverages while supporting sustainable farming practices and promoting a healthier lifestyle for our customers.
                            </p>
                        </div>
                        <div className="story-image">
                            <img src={storyImage} alt="Our Story" />
                        </div>
                    </div>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>100% Organic</h3>
                        <p>We use only the finest organic fruits and vegetables, zero pesticides.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💪</div>
                        <h3>Nutrient Dense</h3>
                        <p>Cold-pressed to preserve every vital enzyme and vitamin.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">♻️</div>
                        <h3>Zero Waste</h3>
                        <p>Committed to 100% recyclable packaging and eco-friendly operations.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Farmer First</h3>
                        <p>Direct partnerships with local organic farmers for ethical sourcing.</p>
                    </div>
                </div>

                <div className="facility-section">
                    <div className="facility-content">
                        <h3>Our Impact</h3>
                        <div className="facility-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat">
                                    <p className="stat-number">{stat.value}</p>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="reviews-section">
                    <h3>What Our Community Says</h3>
                    <div className="reviews-grid">
                        {reviews.map((review) => (
                            <div key={review.id} className="review-card">
                                <div className="review-quote">"</div>
                                <p className="review-text">{review.text}</p>
                                <div className="review-author">
                                    <p className="author-name">{review.author}</p>
                                    <p className="author-role">{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}