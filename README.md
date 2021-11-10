# 3D Nouns

3D Nouns was created by @0xFloyd and @CoralOrca and funded by NounsDAO under Proposal 2.

// shadows: https://discourse.threejs.org/t/hello-i-am-facing-the-problem-with-shadow-stripes-on-model/18065/2

// https://stackoverflow.com/questions/43621274/how-to-correctly-set-lighting-for-custom-shader-material

// add in to vetrtex: THREE.ShaderChunk['shadowmap_pars_vertex']

https://www.youtube.com/watch?v=C8Cuwq1eqDw

<shaderMaterial
// transparent={true}
// lights={true}
attach="material"
args={[bodyFragmentShader]}
needsUpdate={true}
skinning={true}
// castShadow
// dithering
/>

     const uniforms = useMemo(
    () =>
      THREE.UniformsUtils.merge([
        THREE.UniformsLib.lights,
        {
          tex: {
            type: 't',
            value: accessoryTexture,
          },
          tex2: {
            type: 't',
            value: bodyTexture,
          },
        },
      ]),
    [bodyTexture, accessoryTexture]

);
