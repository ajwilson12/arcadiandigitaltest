// library
import React from "react";

// styles
import styles from "./SocialIcons.module.scss";

// images
import { ReactComponent as Facebook } from "../../assets/icons/facebookIcon.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitterIcon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagramIcon.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedInIcon.svg";

// functions
import getWindowDimensions from "../../functions/getWindowDimensions";

const SocialIcons = () => {
  const { width } = getWindowDimensions();
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.icon}>
        <Twitter />
      </div>
      <div className={styles.icon}>
        <Facebook />
      </div>
      <div
        className={styles.icon}
        style={width <= 480 ? { display: "none" } : { display: "block" }}
      >
        <Instagram />
      </div>
      <div
        className={styles.icon}
        style={width >= 480 ? { display: "none" } : { display: "block" }}
      >
        <LinkedIn />
      </div>
    </div>
  );
};

export default SocialIcons;
