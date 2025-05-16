import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage when the component first mounts
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage every time cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const qtyToAdd = product.qty || 1;

    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);

      if (itemIndex === -1) {
        return [...prevItems, { ...product, qty: qtyToAdd }];
      } else {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          qty: updatedItems[itemIndex].qty + qtyToAdd,
        };
        return updatedItems;
      }
    });
  };

  const updateQty = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

<<<<<<< HEAD
export const useCart = () => useContext(CartContext);
=======
export const useCart = () => useContext(CartContext);
>>>>>>> origin/main
