import React from 'react';
import { CheckCircle, Printer, X } from 'lucide-react';
import '../styles/OrderProof.css';

export default function OrderProof({ order, onClose }) {
  if (!order) return null;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(order.orderId)}`;

  return (
    <div className="proof-overlay">
      <div className="proof-content">
        <button className="proof-close" onClick={onClose}><X /></button>
        
        <div className="proof-header">
          <CheckCircle size={48} color="#4CAF50" />
          <h2>Order Confirmed!</h2>
          <p>Thank you for choosing Penny Juice.</p>
        </div>

        <div className="proof-body" id="printable-proof">
          <div className="proof-section">
            <h3>Order Information</h3>
            <div className="info-row">
              <span>Order ID:</span>
              <strong>{order.orderId}</strong>
            </div>
            <div className="info-row">
              <span>Date:</span>
              <strong>{new Date().toLocaleDateString()}</strong>
            </div>
            <div className="info-row">
              <span>Service:</span>
              <strong>{order.items[0]?.pickupOption === 'pickup' ? 'Pickup' : 'Delivery'}</strong>
            </div>
            {order.items[0]?.pickupTime && (
              <div className="info-row">
                <span>Scheduled Time:</span>
                <strong>{new Date(order.items[0].pickupTime).toLocaleString()}</strong>
              </div>
            )}
          </div>

          <div className="proof-section">
            <h3>Order Summary</h3>
            {order.items.map((item, index) => (
              <div key={index} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-total">
              <span>Total Paid</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="qr-section">
            <p>Show this code at the counter or to the delivery driver</p>
            <img src={qrUrl} alt="Order QR Code" className="qr-code" />
            <p className="qr-hint">Scan to verify order</p>
          </div>
        </div>

        <div className="proof-footer">
          <button className="print-button" onClick={() => window.print()}>
            <Printer size={18} /> Print Proof
          </button>
          <p className="save-hint">A copy of this proof has been saved to your local history.</p>
        </div>
      </div>
    </div>
  );
}
