Ideas for UV mapping texture

Shaders
https://stackoverflow.com/questions/16287547/multiple-transparent-textures-on-the-same-mesh-face-in-three-js

https://stackoverflow.com/questions/13309289/three-js-geometry-on-top-of-another/13309722#13309722
var onTopMaterial = new THREE.MeshStandardMaterial({
color: 'red',
depthTest: false
});

mesh.material = onTopMaterial;
