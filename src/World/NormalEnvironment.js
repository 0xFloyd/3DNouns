import { Sky, Stars, useGLTF, useProgress } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import House from './House';
import SkyShader from './SkyBox';

const NormalEnvironment = ({ environment }) => {
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

  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <>
      {environment === 'Normal' || environment === 'VoidDay' ? (
        <fog attach="fog" args={[new THREE.Color(0xffffff), 1, 1500]} />
      ) : null}
      {environment === 'Matrix' ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 1500]} />
      ) : null}
      {environment === 'VoidNight' ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 1000]} />
      ) : null}
      {/* <Sky distance={1000} sunPosition={[-100, 500, 1000]0} /> */}
      {/* <color attach="background" args={[new THREE.Color(0x87ceeb)]} /> */}
      {/* <fog attach="fog" args={[new THREE.Color(0x87ceeb), 1, 5000]} /> */}
      {/* <Sky distance={5000} sunPosition={[-100, 500, 1000]} /> */}

      {loaded && (environment === 'Matrix' || environment === 'VoidNight') ? (
        <color attach="background" args={[0x181818]} />
      ) : null}
      {loaded && (environment === 'Normal' || environment === 'VoidDay') ? (
        <Sky
          azimuth={0.5}
          turbidity={7.5}
          rayleigh={0.4}
          inclination={0.6}
          distance={3000}
          sunPosition={[-100, 500, 1000]}
        />
      ) : null}
      {loaded && environment === 'Matrix' && (
        <Stars
          radius={100}
          depth={700}
          count={5000}
          factor={16}
          saturation={2}
          fade
          // position={[100, 100, 100]}
        />
      )}
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
      {environment === 'Normal' || environment === 'Matrix' ? (
        <group dispose={null} scale={[120, 120, 120]} position={[0, 1, 85]}>
          {' '}
          {/* position={[2600, -24, 1700]} */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union_142.geometry}
            material={materials.city3_material}
            position={[-3.99, -0.1, -3.54]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.03, 0.03, 0.03]}
          />
        </group>
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        <gridHelper
          receiveShadow
          // castShadow
          args={[
            5000,
            150,
            new THREE.Color(0x7d7d7d),
            new THREE.Color(0x7d7d7d),
          ]}
          position={[0, 0.1, 0]}
        />
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        <mesh
          receiveShadow
          position={[32, -1, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
          {/* <meshStandardMaterial map={texture_1} attach="material" /> */}
          <meshStandardMaterial
            color={new THREE.Color(0x404040).convertSRGBToLinear()}
            // roughness={0.1}
            // metalness={0}
          />
        </mesh>
      ) : null}
    </>
  );
};

export default NormalEnvironment;
