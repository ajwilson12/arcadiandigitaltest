// library
import React from "react";

// styles
import styles from "./ContentBox.module.scss";

// image
import { ReactComponent as PhoneSection1 } from "../../assets/img/phoneSection1.svg";

const ContentBox = (props) => {
  return (
    <section
      className={styles.contentBoxWrapper}
      style={{ direction: `${props.direction}` }}
    >
      <div className={styles.contentImgWrapper}>
        <div className={styles.contentImgContainer}>
          <div className={styles.phoneShadow} />
          <div className={styles.phoneImg}>
            <PhoneSection1 title="app demo section 1" />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentTextWrapper}>
          <p className={styles.label}>Create an account</p>
          <h2 className={styles.contentSubHeading}>
            Create/login to an existing account to get started
          </h2>
          <p className={styles.contentText}>
            An account is created with your email and a desired password
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
