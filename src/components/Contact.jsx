import React, { useContext } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import '../styles/Contact.css';
import { Context } from './ThemeContext';

export default function Contact() {
    const { theme } = useContext(Context);

    return (
        <section id="contact" className={theme === "light" ? "contact-section" : "dark-contact-section"}>
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Get In Touch</h2>
                    <p>Have questions about our juices or want to place a bulk order? We'd love to hear from you!</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h4>Our Location</h4>
                                <p>123 Organic Lane, Freshville, FV 54321</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h4>Phone Number</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h4>Email Address</h4>
                                <p>hello@pennyjuice.com</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook /></a>
                            <a href="#" className="social-icon"><Instagram /></a>
                            <a href="#" className="social-icon"><Twitter /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
