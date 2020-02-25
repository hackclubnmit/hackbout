import React from "react";
import AOS from "aos";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// import Banner from "components/banner/banner";

// sections for this page
import About from "./index-sections/About/About";
import Tracks from "./index-sections/Tracks/Tracks";
import Schedule from "./index-sections/Schedule/Schedule";
import Mentors from "./index-sections/Mentors/Mentors";
import Sponsors from "./index-sections/Sponsors/Sponsors";
import Faq from "./index-sections/Faq/Faq";
import ContactUs from "./index-sections/ContactUs/ContactUs";
import Bounties from "./index-sections/Bounties/Bounties";
import Workshop from "./index-sections/Workshop/Workshop";
import Prizes from "./index-sections/Prizes/Prizes";
import HackClub from "./index-sections/HackClub/HackClub";
import Team from "./index-sections/Team/Team";

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

  AOS.init({
    duration: 1000
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <About />
          <Tracks />
          <Bounties />
          <Workshop />
          <Prizes />
          <Schedule />
          <Mentors />
          <Sponsors />
          <HackClub />
          <Team />
          <Faq />
          <ContactUs />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
