import { useAnimations, useGLTF } from '@react-three/drei';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';
import React, { useEffect, useRef } from 'react';

const HeadTest119PineappleHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
  masterHeadModel,
}) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/pipeline1110/pinappleHeadNoBound.glb');

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
      visible={headProp === 'Pineapple' ? true : false}
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
        <primitive object={nodes.HeadPinapple.geometry} attach="geometry" />
        <primitive object={materials.PinappleMAT} attach="material" />
      </skinnedMesh>
      <skinnedMesh
        // geometry={masterHeadModel.nodes.Glasses.geometry}
        //  material={materials.HeadRabbit_material}
        skeleton={masterHeadModel.nodes.GlassesUV.skeleton}
        castShadow
        receiveShadow
      >
        <primitive object={nodes.Glasses.geometry} attach="geometry" />
        <meshStandardMaterial map={glassesProp} attach="material" />
      </skinnedMesh>
    </group>
  );
};

useGLTF.preload('/pipeline1110/pinappleHeadNoBound.glb');

export default HeadTest119PineappleHead;
