import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Wizardhat = (props) => {
  const group = useRef();
  //   const { nodes, materials } = useGLTF('/wizardhat.glb')

  const wizardHat = useGLTF('/wizardhat.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={wizardHat.nodes.Union_10.geometry}
        material={wizardHat.nodes.Union_10.material}
        position={[-0.11, 0.21, -0.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={wizardHat.nodes.Oren_550.geometry}
        material={wizardHat.nodes.Oren_550.material}
        position={[-0.08, 0.25, 0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
};

useGLTF.preload('/wizardhat.glb');

export default Wizardhat;
