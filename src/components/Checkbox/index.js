import "./index.scss";
const CheckBox = ({ error, darkMode, ...others }) => {
  return (
    <div className={`checboxContainer ${darkMode ? "dark" : ""}`}>
      <div>
        <input {...others} type={"checkbox"}></input>
        <label>Sözleşmeyi kabul ediyorum</label>
      </div>
      <span>{error}</span>
    </div>
  );
};
export default CheckBox;
