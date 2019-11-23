import React from "react";
import { Container, Row, Col } from "reactstrap";

const Mentors = () => {
  return (
    <div
      className=" section-Mentors"
      // data-background-color=""
      id="Mentors-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pt-2">Mentors</p>
        <Row>
          <Col className="mt-5">
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontWeight: "100" }}> Coming Soon! </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mentors;
