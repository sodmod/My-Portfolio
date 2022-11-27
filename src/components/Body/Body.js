import React from "react";

import Contents from "./Contents";
import styles from "./Contents.module.css";

const title = "Full Stack Developer";
const details =
  "My name is Badmus Sodiq Olusola, A bonafide student of Federal University of Abeokuta. A fullstack Developer using React as my frontend development and Java as my backend, Also a database admistrator using MicrosolfSQL and Postgre.";
const Main = () => {
  return (
    <>
      <div className={`${styles.content}`}>
        <Contents title={title} details={details} />
      </div>
    </>
  );
};
export default Main;
