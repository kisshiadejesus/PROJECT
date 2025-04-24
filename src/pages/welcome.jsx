import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/welcome.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import formulaOneLogo from '../assets/02.png'; 
import searchIcon from '../assets/search-icon.png'; 
import UserIcon from '../assets/UserIcon.png';
import CartIcon from '../assets/Cart.png';

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out');
    navigate('/login');
  };

  return (
    <div className="welcome-container">
    <Navbar bg="light" data-bs-theme="light" className="navbar-custom">
    <Container className="navbar-content">
    <Navbar.Brand className="brand">SWIFT.CO</Navbar.Brand>

    <Nav className="nav-links">
  <Nav.Link as={Link} to="/shop" className="red-link">Shop</Nav.Link>
  <Nav.Link as={Link} to="/on-sale" className="red-link">On Sale</Nav.Link>
  <Nav.Link as={Link} to="/new-arrivals" className="red-link">New Arrivals</Nav.Link>
  <Nav.Link as={Link} to="/about-us" className="red-link">About Us</Nav.Link>
</Nav>

<div className="search-bar">
  <div className="search-wrapper">
    <img src={searchIcon} alt="Search Icon" className="search-icon" />
    <input
      type="text"
      placeholder="Search for products..."
      className="search-input"
    />
  </div>
</div>

<Nav className="icon-wrapper">
  <Nav.Link as={Link} to="/cart">
    <img src={CartIcon} alt="Cart" className="cart-icon" />
  </Nav.Link>
  <Nav.Link as={Link} to="/profile">
    <img src={UserIcon} alt="User" className="user-icon" />
  </Nav.Link>
</Nav>

  </Container>
</Navbar>

      <div className="welcome-image-container">
        <Container className="welcome-text-container">
          <h2 className="welcome-title">FIND FERRARI MERCH THAT</h2>
          <h2 className="welcome-title">MATCHES YOUR STYLE</h2>
          <p className="welcome-subtitle">Explore our collection of authentic Ferrari merchandise, crafted for fans who live for
          speed, style, and legacy.</p>
          <Button variant="none" onClick={handleLogout} className="welcome-button">
            Shop Now
          </Button>
        </Container>
        <div class="welcome-stats-wrapper">
          <div className="welcome-stats-bar">
            <div>
              <h3 className="stats-number">200+</h3>
              <p className="stats-label">International Brands</p>
            </div>
            <div>
              <h3 className="stats-number">2,000+</h3>
              <p className="stats-label">High-Quality Products</p>
            </div>
            <div>
              <h3 className="stats-number">30,000+</h3>
              <p className="stats-label">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="formula-one-banner">
        <div className="formula-one-logo-container">
          <img src={formulaOneLogo} alt="Formula 1 Logo" className="formula-one-logo" />
        </div>
      </div>   
</div>
    
  );
}

export default Welcome;