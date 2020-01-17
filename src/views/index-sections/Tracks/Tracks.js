import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Card } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Tracks = () => {
  return (
    <div
      className=" section-tracks"
      // data-background-color=""
      id="tracks-section"
    >
      <Container className="">
        <p className="section-about-header h1 pt-2">Tracks</p>
        <Row style={{ marginLeft: "20px " }}>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                ML & Data Science
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                In recent times, data is growing exponentially like never
                before. We need more effecient algorithms and models to analyse
                this data to make more efficient decisions and get accurate
                results on a ever growing larger scale. Machine Learning is one
                the more important technologies for the future that will improve
                our livelihood, or we make skynet and go kaboom!
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                Blockchain & Fintech
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                Today's economical use cases for blockchain technology extend
                far beyond that of payments and digital currency. With the
                advent of "smart contracts" and turing-complete frameworks,
                blockchain technology has evolved far beyond just
                cryptocurrency. This is not limited to blockchain itself, any
                problem solution sans blockchain is welcome as well! It's time
                to join the Web 3.0 revolution!
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                IOT
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                A world of devices connected by internet opens up opportunities
                for us that were previously unthinkable. Innovative apps can be
                built that can allow devices to share data and make intelligent
                decisions on the fly. Every little device can be connected to
                the internet one way or the other, for better or for worse, this
                is a huge deal in many sectors of soceity from healthcare to
                smart cities.
              </BackSide>
            </Flippy>
          </Col>
        </Row>
        <Row style={{ marginLeft: "30px" }}>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                Future Mobility
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                From self driving cars to smart cities software and sensor
                technology is changing the way we move around. More research is
                being done to improve the our transport and commute. Our means
                of movement needs huge improvements, from optimizing traffic, to
                reducing pollution. The Future Mobility track is to attempt to
                solve these problems.
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                AR & VR
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                VR and AR is the extension of our minds and bodies, and is meant
                for those interested in building immersive, engaging experiences
                for real industry applications. From fashion and sports to data
                visualisation and engineering to education and healthcare and
                even gaming, every sector will be impacted by the rise of VR &
                AR.
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{ width: "300px", height: "400px", marginBottom: "25px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "10px",
                  fontWeight: "100",
                  fontSize: "40px"
                }}
              >
                Open Innovation
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "16px"
                }}
              >
                {" "}
                "Innovation is taking two things that exist and putting them
                together in a new way." - Tom Freston (born 1945), Co-founder of
                MTV Have soemthing new where few dare to venture, or do you have
                something which is a hodge-podge of everything above? Well, gosh
                darnit, fortunately we have this for you to show your hand about
                something never before seen!
              </BackSide>
            </Flippy>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tracks;
