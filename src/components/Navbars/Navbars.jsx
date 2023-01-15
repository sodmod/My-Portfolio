import React from "react";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";

import styles from "./Navbars.module.css";

const Navbar = () => {
  return (
    <>
      <Card>
        <div className={styles.navbar}>
          <li>
            <a href="#home">Home</a>
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
            <a href="#contacts">
              <Button>Contact</Button>
            </a>
          </li>
        </div>
      </Card>
    </>
  );
};

export default Navbar;
