import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { getKeyByValue, glassesPosition, headNames } from 'attributes';

const Pirate = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Pirate.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name='Pants-Denim2'
        castShadow
        receiveShadow
        geometry={nodes['Pants-Denim2'].geometry}
        material={nodes['Pants-Denim2'].material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Pants-Denim2' }}
        visible={props.pants === 'Pants-Denim2' ? true : false}
      />
      <mesh
        name='Body-RainbowSteps'
        castShadow
        receiveShadow
        geometry={nodes['Body-RainbowSteps'].geometry}
        material={nodes['Body-RainbowSteps'].material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Body-RainbowSteps' }}
        visible={props.body === 'Body-RainbowSteps' ? true : false}
      />
      <mesh
        name='Shoes-Black2'
        castShadow
        receiveShadow
        geometry={nodes['Shoes-Black2'].geometry}
        material={nodes['Shoes-Black2'].material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Shoes-Black2' }}
        visible={props.shoes === 'Shoes-Black2' ? true : false}
      />
      <mesh
        name='Head-Pirate'
        castShadow
        receiveShadow
        geometry={nodes['Head-Pirate'].geometry}
        material={nodes['Head-Pirate'].material}
        position={[-0.13, 0.08, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Head-Pirate' }}
        visible={props.head === 'Head-Pirate' ? true : false}
      />
      <mesh
        name='Glasses2'
        castShadow
        receiveShadow
        geometry={nodes.Glasses2.geometry}
        material={nodes.Glasses2.material}
        position={glassesPosition[getKeyByValue(headNames, props.head)]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Glasses2' }}
        visible={props.glasses === 'Glasses2' ? true : false}
      />
    </group>
  );
};

useGLTF.preload('/Iirate.gltf');

export default Pirate;
