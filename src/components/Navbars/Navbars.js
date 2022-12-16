import React, { useState } from "react";
import Card from "../Cards/Card";

import styles from "./Navbars.module.css";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(null);

  const toggle = () => {
    setShowMobile((preState) => !preState);
  };

  return (
    <>
      <Card>
        <div className={`${styles.navbar} ${showMobile && styles.showMobile}`}>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Skills</li>
          </a>
          <a href="#">
            <li>CV</li>
          </a>
          <a href="#">
            <li>Biography</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            {" "}
            <li>Contacts</li>
          </a>
        </div>
        <div className={`${styles.hamburger}`} onClick={toggle}>
          <i
            className={!showMobile ? "fa-solid fa-bars" : "fa-solid fa-times"}
          />
        </div>
      </Card>
    </>
  );
};

export default Navbar;
