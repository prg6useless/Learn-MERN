import { useContext } from "react";
import { initialContext } from "../context/AppContext";

const NavBar = () => {
  const context = useContext(initialContext);
  if (!context) throw new Error("Context is not wrapped inside Provider");
  const { name: user } = context;
  return <div>Hello {user}</div>;
};

export default NavBar;
