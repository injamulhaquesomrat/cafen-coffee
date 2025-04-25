import SecondaryButton from "../../Buttons/SecondaryButton";

const EmptyCartBody = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4 xs:py-[100px] h-[628px]">
      <div className="w-full">
        <img
          className="w-6/12 mx-auto"
          src="/assets/icons/props/empty-cart.svg"
          alt="empty cart"
        />
      </div>
      <div className="text-center mt-5">
        <h4 className="text-[40px] leading-[1.2] font-sober text-primary">
          Your cart is empty
        </h4>
        <p className="text-primary mt-2.5">
          Nothing in your basket. Time to browse and shop!
        </p>
        <div className="mt-[30px]">
          <SecondaryButton buttonText={"Shop now"} />
        </div>
      </div>
    </div>
  );
};

export default EmptyCartBody;
