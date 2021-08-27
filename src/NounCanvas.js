import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  Circle,
  Environment,
  Html,
  Loader,
  OrbitControls,
  Sky,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RabbitModel from "RabbitModel";
import CrabModel from "CrabTest";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  ProgressBar,
  Row,
} from "react-bootstrap";
import logo from "./assets/nouns-logo.svg";
import useReflector from "./shaders/useReflector";
import "./shaders/materials/ReflectorMaterial";
import Svg from "./assets/World/Svg";
import NounsLogo from "NounsLogo";
import { Water } from "three-stdlib";
import ProgressLoader from "Loader";
import { slide as Menu } from "react-burger-menu";
import Bonsai from "assets/FullBodyNouns/Bonsai";
import Cloud from "assets/FullBodyNouns/Cloud";
import Computer from "assets/FullBodyNouns/Computer";
import Crab from "assets/FullBodyNouns/Crab";
import Mixer from "assets/FullBodyNouns/Mixer";
import Pirate from "assets/FullBodyNouns/Pirate";
import Rabbit from "assets/FullBodyNouns/Rabbit";
import {
  bodyAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
  environmentAttributes,
} from "attributes";
import Shark from "assets/FullBodyNouns/Shark";
import { TextureLoader } from "three";

extend({ Water });

const lookAtPos = new THREE.Vector3(0, 2, 0);

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState("none");
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1250);
  const [environment, setEnvironment] = useState("Normal");
  const [head, setHead] = useState(
    headAttributes[Math.floor(Math.random() * headAttributes.length)].value
  );
  const [glasses, setGlasses] = useState(
    glassesAttributes[Math.floor(Math.random() * glassesAttributes.length)]
      .value
  );
  const [body, setBody] = useState(
    bodyAttributes[Math.floor(Math.random() * bodyAttributes.length)].value
  );
  const [pants, setPants] = useState(
    pantsAttributes[Math.floor(Math.random() * pantsAttributes.length)].value
  );
  const [shoes, setShoes] = useState(
    shoesAttributes[Math.floor(Math.random() * shoesAttributes.length)].value
  );

  const orbitControls = useRef();

  // FUNCTIONS
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const generateRandomNoun = () => {
    setHead(
      headAttributes[Math.floor(Math.random() * headAttributes.length)].value
    );
    setGlasses(
      glassesAttributes[Math.floor(Math.random() * glassesAttributes.length)]
        .value
    );
    setBody(
      bodyAttributes[Math.floor(Math.random() * bodyAttributes.length)].value
    );
    setPants(
      pantsAttributes[Math.floor(Math.random() * pantsAttributes.length)].value
    );
    setShoes(
      shoesAttributes[Math.floor(Math.random() * shoesAttributes.length)].value
    );
  };

  return (
    <>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 1.5]}
        // camera={{ position: [0, 0.5, 0.5], fov: 55, near: 0.1, far: 100 }} // https://github.com/pmndrs/react-three-fiber/issues/67
        onCreated={({ camera }) => {
          // do things here
          camera.position.x = 0.2;
          camera.position.y = 0.4;
          camera.position.z = 0.4;
          camera.lookAt(lookAtPos);
          camera.updateProjectionMatrix();
          // camera.fov =
        }}
      >
        {/* <MyCamera
          setCurrentCameraPosition={setCurrentCameraPosition}
          orbitControls={orbitControls}
        /> */}
        {/* <Html>
        <div style={{ position: "absolute", top: 200, left: 200 }}>
          {" "}
          <button onClick={() => setFarAway(!farAway)}>click</button>
        </div>
      </Html> */}
        {/* <Model /> */}

        {environment === "Normal" && (
          <fog attach="fog" args={[0xa0a0a0, 1, 5]} />
        )}

        <ambientLight intensity={0.8} />

        {/* <spotLight position={[0, 2, 2]} intensity={0.3} castShadow /> */}

        <directionalLight
          position={[0, 0.5, 0.2]}
          castShadow
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <OrbitControls
          target={[0, 0.2, 0]}
          ref={orbitControls}
          autoRotate={props.autoRotate}
          enablePan={false}
          enableDamping={true}
          maxPolarAngle={Math.PI / 2.05}
          maxDistance={5}
          minDistance={0.325}
        />

        {environment === "Normal" && (
          <mesh receiveShadow position={[0, -0.025, 0]}>
            <boxBufferGeometry args={[25, 0.05, 25]} />
            <meshStandardMaterial
              color={new THREE.Color(0xffffff)
                .setHex(0xffffff)
                .convertSRGBToLinear()}
            />
          </mesh>
        )}
        {environment === "Normal" && (
          <gridHelper
            args={[
              50,
              200,
              new THREE.Color(0x919191),
              new THREE.Color(0x919191),
            ]}
            position={[0, 0.001, 0]}
          />
        )}
        {environment === "Ocean" && (
          <mesh receiveShadow position={[0, -0.025, 0]}>
            <boxBufferGeometry args={[2, 0.05, 2]} />
            <meshStandardMaterial
              color={new THREE.Color(0xf6e4ad)
                .setHex(0xf6e4ad)
                .convertSRGBToLinear()}
            />
          </mesh>
        )}
        {environment === "Ocean" && (
          <gridHelper
            args={[2, 20, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
            position={[0, 0.001, 0]}
          />
        )}

        {/* 
        {environment === 'Ocean' && (
          <mesh receiveShadow position={[0, -0.5, 0]}>
            <cylinderBufferGeometry args={[1, 1, 1, 32]} />
            <meshStandardMaterial
              color={new THREE.Color('#d63c5e')
                .setHex(0xd63c5e)
                .convertSRGBToLinear()}
            />
          </mesh>
        )} */}

        {/* <cylinderBufferGeometry args={[2, 1, 20, 32]} /> */}
        {/* <meshStandardMaterial
            color={new THREE.Color('#d63c5e')
              .setHex(0xd63c5e)
              .convertSRGBToLinear()}
          /> */}
        {/* <meshPhysicalMaterial
            color={new THREE.Color('#d63c5e')
              .setHex(0xd63c5e)
              .convertSRGBToLinear()}
          /> */}
        <Suspense fallback={<ProgressLoader />}>
          {environment === "Ocean" && <Sky sunPosition={[-100, 20, 100]} />}
          {environment === "Ocean" && <Ocean />}
          {/* {environment === 'Ocean' && <Ground />} */}
          {/* <Model position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> */}

          {/* <Bonsai
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            feet={feet}
          /> */}
          <Cloud
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Computer
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Crab
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Mixer
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Pirate
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Rabbit
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />
          <Shark
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          />

          <NounsLogo />

          {/* <Environment preset="city" /> */}
        </Suspense>
        {/* <Svg /> */}
      </Canvas>

      <div className="open-menu-container">
        {optionsVisibility === "none" ? (
          <>
            <button
              className="glow-on-hover"
              style={{ marginRight: "10px" }}
              onClick={() => generateRandomNoun()}
            >
              Random Noun
            </button>

            <button
              onClick={() => setOptionsVisibility("block")}
              className={"show-menu-button"}
            >
              Options
            </button>
          </>
        ) : null}
      </div>

      <div
        className={isDesktop ? "options-container" : "mobile-menu-container"}
        style={{ display: optionsVisibility }}
      >
        {optionsVisibility === "block" ? (
          <Container>
            <Row>
              <Col xs={10}>
                <p style={{ fontSize: "1.2rem" }}>Build your Noun!</p>
              </Col>
              <Col xs={{ span: 2 }}>
                <span
                  className="menu-x-button"
                  onClick={() => setOptionsVisibility("none")}
                  style={{ textAlign: "right", fontSize: "1.2em" }}
                >
                  ❌
                </span>
              </Col>
            </Row>
          </Container>
        ) : null}

        <div
          className="options-controls"
          style={{ display: optionsVisibility }}
        >
          {/* <h4 className="white-font" style={{ textAlign: 'center' }}>
            Settings
          </h4> */}
          {/*  Head */}
          <Container fluid>
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={4}>
                <label className="white-font">Head</label>
              </Col>
              <Col xs={8}>
                <select
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  className="attribute-select-box"
                  // name="cars"
                  // id="cars"
                  // form="carform"
                >
                  {headAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Glasses */}
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={4}>
                <label className="white-font">Glasses</label>
              </Col>
              <Col xs={8}>
                <select
                  value={glasses}
                  onChange={(e) => setGlasses(e.target.value)}
                  className="attribute-select-box"
                >
                  {glassesAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            {/*  Body */}
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={4}>
                <label className="white-font">Body</label>
              </Col>
              <Col xs={8}>
                <select
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="attribute-select-box"
                >
                  {bodyAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Pants */}
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={4}>
                <label className="white-font">Pants</label>
              </Col>
              <Col xs={8}>
                <select
                  value={pants}
                  onChange={(e) => setPants(e.target.value)}
                  className="attribute-select-box"
                >
                  {pantsAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Shoes */}
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={4}>
                <label className="white-font">Shoes</label>
              </Col>
              <Col xs={8}>
                <select
                  value={shoes}
                  onChange={(e) => setShoes(e.target.value)}
                  className="attribute-select-box"
                >
                  {shoesAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/* environment */}
            <Row>
              <Col xs={4}>
                <label className="white-font">World</label>
              </Col>
              <Col xs={8}>
                <select
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  className="attribute-select-box"
                >
                  {environmentAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{ marginTop: "15px" }}>
                  <label>
                    <span className="white-font" style={{ marginRight: "3px" }}>
                      Auto
                      <br />
                      Rotate
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: "25px" }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={props.autoRotate}
                    onChange={(e) => props.setAutoRotate(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: "20px" }}>
              <Row>
                <Col></Col>
                <Col>
                  <button
                    className="glow-on-hover"
                    onClick={() => generateRandomNoun()}
                  >
                    Random Noun
                  </button>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>

      <div className="logo-container">
        <a href="https://nouns.wtf">
          <img className="nouns-logo" src={logo} alt="NOUNS" />
        </a>
      </div>

      {!isDesktop && optionsVisibility === "block" ? null : (
        <div className="credit-container">
          <span style={{ marginRight: "20px" }}>
            <a href="https://nouns.wtf">nouns.wtf</a> ❤️ by{" "}
            <a href="https://twitter.com/0xFloyd">0xFloyd</a> and{" "}
            <a href="https://twitter.com/coralorca">CoralOrca</a>
          </span>
        </div>
      )}
    </>
  );
};

export default NounCanvas;

// Extras
const Ground = () => {
  const texture_1 = useLoader(TextureLoader, "/grasslight-big.jpg");
  texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
  texture_1.repeat.set(2, 2);
  texture_1.anisotropy = 16;
  texture_1.encoding = THREE.sRGBEncoding;

  return (
    <mesh receiveShadow position={[0, 0.01, 0]} rotation-x={-Math.PI / 2}>
      <planeBufferGeometry args={[5, 5]} />
      <meshStandardMaterial map={texture_1} attach="material" />
    </mesh>
  );
};

// Extras
const Ocean = () => {
  const ref = useRef();

  // this is the renderer
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  // memoize -->  storing the results of expensive function calls and returning the cached result when the same inputs occur again
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += 0.002)
  );

  // 2nd argument is config which is the material
  return (
    <water
      ref={ref}
      args={[geom, config]}
      position={[0, -1, 0]}
      rotation-x={-Math.PI / 2}
    />
  );
};
{
  /* <div style={{ marginTop: '10px' }}>
              <span>Hold click/ swipe to rotate</span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <span>Scroll/ Pinch to zoom</span>
            </div> */
}
