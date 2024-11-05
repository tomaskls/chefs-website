import { Container, Row, Col, Ratio } from 'react-bootstrap';

const VideoCard = () => {
  return (
    <Container>
      <Row className="mb-5 justify-content-center">
        <Col md={8}>
          <Ratio aspectRatio="16x9">
            <iframe
              src="https://www.youtube.com/embed/wLL8H_h_nvs"
              title="YouTube video"
              allowFullScreen
            />
          </Ratio>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCard;