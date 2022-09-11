// library
import React from "react";

// styles
import styles from "./ContentBox.module.scss";

const ContentBox = (props) => {
  return (
    <section
      className={styles.contentBoxWrapper}
      style={{ direction: `${props.direction}` }}
    >
      <div className={styles.contentImgWrapper}>
        <div className={styles.contentImgContainer}>
          <div className={styles.phoneShadow} />
          <div className={styles.phoneImg}>{props.picture}</div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentTextWrapper}>
          <p className={styles.label}>{props.label}</p>
          <h2 className={styles.contentSubHeading}>{props.subHeading}</h2>
          <p className={styles.contentText}>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
