/*eslint-disable*/
import React from "react";

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
            backgroundImage:
              "url(" + require("assets/img/bg-header-1.jpg") + ")" //url(" + require("assets/img/header.jpg") + ")
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="Logo Here"   
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}
            <h1 className="display-3" style={{ color: "black" }}>
              Hack Bout
            </h1>
            <h3 className="h2-seo" style={{ color: "black" }}>
              A Catchy Description Here!
            </h3>
          </div>
          <a href="/">
            <h2 className="category category-absolute">Register Now!</h2>
          </a>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
