import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  return <>Movie id is {id}</>;
};

export default Movie;
