import React from 'react';
import * as THREE from 'three';

const Environment = (props) => {
  return (
    <>
      {props.environment === 'Normal' && (
        <mesh receiveShadow position={[0, -0.025, 0]}>
          <boxBufferGeometry args={[25, 0.05, 25]} />
          <meshStandardMaterial
            color={new THREE.Color(0xffffff)
              .setHex(0xffffff)
              .convertSRGBToLinear()}
          />
        </mesh>
      )}
      {props.environment === 'Normal' && (
        <gridHelper
          args={[50, 200, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
          position={[0, 0.001, 0]}
        />
      )}
      {props.environment === 'Ocean' && (
        <mesh receiveShadow position={[0, -0.025, 0]}>
          <boxBufferGeometry args={[2, 0.05, 2]} />
          <meshStandardMaterial
            color={new THREE.Color(0xf6e4ad)
              .setHex(0xf6e4ad)
              .convertSRGBToLinear()}
          />
        </mesh>
      )}
      {props.environment === 'Ocean' && (
        <gridHelper
          args={[2, 20, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
          position={[0, 0.001, 0]}
        />
      )}
    </>
  );
};

export default Environment;
