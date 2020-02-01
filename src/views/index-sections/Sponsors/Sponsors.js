import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";
import stickerMule from "../../../assets/img/sticker-mule-logo.png";
import jetBrains from "../../../assets/img/jetbrains_logo.png";
import wolfram from "../../../assets/img/Wolfram.png";
import gatsby from "../../../assets/img/gatsby.png";
import Styles from "./Sponsors.module.css";

const Sponsors = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="sponsors-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className="section-about-header h1 pb-3">Sponsors</p>
        <div className="text-center">
          <div style={{ textAlign: "center", marginBottom: "5px" }}>
            <h2 style={{ borderBottom: "1px solid black", display: "inline" }}>
              Event Partners!
            </h2>
          </div>
          <Row>
            <Col
              lg={true}
              className={["p-3 mb-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github-logo"
                  className={[Styles.mainSponsors, Styles.github].join(" ")}
                />
              </a>
            </Col>
            <Col
              lg={true}
              className={["mt-4 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hackClub}
                  alt="hackclub-logo"
                  className={[Styles.mainSponsors, Styles.hackClub].join(" ")}
                />
              </a>
            </Col>
          </Row>
          <div
            style={{
              textAlign: "center",
              marginTop: "45px",
              marginBottom: "5px"
            }}
          >
            <h3 style={{ borderBottom: "1px solid black", display: "inline" }}>
              Assosiate Sponsors!
            </h3>
          </div>
          <Row>
            <Col className={["mt-5 text-center", Styles.sponsors].join(" ")}>
              <a
                href="https://www.stickermule.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={stickerMule}
                  alt="stickerMule-logo"
                  className={Styles.stickermule}
                />
              </a>
            </Col>
            <Col className={["mt-5 text-center", Styles.sponsors].join(" ")}>
              <a
                href="https://www.jetbrains.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={jetBrains}
                  alt="JetBrains-logo"
                  className={Styles.jetbrains}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col className={["mt-5 text-center", Styles.sponsors].join(" ")}>
              <a
                href="https://www.wolfram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={wolfram}
                  alt="stickerMule-logo"
                  className={Styles.wolfram}
                />
              </a>
            </Col>
            <Col className={["mt-5 text-center", Styles.sponsors].join(" ")}>
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={gatsby}
                  alt="gatsbyjs-logo"
                  className={Styles.gatsby}
                />
              </a>
            </Col>
          </Row>
          <Button color="success" size="lg" style={{ marginTop: "-25px" }}>
            Become a Sponsor!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
