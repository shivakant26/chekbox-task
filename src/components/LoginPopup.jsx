import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Loginpopup = ({ show, setShow }) => {
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const [state, setState] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = () => {
    if (state.userName === "admin" && state.password === "123456") {
      localStorage.setItem("token", "125dsf3df5s1df2351fsd3ff");
      navigate("/dashboard", { replace: true });
      setShow(false);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Username"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setState({ ...state, userName: e.target.value })}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Loginpopup;
