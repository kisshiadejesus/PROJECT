import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import welcomeImage from '../assets/03.jpeg';
import '../styles/welcome.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 

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
        <Image
          src={welcomeImage}
          className="welcome-image"
          alt="Welcome Banner"
        />
        <Container className="welcome-text-container">
          <div className="welcome-text-overlay">
            <h2 className="welcome-title">FIND FERRARI MERCH THAT</h2>
            <h2 className="welcome-title">MATCHES YOUR STYLE</h2>
            <p className="welcome-subtitle">Explore our collection of authentic Ferrari merchandise, crafted for fans who live for</p>
            <p className="welcome-subtitle">speed, style, and legacy.</p>
            <Button variant="danger" onClick={handleLogout} className="welcome-button">
              Shop Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
