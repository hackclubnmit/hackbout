import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText
} from "reactstrap";
import mOne from "../../../assets/img/kanirudh.jpg";
import mTwo from "../../../assets/img/Manav.jpg";
import mThree from "../../../assets/img/mThree.jpeg";
import mFour from "../../../assets/img/vasanth.jpg";
import mFive from "../../../assets/img/karthikeyan.jpg";
import mSix from "../../../assets/img/himanshu.jpg";
import mSeven from "../../../assets/img/kalai.PNG";
import mEight from "../../../assets/img/sneha.jpg";
import mNine from "../../../assets/img/Swathi.jpg";
import mTen from "../../../assets/img/chandra.jpg";
import meleven from "../../../assets/img/rachana.jpg";
import mTwelve from "../../../assets/img/swayam.jpg";
import mThiretten from "../../../assets/img/abhitej.jpg";
import mFourteen from "../../../assets/img/Nagaraja.jpg";
import mFifteen from "../../../assets/img/Vishwas.jpg";
import mSixteen from "../../../assets/img/Anand.jpeg";
import mSeventeen from "../../../assets/img/Kartik.jpg";

import styles from "./Mentor.module.css";

const Mentors = () => {
  return (
    <div
      className={styles.sectionMentors}
      style={{
        background: "#22B573"
      }}
      id="Mentors-section"
    >
      <Container className=" pt-5">
        <p
          className={["section-bounties-header h1 ", styles.title].join(" ")}
          style={{ color: "white" }}
        >
          Mentors
        </p>
        <div className={styles.under}></div>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mOne}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Kumar Anirudha</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>CEO @ Acyclic Labs</b>
                  </div>
                  <a
                    href="https://in.linkedin.com/in/kranirudha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card2} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mTwo}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Manav Ailawadi</h3>
                </CardTitle>
                <CardText>
                  {" "}
                  <div style={{}}>
                    <b>CMO @ Blocumen Studios</b>
                  </div>
                  <a
                    href="https://in.linkedin.com/in/manav-ailawadi-55138854"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card3} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mThree}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Pranjal Paliwal</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Dev @ Headout</b>
                  </div>
                  <a
                    href="https://in.linkedin.com/in/betterclever"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mFour}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Nelson Vasanth J</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Head @ Facebook Developer Circle - Bengaluru</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/nelson-vasanth-j-769827105/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mFive}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Karthikeyan NG</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Director of Engineering @ Sequoia</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/intrepidkarthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mSix}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Himanshu Gupta</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Founder @ Cosmoreal | Mobile AR Specialist</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/creativehims/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mTwelve}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Swayam Mittal</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>NLP | Speech synthesis</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/swayam-mittal-5b571768/n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mTen}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Chandra Sekhar Nayak</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Dev @ Lowe's India</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/chandra-sekhar-nayak-1aba6538/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mEight}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Sneha Sulegay</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>API Support Head @ MapmyIndia</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sneha-sulegay-99bb49122/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mSeven}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Kalaivanan S</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Associate Product Manager @ MapmyIndia</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kalaivanan-sundaram-9253936a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={meleven}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Rachana V</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Developer Advocate at IBM India</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rachanavishwanathula/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mThiretten}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Abhitej Singh </h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b> Co-founder, Cosmos India</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/abhitejsingh23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mNine}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Swathi P</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b> Product Owner @ Boeing India Pvt. Ltd.</b>
                  </div>
                  <a
                    href="www.linkedin.com/in/swathi-pennapareddy-527346b0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mFourteen}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Dr. Nagaraja</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>
                      {" "}
                      Professor and Associate Dean @ R.V. College of Engineering
                    </b>
                  </div>
                  <a href="#pablo" target="_blank" rel="noopener noreferrer">
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mFifteen}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Dr. Vishwas L</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b> Principal Architect @ Smarten Spaces </b>
                  </div>
                  <a
                    href="https://in.linkedin.com/in/vishwaslakkundi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mSixteen}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Anand Jagadeesh</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b> Programmer. Software Engineer at Dell EMC</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/anandjagadeesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card4} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mSeventeen}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Kartik Muralidharan</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b> Scientist @ Innovation Labs, TCS</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kartikmuralidharan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-linkedin "
                      style={{ color: "black", fontSize: "30px" }}
                    ></i>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Button
          color=""
          size="lg"
          style={{
            borderRadius: "20px",
            backgroundImage: "linear-gradient(45deg, #27b574 0%, #24fe41 100%)"
          }}
        >
          Become a Mentor!
        </Button> */}
      </Container>
    </div>
  );
};

export default Mentors;
