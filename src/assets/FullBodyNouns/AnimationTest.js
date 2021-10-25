import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export default function Stacy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/stacy.glb");
  // Extract animation actions
  // const { ref, mixer, names, actions } = useAnimations(animations);

  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const [index, setIndex] = useState(1);

  let huh = actions[names[index]];
  let more = names[index];

  let meow = animations[1];

  let why = actions["rope"];

  // useEffect(() => {
  //   actions?.jump.play();
  // });

  useEffect(() => {
    actions.rope.play();
  });

  // useFrame((state, delta) => {
  //   mixer?.update(delta);
  // });

  console.log("huh");

  // useEffect(() => {
  //   // Reset and fade in animation after an index has been changed
  //   actions[names[index]].reset().fadeIn(0.5).play();
  //   // In the clean-up phase, fade it out
  //   // return () => actions[names[index]].fadeOut(0.5);
  // }, [index, actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.stacy.geometry}
          material={nodes.stacy.material}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10, 10, 10]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/stacy.glb");
