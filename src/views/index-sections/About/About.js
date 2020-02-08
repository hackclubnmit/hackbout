import React from "react";
import "aos/dist/aos.css";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div
      className="section section-about"
      style={{ background: "#ffffff" }}
      id="about-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pt-2">About The Event</p>
        <Row>
          <Col>
            <p style={{ fontWeight: "500" }}>
              For centuries humanity has enjoyed bouts in action-packed sports
              such as sword fighting and boxing, With the same intensity and
              competition, Nitte Meenakshi Institute of Technology present
              HackBout, a 36 hour hackathon where teams will battle it out in
              electrifying competition, building their idea, improving it as
              they but in the spirit of good sportsmanship, having fun and
              making new friends along the way.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("assets/img/logos/new/food.svg")}
              alt="food"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className="pt-3">Free Snacks and Drinks</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("assets/img/logos/new/goodies.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className="pt-3">Awesome Swags and Goodies!</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("assets/img/logos/new icons/24_hour_hack.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className="pt-3">36 Hour Hack</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("assets/img/logos/new/bounties.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className="pt-3">Bounties</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("assets/img/logos/new/prizes.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className="pt-3">Huge Prizes</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
