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

import py from "../../../assets/img/capitalOne.png";
import mlh from "../../../assets/img/mlh-localhost-logo-dark.png";

import styles from "./Workshop.module.css";

const Workshop = () => {
  return (
    <div
      className={styles.sectionTracks}
      id="workshop-section"
      style={{ marginTop: "7%" }}
    >
      <Container className="">
        <p className={["section-workshop-header h1 ", styles.title].join(" ")}>
          Pre-Event Workshop by{" "}
          <img src={mlh} alt="mlh-localhost" className={styles.mlh} />
        </p>
        <div className={styles.under}></div>

        <Row style={{ textAlign: "center", margin: "auto" }}>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <CardImgOverlay>
                <img src={py} alt="py" style={{ marginTop: "10%" }} />
                <CardTitle>
                  <p className={styles.cardTitle1}>
                    Basic Training: Intro to Python Skills for AI
                  </p>
                </CardTitle>
                <CardText className={styles.cardBody}>
                  Basic Training is a series of three workshops developed in
                  partnership with Capital One to teach Python skills for
                  Artificial Intelligence use cases.
                  <br />
                  <strong>Part I:</strong> Web Scraping <br />
                  <strong>Part II:</strong> Data Cleaning <br />{" "}
                  <strong>Part III:</strong> Use Your Data in a Bot!
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe1VMNa-3FRUFMe-lb_ofAZtwR1E46GZct_1HK0RmQxgtwoHw/viewform"
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
                      Register
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
