import React from "react";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <p className="h1 pt-2">About The Event</p>
      <Row>
        <Col>
          <p style={{ fontWeight: "500" }}>
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            Ipsum
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="p-5" style={{ textAlign: "center" }}>
          <img
            src={require("assets/img/snaks.png")}
            alt="1"
            width="80"
            height="80"
          ></img>
          <h5 className="pt-3">Free Drinks and Snacks</h5>
        </Col>
        <Col className="p-5" style={{ textAlign: "center" }}>
          <img
            src={require("assets/img/stick.png")}
            alt="2"
            width="80"
            height="80"
          ></img>
          <h5 className="pt-3">Awesome Swags and Goddies!</h5>
        </Col>
        <Col className="p-5" style={{ textAlign: "center" }}>
          <img
            src={require("assets/img/24hack.png")}
            alt="3"
            width="80"
            height="80"
          ></img>
          <h5 className="pt-3">24 Hour Hack</h5>
        </Col>
        <Col className="p-5" style={{ textAlign: "center" }}>
          <img
            src={require("assets/img/cashprize.png")}
            alt="4"
            width="80"
            height="80"
          ></img>
          <h5 className="pt-3">Huge Cash Prizes</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
