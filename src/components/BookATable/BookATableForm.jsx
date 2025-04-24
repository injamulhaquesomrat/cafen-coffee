import PrimaryButton from "../shared/Buttons/PrimaryButton";

const BookATableForm = () => {
  return (
    <div className="bg-secondary-foreground p-5 sm:p-7 lg:p-12 flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-xl lg:rounded-3xl shadow-md w-full col-span-12 md:col-span-7 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary placeholder:text-base col-span-1"
          type="date"
          placeholder="Date(dd/mm/yyyy)"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
          type="time"
          placeholder="Time(hh/mm)"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
          type="text"
          placeholder="Person"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary placeholder:text-base col-span-1"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
          type="phone"
          placeholder="Phone"
        />
      </div>
      <textarea
        className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
        placeholder="Message"
        rows="9"
      />
      <PrimaryButton buttonText={"Submit"} />
    </div>
  );
};

export default BookATableForm;
