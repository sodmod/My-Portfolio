import React from "react";

import Navbar from "./components/Navbars/Navbars";
// import Home from "./components/Body/Home/Home";
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
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// function App() {
//   return (
//     <>
//       <div className={`${styles.all}`}>
//         <Navbar />
//         <Home
//           my_name={person.info.Name}
//           job_title={person.info.job_title}
//           job_entails={person.info.job_entails}
//         />
//         <Services services={serviceArrays} myservice={myservice} />
//         <Projects images={projects} />
//         <Footer />
//       </div>
//     </>
//   );
// }

export default App;
