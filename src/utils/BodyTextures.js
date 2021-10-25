import React from 'react';
import { useLoader } from '@react-three/fiber';

import bodyRust from '../assets/Body/body-rust.png';
import bodySlimeGreen from '../assets/Body/body-slimegreen.png';
import bodyTealLight from '../assets/Body/body-teal-light.png';
import bodyTeal from '../assets/Body/body-teal.png';
import bodyYellow from '../assets/Body/body-yellow.png';
import * as THREE from 'three';

const BodyTextures = () => {
  const smileyTexture = useLoader(THREE.TextureLoader, transparentSmiley);

  return <div></div>;
};

export default BodyTextures;
