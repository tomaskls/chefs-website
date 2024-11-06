
import { useState } from 'react';

import {
  Navbar,
  Nav,
  Container,
  Offcanvas,

} from 'react-bootstrap';

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);

  const handleNavLinkClick = () => {
    setShow(false); // Close the menu when a nav link is clicked
  };
  return (
    <Navbar bg="light" variant="light" expand={false} className="fixed-top mb-3">
      <Container fluid>
        <Navbar.Brand href="#home">Chef Fabio</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Meniu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={handleNavLinkClick} href="#home">Home</Nav.Link>
              <Nav.Link onClick={handleNavLinkClick} href="#services">My Services</Nav.Link>
              <Nav.Link onClick={handleNavLinkClick} href="#gallery">Gallery</Nav.Link>
              <Nav.Link onClick={handleNavLinkClick} href="#contact">Contact Me</Nav.Link>
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
     

    </Navbar>
  );
};

export default ResponsiveNavbar;
