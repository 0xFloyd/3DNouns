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
  Circle,
  Environment,
  Html,
  OrbitControls,
  Sky,
  Stage,
  useGLTF,
} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import RabbitModel from 'RabbitModel';
import CrabModel from 'CrabTest';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from './assets/nouns-logo.svg';
import useReflector from './shaders/useReflector';
import './shaders/materials/ReflectorMaterial';
import Svg from 'Svg';
import NounsLogo from 'NounsLogo';
import { Water } from 'three-stdlib';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

extend({ Water });

const dummy = new THREE.Vector3();
const lookAtPos = new THREE.Vector3(0, 2, 0);

const Ocean = () => {
  const ref = useRef();

  // this is the renderer
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
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
    (state, delta) => (ref.current.material.uniforms.time.value += 0.005)
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

function Thing() {
  const ref = useRef();
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  const [zoom, setZoom] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setZoom((zoom) => !zoom);
  //   }, 2000);
  // }, [zoom]);

  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 10 : 42,
      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10),
      step
    );

    lookAtPos.x = Math.sin(state.clock.getElapsedTime() * 2);

    state.camera.lookAt(lookAtPos);
    state.camera.updateProjectionMatrix();
  });

  return <mesh></mesh>;
}

function MyCamera(props) {
  // This one makes the camera move in and out
  // useFrame(({ clock, camera }) => {
  //   camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30;
  // });
  // return null;
  const { gl, scene, camera, size } = useThree();
  useEffect(() => {
    props.setCurrentCameraPosition(camera.position);
    console.log(camera.position);
    // camera.position.x = 0;
    // camera.position.y = 0.5;
    // camera.position.z = 0.5;

    // // camera.lookAt(lookAtPos);
    // camera.near = 0.1;
    // camera.far = 100;
  });
  useFrame((state) => {
    props.setCurrentCameraPosition(camera.position);
  });

  return null;
}

