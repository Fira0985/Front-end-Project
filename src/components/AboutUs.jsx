import '../styles/AboutUs.css';

export default function AboutUs() {
    const reviews = [
        {
            id: 1,
            text: "The best juice I've ever tasted! Fresh, natural, and absolutely delicious.",
            author: "Sarah Johnson",
            role: "Health Enthusiast"
        },
        {
            id: 2,
            text: "I love how they use only organic ingredients. You can really taste the difference!",
            author: "Michael Chen",
            role: "Fitness Trainer"
        },
        {
            id: 3,
            text: "Great variety and excellent customer service. Will definitely order again!",
            author: "Emma Davis",
            role: "Food Blogger"
        }
    ];

    const stats = [
        { label: "Employees", value: "500+" },
        { label: "Machines", value: "150+" },
        { label: "Buildings", value: "20+" },
        { label: "Daily Production", value: "10K+" }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h2>About Us</h2>
                    <p>
                        At Sweet Organics, we are dedicated to bringing you the freshest and most delicious juices.
                        We source the finest fruits to craft beverages that are both refreshing and full of natural goodness.
                        Our juices contain no artificial additives—just pure, wholesome ingredients you can trust.
                    </p>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Organic Ingredients</h3>
                        <p>We use only the finest organic fruits and vegetables in our juices.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💪</div>
                        <h3>Health First</h3>
                        <p>Our recipes are designed to maximize nutritional benefits.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">♻️</div>
                        <h3>Eco-Friendly</h3>
                        <p>Sustainable practices and eco-friendly packaging.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Community Focus</h3>
                        <p>Supporting local farmers and communities.</p>
                    </div>
                </div>

                <div className="facility-section">
                    <div className="facility-content">
                        <h3>Our Production Facility</h3>
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
                    <h3>What Our Customers Say</h3>
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