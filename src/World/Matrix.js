import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React from 'react';
import * as THREE from 'three';

const MatrixEnvironment = () => {
  // color="#101010"
  // transparent
  // depthWrite={false}
  //   const bloomLayer = new THREE.Layers();
  //   bloomLayer.set(BLOOM_SCENE);

  return (
    <>
      <color attach="background" args={[0x000000]} />
      {/* <fog attach="fog" args={[0x000000, 1, 500]} /> */}
      <mesh castShadow receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[1500, 0.05, 1500]} />
        <meshStandardMaterial
          color={new THREE.Color(0x000000).setHex(0x000000)}
        />
      </mesh>
      <gridHelper
        receiveShadow
        castShadow
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
        position={[0, 0.1, 0]}
      />
      <gridHelper
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
        position={[0, 375, 0]}
      />
      <gridHelper
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
        position={[0, 0, 375]}
      />
      <gridHelper
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
        position={[0, 0, -375]}
      />
      <gridHelper
        rotation={[0, 0, Math.PI / 2]}
        position={[375, 0, 0]}
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
      />
      <gridHelper
        rotation={[0, 0, Math.PI / 2]}
        position={[-375, 0, 0]}
        args={[750, 50, new THREE.Color(0x00ff00), new THREE.Color(0x00ff00)]}
      />

      {/* <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={1}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer> */}
    </>
  );
};

export default MatrixEnvironment;
