import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import '../styles/ProductModal.css';

export default function ProductModal({ product, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const [pickupOption, setPickupOption] = useState('delivery');
    const [pickupTime, setPickupTime] = useState('');
    const [instructions, setInstructions] = useState('');
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const orderDetails = {
            quantity,
            pickupOption,
            pickupTime: pickupOption === 'pickup' ? pickupTime : null,
            instructions
        };
        addToCart(product, orderDetails);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-body">
                    <div className="modal-image-container">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="modal-image"
                        />
                    </div>
                    <div className="modal-details">
                        <h2>{product.name}</h2>
                        <p className="modal-description">{product.description}</p>
                        
                        <div className="order-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={quantity} 
                                        onChange={(e) => setQuantity(parseInt(e.target.value))} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Service</label>
                                    <select value={pickupOption} onChange={(e) => setPickupOption(e.target.value)}>
                                        <option value="delivery">Delivery</option>
                                        <option value="pickup">Pickup</option>
                                    </select>
                                </div>
                            </div>

                            {pickupOption === 'pickup' && (
                                <div className="form-group">
                                    <label>Pickup Date/Time</label>
                                    <input 
                                        type="datetime-local" 
                                        value={pickupTime} 
                                        onChange={(e) => setPickupTime(e.target.value)} 
                                        required
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label>Special Instructions</label>
                                <textarea 
                                    placeholder="Any allergies or delivery notes?"
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <span className="modal-price">${(product.price * quantity).toFixed(2)}</span>
                            <button className="modal-button" onClick={handleAddToCart}>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}