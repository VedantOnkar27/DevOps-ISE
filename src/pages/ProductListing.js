import React, { useEffect, useState } from 'react';
import '../css/ProductListing.css'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // Use the correct hook
import product1 from '../images/reddragon-k616.png'
import product2 from '../images/apex.jpg'
import product3 from '../images/razer.png'
import product4 from '../images/rog.png'
import product5 from '../images/rdg-deimos.png'
function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = [
          { id: 1, name: 'RedDragon K - 616 Fizz Pro', price: 3349.99, image: product1 },
          { id: 2, name: 'Apex Pro Mini Wireless', price: 2450, image: product2 },
          { id: 3, name: 'Razer Huntsman PRO V3 - Tenkeyless', price: 8999, image: product3 },
          { id: 4, name: 'ROG Strix Scope RX TKL Wireless Deluxe', price: 7850, image: product4 },
          { id: 5, name: 'REDRAGON Deimos K599 60% RGB', price: 3840, image: product5 },
        ];
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  if (loading) return <div>Loading products...</div>;
  if (!products || products.length === 0) return <div>No products available</div>;


  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <ProductCard product={product} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}


export default ProductListing;