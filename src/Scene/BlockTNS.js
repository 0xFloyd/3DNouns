import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Block_TNS = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_TNS.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_TNS.geometry}
            material={materials.Block_TNS_material}
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block_TNS;
