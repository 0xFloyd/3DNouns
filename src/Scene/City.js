import { useGLTF } from '@react-three/drei';
import React from 'react';

const City = ({ environment }) => {
  const { nodes, materials } = useGLTF('/world/buildings.glb');
  return (
    <>
      {environment === 'Normal' || environment === 'Matrix' ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union.geometry}
            material={materials.streetBuildings_material}
            position={[-1250, 0, -450]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4}
          />
        </group>
      ) : null}
    </>
  );
};

export default City;
