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
import NA1 from '../assets/NA1.jpg';
import NA2 from '../assets/NA2.jpg';
import NA3 from '../assets/NA3.jpg';
import NA4 from '../assets/NA4.jpg';
import TS1 from '../assets/TS1.jpg';
import TS2 from '../assets/TS2.jpg';
import TS3 from '../assets/TS3.jpg';
import TS4 from '../assets/TS4.jpg';
import { Col, Row } from "react-bootstrap";
//import statements for the images
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import visaIcon from '../assets/visa.png';
import mastercardIcon from '../assets/mastercard.png';
import paypalIcon from '../assets/paypal.png';
import applepayIcon from '../assets/applepay.png';
import gpayIcon from '../assets/gpay.png';


function Welcome() {
    const navigate = useNavigate();
    const productContainerRef = React.useRef(null);
    const [showNewArrivalsBanner, setShowNewArrivalsBanner] = React.useState(true);

    const handleLogout = () => {
        console.log('Logging out');
        navigate('/login');
    };

    const scrollRight = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollLeft += 300;
        }
    };

    const handleCloseNewArrivalsBanner = () => {
        setShowNewArrivalsBanner(false);
    };

    return (
        <div className="welcome-container">
            {showNewArrivalsBanner && (
                <div className="new-arrivals-banner">
                    <p>New Arrivals Just Dropped! <Link to="/new-arrivals" className="banner-link">Explore Now</Link></p>
                    <button className="close-banner-button" onClick={handleCloseNewArrivalsBanner}>&times;</button>
                </div>
            )}

            <Navbar bg="light" data-bs-theme="light" className="navbar-custom" style={{ top: showNewArrivalsBanner ? '40px' : '0' }}>
                <Container className="navbar-content">
                    <Navbar.Brand className="brand"><h3>
                        <span style={{ color: '#C00000', fontWeight: 'bold' }}>SWIFT.CO</span>
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

            <div className="welcome-image-container" style={{ paddingTop: showNewArrivalsBanner ? '130px' : '90px' }}>
                <Container className="welcome-text-container">
                    <h2 className="welcome-title">FIND FERRARI MERCH THAT</h2>
                    <h2 className="welcome-title">MATCHES YOUR STYLE</h2>
                    <p className="welcome-subtitle">Explore our collection of authentic Ferrari merchandise, crafted for
                        fans who live for
                        speed, style, and legacy.</p>
                    <Button variant="none" onClick={() => navigate('/shop')} className="welcome-button">
                        Shop Now
                    </Button>
                </Container>
                <div className="welcome-stats-wrapper">
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
                <div className="formula-one-logo-container" style={{ width: '150px', height: 'auto' }}>
                    <img
                        src={formulaOneLogo}
                        alt="Formula 1 Logo"
                        className="formula-one-logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </div>
            <br></br>

            <div className="title-container">
                <h1> <b> NEW ARRIVALS </b> </h1>
            </div>

            <Container className="new-arrival-container">
                <div className="products">
                    <Row className="gx-2 gy-2">
                        <Col xs={12}>
                            <div ref={productContainerRef} className="product">
                                <div className="product-items">
                                    <Button
                                        onClick={() => {
                                            if (productContainerRef.current) {
                                                productContainerRef.current.scrollTo({
                                                    left: productContainerRef.current.scrollLeft - 300,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                        className="scroll-button left"
                                    >←
                                    </Button>

                                    <div className='new-arrival-1'>
                                        <Button variant="none" title="Scuderia Ferrari 2025 Team Polo"
                                            onClick={() => navigate('/product/scuderia-ferrari-2025-team-polo')}
                                            className="product-button">
                                            <img src={NA1} alt="Scuderia Ferrari 2025 Team Polo"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name"> Scuderia Ferrari 2025 Team Polo </span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4.5/5</span>
                                        </div>
                                        <span className="product-price">$120</span>
                                    </div>
                                    <div className='new-arrival-2'>
                                        <Button variant="none"
                                            title="Scuderia Ferrari Lewis Hamilton LookSmart Model Helmet"
                                            onClick={() => navigate('/product/ferrari-lewis-hamilton-helmet')}
                                            className="product-button">
                                            <img src={NA2}
                                                alt="Scuderia Ferrari Lewis Hamilton LookSmart Model Helmet"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name">Scuderia Ferrari Lewis Hamilton LookSmart Model Helmet</span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4.5/5</span>
                                        </div>
                                        <span className="product-price">$280</span>
                                    </div>
                                    <div className='new-arrival-3'>
                                        <Button variant="none" title="Scuderia Ferrari Puma Team Knitted Polo - Red"
                                            onClick={() => navigate('/product/ferrari-puma-knitted-polo')}
                                            className="product-button">
                                            <img src={NA3}
                                                alt="Scuderia Ferrari Puma Team Knitted Polo - Red"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name">Scuderia Ferrari Puma Team Knitted Polo - Red</span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4.5/5</span>
                                        </div>
                                        <span className="product-price">$180</span>
                                    </div>
                                    <div className='new-arrival-4'>
                                        <Button variant="none" title="Scuderia Ferrari 2025 Team 1/2 Zip Sweat"
                                            onClick={() => navigate('/product/ferrari-2025-team-zip-sweat')}
                                            className="product-button">
                                            <img src={NA4} alt="Scuderia Ferrari 2025 Team 1/2 Zip Sweat"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name">Scuderia Ferrari 2025 Team 1/2 Zip Sweat </span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4.5/5</span>
                                        </div>
                                        <span className="product-price">$130</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => {
                                        if (productContainerRef.current) {
                                            productContainerRef.current.scrollTo({
                                                left: productContainerRef.current.scrollLeft + 300,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className="scroll-button right"
                                >→
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <hr className="divider mt-4" />

            <div className="title-container">
                <h1> <b> TOP SELLING </b> </h1>
            </div>

            <Container className="top-selling-container">
                <div className="products">
                    <Row className="gx-2 gy-2">
                        <Col xs={12}>
                            <div ref={productContainerRef} className="product">
                                <div className="product-items">
                                    <Button
                                        onClick={() => {
                                            if (productContainerRef.current) {
                                                productContainerRef.current.scrollTo({
                                                    left: productContainerRef.current.scrollLeft - 300,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                        className="scroll-button left"
                                    >←
                                    </Button>

                                    <div className='top-selling-1'>
                                        <Button variant="none" title="Scuderia Ferrari 2025 Team T-Shirt"
                                            onClick={() => navigate('/product/ferrari-2025-team-tshirt')}
                                            className="product-button">
                                            <img src={TS1} alt="Scuderia Ferrari 2025 Team T-Shirt"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name"> Scuderia Ferrari 2025 Team T-Shirt </span>
                                        <div className="rating">
                                            ★★★★★ <span className="rating-value">5/5</span>
                                        </div>
                                        <span className="product-price">$212</span>
                                    </div>

                                    <div className='top-selling-2'>
                                        <Button variant="none"
                                            title="Scuderia Ferrari 2025 Team Charles Leclerc Cap - Red"
                                            onClick={() => navigate('/product/ferrari-leclerc-cap-red')}
                                            className="product-button">
                                            <img src={TS2}
                                                alt="Scuderia Ferrari 2025 Team Charles Leclerc Cap - Red"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name">Scuderia Ferrari 2025 Team Charles Leclerc Cap - Red</span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4/5</span>
                                        </div>
                                        <span className="product-price">$145</span>
                                    </div>

                                    <div className='top-selling-3'>
                                        <Button variant="none" title="Scuderia Ferrari Puma Large Shield Hooded Sweat - Red"
                                            onClick={() => navigate('/product/ferrari-puma-hoodie-red')}
                                            className="product-button">
                                            <img src={TS3}
                                                alt="Scuderia Ferrari Puma Large Shield Hooded Sweat - Red"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name">Scuderia Ferrari Puma Large Shield Hooded Sweat - Red</span>
                                        <div className="rating">
                                            ★★★☆☆ <span className="rating-value">3/5</span>
                                        </div>
                                        <span className="product-price">$120</span>
                                    </div>

                                    <div className='top-selling-4'>
                                        <Button variant="none" title="Scuderia Ferrari Race Lifestyle Colour Block T-Shirt by Puma"
                                            onClick={() => navigate('/product/ferrari-puma-colorblock-tshirt')}
                                            className="product-button">
                                            <img src={TS4} alt="Scuderia Ferrari Race Lifestyle Colour Block T-Shirt by Puma"
                                                className="product-image" />
                                        </Button>
                                        <span className="product-name"> Scuderia Ferrari Race Lifestyle Colour Block T-Shirt by Puma </span>
                                        <div className="rating">
                                            ★★★★☆ <span className="rating-value">4.5/5</span>
                                        </div>
                                        <span className="product-price">$260</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => {
                                        if (productContainerRef.current) {
                                            productContainerRef.current.scrollTo({
                                                left: productContainerRef.current.scrollLeft + 300,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className="scroll-button right"
                                >→
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <footer className="footer">
                <Container fluid className="p-0">
                    <div className="footer-content">
                        <Row className="gx-2 gy-2 align-items-start">
                            <Col md={4} lg={3} className="footer-col">
                                <h5 style={{ color: '#C00000', fontWeight: 'bold' }}><b>SWIFT.CO</b></h5>
                                <p className="text-muted">
                                    We bring you premium Ferrari merchandise that matches your passion for speed, power, and style.
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
                                    <li><Link to="#" className="text-decoration-none text-muted">Delivery Details</Link></li>
                                    <li><Link to="#" className="text-decoration-none text-muted">Terms & Conditions</Link></li>
                                    <li><Link to="#" className="text-decoration-none text-muted">Privacy Policy</Link></li>
                                </ul>
                            </Col>

                            <Col md={3} lg={2} className="footer-col offset-lg-2 text-end">
                                <h6>FAQ</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#" className="text-decoration-none text-muted">Account</Link></li>
                                    <li><Link to="#" className="text-decoration-none text-muted">Manage Deliveries</Link></li>
                                    <li><Link to="#" className="text-decoration-none text-muted">Orders</Link></li>
                                    <li><Link to="#" className="text-decoration-none text-muted">Payments</Link></li>
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
                                    <Button variant="outline-light" title="Pay with Visa" style={{ backgroundColor: 'white' }}>
                                        <img src={visaIcon} alt="Visa" height="15" />
                                    </Button>
                                    <Button variant="outline-light" title="Pay with Mastercard" style={{ backgroundColor: 'white' }}>
                                        <img src={mastercardIcon} alt="Mastercard" height="15" />
                                    </Button>
                                    <Button variant="outline-light" title="Pay with PayPal" style={{ backgroundColor: 'white' }}>
                                        <img src={paypalIcon} alt="PayPal" height="15" />
                                    </Button>
                                    <Button variant="outline-light" title="Pay with Apple Pay" style={{ backgroundColor: 'white' }}>
                                        <img src={applepayIcon} alt="Apple Pay" height="15" />
                                    </Button>
                                    <Button variant="outline-light" title="Pay with Google Pay" style={{ backgroundColor: 'white' }}>
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

export default Welcome;
