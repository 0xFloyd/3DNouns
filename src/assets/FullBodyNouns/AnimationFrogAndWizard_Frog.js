import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const FrogHead = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/frogGLB.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group scale={[0.01, 0.01, 0.01]}>
      <skinnedMesh
        geometry={nodes.Glasses.geometry}
        material={nodes.Glasses.material}
        skeleton={nodes.Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.HeadFrog.geometry}
        material={nodes.HeadFrog.material}
        skeleton={nodes.HeadFrog.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/frogGLB.glb');

export default FrogHead;
