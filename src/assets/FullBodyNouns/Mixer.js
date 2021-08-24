import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { getKeyByValue, glassesPosition, headNames } from 'attributes';

const Mixer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Mixer.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name='Body-Hoodie'
        castShadow
        receiveShadow
        geometry={nodes['Body-Hoodie'].geometry}
        material={nodes['Body-Hoodie'].material}
        position={[-0.07, 0.1, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-Hoodie' }}
        visible={props.body === 'Body-Hoodie' ? true : false}
      />
      <mesh
        name='Shoes-Black1'
        castShadow
        receiveShadow
        geometry={nodes['Shoes-Black1'].geometry}
        material={nodes['Shoes-Black1'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-Black1' }}
        visible={props.shoes === 'Shoes-Black1' ? true : false}
      />
      <mesh
        name='Head-Mixer'
        castShadow
        receiveShadow
        geometry={nodes['Head-Mixer'].geometry}
        material={nodes['Head-Mixer'].material}
        position={[-0.1, 0.08, -0.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Mixer' }}
        visible={props.head === 'Head-Mixer' ? true : false}
      />
      <mesh
        name='Pants-DarkGrey1'
        castShadow
        receiveShadow
        geometry={nodes['Pants-DarkGrey1'].geometry}
        material={nodes['Pants-DarkGrey1'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-DarkGrey1' }}
        visible={props.pants === 'Pants-DarkGrey1' ? true : false}
      />
      <mesh
        name='Glasses5'
        castShadow
        receiveShadow
        geometry={nodes.Glasses5.geometry}
        material={nodes.Glasses5.material}
        position={glassesPosition[getKeyByValue(headNames, props.head)]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses5' }}
        visible={props.glasses === 'Glasses5' ? true : false}
      />
    </group>
  );
};

useGLTF.preload('/Mixer.gltf');

export default Mixer;
