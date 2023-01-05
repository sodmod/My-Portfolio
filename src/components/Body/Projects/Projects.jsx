import React from "react";
import styles from "./Projects.module.css";

const Projects = (props) => {
  return (
    <>
      <section className={styles.projects} id="projects">
        <div className={styles.projects__}>
          <div>
            <h1>Recent Project</h1>
          </div>
          <div className={styles.project_images}>
            {props.images.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt=""
                className={styles.images}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
