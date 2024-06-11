import { Conditional } from "./Conditional";

const Goal = () => {
  const shoot = (data) => {
    if (!data) return alert("please enter sth");
    alert(`goal by ${data}`);
  };
  return (
    <>
      <input type="text" placeholder="name" id="name" />
      <select
        id="cars"
        onChange={() => shoot(document.getElementById("cars").value)}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <button onClick={() => shoot(document.getElementById("name").value)}>
        Shoot
      </button>
      <Conditional player={"ronaldo"} />
    </>
  );
};

export default Goal;
