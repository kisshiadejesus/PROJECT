import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Welcome from './pages/welcome.jsx';
import Content from './pages/content.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/content" element={<Content />} />
        <Route path="/" element={<Login />} /> {/* You might want to change this */}
      </Routes>
    </Router>
  );
}

export default App;