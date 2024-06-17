import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// uncontrolled form prevents page from rerendering
const UncontrolledFrom = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formRef.current;
    const formData = new FormData(data);
    console.log(formData);
    for (const value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <>
      U N C O N T R O L L E D - F O R M
      <Form className="m-4 p-4" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmailU">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordU">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password" // name attribute must be added for uncontrolled forms
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UncontrolledFrom;
