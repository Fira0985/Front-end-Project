import { useContext } from 'react';
import '../styles/Hero.css';
import { Context } from './ThemeContext';

export default function Hero() {
    const {theme, ToggleTheme} = useContext(Context) 
    return (
        <section className={theme === "light"? "hero-section": "dark-hero-section"}>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Welcome to Sweet Organics</h1>
                    <p>Discover our range of fresh and delicious juices that bring you pure refreshment. Made with love, served with care.</p>
                    <button className="hero-button">Order Now</button>
                </div>
                <div className="hero-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Fresh Organic Juice"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
}
