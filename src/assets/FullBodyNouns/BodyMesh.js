import { useLoader } from "@react-three/fiber";
import React, { useMemo } from "react";
import transparentSmiley from "../outUVTransparentSmiley.png";
import solidBlue from "../solidBlue.png";
import * as THREE from "three";
// import "./ImageFadeMaterial";

export const BodyMesh = () => {
  const smileyTexture = useLoader(THREE.TextureLoader, transparentSmiley);
  const solidTexture = useLoader(THREE.TextureLoader, solidBlue);

  useMemo(() => {
    solidTexture.generateMipmaps = true;
    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    solidTexture.needsUpdate = true;
    solidTexture.magFilter = THREE.NearestFilter;
    solidTexture.minFilter = THREE.NearestFilter;
    // texture.repeat = new THREE.Vector2(1, 1);
    // texture.wrapS = THREE.MirroredRepeatWrapping;
    // texture.wrapT = THREE.MirroredRepeatWrapping;
    solidTexture.flipY = false;
    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [
    solidTexture.generateMipmaps,
    solidTexture.wrapS,
    solidTexture.wrapT,
    solidTexture.minFilter,
    solidTexture.needsUpdate,
  ]);
  useMemo(() => {
    smileyTexture.generateMipmaps = true;
    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    smileyTexture.needsUpdate = true;
    smileyTexture.magFilter = THREE.NearestFilter;
    smileyTexture.minFilter = THREE.NearestFilter;
    // texture.repeat = new THREE.Vector2(1, 1);
    // texture.wrapS = THREE.MirroredRepeatWrapping;
    // texture.wrapT = THREE.MirroredRepeatWrapping;
    smileyTexture.flipY = false;

    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [
    smileyTexture.generateMipmaps,
    smileyTexture.wrapS,
    smileyTexture.wrapT,
    smileyTexture.minFilter,
    smileyTexture.needsUpdate,
  ]);

  // https://codesandbox.io/s/shadermaterials-1g4qq?from-embed=&file=/src/ImageFadeMaterial.js
  // https://spectrum.chat/react-three-fiber/general/using-custom-shader~7f670df0-82ba-45ac-9618-c9038260b806
  // var vertShader = document.getElementById("vertex_shh").innerHTML;
  // var fragShader = document.getElementById("fragment_shh").innerHTML;

  var attributes = {}; // custom attributes, sadi to be incliuded in materail

  const uniforms = useMemo(
    () => ({
      // custom uniforms (your textures)

      tex: { type: "t", value: smileyTexture },
      tex2: { type: "t", value: solidTexture },
    }),
    []
  );

  // https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
  let bodyFragmentShader;
  useMemo(() => {
    bodyFragmentShader = {
      uniforms: uniforms,
      vertexShader: [
        "varying vec2 vUv;",
        "void main() {",
        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.01);",
        "}",
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
        "}",
      ].join("\n"),
    };
  }, [uniforms]);

  // var material_shh = new THREE.ShaderMaterial({
  //   uniforms: uniforms,
  //   vertexShader: vertShader,
  //   fragmentShader: fragShader,
  // });

  // <shaderMaterial
  //   attach="material"
  //   args={[
  //     {
  //       uniforms: uniforms,
  //       vertexShader: vertex,
  //       fragmentShader: fragment,
  //     },
  //   ]}
  // />;

  // return <meshStandardMaterial transparent={true} map={smileyTexture} />;
  return (
    <shaderMaterial
      transparent={true}
      attach="material"
      args={[bodyFragmentShader]}
    />
  );
};
