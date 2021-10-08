import React from 'react';
import * as THREE from 'three';
import galaxyVertexShader from '../shaders/vertex.glsl';
import galaxyFragmentShader from '../shaders/fragment.glsl';
import { useThree } from '@react-three/fiber';

let galaxyMaterial = null;
let galaxyPoints = null;

const Galaxy = () => {
  let geometry = null;
  galaxyMaterial = null;
  galaxyPoints = null;

  const parameters = {};
  parameters.count = 50000;
  parameters.size = 0.005;
  parameters.radius = 100;
  parameters.branches = 3;
  parameters.spin = 1;

  parameters.randomnessPower = 3;
  parameters.insideColor = '#ff6030';
  parameters.outsideColor = '#1b3984';
  parameters.randomness = 0.2;

  const positions = new Float32Array(parameters.count * 3);
  const randomness = new Float32Array(parameters.count * 3);

  const colors = new Float32Array(parameters.count * 3);
  const scales = new Float32Array(parameters.count * 1);

  const insideColor = new THREE.Color(parameters.insideColor);
  const outsideColor = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    // Position
    const radius = Math.random() * parameters.radius;

    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius -
      50;

    positions[i3] = Math.cos(branchAngle) * radius;
    positions[i3 + 1] = 0;
    positions[i3 + 2] = Math.sin(branchAngle) * radius;

    randomness[i3] = randomX;
    randomness[i3 + 1] = randomY;
    randomness[i3 + 2] = randomZ;

    // Color
    const mixedColor = insideColor.clone();
    mixedColor.lerp(outsideColor, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    // Scale
    scales[i] = Math.random();
  }
  geometry = new THREE.BufferGeometry();
  galaxyMaterial = new THREE.ShaderMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    vertexShader: galaxyVertexShader,
    fragmentShader: galaxyFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 30 * useThree().gl.getPixelRatio(); },
    },
  });

  galaxyPoints = new THREE.Points(geometry, galaxyMaterial);

  return (
    <>
      <group>
      <points>
      <bufferGeometry attach="geometry"/>
        {/* <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          ref={attrib}
          attachObject={['attributes', 'rgba']}
          count={colors.length / 4}
          array={colors}
          itemSize={4}
        /> */}

      <shaderMaterial
        attach="material"
        uniforms={{
          uTime: { value: 0 },
          uSize: { value: 30 * useThree().gl.getPixelRatio() },
        }}
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        alphaTest={0.5}
        depthWrite={false}
        vertexColors
        transparent
      />
    </points>
      </group>
    </>
  );
};

export default Galaxy;
