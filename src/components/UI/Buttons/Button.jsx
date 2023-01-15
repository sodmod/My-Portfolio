import React from "react";
import styles from "../Buttons/Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={`${props.className} ${styles.button}`}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
