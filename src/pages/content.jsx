//content.jsx

import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Row, Col, Card, Pagination } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import CartIconImage from '../assets/Cart.png';
import { useCart } from '../context/cartcontext';

import '../styles/welcome.css';
import '../styles/content.css';

import shirt1 from '../assets/shirt-1.jpeg';
import shirt2 from '../assets/shirt-2.jpeg';
import shirt3 from '../assets/shirt-3.jpeg';
import shirt4 from '../assets/shirt-4.jpeg';
import shirt5 from '../assets/shirt-5.jpeg';
import shirt6 from '../assets/shirt-6.jpeg';
import shirt7 from '../assets/shirt-7.jpeg';
import shirt8 from '../assets/shirt-8.jpeg';
import shirt9 from '../assets/shirt-9.jpeg';

import shirt10 from '../assets/shirt-10.jpeg';
import shirt11 from '../assets/shirt-11.jpeg';
import shirt12 from '../assets/shirt-12.jpeg';
import shirt13 from '../assets/shirt-13.jpeg';
import shirt14 from '../assets/shirt-14.jpeg';
import shirt15 from '../assets/shirt-15.jpeg';
import shirt16 from '../assets/shirt-16.jpeg';
import shirt17 from '../assets/shirt-17.jpeg';
import shirt18 from '../assets/shirt-18.jpeg';

const products = [
    {
        name: 'Scuderia Ferrari 2025 Team Polo',
        price: 102.00,
        image: shirt1,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari 2025 Drivers Oversized T-Shirt - White',
        price: 97.00,
        image: shirt2,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari 2025 Team T-Shirt - Mens',
        price: 80.00,
        image: shirt3,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari Puma Team Knitted Polo - Red',
        price: 194.00,
        image: shirt4,
        rating: '3/5',
    },
    {
        name: 'Scuderia Ferrari 2025 Drivers Oversized T-Shirt - Red',
        price: 82.00,
        image: shirt5,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari 2025 Team 1/2 Zip Sweat',
        price: 125.50,
        image: shirt6,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari 2025 Team 1/2 Zip Sweat',
        price: 75.00,
        image: shirt7,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari Puma Classic Polo - Red',
        price: 90.00,
        image: shirt8,
        rating: '5/5',
    },
     {
        name: 'Scuderia Ferrari 2025 Team Softshell Jacket',
        price: 110.00,
        image: shirt9,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari Puma Special Edition Miami Hoodie - White',
        price: 60.00,
        image: shirt10,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari Race Lifestyle Colour Block T-Shirt by Puma',
        price: 70.00,
        image: shirt11,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari Race MT7 Polo by Puma - White',
        price: 85.00,
        image: shirt12,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari Puma Special Edition Miami T7 Jacket - Dark Crimson - Unisex',
        price: 95.00,
        image: shirt13,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari Race MT7 T-Shirt by Puma - Yellow',
        price: 105.00,
        image: shirt14,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari Scuderia Ferrari Puma Shield Hooded Sweat - Red - Kids',
        price: 115.00,
        image: shirt15,
        rating: '5/5',
    },
    {
        name: 'Scuderia Ferrari Puma Classic Polo - Black',
        price: 50.00,
        image: shirt16,
        rating: '3/5',
    },
    {
        name: 'Scuderia Ferrari Race Premium Hoodie by Puma - Red',
        price: 78.00,
        image: shirt17,
        rating: '4/5',
    },
    {
        name: 'Scuderia Ferrari Race Jersey Polo by Puma',
        price: 92.00,
        image: shirt18,
        rating: '5/5',
    },
];

const renderStars = (rating) => {
    const maxRating = 5;
    let fullStars = 0;
    let halfStar = false;
    let ratingText = '';

    if (rating.includes('/')) {
        const [rated, total] = rating.split('/');
        if (rated) {
            const num = parseFloat(rated);
            fullStars = Math.floor(num);
            halfStar = num - fullStars >= 0.5;
            ratingText = `${fullStars + (halfStar ? 0.5 : 0)}`; // Corrected rating text
        }
    } else {
        const num = parseFloat(rating);
        fullStars = Math.floor(num);
        halfStar = num - fullStars >= 0.5;
        ratingText = `${fullStars + (halfStar ? 0.5 : 0)}`;
    }

    const stars = [];

    for (let i = 0; i < maxRating; i++) {
        if (i < fullStars) {
            stars.push(<span key={`full-${i}`} style={{ color: '#ffd700', fontSize: '1.2rem' }}>★</span>);
        } else if (i === fullStars && halfStar) {
            stars.push(<span key={`half-${i}`} style={{ color: '#ffd700', fontSize: '1.2rem' }}>★</span>);
        }
        else {
            stars.push(<span key={`empty-${i}`} style={{ color: '#ddd', fontSize: '1.2rem' }}>☆</span>);
        }
    }
    return { stars, ratingText };
};

