const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log({ email });
  };
  return (
    <div className="pb-[40px] md:pb-[60px] flex flex-col justify-center items-center gap-8">
      <img src="/veg-bag.svg" alt="veg bag" />
      <h6 className="text-[32px] font-sober text-cf-coffee max-w-xl leading-[1.2] text-center">
        Sign up for our newsletter for updates on new menu items, special offers
      </h6>
      <form onSubmit={handleSubmit} className="max-w-[455px]">
        <div className="border border-cf-coffee rounded-full p-1.5 xl:p-2 flex justify-between lg:w-[455px]">
          <input
            className="p-2.5 bg-cf-foreground focus-visible:outline-0 text-cf-coffee placeholder:text-cf-coffee/80 placeholder:text-md text-md lg:text-lg rounded-2xl font-medium flex-1"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
          />
          <button
            type="submit"
            className="px-2.5 md:px-5 py-2.5 md:py-2 rounded-full border border-cf-coffee bg-cf-yellow text-cf-coffee font-medium md:text-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
