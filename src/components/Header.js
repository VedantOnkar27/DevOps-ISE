import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Only import the custom hook
import "../css/Header.css";

function Header() {
  const { cartItems } = useCart(); // Use the hook to get cartItems

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">   
          Cart [{cartItems.length}]
        </Link>
      </nav>
    </header>
  );
}

export default Header;
