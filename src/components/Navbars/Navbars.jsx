import React, { useState } from "react";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";

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
          <li>
            <a href="#s">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#s">Home</a>
          </li>
          <li>
            <a href="#s">Portfolio</a>
          </li>
          <li>
            <a href="#s">CV</a>
          </li>
          <li>
            <a href="#s">
              <Button>Contact</Button>
            </a>
          </li>
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