function Content() {
    const { addToCart, cartItems } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const [showNewArrivalsBanner, setShowNewArrivalsBanner] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Most Popular');
    const [sortedProducts, setSortedProducts] = useState(products);
    const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

    const productsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const handleCloseNewArrivalsBanner = () => {
        setShowNewArrivalsBanner(false);
    };

const handleSearchChange = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery);
        const searchParams = new URLSearchParams(location.search);
        if (newSearchQuery) {
            searchParams.set('q', newSearchQuery);
        } else {
            searchParams.delete('q');
        }
        searchParams.delete('page'); // Ensure page is reset to 1 on new search
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('sort', event.target.value);
        searchParams.delete('page'); // Reset page to 1 on new sort
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const sortProducts = (productsToSort, sortType) => {
        let sorted = [...productsToSort];

        switch (sortType) {
            case 'Price: Low to High':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'Price: High to Low':
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sorted;
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const urlSearchQuery = searchParams.get('q') || '';
        const urlSortBy = searchParams.get('sort') || 'Most Popular';
        const urlPage = parseInt(searchParams.get('page') || '1', 10); // Get page from URL

        setSearchQuery(urlSearchQuery);
        setSortBy(urlSortBy);
        setCurrentPage(urlPage);
    }, [location.search]);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const sorted = sortProducts(filtered, sortBy);
        setSortedProducts(sorted);
    }, [sortBy, searchQuery]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', pageNumber); // Set the 'page' parameter in the URL
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const StyledPagination = () => {
        let items = [];
        for (let number = 1; number <= Math.ceil(sortedProducts.length / productsPerPage); number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>,
            );
        }

        return (
            <Pagination className="custom-pagination">
                <Pagination.Prev onClick={() => paginate(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="custom-page-item styled-prev-next" style={{ marginRight: '5rem' }}>
                    <span style={{ color: '#000' }}>← Previous</span>
                </Pagination.Prev>
                {items}
                <Pagination.Next onClick={() => paginate(Math.min(Math.ceil(sortedProducts.length / productsPerPage), currentPage + 1))} disabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)} className="custom-page-item styled-prev-next" style={{ marginLeft: '5rem' }}>
                    <span style={{ color: '#000' }}>Next →</span>
                </Pagination.Next>
                <style jsx global>{`
                    .custom-pagination .page-item {
                        margin-right: 0.5rem; /* margin between page numbers */
                    }
                    .custom-pagination .page-link {
                        border-radius: 0.25rem;
                        padding: 0.25rem 0.75rem;
                        font-size: 0.875rem;
                        color: #6c757d;
                        background-color: transparent;
                        border: none;
                        box-shadow: none;
                        display: flex; /* Add this */
                        align-items: center; /* Add this */
                        justify-content: center; /* Add this */
                    }
                    .custom-pagination .page-link:hover,
                    .custom-pagination .page-link:focus {
                        background-color: #e0e0e0;
                        color: #6c757d;
                        border: none;
                        box-shadow: none;
                    }
                    .custom-pagination .active .page-link {
                        background-color: #e9ecef;
                        color: #000;
                        border: none;
                        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
                        display: flex; /* Add this */
                        align-items: center; /* Add this */
                        justify-content: center; /* Add this */
                    }
                    .custom-pagination .disabled .page-link {
                        color: #6c757d;
                        background-color: #e9ecef;
                        border-color: #dee2e6;
                        cursor: not-allowed;
                    }
                    .custom-page-item.no-box-style .page-link{
                        background-color: transparent;
                        color: #6c757d;
                        border: none;
                        display: flex; /* Add this */
                        align-items: center; /* Add this */
                        justify-content: center; /* Add this */
                    }
                    .custom-page-item.no-box-style .page-link:hover{
                        background-color: #e0e0e0;
                        color: #6c757d;
                        border: none;
                    }
                    .custom-page-item.active-page .page-link{
                        background-color: #e9ecef;
                        color: #000;
                        border: none;
                    }
                    .custom-page-item.styled-prev-next .page-link{
                        background-color: transparent;
                        color: #6c757d;
                        padding: 0.25rem 0.75rem;
                        border-radius: 0.25rem;
                        margin: 0 0.5rem; /* increased margin */
                        border: 1px solid #dee2e6;
                        display: flex; /* Add this */
                        align-items: center; /* Add this */
                        justify-content: center; /* Add this */
                    }
                    .custom-page-item.styled-prev-next .page-link:hover{
                        background-color: #ced4da;
                        color: #6c757d;
                        border: 1px solid #dee2e6;
                    }
                    .custom-pagination {
                      margin-top: 1rem;
                    }
                    .custom-page-item.styled-prev-next {
                        margin: 0 0.25rem;
                    }
                    .custom-page-item.styled-prev-next span {
                        color: #000;
                    }

                `}</style>
            </Pagination>
        );
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
                        <Nav.Link as={Link} to="/cart" style ={{ position: 'relative'}}>
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

            {/* Main Content (Shopping Section) */}
            <Container className="my-4">
                {/* Breadcrumb */}
 <div className="cart-header" style={{ marginLeft: '10px', marginBottom: '1.5rem', marginTop: '90px' }}>
    <div className="breadcrumb" style={{ marginBottom: '0.5rem' }}>
        <Link to="/" className="breadcrumb-link">Home</Link> &nbsp;&gt;
        <span className="breadcrumb-current">&nbsp;Casual</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',marginLeft: '3.5rem', gap: '42rem' }}>
        <h2>Men</h2>
        {/* Added text with reduced spacing and flexbox */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'baseline', fontSize: '0.9rem', color: '#666', marginLeft: '2rem' }}>
            <div style={{ whiteSpace: 'nowrap' }}>
                {sortedProducts.length > 0 ? (
                    <span>
                        Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} Products
                    </span>
                ) : (
                    <span>
                        Showing 0 - 0 of 0 Products
                    </span>
                )}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                Sort&nbsp;by:&nbsp; {/* Added a non-breaking space */}
                <select
                    style={{ marginLeft: '0.5rem', padding: '0.25rem', borderRadius: '4px', borderColor: '#ccc' }}
                    value={sortBy}
                    onChange={handleSortChange}
                >
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>
    </div>
