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
import Menu from 'Menu';
import data from './data.json';

const lookAtPos = new THREE.Vector3(0, 2, 0);

const NounCanvas = ({ autoRotate, setAutoRotate }) => {
  const [optionsVisibility, setOptionsVisibility] = useState('none');

  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const [environment, setEnvironment] = useState('Normal');

  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);

  const [head, setHead] = useState(
    data.head[Math.floor(Math.random() * data.head.length)].value
  );
  const [glasses, setGlasses] = useState(
    data.glasses[Math.floor(Math.random() * data.glasses.length)].value
  );
  const [body, setBody] = useState(
    data.body[Math.floor(Math.random() * data.body.length)].value
  );

  const [accessory, setAccessory] = useState(
    data.accessory[Math.floor(Math.random() * data.accessory.length)].value
  );

  const [pants, setPants] = useState(
    data.pants[Math.floor(Math.random() * data.pants.length)].value
  );
  const [shoes, setShoes] = useState(
    data.shoes[Math.floor(Math.random() * data.shoes.length)].value
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
    setHead(data.head[Math.floor(Math.random() * data.head.length)].value);
    setGlasses(
      data.glasses[Math.floor(Math.random() * data.glasses.length)].value
    );
    setBody(data.body[Math.floor(Math.random() * data.body.length)].value);
    setAccessory(
      data.accessory[Math.floor(Math.random() * data.accessory.length)].value
    );
    setPants(data.pants[Math.floor(Math.random() * data.pants.length)].value);
    setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].value);
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
          autoRotate={autoRotate}
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

      <Menu
        isDesktop={isDesktop}
        optionsVisibility={optionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
        head={head}
        setHead={setHead}
        body={body}
        setBody={setBody}
        accessory={accessory}
        setAccessory={setAccessory}
        pants={pants}
        setPants={setPants}
        glasses={glasses}
        setGlasses={setGlasses}
        shoes={shoes}
        setShoes={setShoes}
        environment={environment}
        setEnvironment={setEnvironment}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
        generateRandomNoun={generateRandomNoun}
      />

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
