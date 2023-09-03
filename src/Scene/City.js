import { useGLTF } from "@react-three/drei";
import React from "react";

const City = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_OG.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_OG.geometry}
            material={materials.Block_OG_material1}
            position={[70, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default City;
