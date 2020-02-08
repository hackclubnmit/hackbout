import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImgOverlay
} from "reactstrap";

import styles from "./Tracks.module.css";
import img1 from "../../../assets/img/ai.png";
import img2 from "../../../assets/img/bitcoin.png";
import img3 from "../../../assets/img/idea.png";
import img4 from "../../../assets/img/hosting.png";
import img5 from "../../../assets/img/mobility.png";
import img6 from "../../../assets/img/AR.png";

const Tracks = () => {
  return (
    <div
      className={styles.sectionTracks}
      style={{
        background: "#22B573"
      }}
      id="tracks-section"
    >
      <Container className="">
        <p className="section-about-header h1 pb-5" style={{color: "white"}}>Tracks</p>
        <Row style={{ textAlign: "center", margin: "auto" }}>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img1} alt="ml" className={styles.img} />
                  <p className={styles.cardTitle}> ML & Data Science</p>
                </CardTitle>
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br> */}
                <CardText className={styles.cardBody}>
                  In recent times, data is growing exponentially like never
                  before. We need more efficient algorithms and models to
                  analyse this data to make more efficient decisions and get
                  accurate results on a ever growing larger scale. Machine
                  Learning is one the more important technologies for the future
                  that will improve our livelihood, or we make skynet and go
                  kaboom!
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img2} alt="blockchain" className={styles.img} />
                  <p className={styles.cardTitle}> Blockchain & Fintech</p>
                </CardTitle>
                <CardText>
                  <p className={styles.cardBody}>
                    Today's economical use cases for blockchain technology
                    extend far beyond that of payments and digital currency.
                    With the advent of "smart contracts" and turing-complete
                    frameworks, blockchain technology has evolved far beyond
                    just crypto-currency. This is not limited to blockchain
                    itself, any problem solution sans blockchain is welcome as
                    well! It's time to join the Web 3.0 revolution!
                  </p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto" }}>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img4} alt="iot" className={styles.img} />
                  <p className={styles.cardTitle}>IOT</p>
                </CardTitle>
                <CardText>
                  <p className={styles.cardBody}>
                    A world of devices connected by internet opens up
                    opportunities for us that were previously unthinkable.
                    Innovative apps can be built that can allow devices to share
                    data and make intelligent decisions on the fly. Every little
                    device can be connected to the internet one way or the
                    other, for better or for worse, this is a huge deal in many
                    sectors of society from healthcare to smart cities.
                  </p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img5} alt="future-mobility" className={styles.img} />
                  <p className={styles.cardTitle}>Future Mobility</p>
                </CardTitle>
                <CardText>
                  <p className={styles.cardBody}>
                    From self driving cars to smart cities software and sensor
                    technology is changing the way we move around. More research
                    is being done to improve the our transport and commute. Our
                    means of movement needs huge improvements, from optimizing
                    traffic, to reducing pollution. The Future Mobility track is
                    to attempt to solve these problems.
                  </p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto" }}>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img6} alt="ar-vr" className={styles.img} />
                  <p className={styles.cardTitle}>AR & VR</p>
                </CardTitle>
                <CardText>
                  <p className={styles.cardBody}>
                    VR and AR is the extension of our minds and bodies, and is
                    meant for those interested in building immersive, engaging
                    experiences for real industry applications. From fashion and
                    sports to data visualization and engineering to education
                    and healthcare and even gaming, every sector will be
                    impacted by the rise of VR & AR. AR.
                  </p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <CardImgOverlay>
                <CardTitle>
                  <img src={img3} alt="open-innovation" className={styles.img} />
                  <p className={styles.cardTitle}>Open Innovation</p>
                </CardTitle>
                <CardText>
                  <p className={styles.cardBody}>
                    "Innovation is taking two things that exist and putting them
                    together in a new way." - Tom Freston, Co-founder of MTV.
                    Have something new where few dare to venture, or do you have
                    something which is a hodge-podge of everything above? Well,
                    fortunately we have this for you to show your hand about
                    something never before seen!
                  </p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tracks;
