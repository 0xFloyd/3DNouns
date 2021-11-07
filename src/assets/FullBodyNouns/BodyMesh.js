import { useLoader } from '@react-three/fiber';
import React, { useMemo, useState } from 'react';
// import transparentSmiley from '../outUVTransparentSmiley.png';
// import solidBlue from '../solidBlue.png';
import * as THREE from 'three';
// import "./ImageFadeMaterial";
import data from '../../data.json';

export const BodyMesh = ({ skeletonParts, bodyTexture, accessoryTexture }) => {
  // https://codesandbox.io/s/shadermaterials-1g4qq?from-embed=&file=/src/ImageFadeMaterial.js
  // https://spectrum.chat/react-three-fiber/general/using-custom-shader~7f670df0-82ba-45ac-9618-c9038260b806
  // var vertShader = document.getElementById("vertex_shh").innerHTML;
  // var fragShader = document.getElementById("fragment_shh").innerHTML;

  var attributes = {}; // custom attributes, sadi to be incliuded in materail

  const uniforms = useMemo(
    () => ({
      // custom uniforms (your textures)

      tex: {
        type: 't',
        value: accessoryTexture,
      },
      tex2: {
        type: 't',
        value: bodyTexture,
      },
      // tex: { type: 't', value: accessoryStripesBlueMedTexture },
      // tex2: { type: 't', value: bodySlimegreenTexture },
    }),
    [bodyTexture, accessoryTexture]
  );

  // https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
  let bodyFragmentShader = {
    uniforms: uniforms,
    vertexShader: [
      'varying vec2 vUv;',
      THREE.ShaderChunk['common'],
      THREE.ShaderChunk['lights_pars'],
      THREE.ShaderChunk['morphtarget_pars_vertex'],
      THREE.ShaderChunk['skinning_pars_vertex'],
      'void main() {',
      'vUv = uv;',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.01);',

      THREE.ShaderChunk['skinbase_vertex'],
      THREE.ShaderChunk['begin_vertex'],
      THREE.ShaderChunk['morphtarget_vertex'],
      THREE.ShaderChunk['skinning_vertex'],
      THREE.ShaderChunk['project_vertex'],
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
      skinning={true}
    />
  );
};

// OLD COPY from inside component 11/5/21
// const bodyRustTexture = useLoader(THREE.TextureLoader, bodyRust);
// const bodySlimegreenTexture = useLoader(THREE.TextureLoader, bodySlimegreen);

// const accessoryStripesBlueMedTexture = useLoader(
//   THREE.TextureLoader,
//   accessoryStripesBlueMed
// );
// const accessoryStripesRedColdTexture = useLoader(
//   THREE.TextureLoader,
//   accessoryStripesRedCold
// );

// accessoryStripesBlueMedTexture.flipY = false;
// accessoryStripesBlueMedTexture.magFilter = THREE.NearestFilter;
// accessoryStripesBlueMedTexture.minFilter = THREE.NearestFilter;

// accessoryStripesRedColdTexture.flipY = false;
// accessoryStripesRedColdTexture.magFilter = THREE.NearestFilter;
// accessoryStripesRedColdTexture.minFilter = THREE.NearestFilter;

// let bodyArray = [
//   { name: 'bodyRustTexture', value: bodyRustTexture },
//   { name: 'bodySlimegreenTexture', value: bodySlimegreenTexture },
// ];

// let accessoryArray = [
//   {
//     name: 'accessoryStripesBlueMedTexture',
//     value: accessoryStripesBlueMedTexture,
//   },
//   {
//     name: 'accessoryStripesRedColdTexture',
//     value: accessoryStripesRedColdTexture,
//   },
// ];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// FINAL  11/2/21
/*
import { useLoader } from "@react-three/fiber"
import React, { useMemo } from "react"
import * as THREE from "three"

export const BodyTexture = ({ skeletonParts, bodyTexture, patternTexture }) => {
 

  let patternTex = useLoader(THREE.TextureLoader, `/assets/${patternTexture}`)
  patternTex.flipY = false
  patternTex.magFilter = patternTex.minFilter = THREE.NearestFilter

  let bodyTex = useLoader(THREE.TextureLoader, `/assets/${bodyTexture}`)
  bodyTex.flipY = false
  bodyTex.magFilter = bodyTex.minFilter = THREE.NearestFilter

  console.log('skeletonParts: ', skeletonParts)

  const uniforms = useMemo(
    () => ({
      tex: { type: "t", value: patternTex },
      tex2: { type: "t", value: bodyTex }
    }),
    [bodyTex, patternTex]
  )

  // https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
  let bodyFragmentShader = {
    uniforms: uniforms,
    vertexShader: [
      "varying vec2 vUv;",
      THREE.ShaderChunk[ "common" ],
      THREE.ShaderChunk[ "lights_pars" ],
      THREE.ShaderChunk[ "shadowmap_pars_vertex" ],
      THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
      THREE.ShaderChunk[ "skinning_pars_vertex" ],
      "void main() {",
      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);",

      THREE.ShaderChunk[ "skinbase_vertex" ],
      THREE.ShaderChunk[ "begin_vertex" ],
      THREE.ShaderChunk[ "morphtarget_vertex" ],
      THREE.ShaderChunk[ "skinning_vertex" ],
      THREE.ShaderChunk[ "project_vertex" ],
      "}"
    ].join("\n"),
    fragmentShader: [
      "varying vec2 vUv;",
      "uniform sampler2D tex;",
      "uniform sampler2D tex2;",
      "void main(void) {",
      "vec3 c;",
      "vec4 Ca = texture2D(tex, vUv);",
      "vec4 Cb = texture2D(tex2, vUv);",
      "c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.0 - Ca.a);",
      "gl_FragColor= vec4(c, 1.0);",
      "}"
    ].join("\n")
  }

  return <shaderMaterial skinning={true} transparent={true} attach="material" args={[bodyFragmentShader]} needsUpdate={true} />
}
*/
