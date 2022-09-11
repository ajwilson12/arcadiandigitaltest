// library
import React from "react";

// styles
import styles from "./HeroPhones.module.scss";

// images
import { ReactComponent as HeroPhoneLeft } from "../../assets/img/heroPhoneLeft.svg";
import { ReactComponent as HeroPhoneRight } from "../../assets/img/heroPhoneRight.svg";

const HeroPhones = () => {
  return (
    <section className={styles.showcaseImg}>
      <div className={styles.heroPhoneLeftWrapper}>
        <div className={styles.heroPhoneLeftShadow} />
        <div className={styles.leftPhone}>
          <HeroPhoneLeft />
        </div>
      </div>
      <div className={styles.heroPhoneRightWrapper}>
        <div className={styles.rightPhone}>
          <HeroPhoneRight />
        </div>
      </div>
    </section>
  );
};

export default HeroPhones;
