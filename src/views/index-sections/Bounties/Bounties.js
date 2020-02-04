import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  // CardImg,
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
                        Matic will be giving away a cash prize for the best hack
                        built on top of Ethereum or Matic during the hackathon.
                        For teams that integrate Matic in their hacks as well
                        the prize money will be higher along with eligibility
                        for internship/full-time role interviews and a chance to
                        land seed funding of upto 5000 USD!
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
