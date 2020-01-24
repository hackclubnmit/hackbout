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
            background: "#ffffff"
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
          </div>
          <h2 className="category-absolute" style={{ color: "black", "margin-top": "-150px"}}>
            Registrations will open soon! Stay tuned!
          </h2>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
