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
  Loader,
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
import Svg from './assets/World/Svg';
import NounsLogo from 'NounsLogo';
import { Water } from 'three-stdlib';
import ProgressLoader from 'Loader';
import { slide as Menu } from 'react-burger-menu';
import Bonsai from 'assets/FullBodyNouns/Bonsai';
import Cloud from 'assets/FullBodyNouns/Cloud';
import Computer from 'assets/FullBodyNouns/Computer';
import Crab from 'assets/FullBodyNouns/Crab';
import Mixer from 'assets/FullBodyNouns/Mixer';
import Pirate from 'assets/FullBodyNouns/Pirate';
import Rabbit from 'assets/FullBodyNouns/Rabbit';
import {
  bodyAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
} from 'attributes';

const dummy = new THREE.Vector3();
const lookAtPos = new THREE.Vector3(0, 2, 0);

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState('block');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);

  const orbitControls = useRef();

  const [head, setHead] = useState(
    headAttributes[Math.floor(Math.random() * headAttributes.length)].value
  ); //crab
  const [glasses, setGlasses] = useState(
    glassesAttributes[Math.floor(Math.random() * headAttributes.length)].value
  ); //blue
  const [body, setBody] = useState(
    bodyAttributes[Math.floor(Math.random() * headAttributes.length)].value
  ); //lightblue
  const [pants, setPants] = useState(
    pantsAttributes[Math.floor(Math.random() * headAttributes.length)].value
  ); //black
  const [shoes, setShoes] = useState(
    shoesAttributes[Math.floor(Math.random() * headAttributes.length)].value
  ); //white

  const generateRandomNoun = () => {
    setHead(
      headAttributes[Math.floor(Math.random() * headAttributes.length)].value
    );
    setGlasses(
      glassesAttributes[Math.floor(Math.random() * headAttributes.length)].value
    );
    setBody(
      bodyAttributes[Math.floor(Math.random() * headAttributes.length)].value
    );
    setPants(
      pantsAttributes[Math.floor(Math.random() * headAttributes.length)].value
    );
    setShoes(
      shoesAttributes[Math.floor(Math.random() * headAttributes.length)].value
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
        <fog attach='fog' args={[0xa0a0a0, 1, 5]} />

        {/* <Sky sunPosition={[-100, 20, 100]} /> */}

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
        <mesh receiveShadow position={[0, -0.025, 0]}>
          <boxBufferGeometry args={[25, 0.05, 25]} />

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
        <Suspense fallback={<ProgressLoader />}>
          {/* <Model position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> */}

          {/* <RabbitModel
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
          /> */}

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

          <NounsLogo />
          {/* <Ocean /> */}
          {/* <Ground /> */}
          {/* <Environment preset="city" /> */}
        </Suspense>
        {/* <Svg /> */}
      </Canvas>
      <div className='options-container'>
        <div
          style={{
            textAlign: 'end',
          }}
        >
          <span
            style={{
              cursor: 'pointer',
              padding: '0px',
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
          className='options-controls'
          style={{ display: optionsVisibility }}
        >
          {/* <h4 className="white-font" style={{ textAlign: 'center' }}>
            Settings
          </h4> */}
          {/*  Head */}
          <Container fluid>
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className='white-font'>Head</label>
              </Col>
              <Col xs={4}>
                <select
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  name='cars'
                  id='cars'
                  form='carform'
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
                <label className='white-font'>Glasses</label>
              </Col>
              <Col xs={4}>
                <select
                  value={glasses}
                  onChange={(e) => setGlasses(e.target.value)}
                  name='cars'
                  id='cars'
                  form='carform'
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
                <label className='white-font'>Body</label>
              </Col>
              <Col xs={4}>
                <select
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  name='cars'
                  id='cars'
                  form='carform'
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
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={4}>
                <label className='white-font'>Pants</label>
              </Col>
              <Col xs={4}>
                <select
                  value={pants}
                  onChange={(e) => setPants(e.target.value)}
                  name='cars'
                  id='cars'
                  form='carform'
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
            <Row>
              <Col xs={4}>
                <label className='white-font'>Shoes</label>
              </Col>
              <Col xs={4}>
                <select
                  value={shoes}
                  onChange={(e) => setShoes(e.target.value)}
                  name='cars'
                  id='cars'
                  form='carform'
                >
                  {shoesAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <div className='checkbox' style={{ marginTop: '10px' }}>
              <label>
                <span className='white-font' style={{ marginRight: '3px' }}>
                  Auto Rotate
                </span>
              </label>
              <input
                type='checkbox'
                id='checkbox1'
                className='checkbox style-2 pull-right'
                checked={props.autoRotate}
                onChange={(e) => props.setAutoRotate(e.target.checked)}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => generateRandomNoun()}>
                Generate Random Noun
              </button>
            </div>
            {/* <div style={{ marginTop: '10px' }}>
              <span>Hold click/ swipe to rotate</span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <span>Scroll/ Pinch to zoom</span>
            </div> */}
          </Container>
          {/* <p>{currentCameraPosition.x}</p>
          <p>{currentCameraPosition.y}</p>
          <p>{currentCameraPosition.z}</p> */}
        </div>
      </div>

      <Menu right>
        <div style={{ height: '100px', width: '200px' }}>hey</div>
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
      </Menu>

      <div className='logo-container'>
        <a href='https://nouns.wtf'>
          <img className='nouns-logo' src={logo} alt='NOUNS' />
        </a>
      </div>
      <div className='credit-container'>
        <span style={{ marginRight: '20px' }}>
          <a href='https://nouns.wtf'>nouns.wtf</a> ❤️ by{' '}
          <a href='https://twitter.com/0xFloyd'>0xFloyd</a> and{' '}
          <a href='https://twitter.com/coralorca'>CoralOrca</a>
        </span>
      </div>
    </>
  );
};

export default NounCanvas;
