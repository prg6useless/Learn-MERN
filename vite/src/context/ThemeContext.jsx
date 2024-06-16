// syntax

// import { createContext } from "react";

// const initialContext = createContext(null);

// const AppContext = ({ Children }) => {
//   return (
//     <initialContext.Provider value={{}}>{Children}</initialContext.Provider>
//   );
// };

// export default AppContext;

import { createContext, useState, useContext } from "react";

const initialContext = createContext(null);

const ThemeContext = ({ children }) => {
  // const [name, setName] = useState("saral");
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <initialContext.Provider value={{ theme, toggleTheme }}>
      {/* <initialContext.Provider value={{ theme, setTheme }}> */}
      {children}
    </initialContext.Provider>
  );
};

export default ThemeContext;

// custom hook
export const useThemeContext = () => {
  const context = useContext(initialContext);
  if (!context) throw new Error("Context is not wrapped inside Provider");
  return context;
};
