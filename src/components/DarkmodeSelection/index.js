import "./index.scss";
import sun from "../../img/sun.svg";
import moon from "../../img/moon.svg";

const DarkModeSelection = ({ value, onChange }) => {
  return (
    <button
      className={`darkModeSelectionContainer`}
      onClick={() => {
        onChange(value === "dark" ? "light" : "dark");
      }}
    >
      {value === "dark" ? <img src={sun} /> : <img src={moon} />}
    </button>
  );
};
export default DarkModeSelection;
