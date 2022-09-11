// library
import React from "react";

// styles
import styles from "./ButtonSecondary.module.scss";

const ButtonPrimary = (props) => {
  return (
    <div className={styles.buttonSecondary}>
      <p>{props.text}</p>
    </div>
  );
};

export default ButtonPrimary;
