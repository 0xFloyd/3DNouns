import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import * as THREE from 'three';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
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
import NormalEnvironment from 'World/NormalEnvironment';
import OceanEnvironment from 'World/OceanEnvironment';
import Menu from 'Menu';
import data from './data.json';
import FINALBODY from 'assets/FullBodyNouns/FinalPipelineTest';
import FINALHEAD from 'assets/FullBodyNouns/FINALHEAD';
import ModelHead from 'assets/FullBodyNouns/FINALHEAD';
import HeadComponents from 'assets/FullBodyNouns/FINALHEAD';
import { headComponents } from 'utils/AllHeadModels';
import PreloadBodyTextures from 'utils/PreloadBodyTextures';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const NounCanvas = ({ autoRotate, setAutoRotate }) => {
  // 11/5/21 DELETE WHEN ALL ACCESSORIES
  let tempAccessories = [
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
  ];

  const [optionsVisibility, setOptionsVisibility] = useState('none');

  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const [environment, setEnvironment] = useState('Normal');

  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);

  // 0 = idle  1 = run  2 = t pose  3 = walk
  const [animationState, setAnimationState] = useState(false);
  const [animationValue, setAnimationValue] = useState({
    index: 999,
    name: 'none',
  });

  const [head, setHead] = useState(
    data.head[Math.floor(Math.random() * data.head.length)].name
  );
  const [glasses, setGlasses] = useState(
    data.glasses[Math.floor(Math.random() * data.glasses.length)].value
  );
  const [body, setBody] = useState(
    data.body[Math.floor(Math.random() * data.body.length)].name
  );

  const [accessory, setAccessory] = useState(
    tempAccessories[Math.floor(Math.random() * tempAccessories.length)].name
  );
  // const [accessory, setAccessory] = useState(
  //   data.accessory[Math.floor(Math.random() * data.accessory.length)].value
  // );

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
    setHead(data.head[Math.floor(Math.random() * data.head.length)].name);
    setGlasses(
      data.glasses[Math.floor(Math.random() * data.glasses.length)].value
    );
    setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
    setAccessory(
      tempAccessories[Math.floor(Math.random() * tempAccessories.length)].name
    );
    // setAccessory(
    //   data.accessory[Math.floor(Math.random() * data.accessory.length)].value
    // );
    setPants(data.pants[Math.floor(Math.random() * data.pants.length)].value);
    setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].value);
  };

  const HeadComponents = headComponents.map((obj) => {
    const Component = obj.value;
    return <Component headProp={head} glassesProp={glasses} />;
  });

  return (
    <>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        // camera={{ position: [5, 5, 5], fov: 55, near: 0.1, far: 100 }} // https://github.com/pmndrs/react-three-fiber/issues/67
        onCreated={({ camera }) => {
          // do things here
          camera.position.x = 24;
          camera.position.y = 32;
          camera.position.z = 48;
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
          target={[0, 20, 0]}
          ref={orbitControls}
          autoRotate={autoRotate}
          enablePan={false}
          enableDamping={true}
          maxPolarAngle={Math.PI / 1.85}
          maxDistance={150}
          minDistance={10}
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

          <PreloadBodyTextures />
          {HeadComponents}
          <FINALBODY
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
          />

          <NounsLogo environment={environment} />
        </Suspense>
        <Stats showPanel={0} className="stats" />
      </Canvas>

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
          <span className="credit-container-text">
            <a className="credit-container-link" href="https://nouns.wtf">
              nouns.wtf
            </a>{' '}
            ❤️ by{' '}
            <a
              className="credit-container-link"
              href="https://twitter.com/0xFloyd"
            >
              0xFloyd
            </a>{' '}
            and{' '}
            <a
              className="credit-container-link"
              href="https://twitter.com/coralorca"
            >
              CoralOrca
            </a>
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
