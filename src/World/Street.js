import { useGLTF } from '@react-three/drei';
import React from 'react';

const Street = ({ environment }) => {
  const { nodes, materials } = useGLTF('/world/ground.glb');

  return (
    <>
      {environment === 'Normal' || environment === 'Matrix' ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union_150.geometry}
            material={materials.ground_material}
            position={[-1200, -20, -385]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4}
          />
        </group>
      ) : null}
    </>
  );
};

export default Street;
