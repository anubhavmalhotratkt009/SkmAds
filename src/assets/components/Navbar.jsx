import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../../public/images/logo.png";
import "../../index.css";

const AppNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const getItemStyle = (itemName) => {
    if (hoveredItem === itemName) {
      return { color: "#1A3760D4" };
    } else if (hoveredItem) {
      return { color: "#d3d3d3" };
    } else {
      return { color: "#1A3760D4" };
    }
  };

  return (
    <Navbar
      expand="xl"
      className="px-4 py-2 navbar d-flex justify-space-around"
    >
      <Navbar.Brand href="#">
        <img src={Logo} className="img-fluid logo" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" className="nav-tog">
        <i className="fas fa-bars fs-1"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarNav">
        <div className="d-flex justify-content-between w-100">
          <Nav className=" " style={{ marginLeft: "40px", gap: "22px" }}>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/"
                className="nav-link"
                style={getItemStyle("Home")}
                onMouseEnter={() => handleMouseEnter("Home")}
                onMouseOut={handleMouseOut}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/about"
                className="nav-link"
                style={getItemStyle("About")}
                onMouseEnter={() => handleMouseEnter("About")}
                onMouseOut={handleMouseOut}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/solutions"
                className="nav-link"
                style={getItemStyle("Solutions")}
                onMouseEnter={() => handleMouseEnter("Solutions")}
                onMouseOut={handleMouseOut}
              >
                Solutions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/services"
                className="nav-link"
                style={getItemStyle("Services")}
                onMouseEnter={() => handleMouseEnter("Services")}
                onMouseOut={handleMouseOut}
              >
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/contact"
                className="nav-link"
                style={getItemStyle("Contact")}
                onMouseEnter={() => handleMouseEnter("Contact")}
                onMouseOut={handleMouseOut}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SkmAds/careers"
                className="nav-link"
                style={getItemStyle("Careers")}
                onMouseEnter={() => handleMouseEnter("Careers")}
                onMouseOut={handleMouseOut}
              >
                Careers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://skmdsp.com/"
                className="nav-link"
                style={getItemStyle("SKMDSP")}
                onMouseEnter={() => handleMouseEnter("SKMDSP")}
                onMouseOut={handleMouseOut}
              >
                SKMDSP
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            {" "}
            <Nav.Item>
              <Nav.Link
                href="https://sg.linkedin.com/company/skmads"
                className="nav-link"
              >
                <i
                  className="fa-brands fa-linkedin fs-5"
                  style={{ color: "#0d62bc" }}
                ></i>
              </Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="mailto:sales@skmads.com" className="nav-link">
                <i
                  className="fa-solid fa-envelope-open-text fs-5"
                  style={{ color: "#f95d2b" }}
                ></i>
              </Nav.Link>{" "}
            </Nav.Item>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
