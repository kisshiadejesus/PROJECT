//cart.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import searchIcon from '../assets/search-icon.png';
import CartIcon from '../assets/Cart.png';
import UserIcon from '../assets/UserIcon.png';
import { useCart } from '../context/cartcontext.jsx'; 
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import visaIcon from '../assets/visa.png';
import mastercardIcon from '../assets/mastercard.png';
import paypalIcon from '../assets/paypal.png';
import applepayIcon from '../assets/applepay.png';
import gpayIcon from '../assets/gpay.png';
import '../styles/cart.css';

function CartPage() {
  const { cartItems, updateQty, removeItem } = useCart();
  const [showNewArrivalsBanner, setShowNewArrivalsBanner] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + deliveryFee;

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      navigate('/checkout'); 
    }
  };

  return (
    <div>
      <Navbar className="navbar-custom" style={{ top: showNewArrivalsBanner ? '40px' : '0' }}>
        <Container className="navbar-content">
          <Navbar.Brand className="brand"><h3>
            <span style={{ color: '#C00000', fontWeight: '1000', marginRight: '8px', marginLeft: '70px' }}>SWIFT.CO</span>
          </h3></Navbar.Brand>
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
                className="search-input" />
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

      {/* Breadcrumb */}
      <div className="cart-header">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> &gt;
          <span className="breadcrumb-current">Cart</span>
        </div>
        <h2>Your cart</h2>
      </div>

      <div className="cart-container">
        <div className="cart-grid">
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <p>Size: {item.size} <br /> Color: {item.color}</p>
                    <p>${item.price}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                      <button onClick={() => removeItem(item.id)}>🗑</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p classname="empty-message">Your cart is empty. Start shopping now!</p>
            )}
          </div>

          <div className="order-summary">
            <h4>Order Summary</h4>
            <p>Subtotal: ${subtotal}</p>
            <p>Delivery Fee: ${deliveryFee}</p>
            <h5>Total: ${total}</h5>
            <input type="text" placeholder="Promo code" />
            <button className="apply">Apply</button>
            <button onClick={goToCheckout} className="checkout-button">Go to Checkout →</button>
          </div>
        </div>
      </div>

      <footer className="footer" style={{marginTop: '4rem'}}>
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
                                                    <img src={twitterIcon} alt="Twitter" height="30" />
                                                </Button>
                                                <Button variant="outline-light" title="Facebook" style={{ backgroundColor: 'white' }}>
                                                    <img src={facebookIcon} alt="Facebook" height="30" />
                                                </Button>
                                                <Button variant="outline-light" title="Instagram" style={{ backgroundColor: 'white' }}>
                                                    <img src={instagramIcon} alt="Instagram" height="30" />
                                                </Button>
                                                <Button variant="outline-light" title="Github" style={{ backgroundColor: 'white' }}>
                                                    <img src={githubIcon} alt="Github" height="30" />
                                                </Button>
                                            </div>
                                        </Col>
            
                                        <Col md={3} lg={2} className="footer-col offset-md-1 offset-lg-3 text-end">
                                            <h6>Help</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Delivery Details
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Terms & Conditions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Col>
            
                                        <Col md={3} lg={2} className="footer-col offset-lg-2 text-end">
                                            <h6>FAQ</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Account
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Manage Deliveries
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
                                                        Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-decoration-none text-muted">
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
                                                Swift.co © 2023-2025, All Rights Reserved
                                            </div>
                                        </Col>
                                        <Col md="auto" className="d-flex">
                                            <div className="payment-buttons d-flex gap-1">
                                                <Button
                                                    variant="outline-light"
                                                    title="Pay with Visa"
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <img src={visaIcon} alt="Visa" height="15" />
                                                </Button>
                                                <Button
                                                    variant="outline-light"
                                                    title="Pay with Mastercard"
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <img src={mastercardIcon} alt="Mastercard" height="15" />
                                                </Button>
                                                <Button
                                                    variant="outline-light"
                                                    title="Pay with PayPal"
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <img src={paypalIcon} alt="PayPal" height="15" />
                                                </Button>
                                                <Button
                                                    variant="outline-light"
                                                    title="Pay with Apple Pay"
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <img src={applepayIcon} alt="Apple Pay" height="15" />
                                                </Button>
                                                <Button
                                                    variant="outline-light"
                                                    title="Pay with Google Pay"
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <img src={gpayIcon} alt="Google Pay" height="15" />
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </footer>
    </div>
  );
}

export default CartPage;