import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import data from 'data.json';
// import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';

export default function DownloadHead({ headProp, glassesProp, animationState, animationValue }) {
  // const group = useRef();
  const { nodes, materials } = useGLTF(`/headModels/${getHeadPath(headProp)}`);

  //   const { ref, mixer, names, actions } = useAnimations(
  //     masterHeadModel.animations,
  //     group
  //   );

  return (
    <group
      // ref={group}
      dispose={null}
      //   visible={headProp === 'Bonsai' ? true : false}
      // castShadow
      // receiveShadow
      //   position={[0, 1, 0]}
    >
      {/* <primitive
        object={masterHeadModel.nodes.BodyAnimationSkeletonsJob_006Hipsd}
      /> */}
      <mesh
      // geometry={masterHeadModel.nodes.HeadBonsai.geometry}
      // material={masterHeadModel.materials.bonzaiNoun_material}
      // skeleton={masterHeadModel.nodes.HeadBonsai.skeleton}
      // castShadow
      // receiveShadow
      >
        <primitive
          object={nodes.Head.geometry}
          attach="geometry"
        />
        <primitive
          object={materials.headMAT}
          attach="material"
        />
      </mesh>
      <mesh
      // geometry={masterHeadModel.nodes.GlassesUV.geometry}
      //  material={materials.HeadRabbit_material}
      // skeleton={masterHeadModel.nodes.GlassesUV.skeleton}
      // castShadow
      // receiveShadow
      >
        <primitive
          object={nodes.GlassesUV.geometry}
          attach="geometry"
        />
        <meshStandardMaterial
          map={glassesProp}
          attach="material"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/baseModels/head.glb');

const getHeadPath = (headProp) => {
  let headFound = data.head.find((headObj) => headObj.name === headProp);
  return headFound.filePath;
};
