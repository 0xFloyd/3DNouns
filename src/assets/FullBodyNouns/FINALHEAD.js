import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FrogModel from '../Models/Heads/FrogHead.glb';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import glassesTexture from '../Textures/Glasses/glasses-square-fullblack.png';
import FrogHead from 'assets/Head/FrogHead';
import PineappleHead from 'assets/Head/PinaHead';
import { headComponents } from 'utils/AllHeadModels';

export default function ModelHead(props) {
  const components = headComponents.map((obj) => {
    const Component = obj.value;
    return <Component />;
  });

  return components;
}
