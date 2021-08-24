import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Cloud = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Cloud.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Body-Pride"
        castShadow
        receiveShadow
        geometry={nodes['Body-Pride'].geometry}
        material={nodes['Body-Pride'].material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-Pride' }}
      />
      <mesh
        name="Shoes-White1"
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White1'].geometry}
        material={nodes['Shoes-White1'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White1' }}
      />
      <mesh
        name="Head-Cloud"
        castShadow
        receiveShadow
        geometry={nodes['Head-Cloud'].geometry}
        material={nodes['Head-Cloud'].material}
        position={[-0.12, 0.08, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Cloud' }}
      />
      <mesh
        name="Pants-LightGrey1"
        castShadow
        receiveShadow
        geometry={nodes['Pants-LightGrey1'].geometry}
        material={nodes['Pants-LightGrey1'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-LightGrey1' }}
      />
      <mesh
        name="Glasses4"
        castShadow
        receiveShadow
        geometry={nodes.Glasses4.geometry}
        material={nodes.Glasses4.material}
        position={[-0.09, 0.25, 0.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses4' }}
      />
    </group>
  );
};

useGLTF.preload('/Cloud.gltf');

export default Cloud;
