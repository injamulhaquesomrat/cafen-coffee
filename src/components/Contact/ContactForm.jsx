const ContactForm = () => {
  return (
    <div className="py-[60px] sm:py-20 lg:py-[100px] flex flex-col sm:flex-row gap-5 lg:gap-10 justify-center items-center">
      <div className="bg-cf-light-yellow p-5 sm:p-10 lg:p-16 flex flex-col gap-5 sm:gap-7 lg:gap-10 rounded-lg shadow-md w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-cf-coffee bg-cf-light-yellow placeholder:text-cf-coffee col-span-1"
            type="text"
            placeholder="Name"
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-cf-coffee bg-cf-light-yellow placeholder:text-cf-coffee col-span-1"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-cf-coffee bg-cf-light-yellow placeholder:text-cf-coffee col-span-1"
            type="phone"
            placeholder="Phone"
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-cf-coffee bg-cf-light-yellow placeholder:text-cf-coffee col-span-1"
            type="text"
            placeholder="Subject"
          />
        </div>
        <textarea
          className="px-5 py-2.5 rounded-lg border border-cf-coffee bg-cf-light-yellow placeholder:text-cf-coffee col-span-1"
          placeholder="Message"
          rows="4"
        ></textarea>
        <div>
          <button
            className="text-cf-coffee border border-cf-coffee rounded-lg bg-cf-yellow px-10 py-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="rounded-lg w-full h-full">
        <img
        className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18e2dee3d3cead81dc_contact-image.avif"
          alt="contact form image"
        />
      </div>
    </div>
  );
};

export default ContactForm;
