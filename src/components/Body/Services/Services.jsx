import React, { useEffect } from "react";
import styles from "./Services.module.css";
import Card from "../../UI/Cards/Card";
import { AOS } from "../../../contexts/constants";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = (props) => {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 500 });
  }, []);

  return (
    <>
      <AOS.Consumer>
        {(aos) => {
          return (
            <section className={styles.services} id="services">
              <div className={styles.services_left}>
                <div data-aos={aos.flip_up} className={styles.services_left_}>
                  <h1>My Services</h1>
                  <h3>My services include:</h3>
                  <div className={styles.myservice}>
                    {props.myservice.map((service) => (
                      <p key={service.id}>{service.speech}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.services_right}>
                {props.services.map((service) => (
                  <Card
                    aos={aos.flip_down}
                    key={service.id}
                    className={styles.services_1}
                  >
                    <div className={styles.card}>
                      <i className={service.logo} />
                    </div>
                    <div>
                      <p>{service.service}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        }}
      </AOS.Consumer>
    </>
  );
};

export default Services;
