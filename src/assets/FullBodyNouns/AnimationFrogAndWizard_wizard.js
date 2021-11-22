import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const WizardHead = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/MagicHatGLB.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <>
      <skinnedMesh
        geometry={nodes.Glasses.geometry}
        material={nodes.Glasses.material}
        skeleton={nodes.Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.HeadMagic.geometry}
        material={nodes.HeadMagic.material}
        skeleton={nodes.HeadMagic.skeleton}
      />
    </>
  );
};

useGLTF.preload('/MagicHatGLB.glb');

export default WizardHead;
