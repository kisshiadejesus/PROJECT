import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/welcome.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import formulaOneLogo from '../assets/02.png'; 

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out');
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <Navbar bg="light" data-bs-theme="light" className="navbar-custom">
        <Container>
          <Navbar.Brand>SWIFT.CO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/on-sale">On Sale</Nav.Link>
            <Nav.Link as={Link} to="/new-arrivals">New Arrivals</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="welcome-image-container">
        <Container className="welcome-text-container">
          <h2 className="welcome-title">FIND FERRARI MERCH THAT</h2>
          <h2 className="welcome-title">MATCHES YOUR STYLE</h2>
          <p className="welcome-subtitle">Explore our collection of authentic Ferrari merchandise, crafted for fans who live for</p>
          <p className="welcome-subtitle">speed, style, and legacy.</p>
          <Button variant="danger" onClick={handleLogout} className="welcome-button">
            Shop Now
          </Button>
        </Container>
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
      <div className="formula-one-banner">
        <div className="formula-one-logo-container">
          <img src={formulaOneLogo} alt="Formula 1 Logo" className="formula-one-logo" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;