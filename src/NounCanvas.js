import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import * as THREE from 'three';
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Environment,
  OrbitControls,
  Stage,
  Stats,
  useGLTF,
  useHelper,
  useProgress,
  useTexture,
} from '@react-three/drei';
import { Col, Container, Row } from 'react-bootstrap';
import logo from './assets/nouns-logo.svg';
import './shaders/materials/ReflectorMaterial';
import NounsLogo from 'World/NounsLogo';
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
import MasterHead from 'utils/MasterHead';
import FINALBODY119 from 'assets/FullBodyNouns/FINALBODY119';
import RANDOMIZER from 'RANDOMIZER';
import MatrixEnvironment from 'World/Matrix';
// import { GLTFExporter } from 'three-stdlib';
import NounHolder from 'NounHolder';
import HorizontalNounsLogo from 'World/HorizontalNounsLogo';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import DownloadNoun from 'DownloadNoun';
import MenuTwo from 'MenuTwo';
import { isDesktop } from 'react-device-detect';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const NounCanvas = () => {
  // 11/5/21 DELETE WHEN ALL ACCESSORIES

  preloadAllAssets();

  const [optionsVisibility, setOptionsVisibility] = useState('none');
  const [autoRotate, setAutoRotate] = useState('false');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [deviceState, setDeviceState] = useState(isDesktop);
  const [environment, setEnvironment] = useState('Normal');
  const [wireframeOption, setWireframeOption] = useState(null);
  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [animationValue, setAnimationValue] = useState(
    data.animations.find((animation) => animation.name === 'idle').name
  );
  const [downloadingModel, setDownloadingModel] = useState(false);
  const [lockedTraits, setLockedTraits] = useState({
    head: false,
    glasses: false,
    body: false,
    accessory: false,
    pants: false,
    shoes: false,
  });
  const [sceneState, setSceneState] = useState(null);

  const [head, setHead] = useState(
    data.tempHeads[Math.floor(Math.random() * data.tempHeads.length)].name
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
    data.tempAccessories[
      Math.floor(Math.random() * data.tempAccessories.length)
    ].name
  );
  // const [accessory, setAccessory] = useState(
  //   data.accessory[Math.floor(Math.random() * data.accessory.length)].value
  // );

  const [pants, setPants] = useState(
    data.pants[Math.floor(Math.random() * data.pants.length)].name
  );
  const [shoes, setShoes] = useState(
    data.shoes[Math.floor(Math.random() * data.shoes.length)].name
  );

  const orbitControls = useRef();

  useEffect(() => {
    function updateMedia() {
      setDeviceState(isDesktop);
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const generateRandomNoun = () => {
    if (!lockedTraits.head) {
      setHead(
        data.tempHeads[Math.floor(Math.random() * data.tempHeads.length)].name
      );
      // setHead(data.head[Math.floor(Math.random() * data.head.length)].name);
    }

    if (!lockedTraits.glasses) {
      setGlasses(
        data.glasses[Math.floor(Math.random() * data.glasses.length)].value
      );
    }
    if (!lockedTraits.body) {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
    }

    if (!lockedTraits.accessory) {
      setAccessory(
        data.tempAccessories[
          Math.floor(Math.random() * data.tempAccessories.length)
        ].name
      );
      // setAccessory(
      //   data.accessory[Math.floor(Math.random() * data.accessory.length)].value
      // );
    }

    if (!lockedTraits.pants) {
      setPants(data.pants[Math.floor(Math.random() * data.pants.length)].name);
    }
    if (!lockedTraits.shoes) {
      setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
    }
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
    // useHelper(light, DirectionalLightHelper, 'cyan');
    // useHelper(spotLight, SpotLightHelper, 'red');
    // useHelper(hemiLight, HemisphereLightHelper, 'blue');

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

  const VideoLights = () => {
    const light = useRef();
    const spotLight = useRef();
    const hemiLight = useRef();
    // useHelper(light, DirectionalLightHelper, 'cyan');
    // useHelper(spotLight, SpotLightHelper, 'red');
    // useHelper(hemiLight, HemisphereLightHelper, 'blue');
    const d = 5;

    return (
      <>
        {/* <color attach="background" args={['#101010']} /> */}
        {/* <fog attach="fog" args={['#101010', 1, 500]} /> */}
        <group>
          <ambientLight intensity={0.33} />
          {/* <spotLight
          intensity={0.8}
          ref={spotLight}
          position={[-10, 300, 300]}
          castShadow
          color={new THREE.Color(0xffa95c)}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        /> */}
          {/* <hemisphereLight
          skyColor={new THREE.Color(0xffffbb)}
          groundColor={new THREE.Color(0x080820)}
          intensity={0.75}
          castShadow
        /> */}
          {/* <directionalLight
          ref={light}
          color={new THREE.Color(0xffa95c)}
          position={[-5, 50, 100]}
          castShadow
          intensity={0.5}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        /> */}
          {/* <hemisphereLight
          skyColor={'black'}
          groundColor={0xffffff}
          intensity={0.5}
          position={[0, 500, 0]}
          ref={hemiLight}
        /> */}
          <directionalLight
            // color={0xffffbb}
            ref={light}
            intensity={0.55}
            position={[-100, 500, 500]}
            shadow-camera-left={d * -100}
            shadow-camera-bottom={d * -100}
            shadow-camera-right={d * 100}
            shadow-camera-top={d * 100}
            shadow-camera-near={10}
            shadow-camera-far={5000}
            shadow-bias={-0.0001}
            shadow-mapSize-height={4096}
            shadow-mapSize-width={4096}
            castShadow
          />
        </group>
      </>
    );
  };

  const downloadModel = () => {
    const gltfExporter = new GLTFExporter();

    const fullScene = sceneState;
    let hiddenDownloadNoun = temporaryModel.current;
    let currentTest = modelDownloadMeshForward.current;
    // console.log('fule scene: ', holder);
    console.log('current group object: ', fullScene);

    let currentNoun = fullScene?.scene?.children[1];
    let animations = [];
    // for (let i = 0; i < fullScene.children.length; i++) {
    //   const a = fullScene.children[i].animations;
    //   if (a) {
    //     animations = animations.concat(a);
    //     console.log('animation found!');
    //   }
    // }
    // Only download the visible objects, since there are invisible based on user selection
    const options = {
      onlyVisible: false,
    };
    gltfExporter.parse(
      hiddenDownloadNoun,
      function (result) {
        // saveArrayBuffer(result, "Model.glb")

        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, 'Model.glb');
        } else {
          const output = JSON.stringify(result, null, 2);
          saveString(output, 'Model.gltf');
          setDownloadingModel(false);
          setAnimationState(false);
          setAnimationValue('none');
        }
      },
      options
    );
  };

  const modelDownloadMeshForward = useRef();

  const temporaryModel = useRef();

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
        {environment === 'Normal' && <NormalEnvironment />}

        {/* <Lights /> */}
        <VideoLights />

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

        <Suspense fallback={<ProgressLoader />}>
          {environment === 'Island' && <OceanEnvironment />}
          {environment === 'Matrix' && <MatrixEnvironment />}

          <fog
            attach="fog"
            args={[environment === 'Matrix' ? 0x000000 : 0xa0a0a0, 1, 500]}
          />
          {/* <BakeShadows /> */}
          {/* <PreloadBodyTextures /> */}
          {/* {HeadComponents} */}

          {/* <RANDOMIZER setBody={setBody} setAccessory={setAccessory} /> */}

          {/* <FINALBODY
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
          /> */}

          <NounHolder
            headProp={head}
            glassesProp={glasses}
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
            setSceneState={setSceneState}
            ref={modelDownloadMeshForward}
          />

          <DownloadNoun
            headProp={head}
            glassesProp={glasses}
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
            setSceneState={setSceneState}
            ref={temporaryModel}
          />

          {/* <group ref={modelDownloadMesh}>
            <MasterHead
              headProp={head}
              glassesProp={glasses}
              animationState={animationState}
              animationValue={animationValue}
            />
            <FINALBODY119
              animationState={animationState}
              animationValue={animationValue}
              pantsProp={pants}
              accessoryProp={accessory}
              bodyProp={body}
              shoeProp={shoes}
            />
          </group> */}
          <HorizontalNounsLogo environment={environment} />
          <NounsLogo environment={environment} />
        </Suspense>
        <Stats showPanel={0} className="stats" />
      </Canvas>

      <MenuTwo
        isDesktop={deviceState}
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
        downloadModel={downloadModel}
        downloadingModel={downloadingModel}
        setDownloadingModel={setDownloadingModel}
        lockedTraits={lockedTraits}
        setLockedTraits={setLockedTraits}
      />

      <div className="logo-container">
        <a href="https://nouns.wtf">
          <img className="nouns-logo" src={logo} alt="NOUNS" />
        </a>
      </div>

      {/* {!isDesktop && optionsVisibility === 'block' ? null : (
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
      )} */}
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

const preloadAllAssets = () => {
  data.tempHeads.forEach((headData) => {
    useGLTF.preload(`/headModels/${headData.filePath}`);
  });

  data.body.forEach((bodyObj) => {
    useTexture.preload(`/textures/body/${bodyObj.value}`);
  });
  data.accessory.forEach((accessoryObj) => {
    useTexture.preload(`/textures/accessories/${accessoryObj.value}`);
  });

  data.pants.forEach((pantsObj) => {
    useTexture.preload(`/textures/pants/${pantsObj.value}`);
  });

  data.shoes.forEach((shoeObj) => {
    useTexture.preload(`/textures/shoes/${shoeObj.value}`);
  });

  data.glasses.forEach((glassesObj) => {
    useTexture.preload(`/textures/glasses/${glassesObj.value}`);
  });
};

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

{
  /* <MyCamera
          setCurrentCameraPosition={setCurrentCameraPosition}
          orbitControls={orbitControls}
        /> */
}
{
  /* <Html>
        <div style={{ position: "absolute", top: 200, left: 200 }}>
          {" "}
          <button onClick={() => setFarAway(!farAway)}>click</button>
        </div>
      </Html> */
}

{
  /* <cylinderBufferGeometry args={[2, 1, 20, 32]} /> */
}
{
  /* <meshStandardMaterial
            color={new THREE.Color('#d63c5e')
              .setHex(0xd63c5e)
              .convertSRGBToLinear()}
          /> */
}
{
  /* <meshPhysicalMaterial
            color={new THREE.Color('#d63c5e')
              .setHex(0xd63c5e)
              .convertSRGBToLinear()}
          /> */
}
