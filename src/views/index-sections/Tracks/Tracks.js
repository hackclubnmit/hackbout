import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card } from "react-bootstrap";

const Tracks = () => {
  return (
    <div
      className=" section-tracks"
      // data-background-color=""
      id="tracks-section"
    >
      <Container className="">
        <p className="section-about-header h1 pt-2">Tracks</p>
        <Row>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}> ML & Data Science</h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  Are you fascinated by how Netflix recommends the movies you’ll
                  like? Have you wondered what is the Google algorithm that
                  shows you such accurate search results? Machine Learning is
                  behind these innovations. It represents a key evolution in the
                  fields of computer science, data analysis, software
                  engineering, and artificial intelligence.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}>Blockchain & Fintech </h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  Today's most exciting use cases for blockchain technology
                  extend far beyond payments and digital currency. With the
                  advent of "smart contracts" and turing-complete frameworks,
                  blockchain technology has evolved far beyond just bitcoins. It
                  is time to join the Web 3.0 revolution!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}>IOT</h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  A world of devices connected by internet opens up
                  opportunities for us that were previously unthinkable.
                  Innovative apps can be built that can allow devices to share
                  data and take intelligent decisions
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}>Future Mobility</h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  From self driving cars to smart cities software and sensor
                  technology is changing the way we move around. Hate traffic?
                  We too. Hate pollution? Same. Hate finding a parking spot?
                  Yep. Join the Future Mobility track and solve these problems.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}>AR & VR</h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  VR and AR is the extension of our minds, and is meant for
                  those interested in building immersive, engaging experiences
                  for real industry applications. From fashion and sports to
                  data visualisation and engineering to education and
                  healthcare, every sector will be impacted by the rise of VR &
                  AR.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h4 style={{ fontWeight: "600" }}>Open Innovation</h4>
                </Card.Title>
                <p style={{ fontWeight: "500" }}>
                  Choose this one if your topics do not match any of the other
                  here!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tracks;
