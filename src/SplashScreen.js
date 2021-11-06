import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  bodyAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
  environmentAttributes,
} from 'attributes';
import ProgressLoader from './Loader';
import Cloud from './assets/FullBodyNouns/Cloud';
import Computer from './assets/FullBodyNouns/Computer';
import Crab from './assets/FullBodyNouns/Crab';
import Mixer from './assets/FullBodyNouns/Mixer';
import TestComputer from './assets/FullBodyNouns/TestComputer';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { Html, RoundedBox, Stars, useProgress } from '@react-three/drei';
import Text from './Text';
import { FontLoader } from 'utils/FontLoader';
import { useSpring, animated, config } from '@react-spring/three';
import TestText from 'TestText';

const isDesktop = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    // return "tablet";
    return false;
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    // return "mobile";
    return false;
  }
  // return "desktop";
  return true;
};

const Box = ({ z }) => {
  const ref = useRef();

  const [clicked, setClicked] = useState(false);

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [
    0,
    0,
    Math.max(z, -100),
  ]);

  const [data, setData] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });
  // useFrame(() => {
  //   groupRef.current.position.z = THREE.MathUtils.lerp(
  //     groupRef.current.position.z,
  //     clicked ? 1 : 0,
  //     0.1
  //   );
  // });

  useFrame(() => {
    // @ts-ignore
    if (ref && ref.current) {
      ref.current.rotation.set(0, (data.rY += 0.005), 0);
      ref.current.position.set(
        data.x * width,
        (data.y += 0.025),
        Math.max(z, -100)
      );

      if (data.y > height / 1) {
        setData({
          x: THREE.MathUtils.randFloatSpread(2),
          y: -height / 1,
          rX: Math.random() * Math.PI,
          rY: Math.random() * Math.PI,
          rZ: Math.random() * Math.PI,
        });
      }
    }
  });

  return <TestComputer ref={ref} />;
};

function Intro({ ready, setReady, clicked, setClicked }) {
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 1.05, 3 + state.mouse.y * 1.05, 14),
      0.5
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function NounsTitle() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.cos(clock.getElapsedTime()) * 0.05)
  );
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 5.5, 3]} children="3D" />
      <Text hAlign="center" position={[0, 2.5, 3]} children="NOUNS" />
    </group>
  );
}

// https://threejs.org/examples/?q=text#webgl_loader_ttf
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_ttf.html
const EnterButton = ({
  enterRef,
  setActive,
  active,
  setHover,
  hovered,
  store,
}) => {
  const font = useLoader(FontLoader, '/bold.blob');

  const { position } = useSpring({
    position: hovered ? [0, -0.25, 2] : [0, -0.5, 2],
  });

  const config = useMemo(
    () => ({
      font,
      size: 1,
      height: 0.5,
      curveSegments: 16,
      //   bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1.25,
      bevelOffset: 0,
      bevelSegments: 4,
    }),
    [font]
  );

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const meshProps = {};

  return (
    <animated.group
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={position}
      onClick={() => store.loadScene()}
    >
      {/* <mesh
        ref={enterRef}
        position={[0.15, -1.6, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        // scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      >
        <boxGeometry args={[5, 1.5, 1]} />
        <meshStandardMaterial />
      </mesh> */}
      <RoundedBox
        args={[5, 1.5, 1]}
        ref={enterRef}
        radius={0.5}
        smoothness={4}
        position={[0.15, -1.6, 0]}
      >
        <meshPhongMaterial attach="material" color="#f3f3f3" />
      </RoundedBox>
      <mesh
        ref={enterRef}
        position={[-2, -2, 0.1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        // scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      >
        <textGeometry args={['ENTER', config]} />
        <meshStandardMaterial attach="material" color={'#d63c5e'} />
      </mesh>
    </animated.group>
  );
};

const SplashScreen = (store) => {
  const desktop = isDesktop();

  const { progress } = useProgress();

  const enterRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      {/* {progress === 100 && (
        <div className="starting-screen-container">
          <button className="ready-button" onClick={() => store.loadScene()}>
            Enter
          </button>
        </div>
      )} */}
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 500 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} intensity={0.1} /> */}
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Intro {...store} />

        <Suspense fallback={<ProgressLoader />}>
          {Array.from({ length: desktop ? 150 : 50 }, (_, i) => (
            <Box key={i} z={-i} />
          ))}
          {progress === 100 && (
            <EnterButton
              enterRef={enterRef}
              setActive={setActive}
              active={active}
              setHover={setHover}
              hovered={hovered}
              store={store}
            />
          )}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          {/* <TestText /> */}
          <NounsTitle />
          {/* <EffectComposer>
            <DepthOfField
              target={[0, 0, 30]}
              focalLength={3}
              bokehScale={11}
              height={700}
            />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
    </>
  );
};

export default SplashScreen;
