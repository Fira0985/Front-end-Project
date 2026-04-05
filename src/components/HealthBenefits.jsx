import React, { useContext } from 'react';
import { Shield, Sparkles, Zap, Heart } from 'lucide-react';
import '../styles/HealthBenefits.css';
import { Context } from './ThemeContext';

export default function HealthBenefits() {
    const { theme } = useContext(Context);

    const benefits = [
        {
            icon: <Zap className="benefit-icon" />,
            title: "Energy Boost",
            description: "Natural sugars and vitamins provide sustained energy without the crash."
        },
        {
            icon: <Shield className="benefit-icon" />,
            title: "Immune Support",
            description: "High Vitamin C and antioxidants to keep your body's defenses strong."
        },
        {
            icon: <Sparkles className="benefit-icon" />,
            title: "Skin Radiance",
            description: "Hydration and essential nutrients for a natural, healthy glow."
        },
        {
            icon: <Heart className="benefit-icon" />,
            title: "Heart Health",
            description: "Potassium and bioflavonoids that support cardiovascular wellness."
        }
    ];

    return (
        <section className={theme === "light" ? "benefits-section" : "dark-benefits-section"}>
            <div className="benefits-container">
                <div className="benefits-header">
                    <h2>Why FiraJuice?</h2>
                    <p>Experience the transformative power of nature's liquid gold.</p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="icon-wrapper">
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
