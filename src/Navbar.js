import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/images/logo 1.svg";
import navIcon1 from "./assets/images/nav-icon1.svg";
import navIcon2 from "./assets/images/nav-icon2.svg";
import navIcon3 from "./assets/images/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { WelcomeModal } from "./WelcomeModal";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("kljjjjjjjjjjjjjjjjjjjjjjjjjjj");
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        {/* <WelcomeModal /> */}
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => setActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => setActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connectt</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
