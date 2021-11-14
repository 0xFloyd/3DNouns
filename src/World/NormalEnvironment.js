import React from 'react';
import * as THREE from 'three';

const NormalEnvironment = () => {
  // color="#101010"
  // transparent
  // depthWrite={false}
  return (
    <>
      <color attach="background" args={[0xa0a0a0]} />
      {/* <fog attach="fog" args={[0xa0a0a0, 1, 500]} /> */}
      <mesh castShadow receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[1500, 0.05, 1500]} />
        <meshStandardMaterial
          color={new THREE.Color(0xffffff).setHex(0xffffff)}
        />
      </mesh>
      <gridHelper
        receiveShadow
        castShadow
        args={[1500, 100, new THREE.Color(0x7d7d7d), new THREE.Color(0x7d7d7d)]}
        position={[0, 0.1, 0]}
      />
    </>
  );
};

export default NormalEnvironment;
