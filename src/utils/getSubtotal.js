// calculate subtotal
const getSubtotal = (cartItems) => {
  return cartItems.reduce((subtotal, item) => {
    return subtotal + item.productCartPrice;
  }, 0);
};
export default getSubtotal;
