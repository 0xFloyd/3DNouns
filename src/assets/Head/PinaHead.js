import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PineappleModel from '../Models/Heads/PinaHead.glb';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

export default function PineappleHead({
  headProp,
  glassesProp,
  animationState,
  animationValue,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(PineappleModel);
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const glassesTest = useLoader(
    THREE.TextureLoader,
    `/textures/glasses/${glassesProp}`
  );

  glassesTest.flipY = false;
  glassesTest.magFilter = glassesTest.minFilter = THREE.NearestFilter;

  useEffect(() => {
    if (animationState) {
      actions[names[lookupAnimation(animationValue)]]
        .reset()
        .fadeIn(0.5)
        .play();
      return () => actions[names[lookupAnimation(animationValue)]].fadeOut(0.5);
    }
  }, [actions, names, animationState, animationValue]);

  return (
    <group
      ref={group}
      dispose={null}
      visible={headProp === 'Pineapple' ? true : false}
    >
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.glasses.geometry}
        // material={materials.glassesMAT}
        skeleton={nodes.glasses.skeleton}
      >
        {' '}
        <meshStandardMaterial map={glassesTest} attach="material" />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Pinapple.geometry}
        material={materials.PinappleMAT}
        skeleton={nodes.Pinapple.skeleton}
      />
    </group>
  );
}

useGLTF.preload('/PinaHead.glb');
