import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations, Plane, useTexture } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import carrot from "../cropped-carrot.png";

export default function AnimationFrog(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Frog2anim.glb");
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const [shirtColor, setShirtColor] = useState("black");

  const texture = useTexture(carrot);

  const [index, setIndex] = useState(0);

  // let huh = actions[names[index]];
  // let more = names[index];

  // let meow = animations[0];

  // let why = actions["rope"];

  useMemo(() => {
    texture.generateMipmaps = true;
    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [
    texture.generateMipmaps,
    texture.wrapS,
    texture.wrapT,
    texture.minFilter,
    texture.needsUpdate,
  ]);

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
    actions[names[index]].reset().fadeIn(0.5).play();
    //In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5);
  }, [index, actions, names]);

  // useEffect(() => {

  // });
  setInterval(
    () => setShirtColor(shirtColor === "purple" ? "black" : "purple"),
    2000
  );

  // useEffect(() => {
  //   actions?.jump.play();
  // });

  // useEffect(() => {
  //   actions.rope.play();
  // });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.01, 0.01, 0.01]}>
      <Plane
        args={[8, 8]}
        material-map={texture}
        material-transparent
        position={[0, 15, 2.01]}
      />

      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.mixamorigHips} />

        <skinnedMesh
          name="body"
          geometry={nodes.NounBody.geometry}
          // material={nodes.NounBody.material}
          material-color={shirtColor}
          skeleton={nodes.NounBody.skeleton}
        />
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
}

useGLTF.preload("/Frog2anim.glb");
