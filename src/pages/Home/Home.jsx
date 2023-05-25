import React from "react";
import styles from "./Home.module.css";
import me from "../../Files/Images/photo.png";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.me}>
        <div className={styles.me__}>
          <div id={styles.hello}>
            Hello <span id={styles.emoji}>👋</span>, I am
          </div>
          <div id={styles.myName}>Badmus Sodiq Olusola</div>
          <div id={styles.specialize}>
            A Web Developer Specializing in
            <span id={styles.expert}> HTML 5</span>
          </div>
          <div id={styles.summary}>
            A web developer with 3 years of experience, adept at collaborating
            with dynamic teams to build high quality websites and identify
            opportunities to enhance the user experience.
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={me} alt="" />
      </div>
    </section>
  );
};

export default Home;
