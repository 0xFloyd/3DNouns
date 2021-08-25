import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Bonsai = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Bonsai.gltf');
  return (
    <group ref={group} {...props} dispose={null} castShadow>
      <mesh
        name="Pants-LightGrey2"
        castShadow
        receiveShadow
        geometry={nodes['Pants-LightGrey2'].geometry}
        material={nodes['Pants-LightGrey2'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-LightGrey2' }}
      />
      <mesh
        name="Shoes-White3"
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White3'].geometry}
        material={nodes['Shoes-White3'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White3' }}
      />
      <mesh
        name="Head-Bonsai"
        castShadow
        receiveShadow
        geometry={nodes['Head-Bonsai'].geometry}
        material={nodes['Head-Bonsai'].material}
        position={[-0.13, 0.08, -0.08]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Bonsai' }}
      />
      <mesh
        name="Body-GreenChecker"
        castShadow
        receiveShadow
        geometry={nodes['Body-GreenChecker'].geometry}
        material={nodes['Body-GreenChecker'].material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-GreenChecker' }}
      />
    </group>
  );
};

useGLTF.preload('/Bonsai.gltf');

export default Bonsai;
