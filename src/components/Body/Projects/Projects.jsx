import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import { AOS } from "../../../contexts/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../../UI/Buttons/Button";
import CV from "../../../Files/My Resume.pdf";

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
                  <img
                    key={image.id}
                    src={image.image}
                    alt=""
                    className={styles.images}
                  />
                ))}
              </div>
              <div data-aos={aos.flip_up} className={styles.cv}>
                <a href={CV} download>
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
