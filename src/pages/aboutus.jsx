import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search-icon.png';
import UserIcon from '../assets/UserIcon.png';
import CartIcon from '../assets/Cart.png';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import visaIcon from '../assets/visa.png';
import mastercardIcon from '../assets/mastercard.png';
import paypalIcon from '../assets/paypal.png';
import applepayIcon from '../assets/applepay.png';
import gpayIcon from '../assets/gpay.png';
import aboutUsImage from '../assets/04.jpeg'; // Import the image
import foundersGif from '../assets/06.gif'; // Import the GIF

import '../styles/welcome.css';
import '../styles/content.css';

function AboutUs() {
    const [showNewArrivalsBanner, setShowNewArrivalsBanner] = useState(true);

    const handleCloseNewArrivalsBanner = () => {
        setShowNewArrivalsBanner(false);
    };

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
                            <input type="text" placeholder="Search for products..." className="search-input" />
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

            <div className="main-content-container" style={{
                paddingTop: showNewArrivalsBanner ? '130px' : '90px',
                backgroundImage: `url(${aboutUsImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '200px 0',
                width: '100%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 className="section-title" style={{ fontWeight: 900, fontSize: '3em', marginBottom: '10px' }}>ABOUT US</h1>
                <p className="subtitle" style={{ fontSize: '1.5em', marginBottom: '20px' }}>We always make the best</p>
            </div>

            <Container className="py-5">
                <Row className="align-items-center justify-content-center">
                    <Col md={8} lg={6} className="text-center">
                        <img
                            src={foundersGif}
                            alt="About Us Founders"
                            className="img-fluid"
                            style={{  marginLeft: '200px', maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
                        />
                    </Col>
                    <Col md={12} lg={6}>
                        <p className="mt-4 mt-lg-0" style={{ textAlign: 'justify', marginRight: '200px'}}>
                            In 2023, a group of college friends, Patricia Racquel Arellano, Thea Faith Cabrera, Althea Bianca Cuya, Jan Kisshia De Jesus, and Tyrone Yazon, founded Swift.co, a business focused on reselling official Ferrari merchandise. As passionate Ferrari F1 fans, they came together to share their love for the brand and its racing legacy.
                        </p>
                        <p style={{ textAlign: 'justify', marginRight: '200px' }}>
                            Swift.co offers a variety of high-quality Ferrari apparel and accessories. The group's goal is to connect fellow Ferrari enthusiasts with exclusive, authentic merchandise, reflecting their shared admiration for Ferrari's style, performance, and luxury.
                        </p>
                    </Col>
                </Row>
            </Container>

            <hr className="my-5 mx-auto" style={{ width: '75%' }} />


            <footer className="footer" style={{ marginTop: '4rem' }}>
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
                                    We bring you premium merchandise that matches your
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
        </>
    );
}

export default AboutUs;