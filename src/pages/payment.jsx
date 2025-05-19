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

const Payment = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const { cartItems, totalQty } = useCart();
  const [showNewArrivalsBanner, setShowNewArrivalsBanner] = useState(true); // Set to true for initial visibility
  const [formValidated, setFormValidated] = useState(false);
  const [shippingFee, setShippingFee] = useState(15);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search logic here
  };

  const handleCloseNewArrivalsBanner = () => {
    setShowNewArrivalsBanner(false);
  };

  const handleShippingChange = (e) => {
    const value = e.target.value;
    const fee = value.includes('Express') ? 30 : 15;
    setShippingFee(fee);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const referenceId = Math.floor(10000000000 + Math.random() * 90000000000).toString();
      navigate("/confirmation", { state: { referenceId } });
    }

    setFormValidated(true);
  };

  const handleCancel = () => {
    navigate('/');
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.qty) || 0;
    return acc + price * quantity;
  }, 0);

  const total = subtotal + shippingFee;
  const currentYear = new Date().getFullYear();

  return (
    <>
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

      <Container className="mb-5">

        <div className="cart-header" style={{ marginLeft: '10px', marginBottom: '40px', marginTop: '90px' }}>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &nbsp;&gt;
            <span className="breadcrumb-current">&nbsp;Cart &gt;</span>
            <span className="breadcrumb-current">&nbsp;Checkout &gt;</span>
            <span className="breadcrumb-current">&nbsp;Payment</span>
          </div>
          <h2>Payment</h2>
        </div>

        <Form noValidate validated={formValidated} onSubmit={handleSubmit}>
          <Row>
            {/* LEFT SECTION */}
            <Col md={8}>
              <Card className="p-4 mb-4" style={{ marginLeft: '4rem'}}>
                <h4 className="mb-3">Personal Details</h4>
                <Row>
                  <Col md={6}><Form.Control className="mb-3" placeholder="First name" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="Last name" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" type="email" placeholder="Email" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" type="tel" placeholder="Phone number" required /></Col>
                </Row>

                <h4 className="mb-3 mt-4">Payment Details</h4>
                <div className="payment-icons mb-3 d-flex gap-4 flex-wrap">
                  <Image src={visa} height={30} />
                  <Image src={stripe} height={30} />
                  <Image src={paypal} height={30} />
                  <Image src={mastercard} height={30} />
                  <Image src={gpay} height={30} />
                </div>

                <Row>
                  <Col md={6}><Form.Control className="mb-3" placeholder="Card Holder Name" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="Card Number" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="CVV (e.g. 456)" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="Expiration Date (MM/YY)" required /></Col>
                </Row>

                <h4 className="mb-3 mt-4">Shipping Address</h4>
                <Form.Control className="mb-3" placeholder="Address Line 1" required />
                <Row>
                  <Col md={6}><Form.Control className="mb-3" placeholder="City" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="State" required /></Col>
                </Row>
                <Row>
                  <Col md={6}><Form.Control className="mb-3" placeholder="Landmark" required /></Col>
                  <Col md={6}><Form.Control className="mb-3" placeholder="ZIP Code" required /></Col>
                </Row>

                <Form.Check type="checkbox" label="Save this credit card for later use" className="mb-2" />
                <Form.Check type="checkbox" label="Billing address same as shipping address" />
              </Card>
            </Col>

            {/* RIGHT SECTION */}
            <Col md={4}>
              <Card className="p-4 mb-4 order-summary-card" style={{ marginRight: '4rem' }}>
                <h5 className="mb-4">Order Summary</h5>

                {cartItems.map((item, index) => (
                  <div className="item-summary mb-2" key={index}>
                    <div className="d-flex justify-content-between">
                      <span><strong>{item.name}</strong> x{item.qty}</span>
                      <span>${(parseFloat(item.price) * parseInt(item.qty)).toFixed(2)}</span>
                    </div>
                  </div>
                ))}

                <hr />

                <Form.Group className="mb-3">
                  <Form.Label><strong>Shipping Option</strong></Form.Label>
                  <Form.Select onChange={handleShippingChange}>
                    <option>Standard International - $15</option>
                    <option>Express Delivery - $30</option>
                  </Form.Select>
                </Form.Group>

                <hr />

                <div className="d-flex justify-content-between">
                  <span>Merch Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>${shippingFee.toFixed(2)}</strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span><strong>Total</strong></span>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <div className="d-flex justify-content-between">
  <Button variant="outline-secondary" onClick={handleCancel} style={{ borderColor: 'transparent' }}>Cancel</Button>
  <Button type="submit" variant="danger" style={{ backgroundColor: '#C00000', borderColor: 'transparent' }}>Place Order</Button>
</div>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>

      <footer className="footer" style={{ marginTop: '8rem' }}>
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
    </>
  );
};

export default Payment;