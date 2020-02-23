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
import mNine from "../../../assets/img/sayak.jpg";

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
                src={mNine}
                alt="Card image cap"
                style={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Sayak Paul</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>Deep Learning Associate @ PyImageSearch</b>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sayak-paul/"
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
                    <b>
                      Brand Evangelist and API Support Head Bengaluru @
                      MapmyIndia
                    </b>
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
