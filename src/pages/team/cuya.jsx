import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/search-icon.png';
import UserIcon from '../../assets/UserIcon.png';
import CartIcon from '../../assets/Cart.png';
import twitterIcon from '../../assets/twitter.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import visaIcon from '../../assets/visa.png';
import mastercardIcon from '../../assets/mastercard.png';
import paypalIcon from '../../assets/paypal.png';
import applepayIcon from '../../assets/applepay.png';
import gpayIcon from '../../assets/gpay.png';
import aboutMe from '../../assets/aboutme.jpeg';
import cuyaImage from '../../assets/cuya.png';

// Define your skills data
const skills = [
    { label: 'Data Analysis', value: 95 },
    { label: 'Database Management & Architecture', value: 90 },
    { label: 'Data Visuallization & Reporting', value: 85 },
];

// Define your stats data including experience
const stats = [
    { label: 'Year Of Experience', value: '10+' },
    { label: 'Project Done', value: '30+' },
    { label: 'Satisfied Client', value: '200+' },
    { label: 'Certified Award', value: '8' },
];

// Basic inline styles for the skill bars (you can move these to a CSS file)
const skillStyles = {
    skillBarContainer: {
        marginBottom: '15px',
    },
    skillLabelRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        fontSize: '0.9rem',
        color: '#333',
    },
    skillTrack: {
        width: '100%',
        height: '7px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    skillFill: (value) => ({
        width: `${value}%`,
        height: '100%',
        backgroundColor: '#000000', // Changed to black
        borderRadius: '5px',
    }),
    statContainer: {
        textAlign: 'center',
    },
    statValue: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '5px',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: '#555',
    },
};

function CuyaPage() {
    const showNewArrivalsBanner = false;

    return (
        <>
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

            {/* "About Us" section */}
            <div className="main-content-container" style={{
                paddingTop: showNewArrivalsBanner ? '130px' : '90px',
                backgroundImage: `url(${aboutMe})`,
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
                <h1 className="section-title" style={{ fontWeight: 900, fontSize: '3em', marginBottom: '10px' }}>ABOUT ME</h1>
                <p className="subtitle" style={{ fontSize: '1.05em', marginBottom: '20px' }}>About Us / Althea Bianca Cuya</p>
            </div>

            <Container className="team-member-page">
                <Row>
                    <Col md={6}>
                        <div style={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0',
                            padding: '0px',
                            borderRadius: '0rem',
                            overflow: 'hidden',
                            flexDirection: 'column',
                            width: 'fit-content',
                            height: 'fit-content',
                            maxWidth: '100%',
                            marginTop: '80px',
                            marginLeft: 'auto', // Center the image
                            marginRight: 'auto',
                        }}>
                            <img
                                src={cuyaImage}
                                alt="Althea Cuya"
                                className="team-member-image"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="team-member-info">
                            <p className="about-me-title" style={{ textAlign: 'left', fontSize: '1.2rem', marginTop: '80px' }}>About Me</p>
                            <h1 className='title-text' style={{ textAlign: 'left', fontWeight: 900, fontSize: '2rem', marginBottom: '30px' }}>  ALTHEA BIANCA CUYA </h1>
                            <p style={{ textAlign: 'left' }}>Passionate about the intersection of data engineering, analytics, and business innovation, I specialize in transforming raw data into actionable insights that fuel brand growth and operational efficiency.</p>
                            <p style={{ textAlign: 'left' }}>With a keen eye for optimization, I harness data engineering techniques to streamline processes, build  data systems, and create intelligent solutions that drive decision-making. </p>
                        </div>
                    </Col>
                </Row>

                <hr className="my-5 mx-auto" style={{ width: '90%' }} />

                <Row>
                    <Col md={6}>
                        <div style={{ marginTop: '20px', marginLeft: '90px' }}>  {/* Added marginLeft here */}
                            <h2 className='title-text' style={{ textAlign: 'left', fontWeight: 900, fontSize: '1.8rem', marginBottom: '20px' }}> SKILLS </h2>
                            
                            {/* Skills Section with Linear Progress Bars */}
                            <div style={{ marginRight: '20px' }}>
                                {skills.map(({ label, value }) => (
                                    <div key={label} style={skillStyles.skillBarContainer}>
                                        <div style={skillStyles.skillLabelRow}>
                                            <span>{label}</span>
                                            <span>{value}%</span>
                                        </div>
                                        <div style={skillStyles.skillTrack}>
                                            <div style={skillStyles.skillFill(value)} />  {/* Using the skillFill style */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{ marginTop: '70px', paddingLeft: '20px' }}>
                            <Row xs={2} md={2} lg={2} className="g-4">
                                {stats.map(({ label, value }) => (
                                    <Col key={label}>
                                        <div style={skillStyles.statContainer}>
                                            <p style={skillStyles.statValue}>{value}</p>
                                            <p style={skillStyles.statLabel}>{label}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>

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

export default CuyaPage;