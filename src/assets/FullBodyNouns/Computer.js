import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { getKeyByValue, glassesPosition, headNames } from 'attributes';

const Computer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Computer.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name='Body-decay-pride'
        castShadow
        receiveShadow
        geometry={nodes['Body-decay-pride'].geometry}
        material={nodes['Body-decay-pride'].material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-decay-pride' }}
        visible={props.body === 'Body-decay-pride' ? true : false}
      />
      <mesh
        name='Shoes-White4'
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White4'].geometry}
        material={nodes['Shoes-White4'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White4' }}
        visible={props.shoes === 'Shoes-White4' ? true : false}
      />
      <mesh
        name='Pants-Denim1'
        castShadow
        receiveShadow
        geometry={nodes['Pants-Denim1'].geometry}
        material={nodes['Pants-Denim1'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-Denim1' }}
        visible={props.pants === 'Pants-Denim1' ? true : false}
      />
      <mesh
        name='Head-Computer'
        castShadow
        receiveShadow
        geometry={nodes['Head-Computer'].geometry}
        material={nodes['Head-Computer'].material}
        position={[-0.11, 0.08, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Computer' }}
        visible={props.head === 'Head-Computer' ? true : false}
      />
      <mesh
        name='Glasses_1'
        castShadow
        receiveShadow
        geometry={nodes.Glasses_1.geometry}
        material={nodes.Glasses_1.material}
        position={glassesPosition[getKeyByValue(headNames, props.head)]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses_1' }}
        visible={props.glasses === 'Glasses_1' ? true : false}
      />
    </group>
  );
};

useGLTF.preload('/Computer.gltf');

export default Computer;
