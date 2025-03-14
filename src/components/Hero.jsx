import { useContext } from 'react';
import heroImage from "../assets/pexels-charlotte-may-5946659.jpg";
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
                        src={heroImage}
                        alt="Fresh Organic Juice"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
}
