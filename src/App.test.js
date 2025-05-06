import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App shell', () => {
  test('renders a Home link in the navbar', () => {
    render(<App />);
    // finds the <a class="nav-link" href="/">Home</a>
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  test('renders the main heading LOCK/IN', () => {
    render(<App />);
    // finds the <h1>LOCK/IN</h1> in your hero section
    const heading = screen.getByRole('heading', { level: 1, name: /lock\/in/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders Shop Now button', () => {
    render(<App />);
    // finds the <button class="shop-now">Shop Now</button>
    const btn = screen.getByRole('button', { name: /shop now/i });
    expect(btn).toBeInTheDocument();
  });
});
