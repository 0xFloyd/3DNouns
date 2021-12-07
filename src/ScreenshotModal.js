import { Backdrop, OrbitControls, useHelper } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ProgressLoader from 'Loader';
import NounHolder from 'NounHolder';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { CompactPicker } from 'react-color';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Form } from 'react-bootstrap';
import './styles/slider.css';

const ScreenshotModal = ({
  head,

  body,

  accessory,

  pants,

  glasses,

  shoes,

  animationState,
  animationValue,
  // setSceneScreenshotState,
  setShowScreenshotModal,
}) => {
  const orbitControls = useRef();
  const d = 5;

  const hemisphereLightRef = useRef();

  const [sceneColor, setSceneColor] = useState('#d5d7e1');
  const [hemisphereLightIntensity, setHemisphereLightIntensity] = useState(0.5);
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(2);
  const [sceneScreenshotState, setSceneScreenshotState] = useState(null);

  useEffect(() => {
    // const gui = new GUI();
    // if (gui) {
    //   const folder = gui.addFolder('Light');
    //   // folder.add(lightRef.current, 'intensity', 0, 1, 0.001)
    // }
  }, []);

  const saveAsImage = () => {
    var imgData, imgNode;
    try {
      var strMime = 'image/jpeg';
      imgData = sceneScreenshotState.gl.domElement.toDataURL(strMime, 1.0);

      saveScreenshot(
        imgData.replace(strMime, 'image/octet-stream'),
        '3DNoun.jpg'
      );
    } catch (e) {
      console.log(e);
      return;
    }
  };

  return (
    <div className="screenshot-modal-background">
      <div className="screenshot-modal-container">
        <div className="screenshot-canvas-container">
          <Canvas
            shadows
            gl={{
              preserveDrawingBuffer: true,

              physicallyCorrectLights: true,
            }}
            dpr={[1, 1.5]}
            // camera={{ position: [5, 5, 5], fov: 55, near: 0.1, far: 100 }} // https://github.com/pmndrs/react-three-fiber/issues/67
            onCreated={({ camera }) => {
              // do things here
              camera.position.x = 0;
              camera.position.y = 32;
              camera.position.z = 48;
              // camera.lookAt(new THREE.Vector3(0, 300, 0));
              camera.updateProjectionMatrix();
              // camera.fov =
            }}
          >
            <ambientLight intensity={1.35} />
            <hemisphereLight
              skyColor={new THREE.Color(0xffffbb)}
              groundColor={new THREE.Color(0x080820)}
              intensity={hemisphereLightIntensity}
              ref={hemisphereLightRef}
            />
            <directionalLight
              // color={0xffffbb}
              // ref={light}
              intensity={directionalLightIntensity}
              position={[0, 500, 500]}
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

            <OrbitControls
              target={[0, 27.5, 0]}
              ref={orbitControls}
              //   autoRotate={false}
              enablePan={false}
              enableDamping={true}
              maxPolarAngle={Math.PI / 2}
              maxDistance={35}
              minDistance={15}
            />

            {/* <color attach="background" args={[new THREE.Color(sceneColor)]} /> */}
            <Suspense fallback={<ProgressLoader />}>
              <Backdrop
                receiveShadow
                castShadow
                floor={2}
                position={[0, 0, -20]}
                scale={[250, 150, 50]}
              >
                <meshStandardMaterial
                  color={new THREE.Color(sceneColor)}
                  envMapIntensity={0.1}
                />
              </Backdrop>
              <NounHolder
                headProp={head}
                glassesProp={glasses}
                animationState={animationState}
                animationValue={animationValue}
                pantsProp={pants}
                accessoryProp={accessory}
                bodyProp={body}
                shoeProp={shoes}
                setSceneState={setSceneScreenshotState}
              />
            </Suspense>
          </Canvas>
        </div>

        <button
          className="modal-closer screenshot-close-button"
          onClick={() => setShowScreenshotModal(false)}
        >
          X
        </button>

        <div className="take-screenshot-container">
          {' '}
          <div className="light-slider-container">
            <label className="slider-label">Direction Light</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={directionalLightIntensity}
              onChange={(e) =>
                setDirectionalLightIntensity(Number(e.target.value))
              }
            />
            <label className="slider-label">World Light</label>
            <input
              type="range"
              // className="form-range"
              min="0.1"
              max="3"
              step="0.1"
              value={hemisphereLightIntensity}
              onChange={(e) =>
                setHemisphereLightIntensity(Number(e.target.value))
              }
            />
          </div>
          <button
            className="menu-button screenshot-mobile-button"
            onClick={() => {
              setShowScreenshotModal(false);
              saveAsImage();
            }}
          >
            SCREENSHOT
          </button>
          <div className="react-color-picker-container">
            <CompactPicker
              color={sceneColor}
              onChangeComplete={(color) => setSceneColor(color.hex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal;

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
