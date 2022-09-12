//  library
import React, { useRef } from "react";

// styles
import styles from "./SubHeading.module.scss";

// functions
import useIntersectionObserver from "../../functions/intersectionObserver";

const SubHeading = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });

  return (
    <div className={styles.subHeadingWrapper}>
      <div
        className={styles.spacer}
        style={
          dataRef?.isIntersecting
            ? { opacity: "1", width: "100%" }
            : { opacity: "0", width: "0%" }
        }
      ></div>
      <h2
        ref={triggerRef}
        className={styles.subHeadingText}
        style={dataRef?.isIntersecting ? { opacity: "1" } : { opacity: "0" }}
      >
        How the app works
      </h2>
    </div>
  );
};

export default SubHeading;
