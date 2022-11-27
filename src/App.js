import React from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbars/Navbars";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <div className={`${styles.all}`}>
        <Navbar />
        <Body />
      </div>
    </>
  );
}

export default App;
