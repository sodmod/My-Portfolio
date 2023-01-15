import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import { AOS } from "../../../contexts/constants";
import Aos from "aos";
import Button from "../../UI/Buttons/Button";
import "aos/dist/aos.css";

const CV =
  "https://docs.google.com/document/d/11WHW0L4xdUnWA9c4WCVWUIToXVpK5LXID7evyKOaOVk/edit?usp=sharing";

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
