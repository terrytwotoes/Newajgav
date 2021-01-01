import React, { Component } from "react";
import "./Navbar.css";
import ajgavlogo from "../../ajgav-logo.svg";
import { Modal, Button } from "react-bootstrap";
import QueryForm from "../Forms/QueriesForm";
import VendorForm from "../Forms/VendorForm";
import ClientForm from "../Forms/ClientForm";
import GrievancesForm from "../Forms/GrievancesForm";
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

class Navbar extends Component {
  state = {
    show: false,
    heading: "Default",
    formType: {
      Vendors: <VendorForm />,
      Clients: <ClientForm />,
      Queries: <QueryForm />,
      Grievances: <GrievancesForm />
    }
  }
 

   handleShow = (heading) => {
    
    this.setState({show: true, heading: heading})
    };

   handleClose = () => {
     this.setState({show: false})
   }


  render() {
    return (
      <>
        <div className="navbar-wrapper">
          <img className="ajgav-logo" src={ajgavlogo} alt="" />
          <Menu styles = {{ color:"purple", fontWeight:"bold"}}menuButton={<MenuButton styles = {{ color:"purple", fontWeight:"bold", width:"8.5rem"}} >Contact Us</MenuButton>}>
            <MenuItem onClick={() => this.handleShow("Vendors")}>Vendors</MenuItem>
            <MenuItem onClick={() => this.handleShow("Clients")}>Clients</MenuItem>

            <MenuItem onClick={() => this.handleShow("Queries")}>Queries</MenuItem>

            <MenuItem onClick={() => this.handleShow("Grievances")}>Grievances</MenuItem>
            
        </Menu>
          {/* <div className="dropdown">
            <a href="#" className="droplink">Contact Us</a>
            <div className="dropdown-content">
              <a
                href="#vendorForm"
                data-toggle="modal"
                onClick={() => this.handleShow("Vendors")}
              >
                Vendors
              </a>
              <a href="#clientForm" onClick={() => this.handleShow("Clients")}>
                Clients
              </a>
              <a href="#queriesForm" onClick={() => this.handleShow("Queries")}>
                Queries
              </a>
              <a href="#grievancesFrom" onClick={() => this.handleShow("Grievances")}>
                Grievances
              </a>
            </div>
          </div> */}
        </div>
        <Modal className="form-modal"  show={this.state.show}>
          <Modal.Header>
            <Modal.Title> <h2> {this.state.heading} Form</h2> </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.formType[this.state.heading]}</Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button className="modal-btn" variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Navbar;
