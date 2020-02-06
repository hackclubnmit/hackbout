import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImgOverlay
} from "reactstrap";
import styles from "./Bounties.module.css";
import matic from "../../../assets/img/Matic.png";
import girlGeeks from "../../../assets/img/girlGeeks.png";

const Bounties = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="sponsors-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className="section-about-header h1 pb-3">Bounties</p>
        <div className="text-center">
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Card className={styles.card1} data-aos="fade-up">
                <CardImgOverlay>
                  <CardTitle>
                    <img src={matic} alt="matic" />
                    <p className={styles.cardTitle1}>
                      Matic Ethereum Track Prize
                    </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=1OlwT5qNs5pd_vgCLfIepm7K04jayopc6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        style={{
                          borderRadius: "20px",
                          backgroundImage:
                            "linear-gradient(45deg, #27b574 0%, #24fe41 100%)",
                          position: "relative",
                          top: "70px"
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
            <Col>
              <Card className={styles.card2} data-aos="fade-up">
                <CardImgOverlay>
                  <CardTitle>
                    <img
                      src={girlGeeks}
                      alt="girlGeeks"
                      style={{ maxWidth: "60%" }}
                    />
                    <p className={styles.cardTitle2}>girlGeeks Track Prize</p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        style={{
                          borderRadius: "20px",
                          backgroundImage:
                            "linear-gradient(45deg, #27b574 0%, #24fe41 100%)"
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
        </div>
      </Container>
    </div>
  );
};

export default Bounties;
