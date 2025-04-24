const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log({ email });
  };
  return (
    <div className="pb-[40px] md:pb-[60px] flex flex-col justify-center items-center gap-8">
      <img src="/veg-bag.svg" alt="veg bag" />
      <h6 className="text-[32px] font-sober text-primary max-w-xl leading-[1.2] text-center">
        Sign up for our newsletter for updates on new menu items, special offers
      </h6>
      <form onSubmit={handleSubmit} className="max-w-[455px]">
        <div className="border border-primary-foreground rounded-full p-2.5 flex justify-between lg:w-[455px]">
          <input
            className="p-[5px] pl-4 bg-background focus-visible:outline-0 text-primary placeholder:text-primary/80 placeholder:text-md text-md lg:text-lg rounded-2xl font-medium w-full"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
          />
          <button
            type="submit"
            className="px-5 py-[5px] h-[42px] flex items-center justify-center rounded-full border border-primary bg-secondary hover:bg-primary text-primary hover:text-foreground font-medium duration-300 transition-all ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
