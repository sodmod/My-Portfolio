import React from "react";
import styles from "./Footer.module.css";

// const strig = "fa-brands fa-facebook";

const Footer = (props) => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerflex}>
          <div className={styles.footer_flex1}>
            <div>howe ae</div>
          </div>
          <div className={styles.footer_flex2}>
            <div className={styles.abouts}>
              <div className={styles.contents}>
                <div className={styles.ab}>
                  <h2>how is you</h2>
                  <li>how</li>
                  <li>how</li>
                  <li>how</li>
                  <li>how</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
