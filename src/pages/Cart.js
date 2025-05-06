import React from 'react';
import '../css/Cart.css'
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';


function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart(); 


  const handleRemove = (productId) => {
    removeFromCart(productId);
  };


  const handleClearCart = () => {
    clearCart();
  };


  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">₹{item.price}/-</p>
                  </div>
                </div>
                <button onClick={() => handleRemove(item.id)} className="remove-item-btn">Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <button onClick={handleClearCart} className="clear-cart-btn">Clear Cart</button>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


export default Cart;