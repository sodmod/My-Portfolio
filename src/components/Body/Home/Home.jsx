import React from "react";
import styles from "./Home.module.css";
import Image from "../../Images/my image.jpeg";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.left}>
          <div className={styles.my_name}>
            <h1>Hi i am badmus</h1>
          </div>
          <div className={styles.dynamic_display}>
            <h1>
              I am a <span>fullstack Developer</span>
            </h1>
          </div>
          <div>
            <p>
              FullStack Developer with high level of experience in web and
              development, building backend logic and creating API.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <img src={Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
