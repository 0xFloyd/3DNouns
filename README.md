# 3D Nouns

3D Nouns was created by @0xFloyd and @CoralOrca and funded by NounsDAO under Proposal 2.

// shadows: https://discourse.threejs.org/t/hello-i-am-facing-the-problem-with-shadow-stripes-on-model/18065/2

// https://stackoverflow.com/questions/43621274/how-to-correctly-set-lighting-for-custom-shader-material

// add in to vetrtex: THREE.ShaderChunk['shadowmap_pars_vertex']

https://www.youtube.com/watch?v=C8Cuwq1eqDw

dir /b > printit.txt will print only the file names

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

Design

One of the biggest decisions that had to be made was the method in which to load in all the head models. All 3D Nouns have the same body geometry, so reusing the same body model and applying different textures (with a custom shaderMaterial) allowed for a super lightweight, efficient noun body. Woo! However, each 3D Noun head has different geometry, and thus an indivial model for each head was required. Programmatically "building" each head voxel-style was initially considered, but it turned out to be much more performant to manually build each head model ahead of time and load it into the scene. Adding and disposing of objects in a threejs scene is expensive, so all 234 head models are preloaded into the scene on load, and all remain rendered in the scene at all times, while mesh visibility is toggled based on application state.
