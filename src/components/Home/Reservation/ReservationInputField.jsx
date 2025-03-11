const ReservationInputField = ({ label, name, placeholder, type = "text" }) => {
  return (
    <div className="grid grid-cols-3 items-center text-cf-coffee/80">
      <p className="col-span-1">{label}:</p>
      <input
        className="bg-transparent border-b border-cf-coffee py-2.5 col-span-2 placeholder:text-cf-coffee/80 focus-visible:outline-0"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ReservationInputField;
