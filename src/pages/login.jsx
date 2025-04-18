import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const users = [
    { email: 'smoothoperator@ust.edu.ph', password: 'C1cs@2024' },
    { email: 'dennisngungie@ust.edu.ph', password: 'password123' },
    { email: 'thomasaquinas@ust.edu.ph', password: 'ustcics' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      console.log('Login successful for:', email);
      navigate('/welcome');
    } else {
      console.log('Login failed for:', email);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="main-container">
      <Container fluid className="navbar-header">
        <h3>
          <span style={{ color: '#C00000', fontWeight: '1000', marginRight: '8px', marginLeft: '70px' }}>SWIFT.CO</span>
          <b>Log In</b>
        </h3>
      </Container>

      <Container className="register-container">
        <Card className="register-card">
          <Card.Body>
            <Card.Title className="text-uppercase">
              <b>LOG IN</b>
            </Card.Title>
            <p>
              Not a member yet?
              <a href="#" className="text-decoration-none">
                &nbsp;CREATE ACCOUNT
              </a>
            </p>
            <Form onSubmit={handleSubmit}>
              {error && <p className="text-danger mt-2">{error}</p>}
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <footer className="footer">
        <div className="container-fluid p-0">
          <Row>
            <Col md={4}>
              <h5 style={{ color: '#C00000', fontWeight: 'bold' }}>SWIFT.CO</h5>
              <p className="text-muted">
                We bring you premium Ferrari merchandise that matches your passion for speed, power, and style.
              </p>
              <div className="social-icons">
                <Button variant="outline-light" title="Twitter" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/twitter.png" alt="Twitter" height="30" />
                </Button>
                <Button variant="outline-light" title="Facebook" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/facebook.png" alt="Facebook" height="30" />
                </Button>
                <Button variant="outline-light" title="Instagram" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/instagram.png" alt="Instagram" height="30" />
                </Button>
                <Button variant="outline-light" title="Github" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/github.png" alt="Github" height="30" />
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <h6>Help</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h6>FAQ</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Payments
                  </a>
                </li>
              </ul>
              <div className="payment-buttons">
                <Button variant="outline-light" title="Pay with Visa" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/visa.png" alt="Visa" height="15" />
                </Button>
                <Button variant="outline-light" title="Pay with Mastercard" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/mastercard.png" alt="Mastercard" height="15" />
                </Button>
                <Button variant="outline-light" title="Pay with PayPal" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/paypal.png" alt="PayPal" height="15" />
                </Button>
                <Button variant="outline-light" title="Pay with Apple Pay" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/applepay.png" alt="Apple Pay" height="15" />
                </Button>
                <Button variant="outline-light" title="Pay with Google Pay" style={{ backgroundColor: 'white' }}>
                  <img src="/src/assets/gpay.png" alt="Google Pay" height="15" />
                </Button>
              </div>
            </Col>
          </Row>
          <div className="footer-note">Swift.co © 2023-2025, All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Login;