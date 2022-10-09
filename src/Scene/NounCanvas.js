import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Html, OrbitControls, PerspectiveCamera, useHelper, useProgress, useTexture } from '@react-three/drei';
import logo from '../assets/images/3DNounsLogo.png';
import NormalEnvironment from 'Scene/NormalEnvironment';
import data from '../data.json';
import NounHolder from 'Scene/NounHolder';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { isDesktop } from 'react-device-detect';
import ThreeDLogo from 'Scene/ThreeDNounsLogo';
import '../styles/ProgressLoader.css';
import Menu from 'components/Menu/Menu';
import { saveArrayBuffer, saveScreenshot, saveString } from 'utils/utils';
import Lighting from 'Scene/Lighting';

const NounCanvas = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  const [autoRotate, setAutoRotate] = useState(false);
  const [deviceState, setDeviceState] = useState(isDesktop);
  const [environment, setEnvironment] = useState('Normal');
  const [animationState, setAnimationState] = useState(false);
  const [showDirections, setShowDirections] = useState(true);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [downloadingModel, setDownloadingModel] = useState(false);
  const [sceneState, setSceneState] = useState(null);
  const [head, setHead] = useState(data.head[Math.floor(Math.random() * data.head.length)].name);
  const [glasses, setGlasses] = useState(data.glasses[Math.floor(Math.random() * data.glasses.length)].name);
  const [body, setBody] = useState(data.body[Math.floor(Math.random() * data.body.length)].name);
  const [accessory, setAccessory] = useState(data.accessory[Math.floor(Math.random() * data.accessory.length)].name);
  const [pants, setPants] = useState(data.pants[Math.floor(Math.random() * data.pants.length)].name);
  const [shoes, setShoes] = useState(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
  const [animationValue, setAnimationValue] = useState(
    data.animations.find((animation) => animation.name === 'none').name
  );

  const orbitControls = useRef();
  const modelDownloadMeshForward = useRef();
  const cameraRef = useRef();

  const downloadModel = () => {
    const gltfExporter = new GLTFExporter();

    const fullScene = sceneState;
    // let hiddenDownloadNoun = temporaryModel.current;
    let hiddenDownloadNoun = modelDownloadMeshForward.current;

    let currentNoun = fullScene?.scene?.children[1];
    let animations = [];

    const options = {
      onlyVisible: false,
    };
    gltfExporter.parse(
      hiddenDownloadNoun,
      function (result) {
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

  const saveAsImage = () => {
    var imgData, imgNode;
    try {
      var strMime = 'image/jpeg';
      imgData = sceneState.gl.domElement.toDataURL(strMime, 1.0);

      saveScreenshot(imgData.replace(strMime, 'image/octet-stream'), '3DNoun.jpg');
    } catch (e) {
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    preloadAllAssets();

    function updateMedia() {
      setDeviceState(isDesktop);
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const runOnce = useRef(true);

  useEffect(() => {
    if (!showDirections && loaded && runOnce.current) {
      setAnimationState(true);
      setAnimationValue('idle');
      runOnce.current = false;
    }
  }, [showDirections, loaded]);

  return (
    <>
      <Canvas
        shadows
        mode="concurrent"
        gl={{
          powerPreference: 'high-performance',
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
      >
        <PerspectiveCamera
          makeDefault
          name="PerspectiveCamera"
          ref={cameraRef}
          position={[-20, 40, 70]}
          near={0.1}
          far={1500}
        />
        <Lighting environmentParam={environment} />
        <OrbitControls
          target={[0, 20, 0]}
          ref={orbitControls}
          autoRotate={JSON.parse(autoRotate)}
          enablePan={false}
          enableDamping={true}
          maxPolarAngle={Math.PI / 1.85}
          maxDistance={90}
          minDistance={20}
        />
        <Suspense fallback={null}>
          <NormalEnvironment environment={environment} />
          <ThreeDLogo environment={environment} />
        </Suspense>
        {active || !loaded ? (
          <Html center>
            <p style={{ color: 'white', fontSize: '2rem' }}>Loading...</p>
          </Html>
        ) : null}
        <Suspense fallback={null}>
          {!showScreenshotModal && loaded ? (
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
          ) : null}
        </Suspense>
      </Canvas>

      <>
        <Menu
          isDesktop={deviceState}
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
          animationState={animationState}
          animationValue={animationValue}
          setAnimationState={setAnimationState}
          setAnimationValue={setAnimationValue}
          downloadModel={downloadModel}
          downloadingModel={downloadingModel}
          setDownloadingModel={setDownloadingModel}
          // setSceneState={setSceneState}
          showScreenshotModal={showScreenshotModal}
          setShowScreenshotModal={setShowScreenshotModal}
          saveAsImage={saveAsImage}
        />
        {showDirections && (
          <div className="blocker" onClick={() => setShowDirections(false)}>
            <div className="directions-popup">
              <h2 style={{ color: '#d63c5e' }}>Directions: </h2>
              <h4>{`${isDesktop ? 'CLICK' : 'TOUCH'} AND DRAG TO ROTATE`}</h4>
              <h4>{`${isDesktop ? 'SCROLL WHEEL' : 'PINCH'} TO ZOOM`}</h4>
              <div className="close-directions-container">
                <button className="menu-button" onClick={() => setShowDirections(false)}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="logo-container">
          <a href="https://3dnouns.com">
            <img className="nouns-logo" src={logo} alt="NOUNS" />
          </a>
          {/* <button onClick={() => setMoveCamera(true)}>hey</button> */}
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default NounCanvas;

const preloadAllAssets = () => {
  // data.head.forEach((headData) => {
  //   useGLTF.preload(`/headModels/${headData.filePath}`);
  // });

  data.body.forEach((bodyObj) => {
    useTexture.preload(`/textures/body/${bodyObj.value}`);
  });
  data.accessory.forEach((accessoryObj) => {
    useTexture.preload(`/textures/accessories/${accessoryObj.value}`);
  });

  // data.pants.forEach((pantsObj) => {
  //   useTexture.preload(`/textures/pants/${pantsObj.value}`);
  // });

  // data.shoes.forEach((shoeObj) => {
  //   useTexture.preload(`/textures/shoes/${shoeObj.value}`);
  // });

  // data.glasses.forEach((glassesObj) => {
  //   useTexture.preload(`/textures/glasses/${glassesObj.value}`);
  // });
};
