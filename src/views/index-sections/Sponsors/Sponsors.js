import React from "react";
import { Container, Row, Col } from "reactstrap";

import github from "../../../assets/img/github-logo.png";
import hackClub from "../../../assets/img/hack-club.svg";
import devfolio from "../../../assets/img/Devfolio.png";
import matic from "../../../assets/img/Matic.png";
import fold from "../../../assets/img/fold.png";
import stickerMule from "../../../assets/img/sticker-mule-logo.png";
import digitalOcean from "../../../assets/img/digitalOcean-logo.png";
import girlGeeks from "../../../assets/img/girlGeeks.png";
import jetBrains from "../../../assets/img/jetbrains_logo.png";
import wolfram from "../../../assets/img/Wolfram.png";
import gatsby from "../../../assets/img/gatsby.png";
import inVision from "../../../assets/img/invision.png";
import ieee from "../../../assets/img/ieee-cs-logo.png";
import bugsee from "../../../assets/img/bugsee.png";
import blkIndia from "../../../assets/img/blockchained-india.png";
import tim from "../../../assets/img/creativetim.png";
import snap from "../../../assets/img/snap.jpg";
import rocket from "../../../assets/img/rocket.svg";
import voiceflow from "../../../assets/img/voiceFlow.png";
import codingBlocks from "../../../assets/img/codingBlocks.png";
import map from "../../../assets/img/map.png";
import cloudsploit from "../../../assets/img/cloudsploit.png";
import ninja from "../../../assets/img/ninja.svg";
import sketch from "../../../assets/img/sketch.png";
import mozilla from "../../../assets/img/moz.jpg";
import fbDev from "../../../assets/img/fbdev.png";
import ibm from "../../../assets/img/ibm.jpg";
import balsamiq from "../../../assets/img/balsamiq.svg";
import restdb from "../../../assets/img/restdb.webp";

import Styles from "./Sponsors.module.css";

const Sponsors = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="sponsors-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className={["section-bounties-header h1 ", Styles.title].join(" ")}>
          Sponsors
        </p>
        <div className={Styles.under}></div>

        <div className="text-center">
          <div style={{ textAlign: "center", marginBottom: "5px" }}>
            <h2 style={{ borderBottom: "1px solid black", display: "inline" }}>
              Title Partners
            </h2>
            <br></br>
            <br></br>
          </div>
          <Row>
            <Col
              data-aos="fade-up"
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
              data-aos="fade-up"
              lg={true}
              className={["p-3 mb-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={devfolio}
                  alt="devfolio-logo"
                  className={[Styles.mainSponsors, Styles.devfolio].join(" ")}
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
              Associate Partners
            </h3>
          </div>
          <Row>
            <Col
              md={true}
              className={["mt-4 text-center", Styles.sponsors].join(" ")}
              data-aos="fade-up"
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
            <Col
              data-aos="fade-up"
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
              md={true}
            >
              <a
                href="https://matic.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={matic} alt="matic-logo" className={Styles.matic} />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://fold.money/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fold} alt="fold-logo" className={Styles.fold} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://codingblocks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={codingBlocks}
                  alt="codingblocks-logo"
                  className={Styles.codingBlocks}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
              md={true}
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
              data-aos="fade-up"
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
              md={true}
            >
              <a
                href="https://www.voiceflow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={voiceflow}
                  alt="voiceflow-logo"
                  className={Styles.voiceflow}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
              sm={true}
            >
              <a
                href="https://www.digitalocean.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={digitalOcean}
                  alt="digitalocean-logo"
                  className={Styles.digiOcean}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
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

            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a href="#pablo" target="_blank" rel="noopener noreferrer">
                <img
                  src={girlGeeks}
                  alt="girlGeeks-logo"
                  className={Styles.girlGeeks}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
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
              data-aos="fade-up"
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
              data-aos="fade-up"
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
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
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
            <Col
              data-aos="fade-up"
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
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://blockchainedindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={blkIndia}
                  alt="blockchained-india-logo"
                  className={Styles.blkIndia}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.challengerocket.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={rocket} alt="rocket-logo" className={Styles.rocket} />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={snap} alt="snap-logo" className={Styles.snap} />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.creative-tim.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tim} alt="creative-tim-logo" className={Styles.tim} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.mapmyindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={map} alt="map-my-india-logo" className={Styles.map} />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://cloudsploit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cloudsploit}
                  alt="cloudsploit-logo"
                  className={Styles.cloudsploit}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.sketch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sketch} alt="sketch-logo" className={Styles.sketch} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.codingninjas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ninja}
                  alt="coding-ninja-logo"
                  className={Styles.ninja}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://restdb.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={restdb}
                  alt="coding-ninja-logo"
                  className={Styles.restdb}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://balsamiq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={balsamiq}
                  alt="balsamiq-logo"
                  className={Styles.balsamiq}
                />
              </a>
            </Col>
          </Row>
          <div
            style={{
              textAlign: "center",
              marginTop: "-95px",
              marginBottom: "5px"
            }}
          >
            <h3
              style={{
                borderBottom: "1px solid black",
                position: "relative",
                display: "inline",
                marginTop: "-100px",
                marginBottom: "20px"
              }}
            >
              Community Partners
            </h3>
          </div>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://mozillaindia.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={mozilla}
                  alt="mozilla-india-logo"
                  className={Styles.moz}
                />
              </a>
            </Col>
            <Col
              md={true}
              className={["mt-4 text-center", Styles.sponsors].join(" ")}
              data-aos="fade-up"
            >
              <a
                href="https://developers.facebook.com/developercircles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fbDev}
                  alt="facebook-developer-circle-logo"
                  className={[Styles.mainSponsors, Styles.fbdev].join(" ")}
                />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
