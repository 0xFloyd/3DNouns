import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { getKeyByValue, glassesPosition, headNames } from 'attributes';

const Rabbit = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Rabbit.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name='Glasses6'
        castShadow
        receiveShadow
        geometry={nodes.Glasses6.geometry}
        material={nodes.Glasses6.material}
        position={glassesPosition[getKeyByValue(headNames, props.head)]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses6' }}
        visible={props.glasses === 'Glasses6' ? true : false}
      />
      <mesh
        name='Shoes-White-3'
        castShadow
        receiveShadow
        geometry={nodes['Shoes-White-3'].geometry}
        material={nodes['Shoes-White-3'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-White-3' }}
        visible={props.shoes === 'Shoes-White-3' ? true : false}
      />
      <mesh
        name='BodyNavy'
        castShadow
        receiveShadow
        geometry={nodes.BodyNavy.geometry}
        material={nodes.BodyNavy.material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'BodyNavy' }}
        visible={props.body === 'BodyNavy' ? true : false}
      />
      <mesh
        name='Pants-Lightgrey'
        castShadow
        receiveShadow
        geometry={nodes['Pants-Lightgrey'].geometry}
        material={nodes['Pants-Lightgrey'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-Lightgrey' }}
        visible={props.pants === 'Pants-Lightgrey' ? true : false}
      />
      <mesh
        name='Head-Rabbit'
        castShadow
        receiveShadow
        geometry={nodes['Head-Rabbit'].geometry}
        material={nodes['Head-Rabbit'].material}
        position={[-0.07, 0.08, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Rabbit' }}
        visible={props.head === 'Head-Rabbit' ? true : false}
      />
    </group>
  );
};

useGLTF.preload('/Rabbit.gltf');

export default Rabbit;
