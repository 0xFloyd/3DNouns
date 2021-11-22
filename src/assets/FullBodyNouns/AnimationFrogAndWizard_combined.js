import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FrogHead from './AnimationFrogAndWizard_Frog';
import WizardHead from './AnimationFrogAndWizard_wizard';

const CombinedHeadTest = (props) => {
  const { walkAnimation, nodAnimation } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/frogGLB.glb');

  const { ref, mixer, names, actions } = useAnimations(animations, group);

  let huh = actions; // {Swim: undefined,Yes: undefined,}
  let theNames = names; //names: ["Swim","Yes",]

  let anamorph = nodes.MagicTestANIMmixamorigHips;

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
        {/* <FrogHead />
        <WizardHead />
        <skinnedMesh
          geometry={nodes.Hand.geometry}
          material={nodes.Hand.material}
          skeleton={nodes.Hand.skeleton}
        />
        <skinnedMesh
          geometry={nodes.BodyUVed.geometry}
          material={materials.body_material}
          skeleton={nodes.BodyUVed.skeleton}
        /> */}
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pants.geometry}
        material={nodes.Pants.material}
        position={[-0.04, 0.01, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoes.geometry}
        material={nodes.Shoes.material}
        position={[-0.04, 0, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
};

useGLTF.preload('/MagicHatGLB.glb');

export default CombinedHeadTest;
