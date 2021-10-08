import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { getKeyByValue, glassesPosition, headNames } from "attributes";

const TestComputer = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/centered-computer.glb");
  return (
    <group ref={ref} {...props} dispose={null} scale={[20, 20, 20]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Body-decay-pride"].geometry}
        material={nodes["Body-decay-pride"].material}
        position={[-0.01, 0.16, -0.01]}
        rotation={[1.56, -0.01, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glasses_1.geometry}
        material={nodes.Glasses_1.material}
        position={[-0.01, 0.29, 0.05]}
        rotation={[1.56, -0.01, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Head-Computer"].geometry}
        material={nodes["Head-Computer"].material}
        position={[-0.01, 0.27, -0.02]}
        rotation={[1.56, -0.01, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Pants-Denim1"].geometry}
        material={nodes["Pants-Denim1"].material}
        position={[-0.01, 0.07, 0]}
        rotation={[1.56, -0.01, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Shoes-White4"].geometry}
        material={nodes["Shoes-White4"].material}
        position={[-0.01, 0.01, 0]}
        rotation={[1.56, -0.01, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
});

useGLTF.preload("/centered-computer-test.glb");

export default TestComputer;
