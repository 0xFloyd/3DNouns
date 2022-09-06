import { useAnimations, useGLTF } from '@react-three/drei';
import { lookupAnimation, lookupHead } from 'utils/utils.js';
import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const HeadModel = ({ headProp, glassesProp, animationState, animationValue, masterHeadModel }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(`/headModels/${lookupHead(headProp)}`);

  const { ref, mixer, names, actions } = useAnimations(masterHeadModel.animations, group);

  useEffect(() => {
    if (animationState) {
      actions[names[lookupAnimation(animationValue)]].reset().fadeIn(0.25).play();
      return () => actions[names[lookupAnimation(animationValue)]].fadeOut(0.25);
    }
  }, [actions, names, animationState, animationValue]);

  // console.count('test head render');

  let glassesTest = useLoader(THREE.TextureLoader, `/textures/glasses/${glassesProp}`);
  glassesTest.flipY = false;
  glassesTest.magFilter = THREE.LinearMipMapNearestFilter;
  glassesTest.minFilter = THREE.LinearMipMapNearestFilter;
  glassesTest.needsUpdate = true;

  useEffect(() => {
    glassesTest.needsUpdate = true;
    glassesTest.flipY = false;
    glassesTest.magFilter = THREE.LinearMipMapNearestFilter;
    glassesTest.minFilter = THREE.LinearMipMapNearestFilter;
    glassesTest.needsUpdate = true;
  }, [glassesTest.magFilter, glassesTest.minFilter, glassesTest.needsUpdate, glassesProp, glassesTest]);

  return (
    <group
      ref={group}
      dispose={null}
      castShadow
      receiveShadow
    >
      <primitive object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
        castShadow
        receiveShadow
      >
        <primitive
          object={nodes.Head.geometry}
          attach="geometry"
        />
        <primitive
          object={materials.headMAT}
          attach="material"
        />
      </skinnedMesh>
      <skinnedMesh skeleton={masterHeadModel.nodes.GlassesUV.skeleton}>
        <primitive
          object={nodes.GlassesUV.geometry}
          attach="geometry"
        />
        <meshStandardMaterial
          map={glassesTest}
          attach="material"
        />
      </skinnedMesh>
    </group>
  );
};

export default HeadModel;