// function Model(props) {
//   const [meshRef, reflectorProps, passes] = useReflector();
//   return (
//     <>
//       <Circle
//         ref={meshRef}
//         args={[12.75, 36, 36]}
//         rotation-x={-Math.PI / 2}
//         position={[0, 0, 0]}
//       >
//         <reflectorMaterial
//           transparent
//           opacity={0.5}
//           color="black"
//           metalness={0.95}
//           roughness={1}
//           {...reflectorProps}
//         />
//       </Circle>
//     </>
//   );
// }

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState('block');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);

  const orbitControls = useRef();

  const [head, setHead] = useState('crab'); //crab
  const [glasses, setGlasses] = useState('blue'); //blue
  const [body, setBody] = useState('lightblue'); //lightblue
  const [pants, setPants] = useState('black'); //black
  const [feet, setFeet] = useState('white'); //white

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
        <fog attach="fog" args={[0xa0a0a0, 1, 10]} />

        {/* <Sky sunPosition={[-100, 20, 100]} /> */}

        <ambientLight castShadow intensity={0.8} />

        {/* <spotLight position={[0, 2, 2]} intensity={0.3} castShadow /> */}

        <directionalLight
          position={[0, 0.5, 0.2]}
          castShadow
          intensity={0.8}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        /> */}
        {/* <spotLight
          position={[0, 5, 1]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        /> */}
        {/* <gridHelper
          args={[50, 20, new THREE.Color(0xf316bd), new THREE.Color(0xf316bd)]}
          position={[0, -5, 0]}
        /> */}
        {/* <mesh receiveShadow position={[0, -5.5, 0]}>
          <boxBufferGeometry args={[30, 1, 30]} />
          <meshStandardMaterial color={new THREE.Color(0x000000)} />
        </mesh> */}
        {/* <Thing /> */}
        <OrbitControls
          target={[0, 0.2, 0]}
          ref={orbitControls}
          autoRotate={props.autoRotate}
          enablePan={true}
          enableDamping={true}
          maxPolarAngle={Math.PI / 2.05}
          maxDistance={5}
          minDistance={0.325}
        />
        <mesh receiveShadow position={[0, -0.025, 0]}>
          <boxBufferGeometry args={[100, 0.05, 100]} />

          <meshStandardMaterial
            color={new THREE.Color(0xffffff)
              .setHex(0xffffff)
              .convertSRGBToLinear()}
          />
        </mesh>
        {/* <cylinderBufferGeometry args={[2, 1, 20, 32]} /> */}
        {/* <meshPhongMaterial
            color={new THREE.Color('#000000')
              .setHex(0x000000)
              .convertSRGBToLinear()}
            shininess={25} */}

        <gridHelper
          args={[50, 200, new THREE.Color(0x282828), new THREE.Color(0x282828)]}
          position={[0, 0, 0]}
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
        <Suspense fallback={null}>
          {/* <Model position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> */}

          <RabbitModel
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            feet={feet}
          />
          <CrabModel
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            feet={feet}
          />
          <NounsLogo />
          {/* <Ocean /> */}
          {/* <Ground /> */}
          {/* <Environment preset="city" /> */}
        </Suspense>
        {/* <Svg /> */}
      </Canvas>
      <div className="options-container">
        <div
          style={{
            textAlign: 'end',
          }}
        >
          <span
            style={{
              cursor: 'pointer',
              padding: '0px',
              fontSize: '1rem',
            }}
            onClick={() =>
              setOptionsVisibility(
                optionsVisibility === 'block' ? 'none' : 'block'
              )
            }
          >
            <button style={{ border: 'none' }}>
              {optionsVisibility === 'block' ? 'hide' : 'show'}
            </button>
          </span>
        </div>
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
              <Col xs={4}>
                <select
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  name="cars"
                  id="cars"
                  form="carform"
                >
                  <option value="crab">Crab</option>
                  <option value="rabbit">Rabbit</option>
                </select>
              </Col>
            </Row>
            {/*  Glasses */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className="white-font">Glasses</label>
              </Col>
              <Col xs={4}>
                <select
                  value={glasses}
                  onChange={(e) => setGlasses(e.target.value)}
                  name="cars"
                  id="cars"
                  form="carform"
                >
                  <option value="orange">Orange</option>
                  <option value="blue">Blue</option>
                </select>
              </Col>
            </Row>

            {/*  Body */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className="white-font">Body</label>
              </Col>
              <Col xs={4}>
                <select
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  name="cars"
                  id="cars"
                  form="carform"
                >
                  <option value="purple">Purple</option>
                  <option value="lightblue">Light Blue</option>
                </select>
              </Col>
            </Row>
            {/*  Pants */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className="white-font">Pants</label>
              </Col>
              <Col xs={4}>
                <select
                  value={pants}
                  onChange={(e) => setPants(e.target.value)}
                  name="cars"
                  id="cars"
                  form="carform"
                >
                  <option value="grey">Grey</option>
                  <option value="black">Black</option>
                </select>
              </Col>
            </Row>
            {/*  Feet */}
            <Row>
              <Col xs={4}>
                <label className="white-font">Feet</label>
              </Col>
              <Col xs={4}>
                <select
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  name="cars"
                  id="cars"
                  form="carform"
                >
                  <option value="white">White</option>
                  {/* <option value="rabbit">rabbit</option> */}
                </select>
              </Col>
            </Row>
            <div className="checkbox" style={{ marginTop: '10px' }}>
              <label>
                <span className="white-font" style={{ marginRight: '3px' }}>
                  Auto Rotate
                </span>
              </label>
              <input
                type="checkbox"
                id="checkbox1"
                className="checkbox style-2 pull-right"
                checked={props.autoRotate}
                onClick={(e) => props.setAutoRotate(e.target.checked)}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <span>Hold click/ swipe to rotate</span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <span>Scroll/ Pinch to zoom</span>
            </div>
          </Container>
          {/* <p>{currentCameraPosition.x}</p>
          <p>{currentCameraPosition.y}</p>
          <p>{currentCameraPosition.z}</p> */}
        </div>
      </div>
      <div className="logo-container">
        <img className="nouns-logo" src={logo} alt="NOUNS" />
      </div>
      <div className="credit-container">
        <span style={{ marginRight: '20px' }}>
          <a href="https://nouns.wtf">nouns.wtf</a> ❤️ by{' '}
          <a href="https://twitter.com/0xFloyd">0xFloyd</a>
        </span>
      </div>
    </>
  );
};

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

export default NounCanvas;
