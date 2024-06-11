// import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [dataInvalid, setDataInvalid] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != password) setDataInvalid(true);
    else {
      setDataInvalid(false);
      console.log("login");
    }
  };

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          id="name1"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password1"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {dataInvalid && <Error />}
    </>
  );
};

export default Login;

export const Error = () => {
  return <>Invalid Credentials</>;
};
