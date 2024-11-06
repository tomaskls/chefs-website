import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';

const FoodGallery = () => {
    return (
        <Container className="mt- ">
            {/* Eilutė su 3 kortelėmis */}
            <Row className=" g-4">
                {/* Pirma kortelė */}

                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="/fire-1654828_640.jpg"
                            alt="Maisto patiekalas 1"
                        />
                        <Card.Body  >
                            <Col>
                                <Card.Title>MEET FABIO</Card.Title>
                                <Card.Text >
                                    Hi,&nbsp;My name is Fabio I’m Italian from the Amalfi coast I have been a chef since I was 14 years old. I was the chef for the Italian national soccer team for 4 years. We won the World Cup in 2006 in Germany.I specialize in Italian cuisine and love sharing my passion for food.
                                </Card.Text>
                                    <Button className="mt-auto float-end border-dark" variant="Secondary">Get in Touch</Button>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Antra kortelė */}
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="/restaurant-1284351_640.jpg"
                            alt="Maisto patiekalas 2"
                        />
                        <Card.Body>
                            <Card.Title>PERSONAL CHEF</Card.Title>
                            <Card.Text>
                                Whether you are planning a small simple dinner party for your friends or an impressive multi-course meal for business clients, Personal Chef Fabio  will create the memorable menu. All meals are prepared at your place with seasonal ingredients from local farmers, and fish markets.                            </Card.Text>
                            <Button className="float-end border-dark" variant="Secondary">Get in Touch</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Trečia kortelė */}
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="spaghetti-6639970_640.jpg"
                            alt="Maisto patiekalas 3"
                        />
                        <Card.Body>
                            <Card.Title>MEAL PREPPING</Card.Title>
                            <Card.Text>
                                We all know that preparing lunches and dinners can at times create frayed nerves. Personal Chef Fabio  takes all the stress out of meal preparation by coming to your home and preparing the food, leaving it ready for a simple reheating whenever you want.
                            </Card.Text>
                            <Button className="float-end border-dark" variant="Secondary">Get in Touch</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Papildomi stiliai kortelėms */}
            <style type="text/css">
                {`
          .card {
            transition: transform 0.2s;
            height: 100%;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          
          .card-img-top {
            height: 200px;
            object-fit: cover;
          }
          
          .card-title {
            color: #2c3e50;
            font-weight: bold;
          }
          
          .card-text {
            color: #666;
            min-height: 72px;
          }
        `}
            </style>
        </Container>
    );
};

export default FoodGallery;