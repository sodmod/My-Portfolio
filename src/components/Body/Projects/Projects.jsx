import React, { useEffect } from "react";
import { AOS } from "../../../contexts/constants";
import { person } from "../../../Constants/constants";
import Button from "../../UI/Buttons/Button";
import Aos from "aos";

import "aos/dist/aos.css";
import styles from "./Projects.module.css";

const Projects = (props) => {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 500 });
  }, []);
  return (
    <AOS.Consumer>
      {(aos) => {
        return (
          <section className={styles.projects} id="projects">
            <div className={styles.projects__}>
              <div className={styles.recent_projects}>
                <h1>Recent Projects</h1>
              </div>
              <div data-aos={aos.fade_up} className={styles.project_images}>
                {props.images.map((image) => (
                  <a href={image.link} key={image.id} className={styles.images}>
                    <img src={image.image} alt="" className={styles.images} />
                  </a>
                ))}
              </div>
              <div data-aos={aos.flip_up} className={styles.cv}>
                <a href={person.info.CV} download>
                  <Button className={styles.button}>Download CV</Button>
                </a>
              </div>
            </div>
          </section>
        );
      }}
    </AOS.Consumer>
  );
};

export default Projects;
