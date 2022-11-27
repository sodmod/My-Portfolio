import React from "react";

import Cards from "../Cards/Card";
import MyPics from "../Images/my image.jpeg";
import styles from "./Contents.module.css";

const Contents = (props) => {
  return (
    <div className={`${styles.block}`}>
      <Cards>
        <div className={`${styles.img}`}>
          <img src={MyPics} alt="sodiq" />
        </div>
        <div className={`${styles.messages}`}>
          <h1>{props.title}</h1>
          <p>{props.details}</p>
        </div>
      </Cards>
    </div>
  );
};

export default Contents;
