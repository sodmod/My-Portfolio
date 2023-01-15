import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Image from "../../../Files/Images/my image.jpeg";
import { AOS } from "../../../contexts/constants";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 500 });
  }, []);
  return (
    <AOS.Consumer>
      {(aos) => {
        return (
          <section className={styles.home} id="home">
            <div className={styles.home_left}>
              <div data-aos={aos.flip_left} className={styles.express}>
                <div className={styles.my_name}>
                  <h1>Hi, {props.my_name}</h1>
                </div>
                <div className={styles.dynamic_display}>
                  <h1>
                    I am a <span>{props.job_title}</span>
                  </h1>
                </div>
                <div>
                  <p>{props.job_entails}</p>
                </div>
              </div>
            </div>
            <div data-aos={aos.flip_right} className={styles.home_right}>
              <img src={Image} alt="" />
            </div>
          </section>
        );
      }}
    </AOS.Consumer>
  );
};

export default Home;
