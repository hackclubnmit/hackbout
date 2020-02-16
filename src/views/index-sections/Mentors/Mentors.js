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
                    <b>CEO @ Fame Technologies</b>
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
