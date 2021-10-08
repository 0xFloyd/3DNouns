import NounCanvas from "NounCanvas";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./menu.css";
import "./GlowButton.css";
import SplashScreen from "./SplashScreen";

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const App = () => {
  const [autoRotate, setAutoRotate] = useState(false);

  const [head, setHead] = useState("rabbit"); //crab
  const [glasses, setGlasses] = useState("orange"); //blue
  const [body, setBody] = useState("purple"); //lightblue
  const [pants, setPants] = useState("grey"); //black

  const device = deviceType();

  const [showSplashScreen, setShowSplashSscreen] = useState(true);

  return (
    <div className="full-width">
      {/* <Navbar style={{ height: '80px' }} expand="lg">
        <img className="nouns-logo" src={logo} alt="NOUNS" />
      </Navbar> */}
      {/* <Row style={{ height: 'calc(100vh - 80px)' }}> */}
      {/* <Row style={{ height: '100vh' }}>
        <Col xs={2}>
          <div></div>
          <form>
            <label>Head:</label>
            <select
              value={head}
              onChange={(e) => setHead(e.target.value)}
              name="cars"
              id="cars"
              form="carform"
            >
              <option value="crab">Crab</option>
              <option value="rabbit">rabbit</option>
            </select>
          </form>
        </Col>
        <Col>
          <div className="nouns-canvas">
            <NounCanvas head={head} />
          </div>
        </Col>
      </Row> */}
      <div className="splash-screen">
        <SplashScreen />
      </div>
      {/* <div className="nouns-canvas">
        <NounCanvas autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
      </div> */}
    </div>
  );
};

export default App;
