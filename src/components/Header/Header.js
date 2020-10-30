import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <Navbar fixed="top" className="nav-container" expand="lg">
      <Container>
        <Navbar.Brand
          style={{ fontSize: "23px" }}
          className="text-white"
          href="/home"
        >
          Arif Hossain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-white" href="/home">
              <span className="nav-hover">Home</span>
            </Nav.Link>
            <Nav.Link className="text-white" href="/about">
              <span className="nav-hover">About me</span>
            </Nav.Link>
            <Nav.Link className="text-white" href="/project">
              <span className="nav-hover">Project</span>
            </Nav.Link>
            <Nav.Link className="text-white" href="/blog">
              <span className="nav-hover">Blog</span>
            </Nav.Link>
            <Nav.Link className="text-white" href="/contact">
              <span className="nav-hover">Contact</span>
            </Nav.Link>
            <Nav.Link
              className="text-white"
              target="_blank"
              href="https://drive.google.com/file/d/16Hz9qt0kr7YWVeiHk5kXLMSJO3UzTA3m/view?usp=sharing"
            >
              <span className="nav-hover">Resume</span>
            </Nav.Link>
          </Nav>

          <Nav.Link
            className="text-white social-icons-container"
            target="_blank"
            href="https://www.linkedin.com/in/arifhossain80/"
          >
            <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
          </Nav.Link>
          <Nav.Link
            className="text-white social-icons-container"
            target="_blank"
            href="https://github.com/a1barif2h"
          >
            <FontAwesomeIcon className="social-icons" icon={faGithub} />
          </Nav.Link>
          <Nav.Link
            className="text-white social-icons-container"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100008338565470"
          >
            <FontAwesomeIcon className="social-icons" icon={faFacebook} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
