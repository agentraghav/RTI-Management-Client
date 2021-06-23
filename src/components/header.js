import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


import AuthOptions from './auth-options';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">University RTI System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href="#features">Submit Request</Nav.Link>
            <Nav.Link href="#pricing">View Status</Nav.Link>
            <Nav.Link href="#pricing">View History</Nav.Link>
          </Nav>
          <Nav>
            <AuthOptions />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    
  );
}

export default Header;