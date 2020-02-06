import React from "react";

import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

const Schedule = () => {
  const [pills, setPills] = React.useState("1");
  return (
    <div
      className="section section-schedule"
      style={{ background: "#ffffff" }}
      id="schedule-section"
    >
      <Container className=" mt-5">
        <p className="section-about-header h1 pt-2">Schedule</p>
        <Row className="">
          <Col className="">
            <Nav
              className="nav-pills-success nav-pills-just-icons float-right"
              pills
              role="tablist"
              tabs
            >
              <NavItem>
                <NavLink
                  className={pills === "1" ? "active" : ""}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills("1");
                  }}
                >
                  <div>Day</div>
                  <div className="h1">1</div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col className="">
            <Nav
              className="nav-pills-success nav-pills-just-icons float-left"
              pills
              role="tablist"
              tabs
            >
              <NavItem>
                <NavLink
                  className={pills === "2" ? "active" : ""}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills("2");
                  }}
                >
                  <div>Day</div>
                  <div className="h1">2</div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <TabContent className="text-center mt-3" activeTab={"pills" + pills}>
          <TabPane tabId="pills1">
            <h3>4th Mar </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div style={{ float: "left" }}>
                  <b>9:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>On Site Registration</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>10:00 AM - 11:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Opening ceremony</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11 AM - 12:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Keynote Sessions</b>
                </div>
              </li>

              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>12:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>The Hack Starts!</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>1:30 PM - 2:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Lunch</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>2:30 PM - 5:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hacking Continues</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>5:30 PM - 6:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Snacks</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>6:30 PM - 8:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>First Round of Mentorship !</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>8:30 PM - 9:30 PM </b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Dinner!</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>9:30 PM - 12:00 AM </b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hacking Continues</b>
                </div>
              </li>
              
            </ul>
          </TabPane>
          <TabPane tabId="pills2">
            <h3>5th Mar </h3>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>12:00 AM - 1:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Midnight Snacks & Games</b>
                </div>
              </li>
              <li className="list-group-item">
                
                <div style={{ float: "left" }}>
                  <b>1:00 AM - 8:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hacking Continues</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>8:00 AM - 9:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Breakfast</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>9:00 AM - 11:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hacking Continues</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11:00 AM - 1:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Judging Round</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>1:30 PM - 2:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Lunch </b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>2:30 PM - 3:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Top 10 Announcements</b>
                </div>
              </li>

              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>3:00 PM - 5:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Top 10 Demo</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>5:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Winner's Announcement</b>
                  <br></br>
                  <b>+</b>
                  <br></br>
                  <b>Prize Distribution </b>
                </div>
              </li>
            </ul>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default Schedule;
