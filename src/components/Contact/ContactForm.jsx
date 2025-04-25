import { useState } from "react";
import SecondaryButton from "../shared/Buttons/SecondaryButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //output from the form on submit
  };
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-[50px] justify-center items-center">
      {/* start:: contact form */}
      <form
        onSubmit={handleSubmit}
        className="bg-secondary-foreground p-5 sxs:p-[30px] md:p-5 lg:p-10 xl:p-[60px] flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-2xl lg:rounded-[50px] shadow-md w-full col-span-12 md:col-span-7 h-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground leading-normal placeholder:text-base col-span-1"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground leading-normal placeholder:text-base col-span-1"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="px-5 py-2.5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground leading-normal placeholder:text-base col-span-1"
            type="phone"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            className="px-5 py-2.5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground leading-normal placeholder:text-base col-span-1"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="px-5 py-2.5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground leading-normal placeholder:text-base col-span-1"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="9"
        />
        <div>
          <SecondaryButton
            className={"rounded-lg lg:text-base"}
            type="submit"
            buttonText={"Submit"}
          />
        </div>
      </form>
      {/* end:: contact form */}

      {/* start:: contact image */}
      <div className="rounded-2xl lg:rounded-[50px] w-full h-full col-span-12 md:col-span-5 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="/assets/images/contact/contact-image.avif"
          alt="contact form image"
        />
      </div>
      {/* end: contact image */}
    </div>
  );
};

export default ContactForm;
