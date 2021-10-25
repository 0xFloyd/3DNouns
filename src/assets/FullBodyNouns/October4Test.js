import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function October4Test(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/October4Ryanglb.glb");

  const model = useLoader(GLTFLoader, "/October4Ryanglb.glb");

  let length = model?.animations?.length;

  let theScene = model.scene;

  // Here's the animation part
  // *************************
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************
  console.log("huh");

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Character1_Reference"
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.Character1_Hips} />
        <skinnedMesh
          geometry={nodes.Body.geometry}
          material={nodes.Body.material}
          skeleton={nodes.Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Glasses.geometry}
          material={nodes.Glasses.material}
          skeleton={nodes.Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Head.geometry}
          material={nodes.Head.material}
          skeleton={nodes.Head.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Pants.geometry}
          material={nodes.Pants.material}
          skeleton={nodes.Pants.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Shoes.geometry}
          material={nodes.Shoes.material}
          skeleton={nodes.Shoes.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/10_4_animation_test.glb");
