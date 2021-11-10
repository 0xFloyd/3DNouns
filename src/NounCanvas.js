import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import * as THREE from 'three';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import {
  BakeShadows,
  OrbitControls,
  Stats,
  useHelper,
} from '@react-three/drei';
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
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  SpotLightHelper,
  TextureLoader,
} from 'three';
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
import Stacy from 'Stacy';
import MasterHead from 'assets/Head/MasterHead';
import FINALBODY119 from 'assets/FullBodyNouns/FINALBODY119';
import RANDOMIZER from 'RANDOMIZER';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const NounCanvas = () => {
  // 11/5/21 DELETE WHEN ALL ACCESSORIES
  let tempAccessories = [
    { name: 'accessory-1n', value: 'accessory-1n.png' },
    { name: 'accessory-aardvark', value: 'accessory-aardvark.png' },
    { name: 'accessory-axe', value: 'accessory-axe.png' },
    {
      name: 'accessory-belly-chameleon',
      value: 'accessory-belly-chameleon.png',
    },
    { name: 'accessory-bird-flying', value: 'accessory-bird-flying.png' },
    { name: 'accessory-bird-side', value: 'accessory-bird-side.png' },
    { name: 'accessory-blind-anchor', value: 'accessory-blind-anchor.png' },
    { name: 'accessory-bling-anvil', value: 'accessory-bling-anvil.png' },
    { name: 'accessory-bling-arrow', value: 'accessory-bling-arrow.png' },
    { name: 'accessory-bling-cheese', value: 'accessory-bling-cheese.png' },
    {
      name: 'accessory-bling-gold-ingot',
      value: 'accessory-bling-gold-ingot.png',
    },
    { name: 'accessory-bling-love', value: 'accessory-bling-love.png' },
    { name: 'accessory-bling-mask', value: 'accessory-bling-mask.png' },
    { name: 'accessory-bling-ring', value: 'accessory-bling-ring.png' },
    { name: 'accessory-bling-scissors', value: 'accessory-bling-scissors.png' },
    { name: 'accessory-bling-sparkles', value: 'accessory-bling-sparkles.png' },
    {
      name: 'accessory-body-gradient-checkerdisco',
      value: 'accessory-body-gradient-checkerdisco.png',
    },
    {
      name: 'accessory-body-gradient-dawn',
      value: 'accessory-body-gradient-dawn.png',
    },
    {
      name: 'accessory-body-gradient-dusk',
      value: 'accessory-body-gradient-dusk.png',
    },
    {
      name: 'accessory-body-gradient-glacier',
      value: 'accessory-body-gradient-glacier.png',
    },
    {
      name: 'accessory-body-gradient-ice',
      value: 'accessory-body-gradient-ice.png',
    },
    {
      name: 'accessory-body-gradient-pride',
      value: 'accessory-body-gradient-pride.png',
    },
    {
      name: 'accessory-body-gradient-redpink',
      value: 'accessory-body-gradient-redpink.png',
    },
    {
      name: 'accessory-body-gradient-sunset',
      value: 'accessory-body-gradient-sunset.png',
    },
    { name: 'accessory-carrot', value: 'accessory-carrot.png' },
    { name: 'accessory-chain', value: 'accessory-chain.png' },
    {
      name: 'accessory-checker-bigwalk-blue-prime',
      value: 'accessory-checker-bigwalk-blue-prime.png',
    },
    {
      name: 'accessory-checker-bigwalk-greylight',
      value: 'accessory-checker-bigwalk-greylight.png',
    },
    {
      name: 'accessory-checker-bigwalk-rainbow',
      value: 'accessory-checker-bigwalk-rainbow.png',
    },
    { name: 'accessory-checker-RGB', value: 'accessory-checker-RGB.png' },
    { name: 'accessory-cloud', value: 'accessory-cloud.png' },
    { name: 'accessory-clover', value: 'accessory-clover.png' },
    { name: 'accessory-collar-sunset', value: 'accessory-collar-sunset.png' },
    { name: 'accessory-cow', value: 'accessory-cow.png' },
    { name: 'accessory-dinosaur', value: 'accessory-dinosaur.png' },
    { name: 'accessory-dollar-bling', value: 'accessory-dollar-bling.png' },
    { name: 'accessory-dragon', value: 'accessory-dragon.png' },
    { name: 'accessory-ducky', value: 'accessory-ducky.png' },
    { name: 'accessory-eth', value: 'accessory-eth.png' },
    { name: 'accessory-eye', value: 'accessory-eye.png' },
    { name: 'accessory-flash', value: 'accessory-flash.png' },
    { name: 'accessory-fries', value: 'accessory-fries.png' },
    {
      name: 'accessory-glasses-logo-sun',
      value: 'accessory-glasses-logo-sun.png',
    },
    { name: 'accessory-glasses-logo', value: 'accessory-glasses-logo.png' },
    { name: 'accessory-glasses', value: 'accessory-glasses.png' },
    { name: 'accessory-heart', value: 'accessory-heart.png' },
    {
      name: 'accessory-hoodiestrings-uneven',
      value: 'accessory-hoodiestrings-uneven.png',
    },
    { name: 'accessory-id', value: 'accessory-id.png' },
    { name: 'accessory-infinity', value: 'accessory-infinity.png' },
    { name: 'accessory-insignia', value: 'accessory-insignia.png' },
    { name: 'accessory-leaf', value: 'accessory-leaf.png' },
    { name: 'accessory-lightbulb', value: 'accessory-lightbulb.png' },
    { name: 'accessory-lp', value: 'accessory-lp.png' },
    { name: 'accessory-marsface', value: 'accessory-marsface.png' },
    { name: 'accessory-matrix', value: 'accessory-matrix.png' },
    { name: 'accessory-moon-block', value: 'accessory-moon-block.png' },
    { name: 'accessory-pizza-bling', value: 'accessory-pizza-bling.png' },
    { name: 'accessory-pocket-pencil', value: 'accessory-pocket-pencil.png' },
    { name: 'accessory-rain', value: 'accessory-rain.png' },
    { name: 'accessory-rgb', value: 'accessory-rgb.png' },
    { name: 'accessory-scarf-clown', value: 'accessory-scarf-clown.png' },
    { name: 'accessory-secret-x', value: 'accessory-secret-x.png' },
    { name: 'accessory-shirt-black', value: 'accessory-shirt-black.png' },
    { name: 'accessory-shrimp', value: 'accessory-shrimp.png' },
    { name: 'accessory-slimesplat', value: 'accessory-slimesplat.png' },
    { name: 'accessory-small-bling', value: 'accessory-small-bling.png' },
    { name: 'accessory-snowflake', value: 'accessory-snowflake.png' },
    { name: 'accessory-stains-blood', value: 'accessory-stains-blood.png' },
    { name: 'accessory-stains-zombie', value: 'accessory-stains-zombie.png' },
    {
      name: 'accessory-stripes-and-checks',
      value: 'accessory-stripes-and-checks.png',
    },
    {
      name: 'accessory-stripes-big-red',
      value: 'accessory-stripes-big-red.png',
    },
    { name: 'accessory-stripes-blit', value: 'accessory-stripes-blit.png' },
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    { name: 'accessory-stripes-brown', value: 'accessory-stripes-brown.png' },
    { name: 'accessory-stripes-olive', value: 'accessory-stripes-olive.png' },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
    { name: 'accessory-sunset', value: 'accessory-sunset.png' },
    { name: 'accessory-taxi-checkers', value: 'accessory-taxi-checkers.png' },
    { name: 'accessory-text-yolo', value: 'accessory-text-yolo.png' },
    { name: 'accessory-think', value: 'accessory-think.png' },
    {
      name: 'accessory-tie-black-on-white',
      value: 'accessory-tie-black-on-white.png',
    },
    { name: 'accessory-tie-dye', value: 'accessory-tie-dye.png' },
    {
      name: 'accessory-tie-purple-on-white',
      value: 'accessory-tie-purple-on-white.png',
    },
    { name: 'accessory-tie-red', value: 'accessory-tie-red.png' },
    { name: 'accessory-txt-a2+b2', value: 'accessory-txt-a2+b2.png' },
    { name: 'accessory-txt-cc', value: 'accessory-txt-cc.png' },
    { name: 'accessory-txt-cc2', value: 'accessory-txt-cc2.png' },
    { name: 'accessory-txt-copy', value: 'accessory-txt-copy.png' },
    { name: 'accessory-txt-dao', value: 'accessory-txt-dao.png' },
    { name: 'accessory-txt-doom', value: 'accessory-txt-doom.png' },
    { name: 'accessory-txt-dope-text', value: 'accessory-txt-dope-text.png' },
    { name: 'accessory-txt-foo-black', value: 'accessory-txt-foo-black.png' },
    { name: 'accessory-txt-ico', value: 'accessory-txt-ico.png' },
    { name: 'accessory-txt-io', value: 'accessory-txt-io.png' },
    { name: 'accessory-txt-lmao', value: 'accessory-txt-lmao.png' },
    { name: 'accessory-txt-lol', value: 'accessory-txt-lol.png' },
    { name: 'accessory-txt-mint', value: 'accessory-txt-mint.png' },
    {
      name: 'accessory-txt-nil-grey-dark',
      value: 'accessory-txt-nil-grey-dark.png',
    },
    { name: 'accessory-txt-noun-f0f', value: 'accessory-txt-noun-f0f.png' },
    { name: 'accessory-txt-noun-green', value: 'accessory-txt-noun-green.png' },
    {
      name: 'accessory-txt-noun-multicolor',
      value: 'accessory-txt-noun-multicolor.png',
    },
    { name: 'accessory-txt-noun', value: 'accessory-txt-noun.png' },
    { name: 'accessory-txt-pi', value: 'accessory-txt-pi.png' },
    { name: 'accessory-txt-pop', value: 'accessory-txt-pop.png' },
    { name: 'accessory-txt-rofl', value: 'accessory-txt-rofl.png' },
    { name: 'accessory-txt-we', value: 'accessory-txt-we.png' },
    { name: 'accessory-txt-yay', value: 'accessory-txt-yay.png' },
    { name: 'accessory-wave', value: 'accessory-wave.png' },
    { name: 'accessory-wet-money', value: 'accessory-wet-money.png' },
    { name: 'accessory-yingyang', value: 'accessory-yingyang.png' },
    { name: 'body-bege', value: 'body-bege.png' },
    { name: 'body-gray-scale-1', value: 'body-gray-scale-1.png' },
    { name: 'body-gray-scale-9', value: 'body-gray-scale-9.png' },
    { name: 'body-ice-cold', value: 'body-ice-cold.png' },
  ];

  let tempHeads = [
    { name: 'Bonsai', value: 'head-pineapple' },
    { name: 'Pineapple', value: 'head-frog' },
  ];

  const [optionsVisibility, setOptionsVisibility] = useState('none');
  const [autoRotate, setAutoRotate] = useState('false');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const [environment, setEnvironment] = useState('Normal');

  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);

  // 0 = idle  1 = run  2 = t pose  3 = walk
  const [animationState, setAnimationState] = useState(false);
  const [animationValue, setAnimationValue] = useState(
    data.animations.find((animation) => animation.name === 'idle').name
  );

  const [head, setHead] = useState(
    tempHeads[Math.floor(Math.random() * tempHeads.length)].name
  );
  // const [head, setHead] = useState(
  //   data.head[Math.floor(Math.random() * data.head.length)].name
  // );
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
    data.shoes[Math.floor(Math.random() * data.shoes.length)].name
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
    setHead(tempHeads[Math.floor(Math.random() * tempHeads.length)].name);
    // setHead(data.head[Math.floor(Math.random() * data.head.length)].name);
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
    setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
  };

  useEffect(() => {
    document.body.style.cursor = 'auto';
  }, []);

  const HeadComponents = headComponents.map((obj) => {
    const Component = obj.value;
    return (
      <Component
        headProp={head}
        glassesProp={glasses}
        animationState={animationState}
        animationValue={animationValue}
      />
    );
  });

  const Lights = () => {
    const light = useRef();
    const spotLight = useRef();
    const hemiLight = useRef();
    useHelper(light, DirectionalLightHelper, 'cyan');
    useHelper(spotLight, SpotLightHelper, 'red');
    useHelper(hemiLight, HemisphereLightHelper, 'blue');

    let huh = new THREE.SpotLight();

    const d = 5;

    return (
      <group>
        <ambientLight intensity={0.25} />
        {/* <spotLight
          intensity={0.8}
          ref={spotLight}
          position={[-10, 300, 300]}
          castShadow
          color={new THREE.Color(0xffa95c)}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        />
        <hemisphereLight
          skyColor={new THREE.Color(0xffffbb)}
          groundColor={new THREE.Color(0x080820)}
          intensity={0.75}
          castShadow
        />
        <directionalLight
          ref={light}
          color={new THREE.Color(0xffa95c)}
          position={[-5, 50, 100]}
          castShadow
          intensity={0.5}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        /> */}
        <hemisphereLight
          skyColor={'black'}
          groundColor={0xffffff}
          intensity={0.5}
          position={[0, 500, 0]}
          ref={hemiLight}
        />
        <directionalLight
          ref={light}
          intensity={0.5}
          position={[-500, 500, 500]}
          shadow-camera-left={d * -100}
          shadow-camera-bottom={d * -100}
          shadow-camera-right={d * 100}
          shadow-camera-top={d * 100}
          shadow-camera-near={0.1}
          shadow-camera-far={5000}
          shadow-bias={-0.0005}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={2048}
          castShadow
        />
      </group>
    );
  };

  const mouse = useRef({ x: 0, y: 0 });

  return (
    <>
      <Canvas
        shadows
        gl={{
          preserveDrawingBuffer: true,
          antialias: false,
          // shadowMap:  THREE.PCFSoftShadowMap
          // physicallyCorrectLights: true,
        }}
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

        {/* <spotLight position={[0, 2, 2]} intensity={0.3} castShadow /> */}

        <Lights />
        <OrbitControls
          target={[0, 20, 0]}
          ref={orbitControls}
          autoRotate={JSON.parse(autoRotate)}
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
          {/* <BakeShadows /> */}
          <PreloadBodyTextures />
          {/* {HeadComponents} */}
          <MasterHead
            headProp={head}
            glassesProp={glasses}
            animationState={animationState}
            animationValue={animationValue}
          />

          {/* <RANDOMIZER setBody={setBody} setAccessory={setAccessory} /> */}

          {/* <FINALBODY
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
          /> */}
          <FINALBODY119
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
          />

          {/* <Stacy
            mouse={mouse}
            position={[0, 0, 0]}
            scale={[0.08, 0.08, 0.08]}
          /> */}

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
        animationState={animationState}
        animationValue={animationValue}
        setAnimationState={setAnimationState}
        setAnimationValue={setAnimationValue}
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
