import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";
import stickerMule from "../../../assets/img/sticker-mule-logo.png";
import jetBrains from "../../../assets/img/jetbrains_logo.png";
import wolfram from "../../../assets/img/Wolfram.png";
import gatsby from "../../../assets/img/gatsby.png";
import inVision from "../../../assets/img/invision.png";
import ieee from "../../../assets/img/ieee-cs-logo.png";
import bugsee from "../../../assets/img/bugsee.png";
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
              Event Partners
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
              Assosiate Sponsors
            </h3>
          </div>
          <Row>
            <Col
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
              sm={true}
            >
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
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
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
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.wolfram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={wolfram}
                  alt="wolfram-logo"
                  className={Styles.wolfram}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
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
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.invisionapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={inVision}
                  alt="inVision-logo"
                  className={Styles.inVision}
                />
              </a>
            </Col>
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.computer.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ieee} alt="ieee-logo" className={Styles.ieee} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.bugsee.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bugsee} alt="bugsee-logo" className={Styles.bugsee} />
              </a>
            </Col>
            <Col></Col>
          </Row>
          <Button color="success" size="lg" style={{ marginTop: "-15px" }}>
            Become a Sponsor!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
