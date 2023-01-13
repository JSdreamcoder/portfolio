import { useRef, useEffect, useState } from "react";
import "./MultiLayerSection.css";
const MultiLayerSection = ({ mouseCoordinates }) => {
  const rec = useRef(null);

  //const [mouseCoordinates, setMouseCoordinates] = useState(null);
  const [centerCoordinates, setCenterCoordinates] = useState(null);
  const [transformCoordiniates, setTransformCoordinates] = useState([0, 0]);

  useEffect(() => {
    const elem = document.querySelector(".Section");
    const rect = elem.getBoundingClientRect();
    setCenterCoordinates([
      (rect["x"] + rect["right"]) / 2,
      (rect["y"] + rect["bottom"]) / 2,
    ]);
    if (mouseCoordinates && centerCoordinates) {
      setTransformCoordinates([
        ((mouseCoordinates[0] - centerCoordinates[0]) / 50).toFixed(4),
        ((centerCoordinates[1] - mouseCoordinates[1]) / 50).toFixed(4),
      ]);
    }
    rec.current.style.transform = `rotateY(${transformCoordiniates[0]}deg) rotateX(${transformCoordiniates[1]}deg) translateZ(0px)`;
  }, [mouseCoordinates]);

  // const handleMouseMove = (e) => {
  //   setMouseCoordinates([
  //     // e.clientX - e.target.offsetLeft,
  //     // e.clientY - e.target.offsetTop,
  //     e.pageX,
  //     e.pageY,
  //   ]);
  //   if (mouseCoordinates && centerCoordinates) {
  //     setTransformCoordinates([
  //       ((mouseCoordinates[0] - centerCoordinates[0]) / 50).toFixed(4),
  //       ((centerCoordinates[1] - mouseCoordinates[1]) / 50).toFixed(4),
  //     ]);
  //   }
  // };

  return (
    <>
      <div className="Section_Container">
        <div className="Section" ref={rec}>
          <a href="www.jaewonh.com">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            fuga itaque quaerat tenetur corrupti, id sit consequatur quidem,
            modi eum ?
          </a>
        </div>

        {/*       
        <div>
          {mouseCoordinates &&
            `coords:${mouseCoordinates[0]},${mouseCoordinates[1]}`}{" "}
        </div>
        <div>
          {centerCoordinates &&
            `center: ${centerCoordinates[0]},${centerCoordinates[1]}`}
        </div>
        <div>
          {transformCoordiniates &&
            `center: ${transformCoordiniates[0]} , ${transformCoordiniates[1]}`}
        </div> */}
      </div>
    </>
  );
};

export default MultiLayerSection;
