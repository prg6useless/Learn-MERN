import { useThemeContext } from "../context/ThemeContext";

const ToggleButton = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <>
      {" "}
      <button
        // onClick={() =>
        //   theme === "light" ? setTheme("dark") : setTheme("light")
        // }
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </>
  );
};

export default ToggleButton;
