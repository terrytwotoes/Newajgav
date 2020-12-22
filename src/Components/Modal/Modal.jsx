import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import QueryForm from "../Forms/QueriesForm";


export default function FormModal(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
      </div>
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>{props.heading} Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QueryForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}