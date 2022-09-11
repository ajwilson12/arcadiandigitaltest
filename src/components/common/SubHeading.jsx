//  library
import React from "react";

// styles
import styles from "./SubHeading.module.scss";

const SubHeading = () => {
  return (
    <div className={styles.subHeadingWrapper}>
      <div className={styles.spacer}></div>
      <h2 className={styles.subHeadingText}>How the app works</h2>
    </div>
  );
};

export default SubHeading;
