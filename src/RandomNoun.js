import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import finalBody from './assets/Models/FINALBODY.glb';
import data from './data.json';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { BodyMesh } from 'assets/FullBodyNouns/BodyMesh';
import {
  lookupAccessoryTexture,
  lookupBodyTexture,
  lookupShoeTexture,
} from 'assets/FullBodyNouns/FinalPipelineTest';

const RandomNoun = ({ accessoryTexture, bodyTexture, shoeTexture }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/FINALBODY.glb');

  return (
    <group>
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.hands.geometry}
        material={materials.handsMAT}
        skeleton={nodes.hands.skeleton}
        castShadow
      />
      <skinnedMesh
        geometry={nodes.body.geometry}
        // material={materials.bodyMAT}
        skeleton={nodes.body.skeleton}
      >
        <BodyMesh
          skeletonParts={nodes.body.skeleton}
          bodyTexture={bodyTexture}
          accessoryTexture={accessoryTexture}
        />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.pants.geometry}
        material={materials.pantsMAT}
        skeleton={nodes.pants.skeleton}
        castShadow
      />
      <skinnedMesh
        geometry={nodes.shoes.geometry}
        // material={materials.shoesMAT}
        skeleton={nodes.shoes.skeleton}
        castShadow
      >
        <meshStandardMaterial map={shoeTexture} attach="material" />
      </skinnedMesh>
    </group>
  );
};

useGLTF.preload('/FINALBODY.glb');

export default RandomNoun;
