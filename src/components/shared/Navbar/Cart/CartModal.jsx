import { BiX } from "react-icons/bi";
import EmptyCartBody from "./EmptyCartBody";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import { useCart } from "../../../../provider/CartProvider";

const CartModal = ({ isCartOpen, handleCartModal }) => {
  const { cartItems } = useCart();

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
      <div
        className={`cart-container-children absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%] h-full md:h-fit w-full max-w-[480px] md:min-h-[700px] ${
          cartItems === 0 ? "md:max-h-[700px]" : "md:max-h-full overflow-auto"
        } border rounded-lg bg-foreground flex flex-col`}
      >
        {/* start::cart heading */}
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-2xl font-sober text-primary ">Your cart</h3>
          <button onClick={handleCartModal}>
            <BiX className="text-3xl text-primary" />
          </button>
        </div>

        {/* break line */}
        <hr className=" border-primary" />

        {/* end::cart heading */}

        {/* start :: cart body */}
        {cartItems.length === 0 ? <EmptyCartBody /> : <CartBody />}
        {/* end :: cart body */}

        {cartItems.length === 0 || <CartFooter />}
      </div>
    </div>
  );
};

export default CartModal;
