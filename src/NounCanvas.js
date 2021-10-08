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
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import logo from './assets/nouns-logo.svg';
import useReflector from './shaders/useReflector';
import './shaders/materials/ReflectorMaterial';
import Svg from './assets/World/Svg';
import NounsLogo from 'NounsLogo';
import { GLTFExporter } from 'three-stdlib';
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
  environmentAttributes,
  accessoryAttributes,
} from 'attributes';
import Shark from 'assets/FullBodyNouns/Shark';
import { TextureLoader } from 'three';
import AllNouns from 'assets/FullBodyNouns/AllNouns';
import { isMobile } from 'react-device-detect';
import Ocean from 'Components/Ocean';
import Footer from 'Footer';
import Header from 'Header';
import Environment from 'Components/Environment';
import MenuOptions from 'MenuOptions';

const lookAtPos = new THREE.Vector3(0, 2, 0);

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState('none');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1250);
  const [environment, setEnvironment] = useState('Normal');
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
  const modelDownloadMesh = useRef();
  // const exporter = new GLTFExporter();

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

  function exportGLTF(input) {
    const gltfExporter = new GLTFExporter();

    const options = {
      onlyVisible: true,
    };

    let holder = modelDownloadMesh.current;

    gltfExporter.parse(
      holder,
      function (result) {
        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, 'scene.glb');
        } else {
          const output = JSON.stringify(result, null, 2);
          console.log(output);
          saveString(output, 'scene.gltf');
        }
      },
      options
    );
  }

  return (
    <>
      <Header />
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

        {environment === 'Normal' && (
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
          // maxPolarAngle={Math.PI / 2.05}
          // maxDistance={5}
          // minDistance={0.325}
        />

        <Environment environment={environment} />

        <Suspense fallback={<ProgressLoader />}>
          {environment === 'Ocean' && <Sky sunPosition={[-100, 20, 100]} />}
          {environment === 'Ocean' && <Ocean />}
          {/* {environment === 'Ocean' && <Ground />} */}
          {/* <Model position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> */}

          {/* <Bonsai
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            feet={feet}
          /> */}
          <group ref={modelDownloadMesh}>
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
          </group>

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

      <MenuOptions
        isDesktop={isDesktop}
        optionsVisibility={optionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
        head={head}
        setHead={setHead}
        glasses={glasses}
        setGlasses={setGlasses}
        body={body}
        setBody={setBody}
        accessory={accessory}
        setAccessory={setAccessory}
        pants={pants}
        setPants={setPants}
        shoes={shoes}
        setShoes={setShoes}
        environment={environment}
        setEnvironment={setEnvironment}
        autoRotate={props.autoRotate}
        setAutoRotate={props.setAutoRotate}
        generateRandomNoun={generateRandomNoun}
        exportGLTF={exportGLTF}
      />

      <Footer isDesktop={isDesktop} optionsVisibility={optionsVisibility} />
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

{
  /* <div style={{ marginTop: '10px' }}>
              <span>Hold click/ swipe to rotate</span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <span>Scroll/ Pinch to zoom</span>
            </div> */
}

// functions from threejs repo --> https://github.com/mrdoob/three.js/blob/b5c272cf408cb33153190fa715d81581bd95ee47/examples/misc_exporter_gltf.html#L105
function saveArrayBuffer(buffer, filename) {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

function saveString(text, filename) {
  save(new Blob([text], { type: 'text/plain' }), filename);
}

function save(blob, filename) {
  let link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link); // Firefox workaround, see #6594
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();

  // URL.revokeObjectURL( url ); breaks Firefox...
}
