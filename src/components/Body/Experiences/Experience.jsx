import React from "react";
import styles from "./Experience.module.css";

const Experience = (props) => {
  return (
    <>
      <section className={styles.experience} id="experience">
        <div>
          <div className={styles.exp}>
            <div className={styles.circle}>
              <div className={styles.circle_text}>
                <div>
                  <span>8+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
