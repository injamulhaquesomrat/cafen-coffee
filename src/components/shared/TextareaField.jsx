
const TextareaField = ({ name, placeholder, value, onChange, rows = 4 }) => (
    <textarea
      className="form-input"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
  
  export default TextareaField;
  