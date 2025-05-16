import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Welcome from './pages/welcome.jsx';
import Content from './pages/content.jsx';
import AboutUs from './pages/aboutus.jsx';
import DeJesusPage from './pages/team/dejesus.jsx'; 

import CabreraPage from './pages/team/cabrera.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Welcome />} />
        {/* Add routes for individual team members */}
        <Route path="/team/dejesus" element={<DeJesusPage />} />
    
        <Route path="/team/cabrera" element={<CabreraPage />} />

      </Routes>
    </Router>
  );
}

export default App;