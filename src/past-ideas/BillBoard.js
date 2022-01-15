import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const BillBoard = () => {
  const { nodes, materials } = useGLTF('/world/billboard.glb');
  return (
    <group
      dispose={null}
      scale={[7, 7, 7]}
      rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
      position={[75, 0, -255]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[16.2, 6.48, -3.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Frame_16-9_02_-_Default_0'].geometry}
              //   material={materials['02_-_Default']}
            >
              <meshStandardMaterial color={new THREE.Color(0x000000)} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

export default BillBoard;
