import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

const SharkHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
  masterHeadModel,
}) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/headModels/sharkHead.glb');

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
      visible={headProp === 'Shark' ? true : false}
      castShadow
      receiveShadow
    >
      <primitive
        object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd}
      />
      <skinnedMesh
        // geometry={masterHeadModel.nodes.HeadBonsai.geometry}
        // material={masterHeadModel.materials.bonzaiNoun_material}
        skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
        castShadow
        receiveShadow
      >
        <primitive object={nodes.Head} attach="geometry" />
        <primitive object={materials.headMAT} attach="material" />
      </skinnedMesh>
      <skinnedMesh
        // geometry={masterHeadModel.nodes.Glasses.geometry}
        //  material={materials.HeadRabbit_material}
        skeleton={masterHeadModel.nodes.GlassesUV.skeleton}
        castShadow
        receiveShadow
      >
        <primitive object={nodes.GlassesUV.geometry} attach="geometry" />
        <meshStandardMaterial map={glassesProp} attach="material" />
      </skinnedMesh>
    </group>
  );
};

useGLTF.preload('/headModels/sharkHead.glb');

export default SharkHead;
