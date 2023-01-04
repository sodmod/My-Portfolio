import React from "react";
import styles from "./Projects.module.css";
import Image1 from "../../Images/AddExpense.png";

const Projects = (props) => {
  return (
    <>
      <section className={styles.projects} id="projects">
        <div className={styles.projects__}>
          {props.images.map((image) => (
            <div key={image.id} className={styles.project_images}>
              <img src={image.image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
