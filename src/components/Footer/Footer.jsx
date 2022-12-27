import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footer__}>
          <div className={styles.flex}>
            <div className={styles.foot}>
              <h1>My Porfolio</h1>
            </div>
            <div className={styles.footer_icons}>
              <div className={styles.icons}>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
          <div className={styles.personal_info}>
            <div className={styles.contacts}>
              <h2>Contacts</h2>
            </div>
            <div className={styles.contacts_info}>
              <div className={styles.contacts_info__}>
                <p>how are you too</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
