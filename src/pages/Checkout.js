
import React, { useState } from 'react';
import '../css/Checkout.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleCheckout = (e) => {
    e.preventDefault(); 


   
    if (name && shippingAddress && paymentMethod && email) {
      clearCart(); 
      navigate('/order-confirmation'); 
    } else {
      alert('Please fill out all fields');
    }
  };


  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart.</p>
      ) : (
        <form onSubmit={handleCheckout} className='checkout-labels'>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Shipping Address:</label>
            <input
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>
          <button type="submit">Complete Order</button>
        </form>
      )}
    </div>
  );
}


export default Checkout;