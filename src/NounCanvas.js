import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import RabbitModel from 'RabbitModel';
import CrabModel from 'CrabTest';

const NounCanvas = (props) => {
  return (
    <Canvas
      shadows
      camera={{ position: [1, 0.25, 0.5], fov: 45, near: 0.1, far: 100 }}
    >
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
      <OrbitControls autoRotate />
      <Suspense fallback={null}>
        <RabbitModel head={props.head} />
        <CrabModel head={props.head} />
      </Suspense>
    </Canvas>
  );
};

export default NounCanvas;
