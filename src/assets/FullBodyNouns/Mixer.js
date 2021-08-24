import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Mixer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Mixer.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Body-Hoodie"
        castShadow
        receiveShadow
        geometry={nodes['Body-Hoodie'].geometry}
        material={nodes['Body-Hoodie'].material}
        position={[-0.07, 0.1, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-Hoodie' }}
      />
      <mesh
        name="Shoes-Black1"
        castShadow
        receiveShadow
        geometry={nodes['Shoes-Black1'].geometry}
        material={nodes['Shoes-Black1'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-Black1' }}
      />
      <mesh
        name="Head-Mixer"
        castShadow
        receiveShadow
        geometry={nodes['Head-Mixer'].geometry}
        material={nodes['Head-Mixer'].material}
        position={[-0.1, 0.08, -0.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Mixer' }}
      />
      <mesh
        name="Pants-DarkGrey1"
        castShadow
        receiveShadow
        geometry={nodes['Pants-DarkGrey1'].geometry}
        material={nodes['Pants-DarkGrey1'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-DarkGrey1' }}
      />
      <mesh
        name="Glasses5"
        castShadow
        receiveShadow
        geometry={nodes.Glasses5.geometry}
        material={nodes.Glasses5.material}
        position={[-0.08, 0.25, 0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses5' }}
      />
    </group>
  );
};

useGLTF.preload('/Mixer.gltf');

export default Mixer;
