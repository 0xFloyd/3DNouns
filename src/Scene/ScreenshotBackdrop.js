import React, { useRef } from 'react';
import { Backdrop, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ScreenshotBackdrop = ({ sceneColor }) => {
  return (
    <Backdrop
      receiveShadow
      castShadow
      floor={5}
      position={[0, -0.5, -100]}
      scale={[500, 250, 50]}
    >
      <meshStandardMaterial
        color={new THREE.Color(sceneColor).convertSRGBToLinear()}
        envMapIntensity={0.1}
      />
    </Backdrop>
  );
};

export default ScreenshotBackdrop;
