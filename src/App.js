import React from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";
import Services from "./components/Body/Services/Services";
// import Experience from "./components/Body/Experiences/Experience";
import Projects from "./components/Body/Projects/Projects";
import Footer from "./components/Footer/Footer";
import AddExpense from "./components/Images/AddExpense.png";
import ToDo_List from "./components/Images/ToDo_List.png";

import {
  Name,
  job_title,
  job_entails,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "./components/Constants/constants";

const serviceArrays = [
  {
    id: "1",
    service: service4,
  },
  {
    id: "2",
    service: service5,
  },
  {
    id: "3",
    service: service6,
  },
];

const projects = [
  {
    id: "1",
    image: AddExpense,
  },
  {
    id: "2",
    image: ToDo_List,
  },
];

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home my_name={Name} job_title={job_title} job_entails={job_entails} />
        <Services
          services={serviceArrays}
          service1={service1}
          service2={service2}
          service3={service3}
        />
        <Projects images={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
