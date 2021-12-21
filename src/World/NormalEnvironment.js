import { Sky, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SkyShader from './SkyBox';

const NormalEnvironment = () => {
  // color="#101010"
  // transparent
  // depthWrite={false}

  const { nodes, materials } = useGLTF('/world/voxelworld.glb');

  const Ground = () => {
    const texture_1 = useLoader(
      THREE.TextureLoader,
      '/textures/world/grass.png'
    );
    texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
    texture_1.repeat.set(12, 12);
    texture_1.anisotropy = 64;
    texture_1.encoding = THREE.sRGBEncoding;

    return (
      <mesh receiveShadow position={[32, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
        {/* <meshStandardMaterial map={texture_1} attach="material" /> */}
        <meshStandardMaterial
          color={new THREE.Color(0x95b85d).convertSRGBToLinear()}
          // roughness={0.1}
          // metalness={0}
        />
      </mesh>
    );
  };

  return (
    <>
      <fog attach="fog" args={[new THREE.Color(0xffffff), 1, 10000]} />
      {/* <Sky distance={1000} sunPosition={[-100, 500, 1000]} /> */}
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
      <Ground />
      {/* scale={[80, 80, 80]} position={[2600, -24, 1700]} */}
      <group dispose={null} scale={[80, 80, 80]} position={[0, -25, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WATER.geometry}
          material={materials.palette}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['voxlandscapetry2-1'].geometry}
          material={materials['palette.001']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['voxlandscapetry2-2'].geometry}
          material={materials['palette.002']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WATER001.geometry}
          material={materials['palette.003']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['voxlandscapetry2-4'].geometry}
          material={materials['palette.004']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.untitled.geometry}
          material={materials['palette.005']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.untitled001.geometry}
          material={materials['palette.006']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['voxlandscapetry2-7'].geometry}
          material={materials['palette.007']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['voxlandscapetry2-8'].geometry}
          material={materials['palette.008']}
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
