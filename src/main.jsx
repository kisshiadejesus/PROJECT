//main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; 
import { CartProvider } from './context/cartcontext';
import { BrowserRouter } from 'react-router-dom'; // ✅ Correct package

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);