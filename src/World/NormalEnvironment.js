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

      <group dispose={null} scale={[120, 120, 120]} position={[75, 6, 0]}>
        {' '}
        {/* position={[2600, -24, 1700]} */}
        <group
          position={[0.19, -0.81, -2.12]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.04, 0.04, 0.04]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box.geometry}
            material={nodes.Box.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_1.geometry}
            material={nodes.Box_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_2.geometry}
            material={nodes.Box_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_3.geometry}
            material={nodes.Box_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_4.geometry}
            material={nodes.Box_4.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_4_part.geometry}
            material={nodes.Box_4_part.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_4_part_1.geometry}
            material={nodes.Box_4_part_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_5.geometry}
            material={nodes.Box_5.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_7.geometry}
            material={nodes.Box_7.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_10'].geometry}
            material={nodes['head-house_10'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_11'].geometry}
            material={nodes['head-house_11'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_12'].geometry}
            material={nodes['head-house_12'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_13'].geometry}
            material={nodes['head-house_13'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_14'].geometry}
            material={nodes['head-house_14'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_15'].geometry}
            material={nodes['head-house_15'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_16'].geometry}
            material={nodes['head-house_16'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_17'].geometry}
            material={nodes['head-house_17'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_4'].geometry}
            material={nodes['head-house_4'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_5'].geometry}
            material={nodes['head-house_5'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_6'].geometry}
            material={nodes['head-house_6'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_7'].geometry}
            material={nodes['head-house_7'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['head-house_9'].geometry}
            material={nodes['head-house_9'].material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1101.geometry}
            material={nodes.Oren_1101.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1104.geometry}
            material={nodes.Oren_1104.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1105.geometry}
            material={nodes.Oren_1105.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1107.geometry}
            material={nodes.Oren_1107.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1108.geometry}
            material={nodes.Oren_1108.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1109.geometry}
            material={nodes.Oren_1109.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1114.geometry}
            material={nodes.Oren_1114.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1115.geometry}
            material={nodes.Oren_1115.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Oren_1116.geometry}
            material={nodes.Oren_1116.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union_139.geometry}
            material={nodes.Union_139.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union_141.geometry}
            material={nodes.Union_141.material}
          />
        </group>
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
