import React from "react";
import styles from "./Experience.module.css";

const Experience = (props) => {
  return (
    <>
      <section className={styles.experience} id="experience">
        <div className={styles.exp}>
          <div className={styles.circle}>
            <div className={styles.circle_text}>
              <div>
                <span>{props.years} 8</span>
                <div>shoe</div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Experience;
