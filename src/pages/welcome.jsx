import React, { useRef } from 'react';
 import { useNavigate, Link } from 'react-router-dom';
 import '../styles/welcome.css';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import Button from 'react-bootstrap/Button';
 import formulaOneLogo from '../assets/02.png';
 import searchIcon from '../assets/search-icon.png';
 import UserIcon from '../assets/UserIcon.png'; 
 import backgroundImage from '../assets/03.jpeg';
 import CartIcon from '../assets/Cart.png';
 import NA1 from '../assets/NA1.jpg';
 import NA2 from '../assets/NA2.jpg';
 import NA3 from '../assets/NA3.jpg';
 import NA4 from '../assets/NA4.jpg';
 import TS1 from '../assets/TS1.jpg';
 import TS2 from '../assets/TS2.jpg';
 import TS3 from '../assets/TS3.jpg';
 import TS4 from '../assets/TS4.jpg';
 import { Col, Row, Card } from "react-bootstrap";
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
 // Import category images (assuming you have these in your assets folder)
 import mens from '../assets/mens.png';
 import womens from '../assets/womens.png';
 import accessories from '../assets/accessories.png';
 import collectibles from '../assets/collectibles.png';

 const customerReviewsData = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
    },
    {
      name: 'Alex K.',
      rating: 4,
      comment: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    },
    {
      name: 'James L.',
      rating: 5,
      comment: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."',
    },
    {
      name: 'Moo',
      rating: 4,
      comment: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."',
    },
    {
      name: 'Jane D.',
      rating: 5,
      comment: '"Excellent service and high-quality products! I will definitely be a returning customer."',
    },
    {
      name: 'Peter S.',
      rating: 3,
      comment: '"The delivery was a bit slow, but the product itself was good."',
    },
    {
      name: 'Emily R.',
      rating: 5,
      comment: '"Love the new collection! So many stylish and unique items to choose from."',
    },
    {
      name: 'David B.',
      rating: 4,
      comment: '"Great value for money. Happy with my purchase."',
    },
    {
      name: 'Sophia G.',
      rating: 5,
      comment: '"The quality of the materials is fantastic, and the designs are so trendy."',
    },
   ];

   const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} style={{ color: '#ffc107', fontSize: '1.1rem' }}>{i < rating ? '★' : '☆'}</span>);
    }
    return stars;
   };

   function CustomerReviews() {
    const reviewsContainerRef = useRef(null);
    const reviewsToShow = 3;
    const checkmarkIcon = '✔'; // Unicode for checkmark

    const scrollLeft = () => {
      if (reviewsContainerRef.current) {
        reviewsContainerRef.current.scrollLeft -= (3 * 320);
      }
    };

    const scrollRight = () => {
      if (reviewsContainerRef.current) {
        reviewsContainerRef.current.scrollLeft += (3 * 320);
      }
    };

    return (
      <Container className="mt-5 mb-5">
        <Row className="align-items-center mb-3">
          <Col>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#212529' }}><b>OUR HAPPY CUSTOMERS</b></h1>
          </Col>
          <Col md="auto" className="text-end"> 
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="link" onClick={scrollLeft} style={{ fontSize: '1.2rem', marginRight: '10px', color: '#212529', textDecoration: 'none' }}>←</Button>
              <Button variant="link" onClick={scrollRight} style={{ fontSize: '1.2rem', color: '#212529', textDecoration: 'none' }}>→</Button>
            </div>
          </Col>
        </Row>
        <div
          ref={reviewsContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            paddingBottom: '15px',
            scrollBehavior: 'smooth',
            marginLeft: '-10px',
            justifyContent: 'center', 
          }}
        >
          {customerReviewsData.map((review, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: `calc(100% / ${reviewsToShow} - 20px)`,
                marginRight: index < customerReviewsData.length - 1 ? '20px' : '0',
              }}
            >
              <Card
                style={{
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  border: '1px solid #e0e0e0',
                  height: '220px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#ffc107', fontSize: '1.1rem', marginBottom: '3px' }}>{renderStars(review.rating)}</div>
                  <Card.Title style={{ fontWeight: 'bold', marginBottom: '0', fontSize: '1rem', color: '#212529', display: 'flex', alignItems: 'center' }}>
                    {review.name} <span style={{ color: '#28a745', fontSize: '0.9rem', marginLeft: '5px' }}>{checkmarkIcon}</span>
                  </Card.Title>
                </div>
                <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.5', marginTop: '10px' }}>
                  {review.comment}
                </Card.Text>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    );
   }

