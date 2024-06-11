// import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [dataValid, setDataValid] = useState(false);
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name1").value;
    const pw = document.getElementById("password1").value;
    name != pw ? setDataValid(true) : alert("login");
  };

  return (
    <>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
      Login
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="name" id="name1"></input>
        <input type="password" placeholder="password" id="password1"></input>
        <button type="submit">Submit</button>
      </form>
      {dataValid && <Error />}
    </>
  );
};

export default Login;

export const Error = () => {
  return <>Invalid Credentials</>;
};
