import React, { forwardRef, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDLogo = ({}, ref) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/world/3Dglasses.glb');

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.NounsLogo.geometry}
      material={materials['3DblueRedLogo_material']}
      scale={[4, 4, 4]}
      position={[120, 0, -20]}
      rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
    />

    // <group
    //   ref={group}
    //   {...props}
    //   dispose={null}
    //   scale={[4, 4, 4]}
    //   position={[125, -11, -150]}
    //   rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
    // >
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes['3D'].geometry}
    //     material={nodes['3D'].material}
    //     rotation={[Math.PI / 2, 0, 0]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.nouns.geometry}
    //     material={nodes.nouns.material}
    //     rotation={[Math.PI / 2, 0, 0]}
    //   />
    // </group>
  );
};

export default forwardRef(ThreeDLogo);

useGLTF.preload('/3Dlogo.glb');
