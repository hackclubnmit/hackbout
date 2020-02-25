import React from "react";
import styles from "./banner.module.css";

const banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.line}>
          <span>Registrations</span>
        </div>
        <div className={styles.line}>
          <span>Extended Till</span>
        </div>
        <div className={styles.line}>
          <span>29th Feb</span>
        </div>
      </div>
    </div>
  );
};

export default banner;
