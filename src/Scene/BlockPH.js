import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Block_PH = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_PH.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_PH.geometry}
            material={materials.Block_PH_material}
            position={[70, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block_PH;
