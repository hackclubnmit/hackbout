import React from "react";
import nmitLogo from "../../../assets/img/nitte_nmit_logo.png";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import styles from "./Contact.module.css";

const ContactUs = () => {
  return (
    <div
      className="section section-contactUs"
      data-background-color="black"
      id="contactUs-section"
    >
      <Container>
        <p className="section-contactUs-header h1 pt-4 mt-4">Contact Us</p>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <img
                className="img-fluid"
                src={nmitLogo}
                alt="nmit logo"
                // style={{ width: "479px", height: "76px" }}
              ></img>
              <br></br>
              <p className={["pt-4", styles.text].join(" ")}>
                Nitte Meenakshi Institute of Technology, P.B.No.6429, Yelahanka,
                Bangalore 560064.
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>
              <span className={styles.icon}>
                <i className="fas fa-phone img-fluid"></i>
              </span>
              <br></br>
              <div className="pt-4">
                <p>
                  <strong>Anurag Singh :</strong> &nbsp;
                  <a href="tel:9992288116">+91 9992288116</a>
                </p>
                <p>
                  {" "}
                  <strong>Rachet Mudnur : </strong> &nbsp;
                  <a href="tel:9964217178">+91 9964217178</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <span className={styles.icon}>
                <i className="fas fa-envelope img-fluid"></i>
              </span>
              <br></br>
              <div>
                <p className="text-center">
                  <a href="mailto:support@hackbout.tech">
                    support@hackbout.tech
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className=" h4 text-center">Follow Us</p>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <Button
              style={{ float: "right" }}
              className="btn-neutral btn-icon btn-round text-center"
              color="twitter"
              href="https://twitter.com/HackClubNmit?s=09"
              id="tooltip86114138"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip86114138">
              Follow us
            </UncontrolledTooltip>
          </Col>
          <Col className="">
            <Button
              style={{ float: "left" }}
              className="btn-neutral btn-icon btn-round text-center"
              color="pink"
              href="https://www.instagram.com/hackclubnmit/?hl=en"
              id="tooltip735272548"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip735272548">
              Like us
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

// CONTACT US
// Nitte Meenakshi Institute of Technology, P.B.No.6429, Yelahanka, Bangalore 560064.
// Ph : +91 80 22167800

// E-mail: admissions@nmit.ac.in, principal@nmit.ac.in
