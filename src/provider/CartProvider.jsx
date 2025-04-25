import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import getSubtotal from "../utils/getSubtotal";

// Create Context
const CartContext = createContext();

// Custom Hook for easy access
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item, quantity = 1, weight = "", cartProductPrice) => {
    setCartItems((prevItems) => {
      // Check if an item with the same ID and weight already exists in the cart
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.weight === weight
      );

      if (existingItem) {
        // Update quantity if the same item with the same weight exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.weight === weight
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }

      // Add new item with provided weight and quantity if not found
      return [
        ...prevItems,
        {
          ...item,
          quantity,
          weight,
          cartId: uuidv4(),
          productCartPrice: cartProductPrice,
        },
      ];
    });
  };

  // Update quantity of an item
  // const updateQuantity = (id, newQuantity) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((cartItem) =>
  //       cartItem.id === id
  //         ? { ...cartItem, quantity: newQuantity } // Update the quantity
  //         : cartItem
  //     )
  //   );
  // };
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) => {
        if (cartItem.id === id) {
          // If weight is an empty string, fallback to 1g
          const weight = cartItem.weight ? parseFloat(cartItem.weight) : 100;
          const updatedPrice = (cartItem.price * weight * newQuantity) / 100;

          return {
            ...cartItem,
            quantity: newQuantity,
            productCartPrice: +updatedPrice.toFixed(2),
          };
        }

        return cartItem;
      })
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((cartItem) =>
            cartItem.cartId === id
              ? { ...cartItem, quantity: cartItem.quantity - cartItem.quantity }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0) // Remove item if quantity is 0
    );
  };

  // calculate subtotal
  const subtotal = getSubtotal(cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
