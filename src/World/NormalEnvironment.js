import { Sky, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import House from './House';
import SkyShader from './SkyBox';

const NormalEnvironment = () => {
  // color="#101010"
  // transparent
  // depthWrite={false}

  // const { nodes, materials } = useGLTF('/world/voxelworld.glb');
  const { nodes, materials } = useGLTF('/world/nountoun.glb');

  const Ground = () => {
    // const texture_1 = useLoader(
    //   THREE.TextureLoader,
    //   '/textures/world/grass2.png'
    // );
    // texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
    // texture_1.repeat.set(32, 32);
    // texture_1.anisotropy = 64;
    // texture_1.encoding = THREE.sRGBEncoding;

    return (
      <mesh receiveShadow position={[32, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
        {/* <meshStandardMaterial map={texture_1} attach="material" /> */}
        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
          // roughness={0.1}
          // metalness={0}
        />
      </mesh>
    );
  };

  return (
    <>
      <fog attach="fog" args={[new THREE.Color(0xffffff), 1, 1500]} />
      {/* <Sky distance={1000} sunPosition={[-100, 500, 1000]0} /> */}
      {/* <color attach="background" args={[new THREE.Color(0x87ceeb)]} /> */}
      {/* <fog attach="fog" args={[new THREE.Color(0x87ceeb), 1, 5000]} /> */}
      {/* <Sky distance={5000} sunPosition={[-100, 500, 1000]} /> */}
      <Sky
        azimuth={0.5}
        turbidity={7.5}
        rayleigh={0.4}
        inclination={0.6}
        distance={3000}
        sunPosition={[-100, 500, 1000]}
      />
      {/* <SkyShader /> */}
      {/* <House /> */}
      {/* <Ground /> */}
      {/* <mesh
        receiveShadow
        position={[-70, -0.5, -70]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxBufferGeometry args={[250, 1, 300]} />

        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
          // roughness={0.1}
          // metalness={0}
        />
      </mesh> */}
      {/* position={[75, 6, 0]} */}
      <group dispose={null} scale={[5, 5, 5]} position={[-650, -14.5, -500]}>
        {' '}
        {/* position={[2600, -24, 1700]} */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Union_142.geometry}
          material={materials.city_material1}
          position={[-3.92, -0.1, -3.22]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      {/* <gridHelper
        receiveShadow
        // castShadow
        args={[5000, 150, new THREE.Color(0x7d7d7d), new THREE.Color(0x7d7d7d)]}
        position={[0, 0.1, 0]}
      /> */}
    </>
  );
};

export default NormalEnvironment;
