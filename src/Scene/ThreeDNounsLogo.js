import React, { forwardRef, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDLogo = ({ environment }, ref) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/world/3Dglasses.glb');

  return (
    <>
      {environment === 'Normal' || environment === 'Matrix' ? (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GLASSES.geometry}
            material={nodes.GLASSES.material}
            position={[120, 12, -20]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NOUNS.geometry}
            material={nodes.NOUNS.material}
            position={[120, 0, -20]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
        </>
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GLASSES.geometry}
            material={nodes.GLASSES.material}
            position={[120, 12, -150]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NOUNS.geometry}
            material={nodes.NOUNS.material}
            position={[120, 0, -150]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
        </>
      ) : null}
    </>
  );
};

export default forwardRef(ThreeDLogo);
