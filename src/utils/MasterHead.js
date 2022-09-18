import { useGLTF, useProgress, useTexture } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import HeadModel from './HeadModel';

const MasterHead = ({ headProp, glassesProp, animationState, animationValue }) => {
  const { gl } = useThree();
  const MasterHead = useGLTF('/baseModels/head.glb');

  return (
    <HeadModel
      headProp={headProp}
      glassesProp={glassesProp}
      animationState={animationState}
      animationValue={animationValue}
      masterHeadModel={MasterHead}
    />
  );
};

export default React.memo(MasterHead);

useGLTF.preload('/baseModels/head.glb');
