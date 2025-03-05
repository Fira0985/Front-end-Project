import '../styles/ProductModal.css';

export default function ProductModal({ product, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-body">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="modal-image"
                    />
                    <div className="modal-details">
                        <h2>{product.name}</h2>
                        <p className="modal-description">{product.description}</p>
                        <div className="modal-footer">
                            <span className="modal-price">${product.price.toFixed(2)}</span>
                            <button className="modal-button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}