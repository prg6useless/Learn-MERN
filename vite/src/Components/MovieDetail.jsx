import { useContext } from "react";
import { initialContext } from "../context/AppContext";

const MovieDetail = () => {
  const context = useContext(initialContext);
  if (!context) throw new Error("context is not wrapped in provider");
  const { name, setName } = context;
  return (
    <>
      {name}
      <br/>
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default MovieDetail;
