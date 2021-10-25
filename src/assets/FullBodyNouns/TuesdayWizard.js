import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function TuesdayFrog(props) {
  const { walkAnimation, nodAnimation } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/TuesdayFrog.glb");
  const { ref, mixer, names, actions } = useAnimations(animations, group);

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
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.MagicTestANIMmixamorigHips} />
        <skinnedMesh
          geometry={nodes.Glasses.geometry}
          material={nodes.Glasses.material}
          skeleton={nodes.Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HeadFrog.geometry}
          material={nodes.HeadFrog.material}
          skeleton={nodes.HeadFrog.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/TuesdayFrog.glb");
