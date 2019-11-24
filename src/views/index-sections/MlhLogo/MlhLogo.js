import React from "react";
import styles from "./MlhLogo.module.css";

const MlhLogo = () => {
  return (
    <div className={styles.Logo}>
      <a href="https://mlh.io/seasons/apac-2020/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season">
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-apac-white.svg"
          alt="Mlh Trust Badge"
        ></img>
      </a>
    </div>
  );
};

export default MlhLogo;
