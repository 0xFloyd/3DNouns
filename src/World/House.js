import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

const House = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF('world//house.glb');
  return (
    <group
      ref={group}
      dispose={null}
      scale={[47, 47, 47]}
      position={[-100, -37.5, -175]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.untitled.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
};

export default House;
