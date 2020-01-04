import React from "react";
import { Container, Row, Col } from "reactstrap";
import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";
import stickerMule from "../../../assets/img/sticker-mule-logo.png";

const Sponsors = () => {
  return (
    <div
      className=" section-sponsors"
      id="sponsors-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pb-3">Sponsors</p>

        <Row>
          <Col className="p-3 mb-5 text-center">
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="github-logo"
                style={{ maxWidth: "70%", maxHeight: "70%" }}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className=" mb-5  p-3 text-center">
            <a href="https://www.hackclub.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={hackClub}
                alt="hackclub-logo"
                style={{ maxWidth: "65%", maxHeight: "65%" }}
              />
            </a>
          </Col>
          <Col className=" mb-5  p-3 text-center">
            <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
              <img
              src={stickerMule}
              alt="stickerMule-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sponsors;
