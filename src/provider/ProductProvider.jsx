import { createContext, useState, useContext } from "react";

// Create product context
const ProductContext = createContext();

// Custom hook for easy access
export const useProduct = () => useContext(ProductContext);

// Provider component
export const ProductProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [productWeight, setProductWeight] = useState(null);
  const [cartProductPrice, setCartProductPrice] = useState(null);

  return (
    <ProductContext.Provider
      value={{
        quantity,
        setQuantity,
        productWeight,
        setProductWeight,
        cartProductPrice,
        setCartProductPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};