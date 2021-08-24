import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Rabbit = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Rabbit.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Glasses6"
        castShadow
        receiveShadow
        geometry={nodes.Glasses6.geometry}
        material={nodes.Glasses6.material}
        position={[-0.09, 0.26, 0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses6' }}
      />
      <mesh
        name="Shoes-White-3"
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White-3'].geometry}
        material={nodes['Shoes-White-3'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White-3' }}
      />
      <mesh
        name="BodyNavy"
        castShadow
        receiveShadow
        geometry={nodes.BodyNavy.geometry}
        material={nodes.BodyNavy.material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'BodyNavy' }}
      />
      <mesh
        name="Pants-Lightgrey"
        castShadow
        receiveShadow
        geometry={nodes['Pants-Lightgrey'].geometry}
        material={nodes['Pants-Lightgrey'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-Lightgrey' }}
      />
      <mesh
        name="Head-Rabbit"
        castShadow
        receiveShadow
        geometry={nodes['Head-Rabbit'].geometry}
        material={nodes['Head-Rabbit'].material}
        position={[-0.07, 0.08, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Rabbit' }}
      />
    </group>
  );
};

useGLTF.preload('/Rabbit.gltf');

export default Rabbit;
