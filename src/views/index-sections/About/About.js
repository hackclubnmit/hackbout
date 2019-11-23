import React from "react";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div
      className="section section-about"
      // data-background-color=""
      id="about-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pt-2">About The Event</p>
        <Row>
          <Col>
            <p style={{ fontWeight: "500" }}>
              For centuries humanity has enjoyed bouts in action-packed sports
              such as sword fighting and boxing, With the same intensity and
              competition, the department of CS and IS present HackBout, a 24
              hour hackathon where teams will battle it out in electrifying
              competition, building their idea, improving it as they but in the
              spirit of good sportsmanship, having fun and making new friends
              along the way.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-5" style={{ textAlign: "center" }}>
            {/* <img
            src={require("assets/img/snaks.png")}
            alt="1"
            width="80"
            height="80"
          ></img> */}
            <span style={{ fontSize: "60px", color: "grey" }}>
              <i class="fas fa-mug-hot "></i>
            </span>
            <h5 className="pt-3">Free Drinks and Snacks</h5>
          </Col>
          <Col className="p-5" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "60px", color: "grey" }}>
              <i class="fas fa-grin-beam"></i>
            </span>
            <h5 className="pt-3">Awesome Swags and Goddies!</h5>
          </Col>
          <Col className="p-5" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "60px", color: "grey" }}>
              <i class="fas fa-code"></i>
            </span>
            <h5 className="pt-3">24 Hour Hack</h5>
          </Col>
          <Col className="p-5" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "60px", color: "grey" }}>
              <i class="fas fa-trophy"></i>
            </span>
            <h5 className="pt-3">Huge Cash Prizes</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
