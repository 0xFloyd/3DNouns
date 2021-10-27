import { useLoader } from '@react-three/fiber';
import React, { useMemo } from 'react';
import transparentSmiley from '../outUVTransparentSmiley.png';
import solidBlue from '../solidBlue.png';
import * as THREE from 'three';
// import "./ImageFadeMaterial";
import bodyRust from '../Body/body-rust.png';
import bodySlimegreen from '../Body/body-slimegreen.png';

import accessoryStripesBlueMed from '../Accessories/accessory-stripes-blue-med.png';
import accessoryStripesRedCold from '../Accessories/accessory-stripes-red-cold.png';

export const BodyMesh = ({ skeletonParts, bodyTexture, accessoryTexture }) => {
  const smileyTexture = useLoader(THREE.TextureLoader, transparentSmiley);
  const solidTexture = useLoader(THREE.TextureLoader, solidBlue);

  const bodyRustTexture = useLoader(THREE.TextureLoader, bodyRust);
  const bodySlimegreenTexture = useLoader(THREE.TextureLoader, bodySlimegreen);

  const bodyTex = useLoader(
    THREE.TextureLoader,
    require`../Body/${bodyTexture}`
  );

  const accessoryStripesBlueMedTexture = useLoader(
    THREE.TextureLoader,
    accessoryStripesBlueMed
  );
  const accessoryStripesRedColdTexture = useLoader(
    THREE.TextureLoader,
    accessoryStripesRedCold
  );

  accessoryStripesBlueMedTexture.flipY = false;
  accessoryStripesBlueMedTexture.magFilter = THREE.NearestFilter;
  accessoryStripesBlueMedTexture.minFilter = THREE.NearestFilter;

  accessoryStripesRedColdTexture.flipY = false;
  accessoryStripesRedColdTexture.magFilter = THREE.NearestFilter;
  accessoryStripesRedColdTexture.minFilter = THREE.NearestFilter;

  let bodyArray = [
    { name: 'bodyRustTexture', value: bodyRustTexture },
    { name: 'bodySlimegreenTexture', value: bodySlimegreenTexture },
  ];

  let accessoryArray = [
    {
      name: 'accessoryStripesBlueMedTexture',
      value: accessoryStripesBlueMedTexture,
    },
    {
      name: 'accessoryStripesRedColdTexture',
      value: accessoryStripesRedColdTexture,
    },
  ];

  const lookupBodyTexture = (bodyTextureParam) => {
    let result = bodyArray.find((obj) => {
      return obj.name === bodyTextureParam;
    });
    if (result) {
      return result.value;
    } else {
      return null;
    }
  };

  const lookupAccessoryTexture = (accessoryTextureParam) => {
    let result = accessoryArray.find((obj) => {
      return obj.name === accessoryTextureParam;
    });
    if (result) {
      return result.value;
    } else {
      return null;
    }
  };

  // useMemo(() => {
  //   solidTexture.generateMipmaps = true;
  //   // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  //   solidTexture.needsUpdate = true;
  //   solidTexture.magFilter = THREE.NearestFilter;
  //   solidTexture.minFilter = THREE.NearestFilter;
  //   // texture.repeat = new THREE.Vector2(1, 1);
  //   // texture.wrapS = THREE.MirroredRepeatWrapping;
  //   // texture.wrapT = THREE.MirroredRepeatWrapping;
  //   solidTexture.flipY = false;
  //   // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  // }, [
  //   solidTexture.generateMipmaps,
  //   solidTexture.wrapS,
  //   solidTexture.wrapT,
  //   solidTexture.minFilter,
  //   solidTexture.needsUpdate,
  // ]);
  // useMemo(() => {
  //   smileyTexture.generateMipmaps = true;
  //   // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  //   smileyTexture.needsUpdate = true;
  //   smileyTexture.magFilter = THREE.NearestFilter;
  //   smileyTexture.minFilter = THREE.NearestFilter;
  //   // texture.repeat = new THREE.Vector2(1, 1);
  //   // texture.wrapS = THREE.MirroredRepeatWrapping;
  //   // texture.wrapT = THREE.MirroredRepeatWrapping;
  //   smileyTexture.flipY = false;

  //   // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  // }, [
  //   smileyTexture.generateMipmaps,
  //   smileyTexture.wrapS,
  //   smileyTexture.wrapT,
  //   smileyTexture.minFilter,
  //   smileyTexture.needsUpdate,
  // ]);

  // https://codesandbox.io/s/shadermaterials-1g4qq?from-embed=&file=/src/ImageFadeMaterial.js
  // https://spectrum.chat/react-three-fiber/general/using-custom-shader~7f670df0-82ba-45ac-9618-c9038260b806
  // var vertShader = document.getElementById("vertex_shh").innerHTML;
  // var fragShader = document.getElementById("fragment_shh").innerHTML;

  var attributes = {}; // custom attributes, sadi to be incliuded in materail

  const uniforms = useMemo(
    () => ({
      // custom uniforms (your textures)

      tex: { type: 't', value: lookupAccessoryTexture(accessoryTexture) },
      tex2: { type: 't', value: bodyTex },
      // tex: { type: 't', value: accessoryStripesBlueMedTexture },
      // tex2: { type: 't', value: bodySlimegreenTexture },
    }),
    [accessoryTexture, bodyTex]
  );

  let huh = skeletonParts;

  // https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
  let bodyFragmentShader = {
    uniforms: uniforms,
    vertexShader: [
      'varying vec2 vUv;',
      'void main() {',
      'vUv = uv;',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.01);',
      '}',
    ].join('\n'),
    fragmentShader: [
      'varying vec2 vUv;',
      'uniform sampler2D tex;',
      'uniform sampler2D tex2;',
      'void main(void) {',
      'vec3 c;',
      'vec4 Ca = texture2D(tex, vUv);',
      'vec4 Cb = texture2D(tex2, vUv);',
      'c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.0 - Ca.a);',
      'gl_FragColor= vec4(c, 1.0);',
      '}',
    ].join('\n'),
  };

  return (
    <shaderMaterial
      transparent={true}
      attach="material"
      args={[bodyFragmentShader]}
      needsUpdate={true}
    />
  );
};

// Working 10/15/21
/* 

 let bodyFragmentShader = {
    uniforms: uniforms,
    vertexShader: [
      'varying vec2 vUv;',
      'void main() {',
      'vUv = uv;',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.01);',
      '}',
    ].join('\n'),
    fragmentShader: [
      'varying vec2 vUv;',
      'uniform sampler2D tex;',
      'uniform sampler2D tex2;',
      'void main(void) {',
      'vec3 c;',
      'vec4 Ca = texture2D(tex, vUv);',
      'vec4 Cb = texture2D(tex2, vUv);',
      'c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.0 - Ca.a);',
      'gl_FragColor= vec4(c, 1.0);',
      '}',
    ].join('\n'),
  };


*/
