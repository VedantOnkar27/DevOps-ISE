import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/OrderConfirmation.css';

function OrderConfirmation() {
  const location = useLocation(); // Access passed state
  const orderDetails = location.state?.orderDetails || []; // Retrieve order details or set default

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <h3>Thank you for your order!</h3>
      <p>Your order details are as follows:</p>
      {orderDetails.length > 0 ? (
        <ul>
          {orderDetails.map((item) => (
            <li key={item.id}>
              <p>{item.name} - ${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No order details available.</p>
      )}
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default OrderConfirmation;
