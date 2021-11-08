import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FrogModel from '../Models/Heads/FrogHead.glb';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import glassesTexture from '../Textures/Glasses/glasses-square-fullblack.png';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

export default function FrogHead({
  headProp,
  glassesProp,
  animationState,
  animationValue,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(FrogModel);
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
      visible={headProp === 'Frog' ? true : false}
      castShadow
      receiveShadow
    >
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.FrogHead.geometry}
        material={materials.headMAT}
        skeleton={nodes.FrogHead.skeleton}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.glasses.geometry}
        // material={materials.glassesMAT}
        skeleton={nodes.glasses.skeleton}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial map={glassesTest} attach="material" />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload(FrogModel);
