import { BiX } from "react-icons/bi";

const CartContainer = ({ isCartOpen, handleCartModal }) => {
  // handle cart outside click
  const handleCartOutsideClick = (event) => {
    if (!event.target.closest(".cart-container-children")) {
      handleCartModal();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-[100vh] w-[100vw] bg-black/40 z-50 ${
        isCartOpen ? "block" : "hidden"
      }`}
      onClick={handleCartOutsideClick}
    >
      <div className="cart-container-children absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%] h-full md:h-fit w-full max-w-[480px] max-h-[700px] border rounded-lg bg-cf-light-white">
        {/* start::cart heading */}
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-2xl font-sober font-bold text-cf-coffee ">
            Your cart
          </h3>
          <button onClick={handleCartModal}>
            <BiX className="text-3xl text-cf-coffee" />
          </button>
        </div>
        {/* end::cart heading */}

        {/* break line */}
        <hr className=" border-cf-coffee" />

        {/* start :: cart body */}
        {/* <div className="flex flex-col justify-center items-center px-6 py-4 h-[calc(100%-64px)]">
          <div className="w-full">
            <img
              className="w-6/12 mx-auto"
              src="/empty-cart.svg"
              alt="empty cart"
            />
          </div>
          <div className="text-center space-y-3 my-2">
            <h4 className="text-3xl font-bold font-sober text-cf-coffee">
              Your cart is empty
            </h4>
            <p className="text-cf-coffee font-medium">
              Nothing in your basket. Time to browse and shop!
            </p>
            <button className="text-xl font-semibold bg-cf-yellow hover:bg-cf-coffee text-cf-coffee hover:text-cf-yellow cf-btn">
              Shop Now
            </button>
          </div>
        </div> */}

        <div>
          {/* start:: cart item */}
          <div className="flex items-start justify-between p-5 gap-5">
            <div className="flex items-center justify-between">
              <img
                className="h-16 w-14 rounded-lg"
                src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c6ea7a0c7666eac784ec1e_product-02.avif"
                alt="cart item image"
              />
            </div>
            <div className="flex flex-col flex-1 text-cf-coffee">
              <h6 className="font-semibold">Decaf coffee blend</h6>
              <p>$ 16.99 USD</p>
              <button className="text-left underline hover:no-underline inline-flex">
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
                defaultValue="1"
              />
            </div>
          </div>
          {/* end:: cart item */}
          {/* breakline */}
          <hr className=" border-cf-coffee" />

          {/* start:: cart footer */}
          <div className="p-6 pt-4">
            <div className="text-cf-coffee flex items-center justify-between mb-4">
              <p>Subtotal</p>
              <p className="font-semibold">$ 110.62 USD</p>
            </div>
            <button
              className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-cf-yellow bg-cf-coffee rounded-full font-bold cursor-pointer w-full  border border-cf-coffee hover:bg-cf-yellow hover:text-cf-coffee transition duration-300 ease-in-out`}
            >
              Continue to Checkout
            </button>
          </div>
          {/* end:: cart footer */}
        </div>
        {/* end :: cart body */}
      </div>
    </div>
  );
};

export default CartContainer;
