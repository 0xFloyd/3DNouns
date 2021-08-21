import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RabbitModel from "RabbitModel";
import CrabModel from "CrabTest";

const dummy = new THREE.Vector3();
const lookAtPos = new THREE.Vector3(0, 1, 0);

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

const NounCanvas = (props) => {
  const [farAway, setFarAway] = useState(true);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0.5, 0.5, 0], fov: 55, near: 0.1, far: 100 }}
      >
        {/* <Html>
        <div style={{ position: "absolute", top: 200, left: 200 }}>
          {" "}
          <button onClick={() => setFarAway(!farAway)}>click</button>
        </div>
      </Html> */}
        {/* <Model /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 5, 0]} intensity={0.3} />
        <directionalLight position={[0, 0, 0]} intensity={0.7} />
        <gridHelper
          args={[50, 20, new THREE.Color(0xf316bd), new THREE.Color(0xf316bd)]}
          position={[0, -5, 0]}
        />
        <mesh receiveShadow position={[0, -2.5, 0]}>
          <boxBufferGeometry args={[1, 5, 1]} />
          <meshStandardMaterial
            color={new THREE.Color(0xffffff)}
            transparent
            opacity={0.5}
          />
        </mesh>
        {/* <mesh receiveShadow position={[0, -5.5, 0]}>
        <boxBufferGeometry args={[30, 1, 30]} />
        <meshStandardMaterial color={new THREE.Color(0x000000)} />
      </mesh> */}
        <Thing />
        <OrbitControls autoRotate />
        <Suspense fallback={null}>
          <RabbitModel head={props.head} />
          <CrabModel head={props.head} />
        </Suspense>
      </Canvas>
      <div style={{ position: "absolute", top: 60, right: 20 }}>
        {" "}
        <button onClick={() => setFarAway(!farAway)}>click</button>
      </div>
    </>
  );
};

export default NounCanvas;
