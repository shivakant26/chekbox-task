import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <p>Accilator niche market technology</p>
            </Col>
            <Col>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
            </Col>
            <Col>
              <h4>Working Hours</h4>
            </Col>
            <Col>
              <h4>Address </h4>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
