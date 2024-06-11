// import Goal from "./Components/Goal";
import List from "./Components/List";
import Login from "./Components/Login";

function App() {
  const car = [
    {
      name: "BMW",
      model: 2012,
    },
    {
      name: "Mercedes",
      model: 2015,
    },
  ];
  return (
    <>
      {/* <Goal /> */}
      <br />
      <Login />
      <List data={car} />
    </>
  );
}

export default App;