import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import * as THREE from 'three';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Col, Container, Row } from 'react-bootstrap';
import logo from './assets/nouns-logo.svg';
import './shaders/materials/ReflectorMaterial';
import NounsLogo from 'NounsLogo';
import { Water } from 'three-stdlib';
import ProgressLoader from 'Loader';
import {
  bodyAttributes,
  accessoryAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
  environmentAttributes,
} from 'attributes';
import { TextureLoader } from 'three';
import SeperateHeadBody from './assets/FullBodyNouns/SeperateHeadAndBodyTest';
import TuesdayWizard from './assets/FullBodyNouns/TuesdayWizard';
import NormalEnvironment from 'assets/World/NormalEnvironment';
import OceanEnvironment from 'assets/World/OceanEnvironment';

const lookAtPos = new THREE.Vector3(0, 2, 0);

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState('none');

  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const [environment, setEnvironment] = useState('Normal');

  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);

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

  const [accessory, setAccessory] = useState(
    accessoryAttributes[Math.floor(Math.random() * accessoryAttributes.length)]
      .value
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
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
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

  // const texture = useTexture(carrot);

  const bodyTextureTest = [
    { name: 'Rust', value: 'bodyRustTexture' },
    { name: 'Slimegreen', value: 'bodySlimegreenTexture' },
  ];
  const accessoryTextureTest = [
    { name: 'Blue Stripes', value: 'accessoryStripesBlueMedTexture' },
    { name: 'Red Stripes', value: 'accessoryStripesRedColdTexture' },
  ];

  const [bodyTexTest, setBodyTexTest] = useState(
    bodyTextureTest[Math.floor(Math.random() * bodyTextureTest.length)].value
  );
  const [accessoryTexTest, setAccessoryTexTest] = useState(
    accessoryTextureTest[
      Math.floor(Math.random() * accessoryTextureTest.length)
    ].value
  );

  return (
    <>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 1.5]}
        // camera={{ position: [5, 5, 5], fov: 55, near: 0.1, far: 100 }} // https://github.com/pmndrs/react-three-fiber/issues/67
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

        {environment === 'Normal' && <NormalEnvironment />}

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
          minDistance={0.5}
        />

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
          {environment === 'Ocean' && <OceanEnvironment />}

          {/* <TuesdayFrog
            walkAnimation={walkAnimation}
            nodAnimation={nodAnimation}
          /> */}
          <TuesdayWizard
            walkAnimation={walkAnimation}
            nodAnimation={nodAnimation}
          />
          <SeperateHeadBody
            walkAnimation={walkAnimation}
            nodAnimation={nodAnimation}
            bodyTexture={bodyTexTest}
            accessoryTexture={accessoryTexTest}
          />

          {/* <Plane
            args={[1, 1]}
            position={[0, 0, 0]}
            material-map={texture}
            material-transparent
          /> */}
          {/* {environment === 'Ocean' && <Ground />} */}

          <NounsLogo />
        </Suspense>
      </Canvas>

      <div className="open-menu-container">
        {optionsVisibility === 'none' ? (
          <>
            <button
              className="glow-on-hover"
              style={{ marginRight: '10px' }}
              onClick={() => generateRandomNoun()}
            >
              Random Noun
            </button>

            <button
              onClick={() => setOptionsVisibility('block')}
              className={'show-menu-button'}
            >
              Options
            </button>
          </>
        ) : null}
      </div>

      <div
        className={isDesktop ? 'options-container' : 'mobile-menu-container'}
        style={{ display: optionsVisibility }}
      >
        {optionsVisibility === 'block' ? (
          <Container>
            <Row>
              <Col xs={10}>
                <p style={{ fontSize: '1.2rem' }}>Build your Noun!</p>
              </Col>
              <Col xs={{ span: 2 }}>
                <span
                  className="menu-x-button"
                  onClick={() => setOptionsVisibility('none')}
                  style={{ textAlign: 'right', fontSize: '1.2em' }}
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
            <Row style={{ marginBottom: '10px' }}>
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
            <Row style={{ marginBottom: '10px' }}>
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
            <Row style={{ marginBottom: '10px' }}>
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

            {/*  Accessory */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className="white-font">Accessory</label>
              </Col>
              <Col xs={8}>
                <select
                  value={accessory}
                  onChange={(e) => setAccessory(e.target.value)}
                  className="attribute-select-box"
                >
                  {accessoryAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Pants */}
            <Row style={{ marginBottom: '10px' }}>
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
            <Row style={{ marginBottom: '10px' }}>
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
            {/*  */}

            <Row style={{ marginTop: '30px' }}>
              <Col xs={4}>
                <label className="white-font">Body Tex</label>
              </Col>
              <Col xs={8}>
                <select
                  value={bodyTexTest}
                  onChange={(e) => setBodyTexTest(e.target.value)}
                  className="attribute-select-box"
                >
                  {bodyTextureTest.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            <Row>
              <Col xs={4}>
                <label className="white-font">Accessory Tex</label>
              </Col>
              <Col xs={8}>
                <select
                  value={accessoryTexTest}
                  onChange={(e) => setAccessoryTexTest(e.target.value)}
                  className="attribute-select-box"
                >
                  {accessoryTextureTest.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            {/*  */}
            <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span className="white-font" style={{ marginRight: '3px' }}>
                      Auto
                      <br />
                      Rotate
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={props.autoRotate}
                    onChange={(e) => props.setAutoRotate(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span className="white-font" style={{ marginRight: '3px' }}>
                      Walk
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={walkAnimation}
                    onChange={(e) => setWalkAnimation(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span className="white-font" style={{ marginRight: '3px' }}>
                      Nod
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={nodAnimation}
                    onChange={(e) => setNodAnimation(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: '20px' }}>
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

      {!isDesktop && optionsVisibility === 'block' ? null : (
        <div className="credit-container">
          <span style={{ marginRight: '20px' }}>
            <a href="https://nouns.wtf">nouns.wtf</a> ❤️ by{' '}
            <a href="https://twitter.com/0xFloyd">0xFloyd</a> and{' '}
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
  const texture_1 = useLoader(TextureLoader, '/grasslight-big.jpg');
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
