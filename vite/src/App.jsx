// import Goal from "./Components/Goal";
// import { useState } from "react";
// import List from "./Components/List";
// import Login from "./Components/Login";
// import Dropdown from "./Components/Dropdown";
// import Effect from "./Components/Effect";
// import ParentComp from "./Components/ParentComp";
// import Timer from "./Components/Timer";
// import MovieDetail from "./Components/MovieDetail";
// import NavBar from "./Components/NavBar";
// import ThemeContext from "./context/ThemeContext";
import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Todo from "./Components/Todo";
// import FormTemplate from "./Forms/FormTemplate";
// import UncontrolledFrom from "./Forms/UncontrolledFrom";
// import Title from "./Components/Title";
// import ToggleButton from "./Components/ToggleButton";
// const App = () => {
//   // const [color, setColor] = useState("red");
//   // const [count, setCount] = useState(0);
//   // const [loading, setLoading] = useState(false);
//   // const car = [
//   //   {
//   //     name: "BMW",
//   //     model: 2012,
//   //   },
//   //   {
//   //     name: "Mercedes",
//   //     model: 2015,
//   //   },
//   // ];

//   // const [person, setPerson] = useState({
//   //   name: "Saral",
//   //   age: 21,
//   //   gender: "male",
//   // });
//   return (
//     <>
//       {" "}
//       <ThemeContext>
//         <Title />
//         <ToggleButton />
//       </ThemeContext>
//       {/* <AppContext>
//         {/* <NavBar />
//         <MovieDetail />
//       </AppContext> */}
//       {/* <Goal /> */}
//       {/* <br />
//       <Login />
//       <List data={car} />
//       <br />
//       <button onClick={() => setColor("black")}>Change Color</button>
//       <br />
//       {color}
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>Add</button>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count - 1)}>Subtract</button>
//       <br />
//       <br />
//       <button onClick={() => setLoading(!loading)}>Click Me</button>
//       {loading && <Content />}
//       <br />
//       <br />
//       <input
//         placeholder="enter name"
//         onChange={(e) =>
//           setPerson((prev) => {
//             return { ...prev, name: e.target.value };
//           })
//         }
//       />
//       {/*controlled form,
//       <br />
//       <br />
//       {person?.name}
//       <br />
//       {person?.age}
//       <br />
//       {person?.gender} */}
//       <br />
//       {/* <Effect /> */}
//       {/* <Dropdown /> */}
//       {/* <Timer /> */}
//       {/* <ParentComp user="Saral"/> */}
//     </>
//   );
// };

// export default App;

const calc = (num) => {
  console.log("calculating....");
  for (let i = 0; i <= 1000000000; i++) {
    num += 1;
  }
  return num;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // freezing data using useMemo
  const calcutation = useMemo(() => calc(count), [count]);

  const increase = () => {
    console.log("count increase component rerender");
    setCount((count) => count + 1);
  };

  // freezing  function using useCallback
  const addTodo = useCallback(() => {
    setTodos((todo) => [...todo, "new todo"]);
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* <FormTemplate />
        <UncontrolledFrom /> */}
        <Todo todos={todos} addTodo={addTodo} />
        <br />
        <button onClick={increase}>Increase</button>
        <p>{count}</p>
        <p>{calcutation}</p>
      </div>
    </>
  );
};

export default App;

/*

  Write two components
  1. App.jsx
     a. Make API calls using custom hook and useEffect
  2. Pokemon.jsx as props, pass pokenmonArray, offset
     a. Change offset value form Pokemon.jsx

*/
