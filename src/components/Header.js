import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <NavBar variant="dark" bg="dark">
    //   <ButtonGroup>
    //     <Link to="/loading">
    //       <Button>Loading</Button>
    //     </Link>
    //     <Link to="/">
    //       <Button>About</Button>
    //     </Link>
    //   </ButtonGroup>
    // </NavBar>
    <Navbar sticky="top" bg="warning" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Story Jam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/new">New</Nav.Link>
            <Nav.Link href="/room">Room</Nav.Link>
            <Nav.Link href="/loading">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
