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
        <p className="section-about-header h1 pb-5" style={{color: "white"}}>Mentors</p>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Card className={styles.card1} data-aos="fade-up">
              <CardImg
                top
                width="100%"
                src={mOne}
                alt="Card image cap"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Kumar Anirudha</h3>
                </CardTitle>
                <CardText>
                  <div style={{}}>
                    <b>CEO at Acyclic Labs</b>
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
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <CardBody className={styles.cbdy}>
                <CardTitle>
                  <h3>Manav Ailawadi</h3>
                </CardTitle>
                <CardText>
                  {" "}
                  <div style={{}}>
                    <b>CMO at Blocumen Studios</b>
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
