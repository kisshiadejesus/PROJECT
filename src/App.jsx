
//app.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Welcome from './pages/welcome.jsx';
import Content from './pages/content.jsx';
import AboutUs from './pages/aboutus.jsx';
import Cart from './pages/cart.jsx';
import CheckoutPage from './pages/checkout.jsx';
import DeJesusPage from './pages/team/dejesus.jsx'; 
import ArellanoPage from './pages/team/arellano.jsx'; 
import CabreraPage from './pages/team/cabrera.jsx';
import YazonPage from './pages/team/yazon.jsx';
import CuyaPage from './pages/team/cuya.jsx';

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
                {/* Add routes for individual team members */}
        <Route path="/team/dejesus" element={<DeJesusPage />} />
        <Route path="/team/yazon" element={<YazonPage />} />
        <Route path="/team/arellano" element={<ArellanoPage />} />
        <Route path="/team/cabrera" element={<CabreraPage />} />
        <Route path="/team/cuya" element={<CuyaPage />} />
      </Routes>
  );
}

export default App;