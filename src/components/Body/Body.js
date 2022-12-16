import React from "react";

import Contents from "./Contents";
import MyPics from "../Images/my image.jpeg";

const title = "Full Stack Developer";
const contents = [
  {
    id: 1,
    title: "FrontEnd Skills",
    image: MyPics,
    details:
      "My name is Badmus Sodiq Olusola, A bonafide student of Federal University of Abeokuta. A fullstack Developer using React as my frontend development and Java as my backend, Also a database admistrator using MicrosolfSQL and Postgre.",
  },
  {
    id: 2,
    title: "BackEnd Skills",
  },
  {
    id: 3,
    title: "",
  },
];
const Body = (props) => {
  return (
    <>
      <Contents title={title} details={contents} />
    </>
  );
};
export default Body;
