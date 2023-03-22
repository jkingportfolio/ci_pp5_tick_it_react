import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <i className="fa-solid fa-house" />
              Home
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-right-to-bracket" />
              Sign in
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-user-plus" />
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
