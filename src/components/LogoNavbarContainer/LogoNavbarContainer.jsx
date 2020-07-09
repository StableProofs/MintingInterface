import React from 'react';
import {
  Navbar
  , NavbarBrand } from 'reactstrap';
import './LogoNavbarContainer.css'

export default class LogoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" style={{height:"7vh"}}>
          <NavbarBrand href="/" className="cs-extra-bold top-left-logo" style={{color: "#12263F"}}>StableProofs</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}