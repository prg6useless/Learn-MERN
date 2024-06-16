import "../App.css";
import { useThemeContext } from "../context/ThemeContext";

const Title = () => {
  //   const { theme, setTheme } = context;
  const { theme } = useThemeContext();
  return (
    <>
      <div className={theme}>Title</div>

    </>
  );
};

export default Title;
