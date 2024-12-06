import Container from "../../shared/Container";

const Reservation = () => {
  return (
    <div className="py-14 md:py-20 bg-[url('/public/form-bg-image.avif')] h-full bg-cover">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1"></div>
          <div className="md:w-2/3 lg:w-full xl:w-2/3 mx-auto border border-cf-coffee p-5 md:p-8 rounded-lg bg-cf-yellow text-cf-coffee lg:col-span-1">
            <form>
              <h6 className="text-2xl md:text-3xl font-semibold font-nunito">
                Make a reservation
              </h6>
              <div className="space-y-6 py-6 font-medium ">
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className="col-span-1">Name:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="Injamul Haque"
                  />
                </div>
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className=" col-span-1">Email:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="ihsomrat.official@gmail"
                  />
                </div>
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className=" col-span-1">Date:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className=" col-span-1">Time:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="MM/HH"
                  />
                </div>
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className=" col-span-1">Phone:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="+880 123 456 789"
                  />
                </div>
                <div className="grid grid-cols-3 items-center text-cf-coffee/80">
                  <p className=" col-span-1">No guests:</p>
                  <input
                    className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
                    type="text"
                    name="name"
                    placeholder="2"
                  />
                </div>
              </div>
              <div>
                <button
                  className="px-6 md:px-8 py-2 md:py-4 border border-cf-coffee rounded-full bg-cf-coffee hover:bg-cf-yellow text-cf-yellow hover:text-cf-coffee text-lg duration-300 transition-all"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reservation;