</div>
                <div style={{ clear: 'both' }}></div>
                <div style={{ display: 'flex', marginTop:'40px', marginLeft:'3px', justifyContent: 'center', width: '100%' }}>
                <Row xs={1} sm={2} md={3} lg={3} className="g-3 justify-content-center">
                    {currentProducts.map((product, index) => (
                        <Col key={index} className="d-flex align-items-stretch justify-content-center"  >
                                <Card className="h-100 border-0" style={{ maxWidth: '313px' }}>
                                     <div
                                        style={{
                                            width: '330px',
                                            height: '330px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '0.5rem',
                                            backgroundColor: '#f0f0f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain',
                                            }}
                                         />
                                    </div>
                                    <Card.Body className="mt-2 p-0 d-flex flex-column">
                                        <div className="product-info-container">
                                          <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.name}</Card.Title>
                                          <Card.Text style={{ marginBottom: '0.2rem' }}>
                                            {renderStars(product.rating).stars}
                                            <span style={{ color: '#000' }}>{renderStars(product.rating).ratingText}</span>
                                            <span style={{ color: '#6c757d' }}>{'/5'}</span>
                                          </Card.Text>
                                          <Card.Text><strong style={{ fontWeight: 'bold', marginTop: '0.2rem', fontSize: '1.1rem' }}>${product.price.toFixed(2)}</strong></Card.Text>
                                          <Button variant="light" className="add-to-cart-btn mt-2 align-self-start" title="Add to Cart"
                                          onClick={() =>
                                            addToCart({
                                                id: product.name + index,
                                                name: product.name,
                                                price: product.price,
                                                image: product.image,
                                                qty: 1,
                                            })
                                            }
                                            >
                                                <img src={CartIconImage} alt="Add to Cart" style={{ width: '20px', height: '20px' }} />
                                        </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </Col>
                    ))}
                     {sortedProducts.length === 0 && (
                        <Col xs={12} className="text-center">
      <p style={{ margin: 0, whiteSpace: 'nowrap', textAlign: 'center', marginTop: '10rem', marginRight: '600px', marginBottom: '15rem' }}>
        No products found matching your search.
      </p>
    </Col>
                    )}
                </Row>

                </div>
                <hr className="mt-4" />
                {/* Pagination (Optional) */}
                <div className="d-flex justify-content-center mt-4 pb-5">
                    <StyledPagination />
                </div>

            </Container>

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
        </>
    );
}

export default Content;