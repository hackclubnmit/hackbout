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
import map from "../../../assets/img/map.png";
import nmit from "../../../assets/img/nmit.png";
// import ibm from "../../../assets/img/ibm.svg";
import call from "../../../assets/img/callforcode.png";

const Bounties = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="bounties-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className={["section-bounties-header h1 ", styles.title].join(" ")}>
          Bounties
        </p>
        <div className={styles.under}></div>
        <div className="text-center">
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Card className={styles.card4} data-aos="fade-up" style={{}}>
                <CardImgOverlay>
                  <img
                    src={nmit}
                    alt="matic"
                    style={{ marginTop: "0%", transform: "scale(1.1)" }}
                  />
                  <CardTitle style={{ marginTop: "-50px" }}>
                    <p className={styles.cardTitle5}>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "25px",
                          display: "block",
                          top: "-20px"
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "30px",
                          display: "block",
                          top: "-30px",
                          left: "-15%",
                          fontWeight: "800"
                        }}
                      >
                        IBM
                        <img
                          src={call}
                          alt="matic"
                          style={{
                            position: "relative",
                            maxWidth: "30%",
                            left: "30%",
                            transform: "scale(1.5)",
                            display: "inline"
                          }}
                        />
                      </span>
                      Natural Disasters
                    </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=1JxSFudO8q7E9--wfMdsAFwCre8fIIcvP"
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
            <Col>
              <Card className={styles.card4} data-aos="fade-up" style={{}}>
                <CardImgOverlay>
                  <img
                    src={nmit}
                    alt="matic"
                    style={{ marginTop: "0%", transform: "scale(1.1)" }}
                  />
                  <CardTitle style={{ marginTop: "-50px" }}>
                    <p className={styles.cardTitle5}>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "25px",
                          display: "block",
                          top: "-20px"
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "30px",
                          display: "block",
                          top: "-30px",
                          left: "-15%",
                          fontWeight: "800"
                        }}
                      >
                        IBM
                        <img
                          src={call}
                          alt="matic"
                          style={{
                            position: "relative",
                            maxWidth: "30%",
                            left: "30%",
                            transform: "scale(1.5)",
                            display: "inline"
                          }}
                        />
                      </span>
                      Climate Change
                    </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=1QaDhwijLpznDkSoRPVq_uBM7DCd9vRRA"
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

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Card className={styles.card1} data-aos="fade-up">
                <CardImgOverlay>
                  <img src={matic} alt="matic" style={{ marginTop: "20%" }} />
                  <CardTitle>
                    <p className={styles.cardTitle1}>
                      Matic Ethereum Track Prize
                    </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=1KBe2jH6ekT5zfLlrZgv08VYHlFCBsdNE"
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
            <Col>
              <Card className={styles.card2} data-aos="fade-up">
                <CardImgOverlay>
                  <CardTitle>
                    <img
                      src={girlGeeks}
                      alt="girlGeeks"
                      style={{ maxWidth: "60%", marginTop: "10%" }}
                    />
                    <p className={styles.cardTitle2}>GirlGeeksHack 2020 </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=1nIWCl20mge-g9m7yTo8Q_pQwXIi66zQv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        style={{
                          position: "relative",
                          top: "10px",
                          color: "black",
                          borderRadius: "20px",
                          backgroundColor: "white"
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
              {" "}
              <Card className={styles.card3} data-aos="fade-up">
                <CardImgOverlay>
                  <CardTitle>
                    <img
                      src={map}
                      alt="map-my-india"
                      style={{ maxWidth: "100%", marginTop: "10%" }}
                    />
                    <p className={styles.cardTitle3}>
                      MapmyIndia API Track Prize{" "}
                    </p>
                  </CardTitle>
                  <CardText className={styles.cardBody}>
                    <a
                      href="https://drive.google.com/open?id=14yHviPTPEf5LLQ_ilbx0Qj889g-NAqg2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        style={{
                          position: "relative",
                          top: "50px",
                          color: "black",
                          borderRadius: "20px",
                          backgroundColor: "white"
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
