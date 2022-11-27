import React from "react";

import styles from "./Navbars.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.navbar}`}>
          <div className={`${styles.my_logo}`}>
            <h1>My Logo will be here</h1>
          </div>
          <div className={`${styles.details}`}>
            <div className={`${styles.list}`}>
              <li>Home</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>CV</li>
              <li>Biography</li>
              <li>About</li>
              <li>Contacts</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
