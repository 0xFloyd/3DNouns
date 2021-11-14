import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HorizontalNounsLogo = ({ environment }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/world/nouns-horizontal.glb');

  const testMaterial = new THREE.MeshPhongMaterial({
    color: 0xd63c5e,
    shininess: 0.1,
    opacity: 1,
    transparent: false,
  });

  testMaterial.color.setHex(0xd63c5e).convertSRGBToLinear();

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve012.geometry}
        material={testMaterial}
        position={getPosition(environment)}
        rotation={getRotation(environment)}
        scale={getScale(environment)}
      />
    </group>
  );
};

export default HorizontalNounsLogo;

const getPosition = (environment) => {
  switch (environment) {
    case 'Normal':
      return new THREE.Vector3(175, 5, -80);

    case 'Island':
      return new THREE.Vector3(45, -3.05, 50);

    case 'Matrix':
      return new THREE.Vector3(175, 5, -80);

    default:
      return new THREE.Vector3(175, 5, -80);
  }
};

const getScale = (environment) => {
  switch (environment) {
    case 'Normal':
      return new THREE.Vector3(1000, 1000, 1000);

    case 'Island':
      return new THREE.Vector3(450, 450, 450);

    case 'Matrix':
      return new THREE.Vector3(1000, 1000, 1000);

    default:
      return new THREE.Vector3(1000, 1000, 1000);
  }
};
const getRotation = (environment) => {
  switch (environment) {
    case 'Normal':
      return new THREE.Euler(1.58, 0, Math.PI / 4);

    case 'Island':
      return new THREE.Euler(1.58, 0, 0);

    case 'Matrix':
      return new THREE.Euler(1.58, 0, Math.PI / 4);

    default:
      return new THREE.Euler(1.58, 0, Math.PI / 4);
  }
};
