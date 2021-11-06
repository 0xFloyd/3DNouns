import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useAnimations, Plane, useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import carrot from '../cropped-carrot.png';
// import Wizardhat from './Wizardhat';
import { SkeletonUtils } from 'three-stdlib';
import uvMappedTexture from '../frogTpose.png';
import uvGOOD from '../UVgood.png';
import outUVw from '../outUVw.png';

const AnimationFrog = (props) => {
  const { walkAnimation, nodAnimation } = props;
  const group = useRef();
  const skinnedMeshRef = useRef();
  const { nodes, materials, animations } = useGLTF('/MagicHatGLB.glb');

  // const uvMapTexture = useTexture(uvMappedTexture);
  // const uvMapTexture = useLoader(THREE.TextureLoader, uvMappedTexture);

  // const wizardHat = useGLTF('/wizardhat.glb');

  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const [shirtColor, setShirtColor] = useState('black');
  // const texture = useTexture(carrot);

  const [index, setIndex] = useState(0);
  // let skeleton = nodes.NounHead.skeleton;
  // let boneHead = nodes.NounHead.geometry;
  // let huh = nodes.mixamorigHips.children[0];

  // const whatIsMaterial = nodes.NounGlasses.material;

  // useMemo(() => {
  //   // texture.generateMipmaps = true;
  //   // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  //   texture.needsUpdate = true;
  //   texture.magFilter = THREE.NearestFilter;
  //   texture.minFilter = THREE.NearestFilter;
  //   texture.repeat = new THREE.Vector2(1, 1);
  //   texture.wrapS = THREE.MirroredRepeatWrapping;
  //   texture.wrapT = THREE.MirroredRepeatWrapping;
  //   texture.flipY = false;
  //   // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  // }, [
  //   texture.generateMipmaps,
  //   texture.wrapS,
  //   texture.wrapT,
  //   texture.minFilter,
  //   texture.needsUpdate,
  // ]);

  const { scene } = useThree();

  // object disappears: https://discourse.threejs.org/t/parts-of-glb-object-disappear-in-certain-angles-and-zoom/21295/2
  useEffect(() => {
    if (scene) {
      scene.traverse(function (obj) {
        obj.frustumCulled = false;
      });
    }
  }, []);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    if (walkAnimation) {
      actions[names[0]].reset().fadeIn(0.5).play();
    }

    //In the clean-up phase, fade it out
    return () => actions[names[0]].fadeOut(0.5);
  }, [actions, names, walkAnimation]);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    if (nodAnimation) {
      actions[names[1]].reset().fadeIn(0.5).play();
    }

    //In the clean-up phase, fade it out
    return () => actions[names[1]].fadeOut(0.5);
  }, [actions, names, nodAnimation]);

  // useEffect(() => {
  //   actions.rope.play();
  // });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.01, 0.01, 0.01]}>
      {/* <Plane
        args={[8, 8]}
        material-map={texture}
        material-transparent
        position={[0, 15, 2.01]}
      /> */}

      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.mixamorigHips} />
        {/* <WizardHat /> */}
        <skinnedMesh
          name="body"
          geometry={nodes.NounBody.geometry}
          // material={nodes.NounBody.material}
          // material-color={shirtColor}
          skeleton={nodes.NounBody.skeleton}
        >
          {/* <meshStandardMaterial map={texture} /> */}
        </skinnedMesh>
        <skinnedMesh
          name="glasses"
          geometry={nodes.NounGlasses.geometry}
          material={nodes.NounGlasses.material}
          skeleton={nodes.NounGlasses.skeleton}
        />
        <skinnedMesh
          name="hands"
          geometry={nodes.NounHands.geometry}
          material={nodes.NounHands.material}
          skeleton={nodes.NounHands.skeleton}
        />
        {/* <skinnedMesh
          name="head"
          geometry={wizardHat.nodes.MagicHead.geometry}
          material={wizardHat.nodes.MagicHead.material}
          skeleton={nodes.NounHead.skeleton}
        /> */}

        <skinnedMesh
          name="head"
          geometry={nodes.NounHead.geometry}
          material={nodes.NounHead.material}
          skeleton={nodes.NounHead.skeleton}
        />
        <skinnedMesh
          name="pants"
          geometry={nodes.NounPants.geometry}
          material={nodes.NounPants.material}
          skeleton={nodes.NounPants.skeleton}
        />
        <skinnedMesh
          name="shoes"
          geometry={nodes.NounShoes.geometry}
          material={nodes.NounShoes.material}
          skeleton={nodes.NounShoes.skeleton}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/Frog2anim.glb');
useGLTF.preload('/wizardhat.glb');

export default AnimationFrog;

// const WizardHat = () => {
//   useEffect(() => {
//     if (skinnedMeshRef && skinnedMeshRef.current && skeleton) {
//       skinnedMeshRef.current.bind(skeleton);
//     }
//   });

//   return (
//     <group>
//       <skinnedMesh
//         name="head"
//         geometry={wizardHat.nodes.MagicHead.geometry}
//         material={wizardHat.materials.Material_0}
//         position={[-12, -9, -21]}
//         skeleton={nodes.NounHead.skeleton}
//         ref={skinnedMeshRef}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// };
