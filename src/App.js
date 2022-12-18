import React from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbars/Navbars";
import Home from "./components/Body/Home/Home";

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
