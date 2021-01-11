import React, { Component } from "react";
import "./SubNavBar.css";
import Collagediv from "../Collage/Collage";
import Careers from "../CareersDiv/Careers";
import Services from "../ServicesDiv/Services";
import Tourism from "../TourismDiv/Tourism";
import BackgroundStory from "../SubNavContent/BackgroundStory";
import DefaultSubNavbar from "../DefautlSubNavbarDiv/DefaultSubNavbar";
import Hrm from "../SubNavContent/Hrm";
import {Menu,MenuItem,MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'

class SubNavBar extends Component {
  state = {
    isActive: "default",
  };

  activeOptionHandler = (optionString) => {
    this.setState({ isActive: optionString });
  };

  render() {
    const activeClass = "active-option";

    return (
      <>
        
      <div className="navbars">
        <Menu styles = {{ color:"purple", fontWeight:"bold"}}menuButton={<MenuButton styles = {{ color:"purple", fontWeight:"bold", width:"8.5rem"}} >About</MenuButton>}>
            <MenuItem onClick={() => this.activeOptionHandler("mission")}>Mission and Vision</MenuItem>
            <MenuItem onClick={() => this.activeOptionHandler("background")}>Background and our Story</MenuItem>
        </Menu>
        <Menu styles = {{ color:"purple", fontWeight:"bold"}} menuButton={<MenuButton styles = {{ color:"purple", fontWeight:"bold", width:"8.5rem"}}>Work Domain</MenuButton>}>
            <MenuItem onClick={() => this.activeOptionHandler("services")}>Project Services</MenuItem>
            <MenuItem onClick={() => this.activeOptionHandler("hrm")}>HRM</MenuItem>
            <MenuItem onClick={() => this.activeOptionHandler("tourism")}>Tourism</MenuItem>
        </Menu>
        {/* <Menu  styles = {{ color:"purple", fontWeight:"bold"}} menuButton={<MenuButton styles = {{ color:"purple", fontWeight:"bold", width:"8.5rem"}} onClick={() => this.activeOptionHandler("careers")}>Careers</MenuButton>}>
          <MenuItem onClick={() => this.activeOptionHandler("careers")} class="subnavbtn">Requirements</MenuItem>
        </Menu> */}

        <MenuButton styles = {{ color:"purple", fontWeight:"bold", width:"8.5rem"}} onClick={() => this.activeOptionHandler("careers")}>Careers</MenuButton>
      </div>

        {this.state.isActive === "default" && <Collagediv />}
        {this.state.isActive === "mission" && <DefaultSubNavbar /> }
        {this.state.isActive === "background" && <BackgroundStory/>}
        {this.state.isActive === "services" && <Services />}
        {this.state.isActive === "hrm" && <Hrm/>}
        {this.state.isActive === "tourism" && <Tourism />}
        {this.state.isActive === "careers" && <Careers />}
      </> 
    );
  }
}

export default SubNavBar;
