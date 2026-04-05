import { useContext, useState } from 'react';
import '../styles/Footer.css';
import { Context } from './ThemeContext';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for subscribing, ${email}!`);
        setEmail('');
    };

    const {theme} = useContext(Context)

    return (
        <footer className={theme === "light"? "footer" : "dark-footer"}>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h5>FiraJuice</h5>
                        <ul>
                            <li>123 Juice Street, Organic City</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Email: hello@firajuice.com</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#products">Our Products</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h5>Newsletter</h5>
                        <p>Subscribe to get special offers and updates</p>
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FiraJuice. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}