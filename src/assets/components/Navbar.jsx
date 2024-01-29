import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "../../index.css";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="white"
      className="gap-1 container pt-4"
    >
      <Navbar.Brand href="#">
        <img src={Logo} className="img-fluid logo" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-5">
          <Nav.Item>
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/solutions" className="nav-link">
              Solutions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="nav-link">
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://skmdsp.com/" className="nav-link">
              SKMDSP
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
