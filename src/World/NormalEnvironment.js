import React from 'react';
import * as THREE from 'three';

const NormalEnvironment = () => {
  return (
    <>
      <fog attach="fog" args={[0xa0a0a0, 1, 500]} />
      <mesh receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[1500, 0.05, 1500]} />
        <meshStandardMaterial
          color={new THREE.Color(0xffffff)
            .setHex(0xffffff)
            .convertSRGBToLinear()}
        />
      </mesh>
      <gridHelper
        args={[1500, 100, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
        position={[0, 0.01, 0]}
      />
    </>
  );
};

export default NormalEnvironment;
