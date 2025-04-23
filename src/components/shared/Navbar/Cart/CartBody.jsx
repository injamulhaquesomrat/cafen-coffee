import { useCart } from "../../../../provider/CartProvider";

const CartBody = () => {
  const { removeFromCart, updateQuantity, cartItems } = useCart();

  const handleQuantityChange = (id, value) => {
    if (value === "") {
      updateQuantity(id, 1);
    } else {
      const newQuantity = parseInt(value, 10);
      if (newQuantity >= 1 && newQuantity <= 5) {
        updateQuantity(id, newQuantity);
      } else {
        updateQuantity(id, 1); // Default fallback
      }
    }
  };

  return (
    <div className="flex-1">
      <div className="h-fit">
        {/* start:: cart items */}
        {cartItems.map((item) => (
          <div
            key={item?.id}
            className="flex items-start justify-between p-5 gap-5"
          >
            <div className="flex items-center justify-between">
              <img
                className="h-16 w-14 rounded-lg"
                src={item?.images[1].src}
                alt="cart item image"
              />
            </div>
            <div className="flex flex-col flex-1 text-cf-coffee">
              <h6 className="font-semibold">{item?.title}</h6>
              <p>$ {item?.price} USD</p>
              <button
                onClick={() => removeFromCart(item?.id)}
                className="text-left underline hover:no-underline inline-flex"
              >
                Remove
              </button>
            </div>
            <div className="flex flex-col min-w-[86px]">
              <input
                className="px-3 py-2.5 pr-1.5 rounded-full outline-none border border-cf-coffee bg-cf-foreground max-w-[86px] h-[55px] text-cf-coffee"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                value={item?.quantity || 1}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
            </div>
          </div>
        ))}
        {/* end:: cart items */}
      </div>
    </div>
  );
};

export default CartBody;
