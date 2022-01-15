import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  OrbitControls,
  Stats,
  useGLTF,
  useHelper,
  useProgress,
  useTexture,
} from '@react-three/drei';
import logo from './assets/images/3DNounsLogoSVG.svg';
import { TextureLoader } from 'three';

import NormalEnvironment from 'World/NormalEnvironment';
import data from './data.json';
import { headComponents } from 'utils/AllHeadModels';
import RANDOMIZER from 'past-ideas/RANDOMIZER';
import NounHolder from 'NounHolder';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import Menu from 'components/Menu';
import { isDesktop } from 'react-device-detect';
import ThreeDLogo from 'World/ThreeDNounsLogo';
import './styles/ProgressLoader.css';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const NounCanvas = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  const [optionsVisibility, setOptionsVisibility] = useState('block');
  const [autoRotate, setAutoRotate] = useState('false');
  const [deviceState, setDeviceState] = useState(isDesktop);
  const [environment, setEnvironment] = useState('Normal');
  const [animationState, setAnimationState] = useState(false);
  const [showDirections, setShowDirections] = useState(true);
  const [randomizerOn, setRandomizerOn] = useState(false);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
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
  const [pants, setPants] = useState(
    data.pants[Math.floor(Math.random() * data.pants.length)].name
  );
  const [shoes, setShoes] = useState(
    data.shoes[Math.floor(Math.random() * data.shoes.length)].name
  );

  const orbitControls = useRef();
  const modelDownloadMeshForward = useRef();
  const temporaryModel = useRef();
  const GlassesLogo = useRef();

  useEffect(() => {
    preloadAllAssets();

    function updateMedia() {
      setDeviceState(isDesktop);
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const generateRandomNoun = () => {
    if (!lockedTraits.head) {
      setHead(
        data.tempHeads[Math.floor(Math.random() * data.tempHeads.length)].name
      );
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
    }

    if (!lockedTraits.pants) {
      setPants(data.pants[Math.floor(Math.random() * data.pants.length)].name);
    }
    if (!lockedTraits.shoes) {
      setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
    }
  };

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

  const Lighting = ({ environmentParam }) => {
    const light = useRef();
    const spotLight = useRef();
    const logoLightRef = useRef();

    const logoLight = new THREE.SpotLight(0xffffff);
    // logoLight.intensity = 3;
    // useHelper(refTwo, DirectionalLightHelper, 'cyan');
    useHelper(logoLightRef, THREE.SpotLightHelper, 'red');
    // useHelper(hemiLight, HemisphereLightHelper, 'blue');
    const d = 5;

    return (
      <>
        <group>
          <ambientLight
            intensity={environmentParam === 'Matrix' ? 0.35 : 1.35}
          />

          <hemisphereLight
            skyColor={new THREE.Color(0xffffbb)}
            groundColor={new THREE.Color(0x080820)}
            intensity={environmentParam === 'Matrix' ? 0.85 : 1.85}
          />
          {/* <primitive
            ref={logoLightRef}
            object={logoLight}
            position={[75, 10, -75]}
            // rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
          />
          <primitive object={logoLight.target} position={[150, 10, -150]} /> */}

          {environmentParam === 'Matrix' ? (
            <spotLight
              penumbra={1}
              distance={1000}
              angle={0.35}
              attenuation={1}
              anglePower={4}
              intensity={500}
              position={[0, 200, 0]}
              castShadow
              color={new THREE.Color(0xffa95c)}
              // lookAt={[100, 0, -200]}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-bias={-0.0001}
            />
          ) : null}

          <directionalLight
            // color={0xffffbb}
            ref={light}
            intensity={environmentParam === 'Matrix' ? 0 : 1.35}
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

      saveScreenshot(
        imgData.replace(strMime, 'image/octet-stream'),
        '3DNoun.jpg'
      );
    } catch (e) {
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    if (!showDirections && loaded) {
      setAnimationState(true);
      setAnimationValue('idle');
    }
  }, [showDirections, loaded]);

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
        // camera={{ near: 0.1, far: 5000 }} // https://github.com/pmndrs/react-three-fiber/issues/67
        onCreated={({ camera }) => {
          camera.position.x = 0;
          camera.position.y = 32;
          camera.position.z = 48;
          camera.lookAt(lookAtPos);
          camera.updateProjectionMatrix();
          // camera.fov =
        }}
      >
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
          {/* <Suspense fallback={<ProgressLoader />}> */}
          {/* {environment === 'Normal' && (
            <NormalEnvironment environment={environment} />
          )} */}

          <NormalEnvironment environment={environment} />

          {/* {environment === 'Island' && <OceanEnvironment />} */}
          {/* {environment === 'Matrix' && <MatrixEnvironment />} */}
          {/* <fog
            attach="fog"
            args={[
              environment === 'Matrix' ? 0x181818 : 0xffffff,
              1,
              environment === 'Matrix' ? 1000 : 1500,
            ]}
          /> */}
          {/* <BakeShadows /> */}
          {/* <PreloadBodyTextures /> */}
          {/* {HeadComponents} */}

          {!showScreenshotModal && (
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
          )}

          {/* <DownloadNoun
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
          /> */}

          <ThreeDLogo environment={environment} ref={GlassesLogo} />
        </Suspense>
        {/* <Stats showPanel={0} className="stats" /> */}
      </Canvas>

      {loaded && (
        <>
          <Menu
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
            randomizerOn={randomizerOn}
            setRandomizerOn={setRandomizerOn}
            // setSceneState={setSceneState}
            showScreenshotModal={showScreenshotModal}
            setShowScreenshotModal={setShowScreenshotModal}
            saveAsImage={saveAsImage}
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
        </>
      )}
    </>
  );
};

export default NounCanvas;

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

const saveScreenshot = (strData, filename) => {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link); //remove the link when done
  }
};
