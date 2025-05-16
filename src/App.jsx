import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Welcome from './pages/welcome.jsx';
import Content from './pages/content.jsx';
import AboutUs from './pages/aboutus.jsx';
import DeJesusPage from './pages/team/dejesus.jsx'; // Import the DeJesusPage component
// Import other team member pages as needed, e.g.,
// import TyronePage from './pages/team/tyrone.jsx';
// import AltheaPage from './pages/team/althea.jsx';
// import TheaPage from './pages/team/thea.jsx';
// import PatriciaPage from './pages/team/patricia.jsx';

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
        {/* Add routes for other team members, e.g.,
        <Route path="/team/tyrone" element={<TyronePage />} />
        <Route path="/team/althea" element={<AltheaPage />} />
        <Route path="/team/thea" element={<TheaPage />} />
        <Route path="/team/patricia" element={<PatriciaPage />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;