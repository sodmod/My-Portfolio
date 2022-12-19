import React from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";
import Services from "./components/Body/Services/Services";

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home />
        <Services />
      </div>
    </>
  );
}

export default App;
