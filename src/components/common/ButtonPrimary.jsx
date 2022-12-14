// library
import React from "react";

// styles
import styles from "./ButtonPrimary.module.scss";

const ButtonPrimary = (props) => {
  return (
    <div className={styles.buttonPrimary}>
      <p>{props.text}</p>
    </div>
  );
};

export default ButtonPrimary;
