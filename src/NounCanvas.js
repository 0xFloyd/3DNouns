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
import logo from './assets/3DNounsLogoSVG.svg';
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
import ThreeDLogo from 'ThreeDNounsLogo';
import BillBoard from 'BillBoard';
import SandboxItems from './SandboxItems';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const NounCanvas = () => {
  // 11/5/21 DELETE WHEN ALL ACCESSORIES

  preloadAllAssets();

  const [optionsVisibility, setOptionsVisibility] = useState('block');
  const [autoRotate, setAutoRotate] = useState('false');
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPos);
  const [deviceState, setDeviceState] = useState(isDesktop);
  const [environment, setEnvironment] = useState('Normal');
  const [wireframeOption, setWireframeOption] = useState(null);
  const [walkAnimation, setWalkAnimation] = useState(false);
  const [nodAnimation, setNodAnimation] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [showDirections, setShowDirections] = useState(true);
  const [randomizerOn, setRandomizerOn] = useState(false);
  const [animationValue, setAnimationValue] = useState(
    data.animations.find((animation) => animation.name === 'none').name
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
    setTimeout(() => {
      setShowDirections(false);
    }, 10000);
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

  const VideoLights = (ref) => {
    const light = useRef();
    const spotLight = useRef();
    const logoLightRef = useRef();

    // const logoLight = new THREE.SpotLight(0xffffff);
    // logoLight.intensity = 3;
    // useHelper(refTwo, DirectionalLightHelper, 'cyan');
    // useHelper(logoLightRef, SpotLightHelper, 'red');
    // useHelper(hemiLight, HemisphereLightHelper, 'blue');
    const d = 5;

    // useEffect(() => {
    //   if (logoLight.current && GlassesLogo.current) {
    //     logoLight.current.target = ref.current;
    //     // helper.current.update();
    //   }
    // }, [logoLight, ref]);

    return (
      <>
        {/* <color attach="background" args={['#101010']} /> */}
        {/* <fog attach="fog" args={['#101010', 1, 500]} /> */}
        <group>
          <ambientLight intensity={1.35} />
          {/* <spotLight
            intensity={0.8}
            ref={logoLight}
            position={[100, 0, 200]}
            castShadow
            color={new THREE.Color(0xffa95c)}
            // lookAt={[100, 0, -200]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          /> */}
          <hemisphereLight
            skyColor={new THREE.Color(0xffffbb)}
            groundColor={new THREE.Color(0x080820)}
            intensity={1.85}
          />
          {/* <primitive
            ref={logoLightRef}
            object={logoLight}
            position={[75, 10, -75]}
            // rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
          />
          <primitive object={logoLight.target} position={[150, 10, -150]} /> */}
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
            intensity={1.35}
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

          {/* <directionalLight
            // color={0xffffbb}

            ref={logoLight}
            intensity={0.55}
            position={[0, 30, -100]}
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
          /> */}
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
          saveArrayBuffer(result, 'NounModel.glb');
        } else {
          const output = JSON.stringify(result, null, 2);
          saveString(output, 'NounModel.gltf');
          setDownloadingModel(false);
          setAnimationState(false);
          setAnimationValue('none');
        }
      },
      options
    );
  };

  // const saveAsImage = () => {
  //   var imgData, imgNode;
  //   try {
  //     var strMime = 'image/jpeg';
  //     imgData = sceneState.gl.domElement.toDataURL(strMime, 1.0);

  //     saveScreenshot(
  //       imgData.replace(strMime, 'image/octet-stream'),
  //       '3DNoun.jpg'
  //     );
  //   } catch (e) {
  //     console.log(e);
  //     return;
  //   }
  // };

  const modelDownloadMeshForward = useRef();

  const temporaryModel = useRef();

  const GlassesLogo = useRef();

  return (
    <>
      <Canvas
        shadows
        gl={{
          preserveDrawingBuffer: true,
          // logarithmicDepthBuffer: true,
          antialias: true,
          // pixelRatio: window.devicePixelRatio * 2,
          // premultipliedAlpha: true,
          // shadowMap:  THREE.PCFSoftShadowMap
          // outputEncoding: THREE.sRGBEncoding,
          physicallyCorrectLights: true,
        }}
        dpr={[1, 1.5]}
        // camera={{ position: [5, 5, 5], fov: 55, near: 0.1, far: 100 }} // https://github.com/pmndrs/react-three-fiber/issues/67
        onCreated={({ camera }) => {
          // do things here
          camera.position.x = 0;
          camera.position.y = 32;
          camera.position.z = 48;
          camera.lookAt(lookAtPos);
          camera.updateProjectionMatrix();
          // camera.fov =
        }}
      >
        {/* <Lights /> */}
        <VideoLights GlassesLogo={GlassesLogo} />

        <OrbitControls
          target={[0, 20, 0]}
          ref={orbitControls}
          autoRotate={JSON.parse(autoRotate)}
          enablePan={false}
          enableDamping={true}
          maxPolarAngle={Math.PI / 1.85}
          maxDistance={150}
          minDistance={20}
        />

        <Suspense fallback={<ProgressLoader />}>
          {environment === 'Normal' && <NormalEnvironment />}
          {environment === 'Island' && <OceanEnvironment />}
          {environment === 'Matrix' && <MatrixEnvironment />}
          <fog
            attach="fog"
            args={[
              environment === 'Matrix' ? 0x181818 : 0xffffff,
              1,
              environment === 'Matrix' ? 1000 : 1500,
            ]}
          />
          {/* <BakeShadows /> */}
          {/* <PreloadBodyTextures /> */}
          {/* {HeadComponents} */}
          {randomizerOn && (
            <RANDOMIZER
              setBody={setBody}
              setAccessory={setAccessory}
              setHead={setHead}
              setGlasses={setGlasses}
              setPants={setPants}
              setShoes={setShoes}
            />
          )}
          {/* <FINALBODY
            animationState={animationState}
            animationValue={animationValue}
            pantsProp={pants}
            accessoryProp={accessory}
            bodyProp={body}
            shoeProp={shoes}
          /> */}

          <SandboxItems />

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
          {/* <HorizontalNounsLogo environment={environment} /> */}
          {/* <NounsLogo environment={environment} /> */}
          <ThreeDLogo ref={GlassesLogo} />
        </Suspense>
        {/* <Stats showPanel={0} className="stats" /> */}
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
        // saveAsImage={saveAsImage}
        randomizerOn={randomizerOn}
        setRandomizerOn={setRandomizerOn}
        setSceneState={setSceneState}
      />
      {showDirections && (
        <div className="directions-popup">
          <h2 style={{ color: '#d63c5e' }}>Directions: </h2>
          <h4>{`${isDesktop ? 'CLICK' : 'TOUCH'} AND DRAG TO ROTATE`}</h4>
          <h4>{`${isDesktop ? 'SCROLL WHEEL' : 'PINCH'} TO ZOOM`}</h4>
          <div className="close-directions-container">
            <button
              className="menu-button"
              onClick={() => setShowDirections(false)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <div className="logo-container">
        <a href="https://3dnouns.com">
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

// const saveScreenshot = (strData, filename) => {
//   var link = document.createElement('a');
//   if (typeof link.download === 'string') {
//     document.body.appendChild(link); //Firefox requires the link to be in the body
//     link.download = filename;
//     link.href = strData;
//     link.click();
//     document.body.removeChild(link); //remove the link when done
//   }
// };

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
