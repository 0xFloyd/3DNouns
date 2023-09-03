import { useGLTF } from "@react-three/drei";
import React from "react";

const Block2 = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block2.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Union_374.geometry}
            material={materials.lambert2}
            position={[300, -2, -40]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block2;
