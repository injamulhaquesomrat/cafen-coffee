import { useState } from "react";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import InputField from "../shared/InputField";
import TextareaField from "../shared/TextareaField";

const BookATableForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    person: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary-foreground p-5 sm:p-7 lg:p-12 flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-xl lg:rounded-3xl shadow-md w-full col-span-12 md:col-span-7 h-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <InputField
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          type="text"
          name="person"
          placeholder="Number of Persons"
          value={formData.person}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <TextareaField
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={9}
      />

      <PrimaryButton type="submit" buttonText="Submit" />
    </form>
  );
};

export default BookATableForm;
