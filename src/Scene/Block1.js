import { useGLTF } from "@react-three/drei";
import React from "react";

const Block1 = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block1.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_Side1.geometry}
            material={materials.Block_side1_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block1;
