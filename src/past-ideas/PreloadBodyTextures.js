import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import data from '../data.json';

const PreloadBodyTextures = () => {
  let preLoadedBodies = [];

  useEffect(() => {
    data.body.forEach((bodyObj) => {
      preLoadedBodies.push({
        name: bodyObj.name,
        value: useLoader(
          THREE.TextureLoader,
          `/textures/body/${bodyObj.value}`
        ),
      });
    });
  }, []);

  return null;
};

export default PreloadBodyTextures;
