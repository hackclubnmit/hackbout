import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";
import stickerMule from "../../../assets/img/sticker-mule-logo.png";
import jetBrains from "../../../assets/img/jetbrains_logo.png";

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
            <h3 style={{ borderBottom: "1px solid black", display: "inline" }}>
              Event Partners!
            </h3>
          </div>
          <Row>
            <Col className="p-3 mb-5 text-center">
              <a
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github-logo"
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                />
              </a>
            </Col>
            <Col className="mt-4 text-center">
              <a
                href="https://www.hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hackClub}
                  alt="hackclub-logo"
                  style={{ maxWidth: "65%", maxHeight: "65%" }}
                />
              </a>
            </Col>
          </Row>
          <div style={{ textAlign: "center", marginBottom: "5px" }}>
            <h3 style={{ borderBottom: "1px solid black", display: "inline" }}>
              Assosiate Sponsors!
            </h3>
          </div>
          <Row>
            <Col className="mt-5 text-center">
              <a
                href="https://www.stickermule.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={stickerMule}
                  alt="stickerMule-logo"
                  style={{ maxWidth: "65%", maxHeight: "65%" }}
                />
              </a>
            </Col>
            <Col className="mt-5 text-center">
              <a
                href="https://www.jetbrains.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={jetBrains}
                  alt="JetBrains-logo"
                  style={{ maxWidth: "55%", maxHeight: "55%" }}
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
