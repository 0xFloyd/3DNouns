import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Neppelin = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Neppelin.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Neppelin.geometry}
            material={materials.Neppelin_material}
            position={[0, 0, 200]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Neppelin;
