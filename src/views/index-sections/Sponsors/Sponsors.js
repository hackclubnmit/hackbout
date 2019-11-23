import React from "react";
import { Container, Row, Col } from "reactstrap";
import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";

const Sponsors = () => {
  return (
    <div
      className=" section-sponsors"
      // data-background-color=""
      id="sponsors-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pb-3">Sponsors</p>

        <Row>
          <Col className="p-3 mb-5 text-center">
            <img
              src={github}
              alt="github-logo"
              style={{ maxWidth: "70%", maxHeight: "70%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col className=" mb-5  p-3 text-center">
            <img
              src={hackClub}
              alt="github-logo"
              style={{ maxWidth: "50%", maxHeight: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sponsors;
