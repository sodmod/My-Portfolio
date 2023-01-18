import React from "react";

import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";
import Services from "./components/Body/Services/Services";
import Projects from "./components/Body/Projects/Projects";
import Footer from "./components/Footer/Footer";
import AddExpense from "./Files/Images/AddExpense.png";
import ToDo_List from "./Files/Images/ToDo_List.png";
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

import styles from "./App.module.css";

const myservice = [
  {
    id: "1",
    speech: service1,
  },
  {
    id: "2",
    speech: service2,
  },
  {
    id: "3",
    speech: service3,
  },
];

const serviceArrays = [
  {
    id: "1",
    logo: "fa-brands fa-react",
    service: service4,
  },
  {
    id: "2",
    logo: "fa-brands fa-java",
    service: service5,
  },
  {
    id: "3",
    logo: "fa-brands fa-figma",
    service: service6,
  },
];

const projects = [
  {
    id: "1",
    image: AddExpense,
    link: "https://sodiq-expenses.netlify.app/",
  },
  {
    id: "2",
    image: ToDo_List,
    link: "https://badmus-todo-list.netlify.app/",
  },
];

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home my_name={Name} job_title={job_title} job_entails={job_entails} />
        <Services services={serviceArrays} myservice={myservice} />
        <Projects images={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
