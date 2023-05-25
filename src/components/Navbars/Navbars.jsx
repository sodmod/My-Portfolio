import React, { useEffect } from "react";

import "./Navbars.css";

const Navbar = () => {
  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");

    toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle("open");
      const isOpen = dropDownMenu.classList.contains("open");
      toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  }, []);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#s">Sodiq Nav Bar</a>
          </div>
          <ul className="links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
          <a href="#a" className="action_btn">
            Get Started
          </a>
          <div className="toggle_btn">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="services">services</a>
          </li>
          <li>
            <a href="contact">Contacts</a>
          </li>
          <li>
            <a href="s$" className="action_btn">
              Get Started
            </a>
          </li>
        </div>
      </header>
    </>
  );
};

export default Navbar;
