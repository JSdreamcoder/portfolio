import styles from "./Circle.module.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyPicture from "../../images/jaewon.jpg";
import CodingPicture from "../../images/coding.png";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const Circle = ({ mouseCoordinates }) => {
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const backgroundCircle = useRef(null);
  const [centerCoordinates1, setCenterCoordinates1] = useState(null);
  const [centerCoordinates2, setCenterCoordinates2] = useState(null);
  const [centerCoordinates3, setCenterCoordinates3] = useState(null);
  const [transformCoordiniates1, setTransformCoordinates1] = useState([0, 0]);
  const [transformCoordiniates2, setTransformCoordinates2] = useState([0, 0]);
  const [transformCoordiniates3, setTransformCoordinates3] = useState([0, 0]);

  useEffect(() => {
    const elem1 = document.querySelector("#Circle1");
    const rect1 = elem1.getBoundingClientRect();
    const elem2 = document.querySelector("#Circle2");
    const rect2 = elem2.getBoundingClientRect();
    const elem3 = document.querySelector("#Circle3");
    const rect3 = elem3.getBoundingClientRect();
    setCenterCoordinates1([
      (rect1["x"] + rect1["right"]) / 2,
      (rect1["y"] + rect1["bottom"]) / 2,
    ]);
    setCenterCoordinates2([
      (rect2["x"] + rect2["right"]) / 2,
      (rect2["y"] + rect2["bottom"]) / 2,
    ]);
    setCenterCoordinates3([
      (rect3["x"] + rect3["right"]) / 2,
      (rect3["y"] + rect3["bottom"]) / 2,
    ]);

    if (mouseCoordinates && centerCoordinates1) {
      setTransformCoordinates1([
        ((mouseCoordinates[0] - centerCoordinates1[0]) / 20).toFixed(4),
        ((centerCoordinates1[1] - mouseCoordinates[1]) / 30).toFixed(4),
      ]);
      setTransformCoordinates2([
        ((mouseCoordinates[0] - centerCoordinates2[0]) / 20).toFixed(4),
        ((centerCoordinates2[1] - mouseCoordinates[1]) / 40).toFixed(4),
      ]);
      setTransformCoordinates3([
        ((mouseCoordinates[0] - centerCoordinates3[0]) / 20).toFixed(4),
        ((centerCoordinates3[1] - mouseCoordinates[1]) / 40).toFixed(4),
      ]);
    }

    circle1.current.style.transform = `translate3d(${-transformCoordiniates1[0]}px,${
      transformCoordiniates1[1]
    }px,0px) `;
    circle2.current.style.transform = `translate3d(${
      -transformCoordiniates2[0] / 3
    }px,${transformCoordiniates2[1] / 3}px,0px)  rotateY(${
      transformCoordiniates2[0] / 2
    }deg) rotateX(${transformCoordiniates2[1] / 2}deg) translateZ(0px)`;
    circle3.current.style.transform = `translate3d(${
      -transformCoordiniates3[0] / 2
    }px,${transformCoordiniates3[1] / 2}px,0px)  `;
    backgroundCircle.current.style.transform = `translate3d(${
      transformCoordiniates2[0] / 2
    }px,${-transformCoordiniates2[1] / 3}px,0px)`;
  }, [mouseCoordinates]);

  return (
    <div className={styles["Container"]}>
      <div id="Circle1" className={styles["Circle1"]} ref={circle1}>
        <div className={styles["AboutMe"]}>
          <h1>About Me</h1>
          <div className={styles["ClickInAboutMe"]}>
            <a
              className={styles["Click"]}
              href="https://dashing-moxie-864d6b.netlify.app/#about"
            >
              click
            </a>
          </div>
          {/* <div className={styles["Content"]}>
            <h2>Introduce</h2>
            <p>Hello, I am Jaewon and Fullstack Developer.</p>
            <p></p>
            <p>Skills: ReactJS,.Net MVC,LINQ,MsSQL,Python</p>
            <div>Skills: ReactJS,.Net MVC,LINQ,MsSQL,Python</div>
          </div> */}
        </div>

        <img src={MyPicture} className={styles["MyPicture"]} />
      </div>

      <div id="Circle2" className={styles["Circle2"]} ref={circle2}>
        <div className={styles["Portfolio"]}>
          <a
            href="https://dashing-moxie-864d6b.netlify.app/#projects"
            className={styles["Text"]}
            to="/portfolio"
          >
            Portfolio
          </a>
          <div>
            <a
              className={styles["Click"]}
              href="https://dashing-moxie-864d6b.netlify.app/#projects"
            >
              click
            </a>
          </div>
        </div>
        <img src={CodingPicture} className={styles["CodingPicture"]} />
      </div>

      <div id="Circle3" className={styles["Circle3"]} ref={circle3}>
        <div className={styles["ContactMe"]}>
          <span>
            <h1>Contact Me</h1>
          </span>
          <h2>
            <a href="mailto:jay.h.developer@gmail.com">
              <MdIcons.MdEmail />
              &nbsp; <span className={styles["Email"]}>Email</span>
            </a>
            <br />
            <a href="https://www.linkedin.com/in/jay-h-88947b230/">
              {" "}
              <AiFillLinkedin />
              &nbsp; <span className={styles["LinkedIn"]}>LinkedIn</span>
            </a>
          </h2>
        </div>
      </div>
      <div className={styles["BackgroundCircle"]} ref={backgroundCircle}>
        <div className={styles["BCircle1"]}></div>
        <div className={styles["BCircle2"]}></div>
      </div>
    </div>
  );
};

export default Circle;
