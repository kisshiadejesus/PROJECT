// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import searchIcon from '../assets/search-icon.png';
import CartIcon from '../assets/Cart.png';
import UserIcon from '../assets/UserIcon.png';

const AppNavbar = () => {
  const [showNewArrivalsBanner, setShowNewArrivalsBanner] = React.useState(true);
    const handleCloseNewArrivalsBanner = () => {
        setShowNewArrivalsBanner(false);
    };

  return (
    <>
      {showNewArrivalsBanner && (
        <div className="new-arrivals-banner">
          <p>
            New Arrivals Just Dropped!
            <Link to="/new-arrivals" className="banner-link">
              Explore Now
            </Link>
          </p>
          <button
            className="close-banner-button"
            onClick={handleCloseNewArrivalsBanner}
          >
            &times;
          </button>
        </div>
      )}
      <Navbar
        bg="light"
        data-bs-theme="light"
        className="navbar-custom"
        style={{ top: showNewArrivalsBanner ? '40px' : '0' }}
      >
        <Container className="navbar-content">
          <Navbar.Brand className="brand">
            <h3>
              <span
                style={{
                  color: '#C00000',
                  fontWeight: '1000',
                  marginRight: '8px',
                  marginLeft: '70px',
                }}
              >
                SWIFT.CO
              </span>
            </h3>
          </Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/shop" className="red-link">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/on-sale" className="red-link">
              On Sale
            </Nav.Link>
            <Nav.Link as={Link} to="/new-arrivals" className="red-link">
              New Arrivals
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="red-link">
              About Us
            </Nav.Link>
          </Nav>

          <div className="search-bar">
            <div className="search-wrapper">
              <img
                src={searchIcon}
                alt="Search Icon"
                className="search-icon"
              />
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
    </>
  );
};

export default AppNavbar;