import React from "react";
import styles from "../Buttons/Button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.button} type={props.type || "button"}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
