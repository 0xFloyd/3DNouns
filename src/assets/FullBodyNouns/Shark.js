import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import {
  getKeyByValue,
  glassesPosition,
  headAttributes,
  headNames,
} from 'attributes';

const Shark = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Shark.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="RGBglasses"
        castShadow
        receiveShadow
        geometry={nodes.RGBglasses.geometry}
        material={nodes.RGBglasses.material}
        position={glassesPosition[getKeyByValue(headNames, props.head)]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'RGBglasses' }}
        visible={props.glasses === 'RGBglasses' ? true : false}
      />
      <mesh
        name="Oren_197_part"
        castShadow
        receiveShadow
        geometry={nodes.Oren_197_part.geometry}
        material={nodes.Oren_197_part.material}
        position={[-0.07, 0.1, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'Oren_197_part' }}
        visible={props.body === 'Oren_197_part' ? true : false}
      />
      <mesh
        name="SharkHead"
        castShadow
        receiveShadow
        geometry={nodes.SharkHead.geometry}
        material={nodes.SharkHead.material}
        position={[-0.13, 0.08, -0.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        userData={{ name: 'SharkHead' }}
        visible={props.head === 'SharkHead' ? true : false}
      />
    </group>
  );
};

useGLTF.preload('/Shark.glb');

export default Shark;
