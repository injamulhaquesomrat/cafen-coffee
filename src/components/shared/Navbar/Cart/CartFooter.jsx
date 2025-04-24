const CartFooter = () => {
  return (
    <div>
      {/* breakline */}
      <hr className=" border-primary" />

      {/* start:: cart footer */}
      <div className="p-6 pt-4">
        <div className="text-primary flex items-center justify-between mb-4">
          <p>Subtotal</p>
          <p className="font-semibold">$ 110.62 USD</p>
        </div>
        <div>
          <button
            className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-secondary bg-primary rounded-full font-bold cursor-pointer w-full border border-primary hover:bg-secondary hover:text-primary transition duration-300 ease-in-out`}
          >
            Continue to Checkout
          </button>
        </div>
      </div>
      {/* end:: cart footer */}
    </div>
  );
};

export default CartFooter;
