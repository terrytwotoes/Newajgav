import React from "react";
import styles from "./Contact.module.css";

import ClientForm from "../Forms/ClientForm";
import { Modal, Button } from "react-bootstrap";

export default function ContactUsDivWrapper() {
  const handleShow = (heading) => {
    
    setState({show: true, heading: heading})
    };

   const handleClose = () => {
     setState({show: false})
   }

   const [state, setState] = React.useState({
    show: false,
    heading: "Default",
   })

  return (
    <div className={styles.rootWrapper}>
      <div className={styles.contactBoxWrapper}>
        <div className={styles.contactBoxHeadingWrapper}>
          <h1>Reach Us Out</h1>
        </div>
        <div className={styles.contactBoxParaWrapper}>
          We can help you define and identify a better approach for your
          projects. Our years of expertise will help you identify the strengths
          and pitfalls in a proper way. You can reach us by email.
        </div>
        <div className={styles.contactBoxEmailBtnWrapper}>
          <button  onClick={() => handleShow("Clients")}> Click Here</button>
        </div>
      </div>
      <Modal show={state.show}>
          <Modal.Header>
            <Modal.Title>{state.heading} Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ClientForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}
