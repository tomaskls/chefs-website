import { useState } from 'react';

import {
  Navbar,
  Nav,
  Container,
  Offcanvas,

} from 'react-bootstrap';

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar bg="light" variant="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
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
              <Nav.Link href="#home">Pradžia</Nav.Link>
              <Nav.Link href="#about">Apie mus</Nav.Link>
              <Nav.Link href="#services">Paslaugos</Nav.Link>
              <Nav.Link href="#contact">Kontaktai</Nav.Link>
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
     <Container>
      <h1 className="w-100 mt-5 text-center" >Food is my Passion!</h1>
     <p className="w-100 mt-5 text-center">CATERING & IVENTS PROFESSIONAL PRIVAT CHEF</p>
     </Container>

    </Navbar>
  );
};

export default ResponsiveNavbar;