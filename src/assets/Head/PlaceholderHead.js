import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useProgress } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import glassesTexture from '../Textures/Glasses/glasses-square-fullblack.png';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

export default function PlaceHolderHead({
  currentHead,
  glassesProp,
  animationState,
  animationValue,
  masterHeadModel,
  headData,
}) {
  const group = useRef();

  const { progress, loaded } = useProgress();

  const { nodes, materials, animations } = useGLTF(
    `/headModels/${headData.filePath}`
  );
  const { ref, mixer, names, actions } = useAnimations(
    masterHeadModel.animations,
    group
  );

  // useEffect(() => {
  //   if (nodes && progress === 100) {
  //   }
  // }, [nodes]);

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
    <>
      <group
        ref={group}
        dispose={null}
        visible={currentHead.name === headData.name ? true : false}
        castShadow
        receiveShadow
      >
        {masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd && (
          <primitive
            object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd}
          />
        )}
        {nodes.Head.geometry && materials.headMAT && (
          <skinnedMesh
            // geometry={nodes.FrogHead.geometry}
            // material={materials.headMAT}
            skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
            castShadow
            receiveShadow
          >
            <primitive object={nodes.Head.geometry} attach="geometry" />
            <primitive object={materials.headMAT} attach="material" />
          </skinnedMesh>
        )}
        {nodes.GlassesUV.geometry && (
          <skinnedMesh
            // geometry={nodes.GlassesUV.geometryy}
            // material={materials.glassesMAT}
            skeleton={masterHeadModel.nodes.GlassesUV.skeleton}
            castShadow
            receiveShadow
          >
            <primitive object={nodes.GlassesUV.geometry} attach="geometry" />
            <meshStandardMaterial map={glassesProp} attach="material" />
          </skinnedMesh>
        )}
      </group>
    </>
  );
}
