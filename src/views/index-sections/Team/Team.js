import React from "react";
import { Container, Row, Col } from "reactstrap";

import Cards from "../../../components/Cards/Cards";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div
      className={styles.sectionTeam}
      style={{
        background: "#22B573"
      }}
      id="team-section"
    >
      <Container className="">
        <Cards></Cards>
      </Container>
    </div>
  );
};

export default Team;
