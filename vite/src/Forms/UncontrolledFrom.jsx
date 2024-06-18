import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

// uncontrolled form prevents page from rerendering
const UncontrolledFrom = () => {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = formRef.current;
    if (data.checkValidity() === false) {
      e.stopPropagation();
    }

    const formData = new FormData(data);

    setValidated(true);
    console.log(formData);
    for (const value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <>
      U N C O N T R O L L E D - F O R M
      <Form
        className="m-4 p-4"
        noValidate
        ref={formRef}
        validated={validated}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="validationCustom01"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="validationCustom02"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password" // name attribute must be added for uncontrolled forms
              placeholder="Password"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" name="zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name="agree"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default UncontrolledFrom;
