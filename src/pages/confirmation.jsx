import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Row, Col, Card, Pagination, Image, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import searchIcon from '../assets/search-icon.png';
import UserIcon from '../assets/UserIcon.png';
import CartIcon from '../assets/Cart.png';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import visa from '../assets/visa.png'; // Corrected import for payment icons
import mastercard from '../assets/mastercard.png';
import paypal from '../assets/paypal.png';
import gpay from '../assets/gpay.png';
import stripe from '../assets/stripe.png';
import visaIcon from '../assets/visa.png'; // Using consistent import for footer
import mastercardIcon from '../assets/mastercard.png';
import paypalIcon from '../assets/paypal.png';
import applepayIcon from '../assets/applepay.png';
import gpayIcon from '../assets/gpay.png';
import { useCart } from '../context/cartcontext';
import '../styles/payment.css';

const generateReferenceId = () => {
  const timestamp = Date.now().toString().slice(-6);
  const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
  return `REF-${timestamp}${randomPart}`;
};

const Confirmation = () => {
  const [referenceId, setReferenceId] = useState('');
  const [showNewArrivalsBanner, setShowNewArrivalsBanner] = useState(true); // Set to true to show the banner
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query
  const { totalQty } = useCart(); // Ensure totalQty is available

  useEffect(() => {
    setReferenceId(generateReferenceId());
  }, []);

  const handleCloseNewArrivalsBanner = () => {
    setShowNewArrivalsBanner(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search logic here
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="confirmation-page">
      {showNewArrivalsBanner && (
        <div className="new-arrivals-banner">
          <p>New Arrivals Just Dropped! <Link to="/new-arrivals" className="banner-link">Explore Now</Link></p>
          <button className="close-banner-button" onClick={handleCloseNewArrivalsBanner}>&times;</button>
        </div>
      )}

      <Navbar bg="light" data-bs-theme="light" className="navbar-custom" style={{ top: showNewArrivalsBanner ? '40px' : '0' }}>
        <Container className="navbar-content">
          <Navbar.Brand className="brand">
            <h3>
              <span style={{ color: '#C00000', fontWeight: '1000', marginRight: '8px', marginLeft: '70px' }}>SWIFT.CO</span>
            </h3>
          </Navbar.Brand>
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
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <Nav className="icon-wrapper">
            <Nav.Link as={Link} to="/cart" style={{ position: 'relative' }}>
              <img src={CartIcon} alt="Cart" className="cart-icon" />
              {totalQty > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#C00000',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                  }}
                >
                  {totalQty}
                </span>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <img src={UserIcon} alt="User" className="user-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* CONFIRMATION */}
      <Container className="text-center py-5">
        <div
          className="d-inline-flex justify-content-center align-items-center mb-4"
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#C00000',
            borderRadius: '50%',
            marginTop: '9rem'
          }}
        >
          <span style={{ fontSize: '3rem', color: 'white' }}>✓</span>
        </div>
        <h1 className="fw-bold text-danger">ORDER CONFIRMED!</h1>
        <p className="mt-3 fw-bold text-muted">REFERENCE ID: {referenceId}</p>
      </Container>

      {/* FOOTER */}

      <footer className="footer" style={{ marginTop: '10rem' }}>
        <Container fluid className="p-0">
          <Row className="newsletter-banner align-items-center justify-content-center text-center">
            <Col xs={12} md={8} lg={6}>
              <h2 className="mb-3">
                STAY UP TO DATE ABOUT<br />
                OUR LATEST OFFERS
              </h2>
              <form
                className="d-flex justify-content-center gap-2 flex-wrap"
                onSubmit={e => e.preventDefault()}
              >
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe to Newsletter
                </button>
              </form>
            </Col>
          </Row>

          <div className="footer-content">
            <Row className="gx-2 gy-2 align-items-start">
              <Col md={4} lg={3} className="footer-col">
                <h5 style={{ color: '#C00000', fontWeight: 'bold' }}><b>SWIFT.CO</b></h5>
                <p className="text-muted">
                  We bring you premium Ferrari merchandise that matches your
                  passion for speed, power, and style.
                </p>
                <div className="social-icons">
                  <Button variant="outline-light" title="Twitter" style={{ backgroundColor: 'white' }}>
                    <Image src={twitterIcon} alt="Twitter" height="30" />
                  </Button>
                  <Button variant="outline-light" title="Facebook" style={{ backgroundColor: 'white' }}>
                    <Image src={facebookIcon} alt="Facebook" height="30" />
                  </Button>
                  <Button variant="outline-light" title="Instagram" style={{ backgroundColor: 'white' }}>
                    <Image src={instagramIcon} alt="Instagram" height="30" />
                  </Button>
                  <Button variant="outline-light" title="Github" style={{ backgroundColor: 'white' }}>
                    <Image src={githubIcon} alt="Github" height="30" />
                  </Button>
                </div>
              </Col>

              <Col md={3} lg={2} className="footer-col offset-md-1 offset-lg-3 text-end">
                <h6>Help</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/delivery-details" className="text-decoration-none text-muted">
                      Delivery Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-decoration-none text-muted">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-decoration-none text-muted">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col md={3} lg={2} className="footer-col offset-lg-2 text-end">
                <h6>FAQ</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/account-faq" className="text-decoration-none text-muted">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/deliveries-faq" className="text-decoration-none text-muted">
                      Manage Deliveries
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders-faq" className="text-decoration-none text-muted">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/payments-faq" className="text-decoration-none text-muted">
                      Payments
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>

            <hr className="footer-divider mt-4" />

            <Row className="align-items-center justify-content-between">
              <Col md="auto" className="footer-copyright">
                <div className="text-muted">
                  Swift.co © {currentYear}-2025, All Rights Reserved
                </div>
              </Col>
              <Col md="auto" className="d-flex">
                <div className="payment-buttons d-flex gap-1">
                  <Button
                    variant="outline-light"
                    title="Pay with Visa"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Image src={visaIcon} alt="Visa" height="15" />
                  </Button>
                  <Button
                    variant="outline-light"
                    title="Pay with Mastercard"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Image src={mastercardIcon} alt="Mastercard" height="15" />
                  </Button>
                  <Button
                    variant="outline-light"
                    title="Pay with PayPal"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Image src={paypalIcon} alt="PayPal" height="15" />
                  </Button>
                  <Button
                    variant="outline-light"
                    title="Pay with Apple Pay"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Image src={applepayIcon} alt="Apple Pay" height="15" />
                  </Button>
                  <Button
                    variant="outline-light"
                    title="Pay with Google Pay"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Image src={gpayIcon} alt="Google Pay" height="15" />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Confirmation;