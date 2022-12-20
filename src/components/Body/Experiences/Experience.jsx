import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <section className={styles.experience} id="experience">
        <div className={styles.exp}>
          <div className={styles.round} id={styles.round1}>
            How
          </div>
          <div className={styles.round} id={styles.round2}>
            are
          </div>
          <div className={styles.round} id={styles.round3}>
            you
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
