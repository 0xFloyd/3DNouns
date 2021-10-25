import React from 'react';
import * as THREE from 'three';

const NormalEnvironment = () => {
  return (
    <>
      <fog attach="fog" args={[0xa0a0a0, 1, 15]} />
      <mesh receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[50, 0.05, 50]} />
        <meshStandardMaterial
          color={new THREE.Color(0xffffff)
            .setHex(0xffffff)
            .convertSRGBToLinear()}
        />
      </mesh>
      <gridHelper
        args={[50, 200, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
        position={[0, 0.001, 0]}
      />
    </>
  );
};

export default NormalEnvironment;
