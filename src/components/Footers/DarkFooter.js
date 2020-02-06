/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/White_Hackbout.png";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-center">
          <Col></Col>
          <Col className="text-center">
            <img
              src={require("assets/img/logos/hbLogo1.png")}
              alt="white_logo"
              style={{
                height: "40px",
                display: "block",
                marginLeft: "45%",
                marginBottom: "5px"
              }}
            ></img>
            <p>HackBout© {new Date().getFullYear()}</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
