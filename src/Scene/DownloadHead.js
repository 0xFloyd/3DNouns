import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import data from 'data.json';
import { getHeadPath } from 'utils/utils';

export default function DownloadHead({ headProp, glassesProp, animationState, animationValue }) {
  const { nodes, materials } = useGLTF(`/headModels/${getHeadPath(headProp)}`);

  return (
    <group dispose={null}>
      <mesh>
        <primitive object={nodes.Head.geometry} attach="geometry" />
        <primitive object={materials.headMAT} attach="material" />
      </mesh>
      <mesh>
        <primitive object={nodes.GlassesUV.geometry} attach="geometry" />
        <meshStandardMaterial map={glassesProp} attach="material" />
      </mesh>
    </group>
  );
}

useGLTF.preload('/baseModels/head.glb');
