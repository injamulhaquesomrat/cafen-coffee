import { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook for easy access
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      // Add new item with quantity 1
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: newQuantity } // Update the quantity
          : cartItem
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0) // Remove item if quantity is 0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
