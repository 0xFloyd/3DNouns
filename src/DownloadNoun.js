import { useGraph, useLoader } from '@react-three/fiber';
import FINALBODY119 from 'assets/FullBodyNouns/FINALBODY119';
import React, { forwardRef, useMemo } from 'react';
import { headComponents } from 'utils/AllHeadModels';
import * as THREE from 'three';
import HeadTest119BonsaiHead from 'assets/Head/HeadTest119BonsaiHead';
import { useGLTF } from '@react-three/drei';
import DownloadHead from 'DownloadHead';
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils';
import DownloadBody from 'DownloadBody';

export const DownloadNoun = (
  {
    headProp,
    glassesProp,
    animationState,
    animationValue,
    pantsProp,
    accessoryProp,
    bodyProp,
    shoeProp,
    setSceneState,
  },
  ref
) => {
  // const MasterHead = useGLTF('/pipeline1110/headAnim.glb');

  const glassesTest = useLoader(
    THREE.TextureLoader,
    `/textures/glasses/${glassesProp}`
  );

  glassesTest.flipY = false;
  glassesTest.magFilter = glassesTest.minFilter = THREE.NearestFilter;

  //   const allHeadComponents = headComponents.map((obj, index) => {
  //     const Component = obj.value;
  //     return (
  //       <Component
  //         key={index}
  //         headProp={headProp}
  //         glassesProp={glassesTest}
  //         animationState={animationState}
  //         animationValue={animationValue}
  //         masterHeadModel={MasterHead}
  //       />
  //     );
  //   });

  return (
    <group visible={false} ref={ref} name="downloadNoun">
      <DownloadHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
      />
      <DownloadBody
        headProp={headProp}
        animationState={animationState}
        animationValue={animationValue}
        pantsProp={pantsProp}
        accessoryProp={accessoryProp}
        bodyProp={bodyProp}
        shoeProp={shoeProp}
      />
    </group>
  );
};

export default forwardRef(DownloadNoun);
