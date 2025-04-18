const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log({ email });
  };
  return (
    <div className="py-8 md:py-14 flex flex-col justify-center items-center gap-8">
      <img src="/veg-bag.svg" alt="veg bag" />
      <h6 className="text-xl md:text-3xl font-sober text-cf-coffee max-w-xl tracking-tight  text-center">
        Sign up for our newsletter for updates on new menu items, special offers
      </h6>
      <form onSubmit={handleSubmit} className="xl:w-4/12">
        <div className="border border-cf-coffee rounded-full p-1.5 xl:p-2 flex justify-between">
          <input
            className="px-3 bg-cf-foreground focus-visible:outline-0 text-cf-coffee placeholder:text-cf-coffee/80 placeholder:text-md text-md lg:text-lg rounded-lg font-medium flex-1"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
          />
          <button
            type="submit"
            className="px-2.5 md:px-5 py-1.5 md:py-2 rounded-full border border-cf-coffee bg-cf-yellow text-cf-coffee font-medium md:text-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
