import React from "react";
import Project from "./Project";
import Userdata from "./Userdata";
import Experience from "./Experience";
import Education from "./Education";
import { useSelector } from "react-redux";

const HomeCenter = () => {
  const selectedIndex = useSelector((state) => state.changeMenu);
  //console.log(selectedIndex);

  let temp = "";
  if (selectedIndex === 0) {
    temp = <Userdata />;
  } else if (selectedIndex === 1) {
    temp = <Project />;
  } else if (selectedIndex === 2) {
    temp = <Experience />;
  } else if (selectedIndex === 3) {
    temp = <Education />;
  }

  return <div>{temp}</div>;
};

export default HomeCenter;
