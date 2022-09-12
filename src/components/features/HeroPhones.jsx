// library
import React, { useRef } from "react";

// styles
import styles from "./HeroPhones.module.scss";

// images
import { ReactComponent as HeroPhoneLeft } from "../../assets/img/heroPhoneLeft.svg";
import { ReactComponent as HeroPhoneRight } from "../../assets/img/heroPhoneRight.svg";

// functions
import useIntersectionObserver from "../../functions/intersectionObserver";

const HeroPhones = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  return (
    <section className={styles.showcaseImg}>
      <div
        className={styles.heroPhoneLeftWrapper}
        style={
          dataRef?.isIntersecting
            ? { transform: "scale(1.1)" }
            : { transform: "scale(1)" }
        }
      >
        <div className={styles.heroPhoneLeftShadow} />
        <div className={styles.leftPhone}>
          <HeroPhoneLeft />
        </div>
      </div>
      <div className={styles.heroPhoneRightWrapper}>
        <div
          className={styles.rightPhone}
          style={
            dataRef?.isIntersecting
              ? { transform: "rotate(5deg)" }
              : { transform: "rotate(0deg)" }
          }
        >
          <HeroPhoneRight />
        </div>
      </div>
      <div ref={triggerRef}></div>
    </section>
  );
};

export default HeroPhones;
