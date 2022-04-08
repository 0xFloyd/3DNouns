import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import { lookupAnimation } from 'utils/utils.js';

export default function HeadTest119BonsaiHead({ headProp, glassesProp, animationState, animationValue, masterHeadModel }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/pipeline1110/headAnim.glb');

  const { ref, mixer, names, actions } = useAnimations(masterHeadModel.animations, group);

  useEffect(() => {
    if (animationState) {
      actions[names[lookupAnimation(animationValue)]].reset().fadeIn(0.5).play();
      return () => actions[names[lookupAnimation(animationValue)]].fadeOut(0.5);
    }
  }, [actions, names, animationState, animationValue]);

  return (
    <group
      ref={group}
      dispose={null}
      visible={headProp === 'Bonsai' ? true : false}
      castShadow
      receiveShadow
      // position={[0, 1, 0]}
    >
      <primitive object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        // geometry={masterHeadModel.nodes.HeadBonsai.geometry}
        // material={masterHeadModel.materials.bonzaiNoun_material}
        skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
        castShadow
        receiveShadow>
        <primitive object={nodes.HeadBonsai.geometry} attach="geometry" />
        <primitive object={materials.bonzaiNoun_material} attach="material" />
      </skinnedMesh>
      <skinnedMesh
        geometry={masterHeadModel.nodes.GlassesUV.geometry}
        //  material={materials.HeadRabbit_material}
        skeleton={masterHeadModel.nodes.GlassesUV.skeleton}
        castShadow
        receiveShadow>
        {/* <primitive object={nodes.Glasses.geometry} attach="geometry" /> */}
        <meshStandardMaterial map={glassesProp} attach="material" />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload('/pipeline1110/headAnim.glb');
