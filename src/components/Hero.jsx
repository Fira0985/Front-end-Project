import '../styles/Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Welcome to Sweet Organics</h1>
                <p>Discover our range of fresh and delicious juices that bring you pure refreshment. Made with love, served with care.</p>
                <button className="hero-button">Order Now</button>
            </div>
        </section>
    );
}