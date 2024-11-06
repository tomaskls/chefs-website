import { Card, Image, ListGroup, Row, Col } from 'react-bootstrap';

const ContactCard = () => {
  return (
    < >
        <Row className=' mt-5'>
          <Col xs={12} md={6}>
          <h2 id="contact" className="text-center">Contact Me</h2>
          <Card className="h-75 mx-auto mt-5" style={{ maxWidth: '400px' }}>
            <Card.Body>
              <Card.Title className="mb-4">Jonas Jonaitis</Card.Title>

              <ListGroup variant="flush">
                {/* Telefono numeris */}
                <ListGroup.Item className="px-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-telephone me-2"></i>
                    <strong className="me-2">Tel:</strong>
                    <a href="tel:+37060000000" className="text-decoration-none">
                      +370 600 00000
                    </a>
                  </div>
                </ListGroup.Item>

                {/* WhatsApp */}
                <ListGroup.Item className="px-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-whatsapp me-2"></i>
                    <strong className="me-2">WhatsApp:</strong>
                    <a
                      href="https://wa.me/37060000000"
                      className="text-decoration-none text-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +370 600 00000
                    </a>
                  </div>
                </ListGroup.Item>

                {/* Facebook */}
                <ListGroup.Item className="px-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-facebook me-2"></i>
                    <strong className="me-2">Facebook:</strong>
                    <a
                      href="https://facebook.com/jonas.jonaitis"
                      className="text-decoration-none text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/jonas.jonaitis
                    </a>
                  </div>
                </ListGroup.Item>

                {/* Instagram */}
                <ListGroup.Item className="px-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-instagram me-2"></i>
                    <strong className="me-2">Instagram:</strong>
                    <a
                      href="https://instagram.com/jonasjonaitis"
                      className="text-decoration-none text-danger"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @jonasjonaitis
                    </a>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6}>
        <Image className="mt-5" src="/vegetable-pan-8027678_640.jpg" fluid />
          </Col>
      </Row>
    </>
  );
};

export default ContactCard;