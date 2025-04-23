const BookATableForm = () => {
  return (
    <div className="bg-cf-light-yellow p-5 sm:p-7 lg:p-12 flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-xl lg:rounded-3xl shadow-md w-full col-span-12 md:col-span-7 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee placeholder:text-base col-span-1"
          type="date"
          placeholder="Date(dd/mm/yyyy)"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee col-span-1"
          type="time"
          placeholder="Time(hh/mm)"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee col-span-1"
          type="text"
          placeholder="Person"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee placeholder:text-base col-span-1"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee col-span-1"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee col-span-1"
          type="phone"
          placeholder="Phone"
        />
      </div>
      <textarea
        className="px-5 py-2.5 rounded-lg border border-cf-coffee outline-none bg-cf-light-yellow text-cf-coffee placeholder:text-cf-coffee col-span-1"
        placeholder="Message"
        rows="9"
      />
      <button
        className="text-cf-coffee hover:text-cf-light-white transition-all duration-200 border border-cf-coffee rounded-full bg-cf-yellow hover:bg-cf-coffee px-[30px] py-2.5 md:px-10 md:py-5 font-medium"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default BookATableForm;
