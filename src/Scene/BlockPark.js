import { useGLTF } from "@react-three/drei";
import React from "react";

const BlockPark = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_Park.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_Park.geometry}
            material={materials.Block_Park_material1}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default BlockPark;
