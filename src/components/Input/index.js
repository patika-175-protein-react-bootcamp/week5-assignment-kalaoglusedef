import "./input.scss";

const Input = ({
  label,
  placeholder,
  error,
  isRequired,
  darkMode,
  ...others
}) => {
  return (
    <div className={`inputContainer ${darkMode ? "dark" : ""}`}>
      <label className={`${isRequired ? "required" : ""} `}>{label}</label>
      <input {...others} placeholder={placeholder} autoComplete={false}></input>
      <span>{error || ""}</span>
    </div>
  );
};
export default Input;
