import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./component/Loading/Loading";
import Landing from "./page/Landing/Landing";
import Nav from "./component/Nav/Nav";
import Portfolio from "./page/Portfolio/Portfolio";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mouseCoordinates, setMouseCoordinates] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {}, [mouseCoordinates]);

  const handleMouseMove = (e) => {
    setMouseCoordinates([
      // e.clientX - e.target.offsetLeft,
      // e.clientY - e.target.offsetTop,
      e.pageX,
      e.pageY,
    ]);
  };

  return !isLoading ? (
    <div className="App" onMouseMove={handleMouseMove}>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route
            path="/"
            element={<Landing mouseCoordinates={mouseCoordinates}></Landing>}
          ></Route>
          <Route
            path="portfolio"
            element={<Portfolio mouseCoordinates={mouseCoordinates} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  ) : (
    <Loading />
  );
}

export default App;
