import Button from "react-bootstrap/Button";
import { memo } from "react";

const Pokemon = ({ pokemon = [], increaseOffset, decreaseOffset }) => {
  return (
    <>
      <h1>Characters</h1>
      <ul>
        {pokemon.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <Button onClick={increaseOffset}>Increase Offset</Button>
      <br />
      <br />
      <Button onClick={decreaseOffset}>Decrease Offset</Button>
    </>
  );
};

export default memo(Pokemon);
