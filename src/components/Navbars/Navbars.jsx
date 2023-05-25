import React, { useEffect } from "react";

import styles from "./Navbars.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // useEffect(() => {
  //   const toggleBtn = document.querySelector(".toggle_btn");
  //   const toggleBtnIcon = document.querySelector(".toggle_btn i");
  //   const dropDownMenu = document.querySelector(".dropdown_menu");

  //   toggleBtn.onclick = function() {
  //     dropDownMenu.classList.toggle("open");
  //     const isOpen = dropDownMenu.classList.contains("open");
  //     toggleBtnIcon.classList = isOpen
  //       ? "fa-solid fa-xmark"
  //       : "fa-solid fa-bars";
  //   };
  // }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Sodiq Badmus</div>
      <div className={styles.navigation}>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>About me</Link>
        </li>
        <li>
          <Link>
            <button>Contact me</button>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
