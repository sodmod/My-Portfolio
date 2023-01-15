import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { Name as oa } from "../Constants/constants";
import { AOS } from "../../contexts/constants";
import Aos from "aos";
import "aos/dist/aos.css";

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
    link: "https://instagram.com/olusola_badmus?igshid=ZmZhODViOGI=",
    icon: "fa-brands fa-instagram",
  },
  {
    id: "2",
    link: "https://github.com/sodmod",
    icon: "fa-brands fa-github",
  },
  {
    id: "3",
    link: "https://wa.me/message/ZHKACXOXT2U5E1",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: "4",
    link: "https://linkedin.com/in/badmus-sodiq-b75441185/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    id: "5",
    link: "tel:+2348183337363",
    icon: "fa-solid fa-phone",
  },
  {
    id: "6",
    link: "mailto:horluwatosin1999@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 10 });
  }, []);
  return (
    <AOS.Consumer>
      {(aos) => {
        return (
          <section data-aos={aos.flip_up} className={styles.footer}>
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
            <div className={styles.socials} id="contacts">
              {icons.map((icon) => (
                <div key={icon.id} className={styles.social}>
                  <a href={icon.link}>
                    <i className={icon.icon} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      }}
    </AOS.Consumer>
  );
};

export default Footer;
