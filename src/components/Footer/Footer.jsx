import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { person, icons, footer } from "../../Constants/constants";
import { AOS } from "../../contexts/constants";
import Aos from "aos";
import "aos/dist/aos.css";

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
                <div>{person.info.Name}</div>
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
