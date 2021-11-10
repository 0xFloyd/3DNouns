import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HeadTest119BonsaiHead from './HeadTest119BonsaiHead';
import HeadTest119PineappleHead from './HeadTest119PineappleHead';

const MasterHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
}) => {
  const MasterHead = useGLTF('/pipeline1110/headAnim.glb');

  const glassesTest = useLoader(
    THREE.TextureLoader,
    `/textures/glasses/${glassesProp}`
  );

  glassesTest.flipY = false;
  glassesTest.magFilter = glassesTest.minFilter = THREE.NearestFilter;

  /* 
0: Object { name: "apose", duration: 0, blendMode: 2500, … }
1: Object { name: "dance1", duration: 3.125, blendMode: 2500, … }
2: Object { name: "dance2", duration: 2.25, blendMode: 2500, … }
3: Object { name: "idle", duration: 52.70833206176758, blendMode: 2500, … }
4: Object { name: "jump", duration: 1.875, blendMode: 2500, … }
5: Object { name: "run", duration: 8.958333015441895, blendMode: 2500, … }
6:Object { name: "swim", duration: 4.5, blendMode: 2500, … }
7: Object { name: "tpose", duration: 0, blendMode: 2500, … }
8: Object { name: "walk", duration: 8.416666984558105, blendMode: 2500, … }
  */

  // console.log('MasterHead: ', MasterHead.animations);
  return (
    <>
      <HeadTest119BonsaiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HeadTest119PineappleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
    </>
  );
};

export default MasterHead;

useGLTF.preload('/pipeline1110/headAnim.glb');
