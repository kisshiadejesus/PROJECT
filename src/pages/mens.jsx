import React from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const products = [
  {
    name: 'Scuderia Ferrari 2025 Drivers Oversized T-Shirt - Red',
    price: '$102.00',
    image: '/images/ferrari-shirt1.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari 2025 Team Polo',
    price: '$97.00',
    image: '/images/ferrari-shirt2.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari 2025 Team T-Shirt',
    price: '$80.00',
    image: '/images/ferrari-shirt3.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari 2025 Team Softshell Jacket',
    price: '$194.00',
    image: '/images/jacket1.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari 2025 Team 1/2 Zip Sweat',
    price: '$125.50',
    image: '/images/zip-sweat.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari Puma Rain Jacket - Red',
    price: '$82.00',
    image: '/images/rain-jacket.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari Puma Large Shield T-Shirt - Black',
    price: '$43.00',
    image: '/images/black-shirt.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari Race MT7 Polo by Puma - White',
    price: '$85.50',
    image: '/images/white-polo.png',
    rating: '5/5',
  },
  {
    name: 'Scuderia Ferrari 2025 Puma Lightly Padded Gilet',
    price: '$124.00',
    image: '/images/padded-gilet.png',
    rating: '4.5/5',
  },
];

const Mens = () => {
  return (
    <Container className="my-4">
      <h2 className="mb-4">Men</h2>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {products.map((product, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{product.name}</Card.Title>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Card.Text>⭐ {product.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </Container>
  );
};

export default Mens;
