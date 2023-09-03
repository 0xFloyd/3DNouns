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
            geometry={nodes.Box_143.geometry}
            material={materials.Neppelin_material}
            position={[0, 150, 900]}
            rotation={[0, 0, 0]}
            scale={100}
          />
        </group>
      ) : null}
    </>
  );
};

export default Neppelin;
