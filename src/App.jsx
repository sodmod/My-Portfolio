import React from "react";

import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";
import Services from "./components/Body/Services/Services";
import Projects from "./components/Body/Projects/Projects";
import Footer from "./components/Footer/Footer";
import {
  person,
  serviceArrays,
  projects,
  myservice,
} from "./Constants/constants";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home
          my_name={person.info.Name}
          job_title={person.info.job_title}
          job_entails={person.info.job_entails}
        />
        <Services services={serviceArrays} myservice={myservice} />
        <Projects images={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
