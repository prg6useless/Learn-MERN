// memo works using referential equality
import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("todo component rerender");
  return (
    <>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todo);
