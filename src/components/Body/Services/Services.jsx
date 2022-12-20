import React from "react";
import styles from "./Services.module.css";
import Card from "../../UI/Cards/Card";
const Services = () => {
  return (
    <>
      <section className={styles.services} id="services">
        <div className={styles.services_left}>
          <div>
            <h1>My Services</h1>
            <h4>My services include:</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolor magnam harum deserunt aperiam deleniti obcaecati totam
              expedita, pariatur unde incidunt error esse iure maiores animi
              vero facilis in. Optio.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              est saepe, modi eos assumenda voluptatibus dignissimos mollitia
              numquam soluta exercitationem cumque animi eius architecto aut
              quaerat quidem, non consectetur vitae sunt, perspiciatis sint!
              Deserunt, asperiores. Sit ex animi, consequuntur obcaecati totam
              aliquam enim unde esse voluptatibus dolore voluptatem deleniti
              ipsum.
              <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Fuga maiores blanditiis dolor quo vel, magnam quod omnis ratione
              laboriosam repudiandae temporibus perspiciatis labore quasi itaque
              dolorum, ullam aliquam optio eveniet!
            </p>
          </div>
        </div>
        <div className={styles.services_right}>
          <Card className={styles.services_1}>
            <Card>
              <img src="" alt="" />
            </Card>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quo alias aspernatur itaque. Exercitationem, iste unde reiciendis
              laboriosam ea ut quod voluptate incidunt eum soluta beatae dolores
              quia earum eligendi repudiandae harum voluptatem repellat
              accusamus cum molestiae consectetur obcaecati esse itaque quaerat!
            </div>
          </Card>

          <Card className={styles.services_2}>
            <Card>
              <img src="" alt="" />
            </Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quo alias aspernatur itaque. Exercitationem, iste unde reiciendis
            laboriosam ea ut quod voluptate incidunt eum soluta beatae dolores
            quia earum eligendi repudiandae harum voluptatem repellat accusamus
            cum molestiae consectetur obcaecati esse itaque quaerat!
          </Card>

          <Card className={styles.services_3}>
            <Card>
              <img src="" alt="" />
            </Card>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quo alias aspernatur itaque. Exercitationem, iste unde reiciendis
              laboriosam ea ut quod voluptate incidunt eum soluta beatae dolores
              quia earum eligendi repudiandae harum voluptatem repellat
              accusamus cum molestiae consectetur obcaecati esse itaque quaerat!
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Services;
