
import React from 'react';
import { useCart } from '../context/CartContext'; 
import '../css/ProductDetails.css'


function ProductDetails() {
  const { addToCart } = useCart(); 
  const product = {
    name: 'Sample Product',
    description: 'Product description goes here.',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  };


  const handleAddToCart = () => {
    addToCart(product); 
  };


  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}


export default ProductDetails;