import React from "react";

import Cards from "../UI/Cards/Card";

import styles from "./Contents.module.css";

const Contents = (props) => {
  return (
    <>
      {props.details.map((full) => (
        <div key={full.id} className={`${styles.block}`}>
          <Cards>
            <div className={`${styles.img}`}>
              <img src={full.image} alt="sodiq" />
            </div>
            <div className={`${styles.messages}`}>
              <h1>{full.title}</h1>
              <p>{full.details}</p>
            </div>
          </Cards>
        </div>
      ))}
    </>
  );
};

export default Contents;
