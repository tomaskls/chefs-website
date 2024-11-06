import { Container, Row, Col, Ratio } from 'react-bootstrap';

const VideoCard = () => {
  return (
    <Container>
      <Row id='video' className="mb-5 justify-content-center">
        <Col md={6}>
          <Ratio aspectRatio="16x9">
            <iframe
              src="https://www.youtube.com/embed/wLL8H_h_nvs"
              title="YouTube video"
              allowFullScreen
            />
          </Ratio>
        </Col>
        <Col md={6}>
          <Ratio aspectRatio="16x9">
            <iframe
              src="https://www.youtube.com/embed/BIG1h2vG-Qg"
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