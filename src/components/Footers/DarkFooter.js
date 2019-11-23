/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="float-left">
            <h5></h5>
          </Col>
          <Col className="text-center">
            HackBout 1.0 © {new Date().getFullYear()}
          </Col>
          <Col>
            <h5></h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
