import { useLoader } from '@react-three/fiber';
import React, { useMemo } from 'react';
import * as THREE from 'three';
import { TTFLoader } from 'three-stdlib';
import { Font, FontLoader } from 'past-ideas/FontLoader';

const TestText = () => {
  const font = FontLoader().parse('/fonts/kenpixel.json');

  const config = useMemo(
    () => ({
      font,
      size: 5,
      height: 0.5,
      //   curveSegments: 16,
      //   //   bevelEnabled: true,
      //   bevelThickness: 1,
      //   bevelSize: 1.25,
      //   bevelOffset: 0,
      //   bevelSegments: 4,
    }),
    [font]
  );

  return (
    <mesh
      position={[-2, 5, 0.1]}

      // scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
    >
      <textGeometry
        // computeBoundingBox
        // computeVertexNormals
        args={['TEST', config]}
      />
      <meshStandardMaterial attach="material" color={'#d63c5e'} />
    </mesh>
  );
};

export default TestText;
