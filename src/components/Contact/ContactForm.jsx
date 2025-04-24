import SecondaryButton from "../shared/Buttons/SecondaryButton";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-10 justify-center items-center">
      {/* start:: contact form */}
      <div className="bg-secondary-foreground p-5 sm:p-7 lg:p-12 flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-xl lg:rounded-3xl shadow-md w-full col-span-12 md:col-span-7 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary placeholder:text-base col-span-1"
            type="text"
            placeholder="Name"
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
            type="phone"
            placeholder="Phone"
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
            type="text"
            placeholder="Subject"
          />
        </div>
        <textarea
          className="px-5 py-2.5 rounded-lg border border-primary outline-none bg-secondary-foreground text-primary placeholder:text-primary col-span-1"
          placeholder="Message"
          rows="9"
        ></textarea>
        <div>
          <SecondaryButton
            className={"rounded-lg lg:text-base"}
            buttonText={"Submit"}
          />
        </div>
      </div>
      {/* end:: contact form */}

      {/* start:: contact image */}
      <div className="rounded-xl lg:rounded-3xl w-full h-full col-span-12 md:col-span-5 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18e2dee3d3cead81dc_contact-image.avif"
          alt="contact form image"
        />
      </div>
      {/* end: contact image */}
    </div>
  );
};

export default ContactForm;
