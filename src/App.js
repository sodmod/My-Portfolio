import React from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";
import Services from "./components/Body/Services/Services";
import Experience from "./components/Body/Experiences/Experience";
import Projects from "./components/Body/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home />
        <Services />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
