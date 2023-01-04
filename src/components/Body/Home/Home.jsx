import React from "react";
import styles from "./Home.module.css";
import Image from "../../Images/my image.jpeg";

const Home = (props) => {
  return (
    <>
      <section className={styles.home} id="home">
        <div className={styles.home_left}>
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
        <div className={styles.home_right}>
          <img src={Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
