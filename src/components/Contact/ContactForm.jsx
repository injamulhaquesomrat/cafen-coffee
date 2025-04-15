const ContactForm = () => {
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-10 justify-center items-center">
      {/* start:: contact form */}
      <div className="bg-cf-light-yellow p-5 sm:p-7 lg:p-10 flex flex-col gap-10 md:gap-7 lg:gap-7 rounded-lg lg:rounded-2xl shadow-md w-full col-span-12 md:col-span-7 h-full">
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
          rows="12"
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
      {/* end:: contact form */}

      {/* start:: contact image */}
      <div className="rounded-lg lg:rounded-2xl w-full h-full col-span-12 md:col-span-5 overflow-hidden">
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
