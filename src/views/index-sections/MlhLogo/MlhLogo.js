import React from "react";
import styles from "./MlhLogo.module.css";

const MlhLogo = () => {
  return (
    <div className={styles.Logo}>
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-apac-white.svg"
        alt="Mlh Logo"
      ></img>
    </div>
  );
};

export default MlhLogo;
