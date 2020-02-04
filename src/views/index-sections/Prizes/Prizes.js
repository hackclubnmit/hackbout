import React from "react";
import { Container, Row, Col } from "reactstrap";

const Bounties = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="sponsors-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className="section-about-header h1 pb-3">Prizes</p>
        <Row style={{ textAlign: "center" }}>
          <Col className="mt-5">
            <div>
              <h1 style={{ fontWeight: "100" }}> Coming Soon! </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bounties;
