import React, { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import transparentSmiley from '../outUVTransparentSmiley.png';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { BodyMesh } from './BodyMesh';
import solidBlue from '../solidBlue.png';
import THEBODY from '../../Models/untitled.glb';

export default function SeperateHeadBody({
  walkAnimation,
  nodAnimation,
  bodyTexture,
  accessoryTexture,
}) {
  const group = useRef();
  const shaderRef = useRef();
  const { nodes, materials, animations } = useGLTF(THEBODY);
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const smileyTexture = useLoader(THREE.TextureLoader, transparentSmiley);
  const solidTexture = useLoader(THREE.TextureLoader, solidBlue);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    if (walkAnimation) {
      actions[names[0]].reset().fadeIn(0.5).play();
    }

    //In the clean-up phase, fade it out
    return () => actions[names[0]].fadeOut(0.5);
  }, [actions, names, walkAnimation]);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    if (nodAnimation) {
      actions[names[1]].reset().fadeIn(0.5).play();
    }

    //In the clean-up phase, fade it out
    return () => actions[names[1]].fadeOut(0.5);
  }, [actions, names, nodAnimation]);

  useMemo(() => {
    smileyTexture.generateMipmaps = true;
    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    smileyTexture.needsUpdate = true;
    smileyTexture.magFilter = THREE.NearestFilter;
    smileyTexture.minFilter = THREE.NearestFilter;
    // texture.repeat = new THREE.Vector2(1, 1);
    // texture.wrapS = THREE.MirroredRepeatWrapping;
    // texture.wrapT = THREE.MirroredRepeatWrapping;
    smileyTexture.flipY = false;
    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [
    smileyTexture.generateMipmaps,
    smileyTexture.wrapS,
    smileyTexture.wrapT,
    smileyTexture.minFilter,
    smileyTexture.needsUpdate,
  ]);

  return (
    <group ref={group} dispose={null}>
      <group scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.MagicTestANIMmixamorigHips} />
        <skinnedMesh
          geometry={nodes.Hand.geometry}
          material={nodes.Hand.material}
          skeleton={nodes.Hand.skeleton}
        />
        <skinnedMesh
          geometry={nodes.BodyUVed.geometry}
          // material={materials.body_material}
          skeleton={nodes.BodyUVed.skeleton}
        >
          <BodyMesh
            skeletonParts={nodes.BodyUVed.skeleton}
            bodyTexture={bodyTexture}
            accessoryTexture={accessoryTexture}
          />
          {/* <imageFadeMaterial
            ref={shaderRef}
            tex={smileyTexture}
            tex2={solidTexture}
          /> */}
        </skinnedMesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pants.geometry}
        material={nodes.Pants.material}
        position={[-0.04, 0.01, -0.02]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoes.geometry}
        material={nodes.Shoes.material}
        position={[-0.04, 0, -0.02]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
}

useGLTF.preload('/TuesdayBody.glb');
