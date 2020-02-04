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
            <Col className="mt-5">
              <div>
                <Col>
                  <Card className={styles.card} data-aos="slide-up">
                    <CardImgOverlay>
                      <CardTitle>
                        <p className={styles.cardTitle}>
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
                              marginTop: "150px",
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
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bounties;
