import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styles from "./Prizes.module.css";
import first from "../../../assets/img/first.png";
import second from "../../../assets/img/second.png";
import third from "../../../assets/img/third.png";

const Bounties = () => {
  return (
    <div className=" section-sponsors pt-5" id="prizes-section">
      <Container className=" pt-5">
        <p className="section-about-header h1 pb-3">Prizes</p>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <img src={first} alt="first" className={styles.img} />
              <h2>₹ 1,00,000 </h2>
            </Card>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <img src={second} alt="Second" className={styles.img} />
              <h2>₹ 50,000 </h2>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <img src={third} alt="Third" className={styles.img} />
              <h2>₹ 25,000 </h2>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bounties;
