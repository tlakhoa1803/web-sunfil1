// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';
import { cartItems } from '../data/mockCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState(cartItems);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.name === product.name);
      if (existing) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
