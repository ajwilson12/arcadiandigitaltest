// library
import React, { useRef } from "react";

// styles
import styles from "./ContentBox.module.scss";

// functions
import useIntersectionObserver from "../../functions/intersectionObserver";

const ContentBox = (props) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });

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
      <div
        className={styles.contentContainer}
        style={dataRef?.isIntersecting ? { opacity: "1" } : { opacity: "0" }}
      >
        <div className={styles.contentTextWrapper}>
          <p className={styles.label}>{props.label}</p>
          <h2 className={styles.contentSubHeading}>{props.subHeading}</h2>
          <p ref={triggerRef} className={styles.contentText}>
            {props.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
