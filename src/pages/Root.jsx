import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbars";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
