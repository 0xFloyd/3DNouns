import { useAnimations, useGLTF } from '@react-three/drei';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';
import React, { useEffect, useRef } from 'react';

const MustardHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
  masterHeadModel,
}) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/headModels/HeadMustard.glb');

  const { ref, mixer, names, actions } = useAnimations(
    masterHeadModel.animations,
    group
  );

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
      visible={headProp === 'Mustard' ? true : false}
      castShadow
      receiveShadow
    >
      <primitive
        object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd}
      />
      <skinnedMesh
        skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
        castShadow
        receiveShadow
      >
        <primitive object={nodes.Head.geometry} attach="geometry" />
        <primitive object={materials.headMAT} attach="material" />
      </skinnedMesh>
      <skinnedMesh skeleton={masterHeadModel.nodes.GlassesUV.skeleton}>
        <primitive object={nodes.GlassesUV.geometry} attach="geometry" />
        <meshStandardMaterial map={glassesProp} attach="material" />
      </skinnedMesh>
    </group>
  );
};

useGLTF.preload('/headModels/HeadMustard.glb');

export default MustardHead;
