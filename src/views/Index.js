import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import MlhLogo from "./index-sections/MlhLogo/MlhLogo";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import About from "./index-sections/About/About";
import Tracks from "./index-sections/Tracks/Tracks";
import Schedule from "./index-sections/Schedule/Schedule";
import Mentors from "./index-sections/Mentors/Mentors";
import Sponsors from "./index-sections/Sponsors/Sponsors";
import Faq from "./index-sections/Faq/Faq";
import ContactUs from "./index-sections/ContactUs/ContactUs";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <MlhLogo />
        <div className="main">
          <About />
          <Tracks />
          <Schedule />
          <Mentors />
          <Sponsors />
          <Faq />
          <ContactUs />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
