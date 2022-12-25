import React from "react";
import styles from "./Projects.module.css";
import Image1 from "../../Images/AddExpense.png";

const Projects = (props) => {
  return (
    <>
      <section className={styles.projects} id="projects">
        <div className={styles.projects__}>
          <div className={styles.project_images}>
            <img src={Image1} alt="" />
          </div>
          <div className={styles.project_images}>
            <img src={Image1} alt="" />
          </div>
          <div className={styles.project_images}>
            <img src={Image1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
