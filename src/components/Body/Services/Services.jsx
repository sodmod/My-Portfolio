import React from "react";
import styles from "./Services.module.css";
import Card from "../../UI/Cards/Card";
const Services = (props) => {
  return (
    <>
      <section className={styles.services} id="services">
        <div className={styles.services_left}>
          <div>
            <h1>My Services</h1>
            <h4>My services include:</h4>
            <p>
              {props.service1}
              <br />
              {props.service2}
              <br />
              {props.service3}
            </p>
          </div>
        </div>
        <div className={styles.services_right}>
          {props.services.map((service) => (
            <Card key={service.id} className={styles.services_1}>
              <Card>
                <img src="" alt="" />
              </Card>
              <div>{service.service}</div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
