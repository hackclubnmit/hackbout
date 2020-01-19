/*eslint-disable*/
import React from "react";
import styles from "./logo.module.css";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="red">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "linear-gradient(to bottom,#ffffff,#eaeaea)"
            // backgroundImage:
            //   "url(" + require("assets/img/bg-header-1.jpg") + ")" //url(" + require("assets/img/header.jpg") + ")
          }}
          ref={pageHeader}
        ></div>
        <Container className="header-main">
          <div className="content-center brand">
            <img
              className={styles.Logo}
              alt="Logo Here"
              src={require("assets/img/logos/hbLogo2.png")}
            ></img>
            {/* <h1 className="" style={{ color: "black", fontWeight: "200" }}>
              HACKBOUT 1.0
            </h1> */}
            {/* <h3 className="h2-seo" style={{ color: "black" }}>
              A Catchy Description Here!
            </h3> */}
          </div>
          <h2 className="category-absolute" style={{ color: "black" }}>
            Registrations will open soon! Stay tuned!
          </h2>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
