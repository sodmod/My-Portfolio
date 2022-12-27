import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  // const classes = styles + props.className;
  return (
    <>
      <section className={`${styles.card} ${props.className}`}>
        {props.children}
      </section>
    </>
  );
};

export default Card;
