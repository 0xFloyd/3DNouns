import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PineappleModel from '../Models/Heads/PinaHead.glb';

export default function PineappleHead({ headProp, glassesProp }) {
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
