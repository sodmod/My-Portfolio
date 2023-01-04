import React from "react";
import styles from "./Footer.module.css";
import { Name as oa } from "../Constants/constants";

// const strig = "fa-brands fa-facebook";

const footer = [
  {
    id: "1",
    head: "About us",
    list: {
      list: "what is your name",
    },
  },
];

const icons = [
  {
    id: "1",
    icon: "fa-brands fa-facebook",
  },
  {
    id: "2",
    icon: "fa-brands fa-github",
  },
  {
    id: "3",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: "4",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    id: "5",
    icon: "fa-solid fa-user",
  },
];

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerflex}>
          <div className={styles.footer_flex1}>
            <div>{oa}</div>
          </div>
          <div className={styles.footer_flex2}>
            <div className={styles.abouts}>
              {footer.map((footer) => (
                <div key={footer.id} className={styles.contents}>
                  <div className={styles.ab}>
                    <h2>{footer.head}</h2>
                    <li key={footer.list.id}>{footer.list.list}</li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          {icons.map((icon) => (
            <div key={icon.id} className={styles.social}>
              <i className={icon.icon} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Footer;
