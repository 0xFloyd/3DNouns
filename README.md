# 3D Nouns

3D Nouns was created by @0xFloyd and @CoralOrca and funded by NounsDAO under Proposal 2.

// add in to vetrtex: THREE.ShaderChunk['shadowmap_pars_vertex']

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
