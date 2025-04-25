import { useCart } from "../../../../provider/CartProvider";

const CartBody = () => {
  const { removeFromCart, updateQuantity, cartItems } = useCart();

  const handleQuantityChange = (id, value) => {
    const parsed = parseInt(value, 10);

    if (!value || isNaN(parsed) || parsed < 1 || parsed > 1000) {
      updateQuantity(id, 1);
    } else {
      updateQuantity(id, parsed);
    }
  };

  return (
    <div className="flex-1">
      <div className="h-fit">
        {/* start:: cart items */}
        {cartItems.map((item) => (
          <div
            key={item?.cartId}
            className="flex items-start justify-between p-5 gap-5"
          >
            <div className="flex items-center justify-between">
              <img
                className="h-16 w-14 rounded-lg"
                src={item?.images[1].src}
                alt="cart item image"
              />
            </div>
            <div className="flex flex-col flex-1 text-primary">
              <div className="mb-2.5">
                <h6 className="font-semibold">{item?.title}</h6>
                <p>$ {item?.productCartPrice} USD</p>
                {item?.weights.length > 0 && (
                  <p>Weight: {item?.weight}gm</p>
                )}{" "}
              </div>
              <button
                onClick={() => removeFromCart(item?.cartId)}
                className="text-left underline hover:no-underline inline-flex w-fit"
              >
                Remove
              </button>
            </div>
            <div className="flex flex-col min-w-[86px]">
              <input
                className="px-3 py-2.5 pr-1.5 rounded-full outline-none border border-primary bg-background max-w-[86px] h-[55px] text-primary"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="1000"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                value={item?.quantity || 1}
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
