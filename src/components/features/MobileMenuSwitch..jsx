import React from "react";

import styles from "./MobileMenuSwitch.module.scss";

const MobileMenuSwitch = (props) => {
  return (
    <div className={styles.sizer}>
      <div className={styles.menuSwitchWrapper}>
        <div
          className={
            props.close === "false"
              ? `${styles.line1}`
              : `${styles.line1} ${styles.line1active} `
          }
        ></div>
        <div
          className={
            props.close === "false"
              ? `${styles.line2}`
              : `${styles.line2} ${styles.line2active} `
          }
        ></div>
        <div
          className={
            props.close === "false"
              ? `${styles.line3}`
              : `${styles.line3} ${styles.line3active} `
          }
        ></div>
      </div>
    </div>
  );
};

export default MobileMenuSwitch;
