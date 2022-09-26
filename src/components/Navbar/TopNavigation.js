import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

const TopNavigation = () => {
  const handleClick = () => {};
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to={"/meals"}>
            <Navbar.Brand>Meal-DB-Responsive</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={"/meals"}>
                <Nav.Link>Meals</Nav.Link>
              </LinkContainer>

              <LinkContainer to={"/about"}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              <LinkContainer to={"/login"}>
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavigation;
