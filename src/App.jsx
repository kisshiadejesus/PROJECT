import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Welcome from './pages/welcome.jsx';
import Content from './pages/content.jsx';
import AboutUs from './pages/aboutus.jsx';
import Cart from './pages/cart.jsx';
import CheckoutPage from './pages/checkout.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} /> {/* Add this line */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/shop" element={<Welcome />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
  );
}

export default App;