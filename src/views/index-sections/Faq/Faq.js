import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Card, CardHeader, CardBody, Collapse } from "reactstrap";
import { Accordion, Card } from "react-bootstrap";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div
      className="section section-faq"
      id="faq-section"
      // style={{ backgroundImage: "linear-gradient(to bottom,#eeeeee,#ffffff)" }}
      style={{ background: "#ffffff" }}
    >
      <Container className=" mt-5">
        <p className="section-faq-header h1 pt-2">FAQ's</p>

        <Row>
          <Col>
            <Accordion data-aos="fade-up">
              {/* defaultActiveKey="1" */}
              <Card bg="light" text="black" className="pt-3 pl-2 pr-2">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <p>
                    <b>Q. What is a hackathon? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    A hackathon is a design sprint-like event in which computer
                    programmers and others involved in software development,
                    including graphic designers, interface designers, project
                    managers, and others, often including domain experts,
                    collaborate intensively on projects.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <p>
                    <b>Q. Who can register? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Everyone's welcome. Student or Professional.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <p>
                    <b>Q.This is my first hackathon. What if I'm clueless? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines "></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Then we'll be happy that we were the one to guide you though
                    your problems. It’s helpful to have some programming or
                    technical experience, but it’s not a requirement. We’ll have
                    talks, mentors and workshops to help you with your project.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <p>
                    <b>Q. How many members are required in a team? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines "></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    The maximum team size is 4. The minimum is 2. Because we
                    want you to have company and not be alone on this amazing
                    journey :){" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <p>
                    <b>
                      Q. Do I need to have any specific qualifications to be a
                      participant for the hackathon?{" "}
                    </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    None at all! All you require is the passion to code.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <p>
                    <b>Q. What shouldn't I bring to the Hackathon? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    Anything that would cause a disturbance in the atmosphere of
                    pure awesomeness is not allowed. Yeah we're talking about
                    weapons of any kind, drugs, or alcohol. If you're not sure
                    ask ahead.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <p>
                    <b>Q. Can I start working on my hack before the event? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    No! That would amount to cheating and you would be
                    disqualified. This is to ensure that all participants stand
                    on equal footing at the start of the hack.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  <p>
                    <b>Q. How does judging work? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    A panel of some experienced professionals will evaluate
                    hacks based on creativity, technical difficulty, design, and
                    usefulness.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  <p>
                    <b>Q. Do we have to be present at the site to hack? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    Absolutely! This is an offline hack. So, yes, you need to be
                    present at the venue.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  <p>
                    <b>Q. I didn't find my question here, what can i do? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    If you have any other questions or concerns, reach out to us
                    using the contact details below
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
