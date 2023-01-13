import "./Landing.css";
import Mouse from "../../component/Mouse_ani/Mouse_ani";
import MultiLayerSection from "../../component/MultiLayerSection/MultiLayerSection";
import Circle from "../../component/Circle/Circle";
import { useRef, useEffect, useState } from "react";
const Landing = ({ mouseCoordinates }) => {
  return (
    <div className="Landing">
      <div className="Welcome">W e l c o m e </div>

      <Mouse></Mouse>
      <Circle mouseCoordinates={mouseCoordinates}></Circle>
      {/* <MultiLayerSection
        mouseCoordinates={mouseCoordinates}
      ></MultiLayerSection> */}
    </div>
  );
};

export default Landing;
