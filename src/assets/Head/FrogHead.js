import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FrogModel from '../Models/Heads/FrogHead.glb';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import glassesTexture from '../Textures/Glasses/glasses-square-fullblack.png';

export default function FrogHead({ headProp, glassesProp }) {
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
    // Reset and fade in animation after an index has been changed

    actions[names[3]].reset().fadeIn(0.5).play();

    // if (walkAnimation) {
    //   actions[names[0]].reset().fadeIn(0.5).play();
    // }

    //In the clean-up phase, fade it out
    return () => actions[names[3]].fadeOut(0.5);
  }, [actions, names]);

  return (
    <group
      ref={group}
      dispose={null}
      visible={headProp === 'Frog' ? true : false}
    >
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.FrogHead.geometry}
        material={materials.headMAT}
        skeleton={nodes.FrogHead.skeleton}
      />
      <skinnedMesh
        geometry={nodes.glasses.geometry}
        // material={materials.glassesMAT}
        skeleton={nodes.glasses.skeleton}
      >
        {' '}
        <meshStandardMaterial map={glassesTest} attach="material" />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload(FrogModel);