function Welcome() {
    const navigate = useNavigate();

    const topSellingContainerRef = React.useRef(null);
    const newArrivalContainerRef = React.useRef(null);

    const [showNewArrivalsBanner, setShowNewArrivalsBanner] = React.useState(true);

    const handleLogout = () => {
        console.log('Logging out');
        navigate('/login');
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
                <p className="welcome-subtitle">
                    Explore our collection of authentic Ferrari merchandise, crafted for fans who live for speed, style, and legacy.
                </p>
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
    <h1 className='title-text' style={{ fontWeight: 900, fontSize: '2.5rem' }}> NEW ARRIVALS </h1>
</div>

            <Container className="new-arrival-container">
                <div className="products">
                    <Row className="gx-2 gy-2">
                        <Col xs={12}>
                            <div ref={newArrivalContainerRef} className="product">
                                <div className="product-items">
                                    <Button
                                        onClick={() => {
                                            if (newArrivalContainerRef.current) {
                                                newArrivalContainerRef.current.scrollTo({
                                                    left: newArrivalContainerRef.current.scrollLeft - 300,
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
                                        if (newArrivalContainerRef.current) {
                                            newArrivalContainerRef.current.scrollTo({
                                                left: newArrivalContainerRef.current.scrollLeft + 300,
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
    <h1 className='title-text' style={{ fontWeight: 900, fontSize: '2.5rem' }}> TOP SELLING </h1>
</div>
            <Container className="top-selling-container">
                <div className="products">
                    <Row className="gx-2 gy-2"><Col xs={12}>
                            <div ref={topSellingContainerRef} className="product">
                                <div className="product-items">
                                    <Button
                                        onClick={() => {
                                            if (topSellingContainerRef.current) {
                                                topSellingContainerRef.current.scrollTo({
                                                    left: topSellingContainerRef.current.scrollLeft - 300,
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
                                        if (topSellingContainerRef.current) {
                                            topSellingContainerRef.current.scrollTo({
                                                left: topSellingContainerRef.current.scrollLeft + 300,
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

                <section className="browse-category"
                style={{
                    paddingTop: "2rem",     
                    paddingLeft: "10rem", 
                    paddingRight: "2rem",      
                    paddingBottom: "2rem", 
                    marginTop: "2rem",
                    marginLeft: "5rem",
                    marginRight: "5rem",
                    marginBottom: "5rem",
                    backgroundColor: "#f8f9fa",     
                    borderRadius: "10px" ,
                    alignItems: "center",
                }}
            >
                <h1 style={{ 
                    textAlign: "center",
                    marginLeft: "0rem", 
                    marginRight: "8rem", 
                    fontSize: "2.5rem", 
                    fontWeight: 900, 
                    marginBottom: "1.5rem", 
                    textTransform: "uppercase" }}>BROWSE BY CATEGORY</h1>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        <Col md={4}>
                            <Link to="/content" style={{ textDecoration: "none"}}>
                                <Card 
                                    style={{
                                        height: "280px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "1.5rem",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img 
                                        src={mens} 
                                        alt="Men" 
                                        style={{
                                            maxHeight: "60%",
                                            maxWidth: "80%",
                                            objectFit: "contain",
                                            marginBottom: "1rem",                                    }}
                                    />
                                    <div style={{ fontWeight: "600", fontSize: "1.2rem", color: "inherit", textAlign: "center" }}>Men</div>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/collectibles" style={{ textDecoration: "none" }}> 
                                <Card 
                                    style={{
                                        height: "280px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "1,5rem",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img 
                                        src={collectibles} 
                                        alt="Collectibles" 
                                        style={{
                                            maxHeight: "60%",
                                            maxWidth: "80%",
                                            objectFit: "contain",
                                            marginBottom: "1rem",
                                        }}
                                    />
                                    <div style={{ fontWeight: "600", fontSize: "1.2rem", color: "inherit", textAlign: "center" }}>Collectibles</div>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} className="g-4" style={{ marginTop: "1rem" }}>
                        <Col> 
                            <Link to="/accessories" style={{ textDecoration: "none" }}>
                                <Card 
                                    style={{
                                        height: "280px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "1.5rem",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <img 
                                        src={accessories} 
                                        alt="Accessories" 
                                        style={{
                                            maxHeight: "60%",
                                            maxWdith: "80%",
                                            objectFit: "contain",
                                            marginBottom: "1rem",
                                        }}
                                    />
                                    <div style={{ fontWeight: "600", fontSize: "1.2rem", color: "inherit", textAlign: "center" }}>Accessories</div>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/women" style={{ textDecoration: "none" }}>
                                <Card 
                                    style={{
                                        height: "280px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "1.5rem",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <img 
                                        src={womens} 
                                        alt="Women" 
                                        style={{
                                            maxHeight: "80%",
                                            maxWidth: "100%",
                                            objectFit: "contain",
                                            marginBottom: "1rem",
                                        }}
                                    />
                                    <div style={{ fontWeight: "600", fontSize: "1.2rem", color: "inherit", textAlign: "center" }}>Women</div>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
            </Container>
        </section>

        <CustomerReviews />
        </Container>

        <footer className="footer">
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


export default Welcome;