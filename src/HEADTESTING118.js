import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const HEADTESTING118 = ({
  animationState,
  animationValue,
  pantsProp,
  accessoryProp,
  bodyProp,
  shoeProp,
}) => {
  const group = useRef();
  const groupTwo = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/HeadTesting118/ComputerHeadAnim.glb"
  );
  const rabbitInfo = useGLTF("/HeadTesting118/RabbitHeadNoAnimTest.glb");
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  useEffect(() => {
    if (true) {
      actions[names[5]].reset().fadeIn(0.5).play();
      return () => actions[names[5]].fadeOut(0.5);
    }
  }, [actions, names, animationState, animationValue]);

  console.log(
    "nodes.BodyAnimationSkeletonsJob_006Hipsd: ",
    nodes.BodyAnimationSkeletonsJob_006Hipsd
  );
  return (
    <>
      <group ref={group} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]} />
        <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
        <skinnedMesh
          geometry={nodes.glassesUV.geometry}
          material={materials.GlassesUV}
          skeleton={nodes.glassesUV.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HeadComputer.geometry}
          material={materials.computerHead_material}
          skeleton={nodes.HeadComputer.skeleton}
        />
      </group>
      <group ref={groupTwo} dispose={null} position={[30, 0, 2]}>
        <primitive
          object={rabbitInfo.nodes.BodyAnimationSkeletonsJob_006Hipsd}
        />
        <skinnedMesh
          geometry={rabbitInfo.nodes.glassesUV.geometry}
          material={rabbitInfo.materials.GlassesUV}
          skeleton={rabbitInfo.nodes.glassesUV.skeleton}
        />
        <skinnedMesh
          geometry={rabbitInfo.nodes.HeadRabbit.geometry}
          material={rabbitInfo.materials.HeadRabbit_material}
          skeleton={rabbitInfo.nodes.HeadRabbit.skeleton}
        />
      </group>
    </>
  );
};

export default HEADTESTING118;
