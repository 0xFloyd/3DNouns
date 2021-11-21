import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function ThreeDLogo(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3Dlogo.glb');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[4, 4, 4]}
      position={[125, -11, -150]}
      rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D'].geometry}
        material={nodes['3D'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nouns.geometry}
        material={nodes.nouns.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/3Dlogo.glb');
