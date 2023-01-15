import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Card.module.css";

const Card = (props) => {
  React.useEffect(() => {
    Aos.init({ duration: 3000, delay: 1000 });
  });
  return (
    <>
      <section
        data-aos={props.aos}
        className={`${styles.card} ${props.className}`}
      >
        {props.children}
      </section>
    </>
  );
};

export default Card;
