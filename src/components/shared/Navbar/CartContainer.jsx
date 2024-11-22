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
      className={`fixed top-0 left-0 h-[100vh] w-[100vw] bg-black/40 ${
        isCartOpen ? "block" : "hidden"
      }`}
      onClick={handleCartOutsideClick}
    >
      <div className="cart-container-children absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%] h-full w-full sm:w-[480px] sm:h-[700px] border rounded-lg  bg-cf-light-white">
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-2xl font-nunito font-bold text-cf-coffee ">
            Your cart
          </h3>
          <button onClick={handleCartModal}>
            <BiX className="text-3xl" />
          </button>
        </div>

        {/* break line */}
        <hr className=" border-cf-coffee" />

        {/* start :: cart body */}
        <div className="flex flex-col justify-center items-center px-6 py-4 h-[calc(100%-64px)]">
          <div className="w-full">
            <img
              className="w-6/12 mx-auto"
              src="/public/empty-cart.svg"
              alt="empty cart"
            />
          </div>
          <div className="text-center space-y-3 my-2">
            <h4 className="text-3xl font-bold font-nunito text-cf-coffee">
              Your cart is empty
            </h4>
            <p className="text-cf-coffee font-medium">
              Nothing in your basket. Time to browse and shop!
            </p>
            <button className="text-lg font-semibold bg-cf-yellow text-cf-coffee px-6 py-3 rounded-full border border-cf-coffee">
              Shop Now
            </button>
          </div>
        </div>
        {/* end :: cart body */}
      </div>
    </div>
  );
};

export default CartContainer;
