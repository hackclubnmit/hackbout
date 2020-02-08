import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardImgOverlay
} from "reactstrap";

import alexa from "../../../assets/img/alexa.png";
import mlh from "../../../assets/img/mlh-localhost-logo-dark.png";

import styles from "./Workshop.module.css";

const Workshop = () => {
    return (
      <div
        className={styles.sectionTracks}
        id="workshop-section"
        style={{marginTop: "7%"}}
      >
        <Container className="">
          <p className="section-about-header h1 pb-5">Workshop by <img src={mlh} alt="mlh-localhost" className={styles.mlh}/></p>
          <Row style={{ textAlign: "center", margin: "auto" }}>
            <Col>
            <Card className={styles.card1} data-aos="fade-up">
            <CardImgOverlay>
              <img src={alexa} alt="alexa" style={{ marginTop: "10%" }} />
              <CardTitle>
                <p className={styles.cardTitle1}>
                Build Your First Skill for Amazon Alexa
                </p>
              </CardTitle>
              <CardText className={styles.cardBody}>
                During this workshop you’ll learn the basics of how to build skills for Amazon Alexa to run on Alexa devices like the Amazon Echo or Echo Dot. 
                The content covers setting up Alexa Skills Kit, developing your first skill, deploying your skill to AWS Lambda, and submitting your skill for 
                publication all through the Alexa Developer Console
                <a
                  href="https://localhost.mlh.io/activities/build-with-alexa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    style={{
                      color: "black",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      position: "relative",
                      top: "40px"
                    }}
                    onClick="/"
                  >
                    Know More
                  </Button>
                </a>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            </Row>
      </Container>
    </div>
  );
};

export default Workshop;
