import { useThree } from '@react-three/fiber';
import React, { useMemo } from 'react';
import * as THREE from 'three';
import { SkyBox } from './SkyShader';

const SkyShader = () => {
  let { scene } = useThree();
  const uniforms = SkyBox.SkyShader.uniforms;

  let bodyFragmentShader = {
    uniforms: uniforms,
    vertexShader: SkyBox.SkyShader.vertexShader,
    fragmentShader: SkyBox.SkyShader.fragmentShader,
  };

  return (
    <mesh>
      <boxGeometry args={[1000, 1000, 1000]} />
      <shaderMaterial
        side={THREE.BackSide}
        depthWrite={false}
        attach="material"
        args={[bodyFragmentShader]}
      />
    </mesh>
  );
};

export default SkyShader;
