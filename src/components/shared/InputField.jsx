const InputField = ({ type, name, placeholder, value, onChange }) => (
  <input
    className="form-input"
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
