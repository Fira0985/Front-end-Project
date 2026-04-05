import { useContext } from 'react';
import heroImage from "../assets/pexels-charlotte-may-5946659.jpg";
import '../styles/Hero.css';
import { Context } from './ThemeContext';

export default function Hero() {
    const {theme} = useContext(Context) 
    return (
        <section className={theme === "light"? "hero-section": "dark-hero-section"}>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>FiraJuice</h1>
                    <h3>Nature's Finest, Bottle for You</h3>
                    <p>Experience the pure essence of organic fruits with FiraJuice. No additives, no preservatives—just 100% natural goodness delivered to your doorstep or ready for pickup.</p>
                    <a href="#products" className="hero-button">Explore Flavors</a>
                </div>
                <div className="hero-image-container">
                    <img
                        src={heroImage}
                        alt="Fresh Organic FiraJuice"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
}
