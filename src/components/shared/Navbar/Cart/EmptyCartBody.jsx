const EmptyCartBody = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4 xs:py-[100px] h-[calc(100%-64px)]">
      <div className="w-full">
        <img
          className="w-6/12 mx-auto"
          src="/empty-cart.svg"
          alt="empty cart"
        />
      </div>
      <div className="text-center mt-5">
        <h4 className="text-[40px] leading-[1.2] font-sober text-cf-coffee">
          Your cart is empty
        </h4>
        <p className="text-cf-coffee mt-2.5">
          Nothing in your basket. Time to browse and shop!
        </p>
        <div className="mt-[30px]">
          <button className="text-xl leading-[1.4] bg-cf-yellow hover:bg-cf-coffee text-cf-coffee hover:text-cf-yellow cf-btn">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartBody;
