import { useState } from "react";
import PrimaryButton from "../shared/Buttons/PrimaryButton";

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
    console.log(formData); //output from the form on submit
  };
  return (
    <>
      <form
        className="bg-secondary-foreground p-5 sm:p-7 lg:p-12 flex flex-col gap-5 md:gap-7 lg:gap-7 rounded-xl lg:rounded-3xl shadow-md w-full col-span-12 md:col-span-7 h-full"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="form-input"
            type="date"
            placeholder="Date(dd/mm/yyyy)"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="time"
            name="time"
            placeholder="Time(hh/mm)"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            className="form-input"
            type="text"
            name="person"
            placeholder="Person"
            value={formData.person}
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input className="form-input" type="email" placeholder="Email" />
          <input
            className="form-input"
            type="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="form-input"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="9"
        />
        <PrimaryButton type="submit" buttonText={"Submit"} />
      </form>
    </>
  );
};

export default BookATableForm;
