import React from 'react';
import '../css/Home.css';
import feature from '../images/razer.png'
import reddragon from '../images/reddragon-k616.png'
import apex from '../images/apex.jpg'
import razer from '../images/razer.png'
import logitech from '../images/rog.png'
const Home = () => {
  const navigateto = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
    return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>LOCK/OUT Version: 2</h1>
          <p>Unleash your game with epic gear.</p>
          <p> Dominate every level with unfair hardware advantages - no compromises, only power.</p>
          <button onClick={() => navigateto('features')} className="shop-now">Shop Now</button>
          </div>
        <img
          src={feature}
          alt="Featured keyboards"
          className="hero-image"
        />
      </section>


      <section className="featured-collection" id="features">
        <h2>Featured Collection</h2>
        <div className="keyboard-grid">
          <div className="keyboard-card">
            <img
              src={reddragon}
              alt="keyboard 1"
            />
            <h3>RedDragon K - 616 Fizz Pro</h3>
            <p>60% Mechanical Keyboard with Blue Switches and a Thocky sound</p>
          </div>
          <div className="keyboard-card">
            <img
              src={apex}
              alt="keyboard 2"
            />
            <h3>Apex Pro Mini Wireless</h3>
            <p>60% RGB Mechanical Gaming Keyboard <br></br>with Tactile Switches</p>
          </div>
          <div className="keyboard-card">
            <img
              src={razer}
              alt="keyboard 3"
            />
            <h3>Razer Huntsman PRO V3 - Tenkeyless</h3>
            <p>75% Hot - Swappable Mechanical Gaming Keyboard with Red Switches </p>
          </div>
          <div className="keyboard-card">
            <img
              src={logitech}
              alt="keyboard 4"
            />
            <h3>ROG Strix Scope RX TKL Wireless Deluxe</h3>
            <p>A 75% Mechanical Keyboard Armed with Smooth, <br></br>Fast Red Switches</p>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;