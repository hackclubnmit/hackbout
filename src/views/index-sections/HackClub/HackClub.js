import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import styles from "./HackClub.module.css";
import hackClub from "../../../assets/img/hack-club.svg";

const HackClub = () => {
  const items = [
    {
      src: require("assets/img/cp4.jpg")
    },
    {
      src: require("assets/img/cp2.jpg")
    },
    {
      src: require("assets/img/cp3.jpg")
    },
    {
      src: require("assets/img/cp1.jpg")
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div
      className=" section-hackclub pt-5"
      id="hackclub-section"
      style={{ background: "#ffffff" }}
    >
      <Container style={{ textAlign: "left" }}>
        <p className="section-about-header h1 pb-3">About Hack Club</p>
      </Container>

      <Container className=" pt-5">
        <img
          data-aos="slide-right"
          className={styles.hack}
          src="https://hackclub.com/banners/2019.svg"
          alt="Hack Club"
        />
        <div className="text-center">
          <Row style={{ textAlign: "center" }} data-aos="fade-up">
            <Col lg={6}>
              <Carousel
                data-aos="fade-up"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={styles.Carousel}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
            <Col lg={6}>
              <p style={{ color: "#000", fontSize: "20px" }}>
                <b>
                  We’re{"  "}
                  <span>
                    <img
                      src={hackClub}
                      alt="hackclub-logo"
                      className={styles.club}
                    />
                  </span>
                  , a global nonprofit network of student lead coding clubs.
                  Hack Camp has been a part of Hack Club since the beginning.
                  It’s a great way for us to try out the best ideas from our
                  community, develop curriculum, and stay sharp as teachers. We
                  also just love doing it! Hack Clubs meet weekly at their
                  schools, typically for 1.5hrs after school. There are no
                  teachers or lectures—members work at their own pace making
                  websites, apps, & games, and presenting them to the group.
                </b>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HackClub;
