import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Crab = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Crab.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Body-LightBlue"
        castShadow
        receiveShadow
        geometry={nodes['Body-LightBlue'].geometry}
        material={nodes['Body-LightBlue'].material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-LightBlue' }}
      />
      <mesh
        name="Pants-DarkGrey2"
        castShadow
        receiveShadow
        geometry={nodes['Pants-DarkGrey2'].geometry}
        material={nodes['Pants-DarkGrey2'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-DarkGrey2' }}
      />
      <mesh
        name="Shoes-White2"
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White2'].geometry}
        material={nodes['Shoes-White2'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White2' }}
      />
      <mesh
        name="Head-Crab"
        castShadow
        receiveShadow
        geometry={nodes['Head-Crab'].geometry}
        material={nodes['Head-Crab'].material}
        position={[-0.11, 0.08, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Crab' }}
      />
      <mesh
        name="Glasses3"
        castShadow
        receiveShadow
        geometry={nodes.Glasses3.geometry}
        material={nodes.Glasses3.material}
        position={[-0.09, 0.25, 0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses3' }}
      />
    </group>
  );
};

useGLTF.preload('/Crab.gltf');

export default Crab;
