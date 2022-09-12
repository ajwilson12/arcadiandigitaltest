// library
import React from "react";

// styles
import styles from "./ButtonAlt.module.scss";

const ButtonAlt = (props) => {
  return (
    <div
      className={styles.buttonAlt}
      style={
        props.fill === "true"
          ? { border: "none", background: "#FA4A0C" }
          : { border: "white solid 1px", background: "transparent" }
      }
    >
      <p>{props.text}</p>
    </div>
  );
};

export default ButtonAlt;
