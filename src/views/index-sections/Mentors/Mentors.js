import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Mentors = () => {
  return (
    <div
      className=" section-Mentors"
      style={{ background: "#ffffff" }}
      id="Mentors-section"
    >
      <Container className=" pt-5">
        <p className="section-about-header h1 pt-2">Mentors</p>
        <Row style={{ textAlign: "center" }}>
          <Col className="mt-5">
            <div>
              <h1 style={{ fontWeight: "100" }}> Coming Soon! </h1>
            </div>
            <Button
              color=""
              size="lg"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(45deg, #27b574 0%, #24fe41 100%)"
              }}
            >
              Become a Mentor!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mentors;
