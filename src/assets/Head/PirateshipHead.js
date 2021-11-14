import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FrogModel from '../Models/Heads/FrogHead.glb';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import glassesTexture from '../Textures/Glasses/glasses-square-fullblack.png';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

const PirateshipHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
  masterHeadModel,
}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/headModels/pirateshipHead.glb'
  );
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
      visible={headProp === 'Pirateship' ? true : false}
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
        <primitive object={nodes.Head.geometry} attach="geometry" />
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

useGLTF.preload('/headModels/pirateshipHead.glb');

export default PirateshipHead;
