import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function SandboxItems(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/world/LegoBox2.glb");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[100, 100, 100]}
      rotation={new THREE.Euler(0, Math.PI / 2.5, 0)}
      position={[0, 0, -50]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_267.geometry}
        material={nodes.Oren_267.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_828.geometry}
        material={nodes.Oren_828.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_830_part.geometry}
        material={nodes.Oren_830_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_832.geometry}
        material={nodes.Oren_832.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_833.geometry}
        material={nodes.Oren_833.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_834.geometry}
        material={nodes.Oren_834.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_835.geometry}
        material={nodes.Oren_835.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_267_part.geometry}
        material={nodes.Oren_267_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_267_part_part.geometry}
        material={nodes.Oren_267_part_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_839.geometry}
        material={nodes.Oren_839.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_199_part.geometry}
        material={nodes.Oren_199_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_841_part_2.geometry}
        material={nodes.Oren_841_part_2.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_134.geometry}
        material={nodes.Oren_780_part_134.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_841_part_2_part_1.geometry}
        material={nodes.Oren_841_part_2_part_1.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_829_part_2.geometry}
        material={nodes.Oren_829_part_2.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_841_part_part.geometry}
        material={nodes.Oren_841_part_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_841_part_part_1.geometry}
        material={nodes.Oren_841_part_part_1.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_830_part_part.geometry}
        material={nodes.Oren_830_part_part.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_844.geometry}
        material={nodes.Oren_844.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1.geometry}
        material={nodes.polySurface1.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface2.geometry}
        material={nodes.polySurface2.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3.geometry}
        material={nodes.polySurface3.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface5.geometry}
        material={nodes.polySurface5.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6.geometry}
        material={nodes.polySurface6.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_846.geometry}
        material={nodes.Oren_846.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_837.geometry}
        material={nodes.Oren_837.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_27.geometry}
        material={nodes.Oren_780_part_27.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_16.geometry}
        material={nodes.Oren_780_part_9_part_16.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_18.geometry}
        material={nodes.Oren_780_part_9_part_18.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_20.geometry}
        material={nodes.Oren_780_part_9_part_20.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_21.geometry}
        material={nodes.Oren_780_part_9_part_21.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_22.geometry}
        material={nodes.Oren_780_part_9_part_22.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_28.geometry}
        material={nodes.Oren_780_part_28.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_29.geometry}
        material={nodes.Oren_780_part_29.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_30.geometry}
        material={nodes.Oren_780_part_30.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_31.geometry}
        material={nodes.Oren_780_part_31.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_32.geometry}
        material={nodes.Oren_780_part_32.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_33.geometry}
        material={nodes.Oren_780_part_33.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_34.geometry}
        material={nodes.Oren_780_part_34.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_23.geometry}
        material={nodes.Oren_780_part_9_part_23.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_24.geometry}
        material={nodes.Oren_780_part_9_part_24.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_25.geometry}
        material={nodes.Oren_780_part_9_part_25.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_26.geometry}
        material={nodes.Oren_780_part_9_part_26.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_35.geometry}
        material={nodes.Oren_780_part_35.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_36.geometry}
        material={nodes.Oren_780_part_36.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_37.geometry}
        material={nodes.Oren_780_part_37.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_27.geometry}
        material={nodes.Oren_780_part_9_part_27.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_38.geometry}
        material={nodes.Oren_780_part_38.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_40.geometry}
        material={nodes.Oren_780_part_40.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_41.geometry}
        material={nodes.Oren_780_part_41.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_42.geometry}
        material={nodes.Oren_780_part_42.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_43.geometry}
        material={nodes.Oren_780_part_43.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_28.geometry}
        material={nodes.Oren_780_part_9_part_28.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_44.geometry}
        material={nodes.Oren_780_part_44.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_50.geometry}
        material={nodes.Oren_780_part_50.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_51.geometry}
        material={nodes.Oren_780_part_51.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_52.geometry}
        material={nodes.Oren_780_part_52.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_53.geometry}
        material={nodes.Oren_780_part_53.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_54.geometry}
        material={nodes.Oren_780_part_54.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_55.geometry}
        material={nodes.Oren_780_part_55.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_56.geometry}
        material={nodes.Oren_780_part_56.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_57.geometry}
        material={nodes.Oren_780_part_57.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_58.geometry}
        material={nodes.Oren_780_part_58.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_59.geometry}
        material={nodes.Oren_780_part_59.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_60.geometry}
        material={nodes.Oren_780_part_60.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_61.geometry}
        material={nodes.Oren_780_part_61.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_62.geometry}
        material={nodes.Oren_780_part_62.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_63.geometry}
        material={nodes.Oren_780_part_63.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_65.geometry}
        material={nodes.Oren_780_part_65.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_66.geometry}
        material={nodes.Oren_780_part_66.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_67.geometry}
        material={nodes.Oren_780_part_67.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_68.geometry}
        material={nodes.Oren_780_part_68.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_69.geometry}
        material={nodes.Oren_780_part_69.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_33.geometry}
        material={nodes.Oren_780_part_9_part_33.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_70.geometry}
        material={nodes.Oren_780_part_70.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_71.geometry}
        material={nodes.Oren_780_part_71.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_72.geometry}
        material={nodes.Oren_780_part_72.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_73.geometry}
        material={nodes.Oren_780_part_73.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_75.geometry}
        material={nodes.Oren_780_part_75.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_76.geometry}
        material={nodes.Oren_780_part_76.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_38.geometry}
        material={nodes.Oren_780_part_9_part_38.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_39.geometry}
        material={nodes.Oren_780_part_9_part_39.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_40.geometry}
        material={nodes.Oren_780_part_9_part_40.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_41.geometry}
        material={nodes.Oren_780_part_9_part_41.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_77.geometry}
        material={nodes.Oren_780_part_77.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_78.geometry}
        material={nodes.Oren_780_part_78.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_79.geometry}
        material={nodes.Oren_780_part_79.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_82.geometry}
        material={nodes.Oren_780_part_82.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_83.geometry}
        material={nodes.Oren_780_part_83.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_84.geometry}
        material={nodes.Oren_780_part_84.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_85.geometry}
        material={nodes.Oren_780_part_85.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_43.geometry}
        material={nodes.Oren_780_part_9_part_43.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_86.geometry}
        material={nodes.Oren_780_part_86.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_87.geometry}
        material={nodes.Oren_780_part_87.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_88.geometry}
        material={nodes.Oren_780_part_88.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_89.geometry}
        material={nodes.Oren_780_part_89.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_93.geometry}
        material={nodes.Oren_780_part_93.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_94.geometry}
        material={nodes.Oren_780_part_94.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_95.geometry}
        material={nodes.Oren_780_part_95.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_97.geometry}
        material={nodes.Oren_780_part_97.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_98.geometry}
        material={nodes.Oren_780_part_98.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_99.geometry}
        material={nodes.Oren_780_part_99.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_102.geometry}
        material={nodes.Oren_780_part_102.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_44.geometry}
        material={nodes.Oren_780_part_9_part_44.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_46.geometry}
        material={nodes.Oren_780_part_9_part_46.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_47.geometry}
        material={nodes.Oren_780_part_9_part_47.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_48.geometry}
        material={nodes.Oren_780_part_9_part_48.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_49.geometry}
        material={nodes.Oren_780_part_9_part_49.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_104.geometry}
        material={nodes.Oren_780_part_104.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_106.geometry}
        material={nodes.Oren_780_part_106.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_107.geometry}
        material={nodes.Oren_780_part_107.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_108.geometry}
        material={nodes.Oren_780_part_108.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_109.geometry}
        material={nodes.Oren_780_part_109.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_53.geometry}
        material={nodes.Oren_780_part_9_part_53.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_112.geometry}
        material={nodes.Oren_780_part_112.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_113.geometry}
        material={nodes.Oren_780_part_113.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_55.geometry}
        material={nodes.Oren_780_part_9_part_55.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_114.geometry}
        material={nodes.Oren_780_part_114.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_117.geometry}
        material={nodes.Oren_780_part_117.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_118.geometry}
        material={nodes.Oren_780_part_118.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_119.geometry}
        material={nodes.Oren_780_part_119.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_56.geometry}
        material={nodes.Oren_780_part_9_part_56.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_120.geometry}
        material={nodes.Oren_780_part_120.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_121.geometry}
        material={nodes.Oren_780_part_121.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_122.geometry}
        material={nodes.Oren_780_part_122.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_123.geometry}
        material={nodes.Oren_780_part_123.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_124.geometry}
        material={nodes.Oren_780_part_124.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_125.geometry}
        material={nodes.Oren_780_part_125.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_126.geometry}
        material={nodes.Oren_780_part_126.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_127.geometry}
        material={nodes.Oren_780_part_127.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_128.geometry}
        material={nodes.Oren_780_part_128.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_129.geometry}
        material={nodes.Oren_780_part_129.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_130.geometry}
        material={nodes.Oren_780_part_130.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_131.geometry}
        material={nodes.Oren_780_part_131.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_132.geometry}
        material={nodes.Oren_780_part_132.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_133.geometry}
        material={nodes.Oren_780_part_133.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_61.geometry}
        material={nodes.Oren_780_part_9_part_61.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_137.geometry}
        material={nodes.Oren_780_part_137.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_139.geometry}
        material={nodes.Oren_780_part_139.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_143.geometry}
        material={nodes.Oren_780_part_143.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_69.geometry}
        material={nodes.Oren_780_part_9_part_69.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_155.geometry}
        material={nodes.Oren_780_part_155.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_160.geometry}
        material={nodes.Oren_780_part_160.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_161.geometry}
        material={nodes.Oren_780_part_161.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_164.geometry}
        material={nodes.Oren_780_part_164.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_165.geometry}
        material={nodes.Oren_780_part_165.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_72.geometry}
        material={nodes.Oren_780_part_9_part_72.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_166.geometry}
        material={nodes.Oren_780_part_166.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_167.geometry}
        material={nodes.Oren_780_part_167.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_168.geometry}
        material={nodes.Oren_780_part_168.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_169.geometry}
        material={nodes.Oren_780_part_169.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_170.geometry}
        material={nodes.Oren_780_part_170.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_171.geometry}
        material={nodes.Oren_780_part_171.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_172.geometry}
        material={nodes.Oren_780_part_172.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_77.geometry}
        material={nodes.Oren_780_part_9_part_77.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_78.geometry}
        material={nodes.Oren_780_part_9_part_78.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_79.geometry}
        material={nodes.Oren_780_part_9_part_79.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_80.geometry}
        material={nodes.Oren_780_part_9_part_80.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_173.geometry}
        material={nodes.Oren_780_part_173.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_174.geometry}
        material={nodes.Oren_780_part_174.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_175.geometry}
        material={nodes.Oren_780_part_175.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_178.geometry}
        material={nodes.Oren_780_part_178.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_179.geometry}
        material={nodes.Oren_780_part_179.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_180.geometry}
        material={nodes.Oren_780_part_180.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_181.geometry}
        material={nodes.Oren_780_part_181.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_82.geometry}
        material={nodes.Oren_780_part_9_part_82.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_182.geometry}
        material={nodes.Oren_780_part_182.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_183.geometry}
        material={nodes.Oren_780_part_183.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_184.geometry}
        material={nodes.Oren_780_part_184.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_185.geometry}
        material={nodes.Oren_780_part_185.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_189.geometry}
        material={nodes.Oren_780_part_189.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_190.geometry}
        material={nodes.Oren_780_part_190.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_191.geometry}
        material={nodes.Oren_780_part_191.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_192.geometry}
        material={nodes.Oren_780_part_192.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_193.geometry}
        material={nodes.Oren_780_part_193.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_194.geometry}
        material={nodes.Oren_780_part_194.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_195.geometry}
        material={nodes.Oren_780_part_195.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_386.geometry}
        material={nodes.Oren_780_part_386.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_841_part_2_part_5.geometry}
        material={nodes.Oren_841_part_2_part_5.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_329.geometry}
        material={nodes.Oren_780_part_329.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_119.geometry}
        material={nodes.Oren_780_part_9_part_119.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_292.geometry}
        material={nodes.Oren_780_part_292.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_122.geometry}
        material={nodes.Oren_780_part_9_part_122.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_361.geometry}
        material={nodes.Oren_780_part_361.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_114.geometry}
        material={nodes.Oren_780_part_9_part_114.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_112.geometry}
        material={nodes.Oren_780_part_9_part_112.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_359.geometry}
        material={nodes.Oren_780_part_359.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_73.geometry}
        material={nodes.Oren_780_part_9_part_73.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_34.geometry}
        material={nodes.Oren_780_part_9_part_34.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_836.geometry}
        material={nodes.Oren_836.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_294.geometry}
        material={nodes.Oren_780_part_294.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_296.geometry}
        material={nodes.Oren_780_part_296.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_251.geometry}
        material={nodes.Oren_780_part_251.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_83.geometry}
        material={nodes.Oren_780_part_9_part_83.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_84.geometry}
        material={nodes.Oren_780_part_9_part_84.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_85.geometry}
        material={nodes.Oren_780_part_9_part_85.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_87.geometry}
        material={nodes.Oren_780_part_9_part_87.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_88.geometry}
        material={nodes.Oren_780_part_9_part_88.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_89.geometry}
        material={nodes.Oren_780_part_9_part_89.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_252.geometry}
        material={nodes.Oren_780_part_252.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_254.geometry}
        material={nodes.Oren_780_part_254.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_255.geometry}
        material={nodes.Oren_780_part_255.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_256.geometry}
        material={nodes.Oren_780_part_256.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_257.geometry}
        material={nodes.Oren_780_part_257.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_258.geometry}
        material={nodes.Oren_780_part_258.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_90.geometry}
        material={nodes.Oren_780_part_9_part_90.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_91.geometry}
        material={nodes.Oren_780_part_9_part_91.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_92.geometry}
        material={nodes.Oren_780_part_9_part_92.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_93.geometry}
        material={nodes.Oren_780_part_9_part_93.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_259.geometry}
        material={nodes.Oren_780_part_259.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_260.geometry}
        material={nodes.Oren_780_part_260.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_261.geometry}
        material={nodes.Oren_780_part_261.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_94.geometry}
        material={nodes.Oren_780_part_9_part_94.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_264.geometry}
        material={nodes.Oren_780_part_264.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_265.geometry}
        material={nodes.Oren_780_part_265.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_266.geometry}
        material={nodes.Oren_780_part_266.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_267.geometry}
        material={nodes.Oren_780_part_267.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_95.geometry}
        material={nodes.Oren_780_part_9_part_95.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_268.geometry}
        material={nodes.Oren_780_part_268.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_269.geometry}
        material={nodes.Oren_780_part_269.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_271.geometry}
        material={nodes.Oren_780_part_271.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_272.geometry}
        material={nodes.Oren_780_part_272.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_273.geometry}
        material={nodes.Oren_780_part_273.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_274.geometry}
        material={nodes.Oren_780_part_274.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_275.geometry}
        material={nodes.Oren_780_part_275.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_276.geometry}
        material={nodes.Oren_780_part_276.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_277.geometry}
        material={nodes.Oren_780_part_277.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_278.geometry}
        material={nodes.Oren_780_part_278.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_279.geometry}
        material={nodes.Oren_780_part_279.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_280.geometry}
        material={nodes.Oren_780_part_280.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_282.geometry}
        material={nodes.Oren_780_part_282.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_284.geometry}
        material={nodes.Oren_780_part_284.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_285.geometry}
        material={nodes.Oren_780_part_285.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_286.geometry}
        material={nodes.Oren_780_part_286.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_288.geometry}
        material={nodes.Oren_780_part_288.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_96.geometry}
        material={nodes.Oren_780_part_9_part_96.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_98.geometry}
        material={nodes.Oren_780_part_9_part_98.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_289.geometry}
        material={nodes.Oren_780_part_289.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_290.geometry}
        material={nodes.Oren_780_part_290.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_291.geometry}
        material={nodes.Oren_780_part_291.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_103.geometry}
        material={nodes.Oren_780_part_9_part_103.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_104.geometry}
        material={nodes.Oren_780_part_9_part_104.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_105.geometry}
        material={nodes.Oren_780_part_9_part_105.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_295.geometry}
        material={nodes.Oren_780_part_295.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_297.geometry}
        material={nodes.Oren_780_part_297.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_300.geometry}
        material={nodes.Oren_780_part_300.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_301.geometry}
        material={nodes.Oren_780_part_301.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_302.geometry}
        material={nodes.Oren_780_part_302.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_106.geometry}
        material={nodes.Oren_780_part_9_part_106.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_303.geometry}
        material={nodes.Oren_780_part_303.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_304.geometry}
        material={nodes.Oren_780_part_304.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_305.geometry}
        material={nodes.Oren_780_part_305.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_306.geometry}
        material={nodes.Oren_780_part_306.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_307.geometry}
        material={nodes.Oren_780_part_307.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_308.geometry}
        material={nodes.Oren_780_part_308.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_309.geometry}
        material={nodes.Oren_780_part_309.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_310.geometry}
        material={nodes.Oren_780_part_310.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_311.geometry}
        material={nodes.Oren_780_part_311.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_312.geometry}
        material={nodes.Oren_780_part_312.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_313.geometry}
        material={nodes.Oren_780_part_313.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_314.geometry}
        material={nodes.Oren_780_part_314.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_316.geometry}
        material={nodes.Oren_780_part_316.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_317.geometry}
        material={nodes.Oren_780_part_317.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_107.geometry}
        material={nodes.Oren_780_part_9_part_107.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_109.geometry}
        material={nodes.Oren_780_part_9_part_109.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_111.geometry}
        material={nodes.Oren_780_part_9_part_111.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_318.geometry}
        material={nodes.Oren_780_part_318.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_320.geometry}
        material={nodes.Oren_780_part_320.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_322.geometry}
        material={nodes.Oren_780_part_322.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_115.geometry}
        material={nodes.Oren_780_part_9_part_115.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_116.geometry}
        material={nodes.Oren_780_part_9_part_116.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_117.geometry}
        material={nodes.Oren_780_part_9_part_117.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_326.geometry}
        material={nodes.Oren_780_part_326.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_118.geometry}
        material={nodes.Oren_780_part_9_part_118.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_333.geometry}
        material={nodes.Oren_780_part_333.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_334.geometry}
        material={nodes.Oren_780_part_334.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_335.geometry}
        material={nodes.Oren_780_part_335.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_338.geometry}
        material={nodes.Oren_780_part_338.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_339.geometry}
        material={nodes.Oren_780_part_339.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_340.geometry}
        material={nodes.Oren_780_part_340.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_341.geometry}
        material={nodes.Oren_780_part_341.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_342.geometry}
        material={nodes.Oren_780_part_342.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_343.geometry}
        material={nodes.Oren_780_part_343.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_345.geometry}
        material={nodes.Oren_780_part_345.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_347.geometry}
        material={nodes.Oren_780_part_347.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_120.geometry}
        material={nodes.Oren_780_part_9_part_120.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_348.geometry}
        material={nodes.Oren_780_part_348.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_349.geometry}
        material={nodes.Oren_780_part_349.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_350.geometry}
        material={nodes.Oren_780_part_350.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_351.geometry}
        material={nodes.Oren_780_part_351.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_352.geometry}
        material={nodes.Oren_780_part_352.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_353.geometry}
        material={nodes.Oren_780_part_353.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_355.geometry}
        material={nodes.Oren_780_part_355.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_123.geometry}
        material={nodes.Oren_780_part_9_part_123.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_125.geometry}
        material={nodes.Oren_780_part_9_part_125.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_127.geometry}
        material={nodes.Oren_780_part_9_part_127.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_128.geometry}
        material={nodes.Oren_780_part_9_part_128.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_356.geometry}
        material={nodes.Oren_780_part_356.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_357.geometry}
        material={nodes.Oren_780_part_357.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_358.geometry}
        material={nodes.Oren_780_part_358.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_360.geometry}
        material={nodes.Oren_780_part_360.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_130.geometry}
        material={nodes.Oren_780_part_9_part_130.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_131.geometry}
        material={nodes.Oren_780_part_9_part_131.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_132.geometry}
        material={nodes.Oren_780_part_9_part_132.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_362.geometry}
        material={nodes.Oren_780_part_362.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_363.geometry}
        material={nodes.Oren_780_part_363.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_364.geometry}
        material={nodes.Oren_780_part_364.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_365.geometry}
        material={nodes.Oren_780_part_365.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_366.geometry}
        material={nodes.Oren_780_part_366.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_367.geometry}
        material={nodes.Oren_780_part_367.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_368.geometry}
        material={nodes.Oren_780_part_368.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_369.geometry}
        material={nodes.Oren_780_part_369.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_133.geometry}
        material={nodes.Oren_780_part_9_part_133.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_370.geometry}
        material={nodes.Oren_780_part_370.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_371.geometry}
        material={nodes.Oren_780_part_371.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_373.geometry}
        material={nodes.Oren_780_part_373.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_374.geometry}
        material={nodes.Oren_780_part_374.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_375.geometry}
        material={nodes.Oren_780_part_375.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_376.geometry}
        material={nodes.Oren_780_part_376.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_377.geometry}
        material={nodes.Oren_780_part_377.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_378.geometry}
        material={nodes.Oren_780_part_378.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_379.geometry}
        material={nodes.Oren_780_part_379.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_380.geometry}
        material={nodes.Oren_780_part_380.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_381.geometry}
        material={nodes.Oren_780_part_381.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_383.geometry}
        material={nodes.Oren_780_part_383.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_384.geometry}
        material={nodes.Oren_780_part_384.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_134.geometry}
        material={nodes.Oren_780_part_9_part_134.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_135.geometry}
        material={nodes.Oren_780_part_9_part_135.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_136.geometry}
        material={nodes.Oren_780_part_9_part_136.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_137.geometry}
        material={nodes.Oren_780_part_9_part_137.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_138.geometry}
        material={nodes.Oren_780_part_9_part_138.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_389.geometry}
        material={nodes.Oren_780_part_389.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_390.geometry}
        material={nodes.Oren_780_part_390.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_139.geometry}
        material={nodes.Oren_780_part_9_part_139.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_140.geometry}
        material={nodes.Oren_780_part_9_part_140.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_19.geometry}
        material={nodes.Oren_780_part_9_part_19.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_141.geometry}
        material={nodes.Oren_780_part_9_part_141.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_142.geometry}
        material={nodes.Oren_780_part_9_part_142.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_391.geometry}
        material={nodes.Oren_780_part_391.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_392.geometry}
        material={nodes.Oren_780_part_392.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_393.geometry}
        material={nodes.Oren_780_part_393.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_394.geometry}
        material={nodes.Oren_780_part_394.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_395.geometry}
        material={nodes.Oren_780_part_395.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_396.geometry}
        material={nodes.Oren_780_part_396.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_143.geometry}
        material={nodes.Oren_780_part_9_part_143.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_144.geometry}
        material={nodes.Oren_780_part_9_part_144.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_145.geometry}
        material={nodes.Oren_780_part_9_part_145.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_146.geometry}
        material={nodes.Oren_780_part_9_part_146.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_397.geometry}
        material={nodes.Oren_780_part_397.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_398.geometry}
        material={nodes.Oren_780_part_398.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_399.geometry}
        material={nodes.Oren_780_part_399.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_147.geometry}
        material={nodes.Oren_780_part_9_part_147.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_400.geometry}
        material={nodes.Oren_780_part_400.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_401.geometry}
        material={nodes.Oren_780_part_401.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_402.geometry}
        material={nodes.Oren_780_part_402.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_403.geometry}
        material={nodes.Oren_780_part_403.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_404.geometry}
        material={nodes.Oren_780_part_404.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_148.geometry}
        material={nodes.Oren_780_part_9_part_148.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_405.geometry}
        material={nodes.Oren_780_part_405.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_406.geometry}
        material={nodes.Oren_780_part_406.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_407.geometry}
        material={nodes.Oren_780_part_407.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_408.geometry}
        material={nodes.Oren_780_part_408.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_409.geometry}
        material={nodes.Oren_780_part_409.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_410.geometry}
        material={nodes.Oren_780_part_410.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_411.geometry}
        material={nodes.Oren_780_part_411.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_412.geometry}
        material={nodes.Oren_780_part_412.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_413.geometry}
        material={nodes.Oren_780_part_413.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_414.geometry}
        material={nodes.Oren_780_part_414.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_415.geometry}
        material={nodes.Oren_780_part_415.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_416.geometry}
        material={nodes.Oren_780_part_416.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_417.geometry}
        material={nodes.Oren_780_part_417.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_418.geometry}
        material={nodes.Oren_780_part_418.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_419.geometry}
        material={nodes.Oren_780_part_419.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_64.geometry}
        material={nodes.Oren_780_part_64.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_420.geometry}
        material={nodes.Oren_780_part_420.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_421.geometry}
        material={nodes.Oren_780_part_421.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_422.geometry}
        material={nodes.Oren_780_part_422.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_423.geometry}
        material={nodes.Oren_780_part_423.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_31.geometry}
        material={nodes.Oren_780_part_9_part_31.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_32.geometry}
        material={nodes.Oren_780_part_9_part_32.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_149.geometry}
        material={nodes.Oren_780_part_9_part_149.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_35.geometry}
        material={nodes.Oren_780_part_9_part_35.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_37.geometry}
        material={nodes.Oren_780_part_9_part_37.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_424.geometry}
        material={nodes.Oren_780_part_424.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_425.geometry}
        material={nodes.Oren_780_part_425.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_426.geometry}
        material={nodes.Oren_780_part_426.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_74.geometry}
        material={nodes.Oren_780_part_74.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_427.geometry}
        material={nodes.Oren_780_part_427.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_428.geometry}
        material={nodes.Oren_780_part_428.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_150.geometry}
        material={nodes.Oren_780_part_9_part_150.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_151.geometry}
        material={nodes.Oren_780_part_9_part_151.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_152.geometry}
        material={nodes.Oren_780_part_9_part_152.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_429.geometry}
        material={nodes.Oren_780_part_429.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_430.geometry}
        material={nodes.Oren_780_part_430.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_431.geometry}
        material={nodes.Oren_780_part_431.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_80.geometry}
        material={nodes.Oren_780_part_80.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_432.geometry}
        material={nodes.Oren_780_part_432.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_433.geometry}
        material={nodes.Oren_780_part_433.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_434.geometry}
        material={nodes.Oren_780_part_434.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_435.geometry}
        material={nodes.Oren_780_part_435.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_153.geometry}
        material={nodes.Oren_780_part_9_part_153.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_436.geometry}
        material={nodes.Oren_780_part_436.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_437.geometry}
        material={nodes.Oren_780_part_437.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_438.geometry}
        material={nodes.Oren_780_part_438.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_439.geometry}
        material={nodes.Oren_780_part_439.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_90.geometry}
        material={nodes.Oren_780_part_90.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_91.geometry}
        material={nodes.Oren_780_part_91.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_92.geometry}
        material={nodes.Oren_780_part_92.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_440.geometry}
        material={nodes.Oren_780_part_440.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_441.geometry}
        material={nodes.Oren_780_part_441.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_442.geometry}
        material={nodes.Oren_780_part_442.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_443.geometry}
        material={nodes.Oren_780_part_443.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_444.geometry}
        material={nodes.Oren_780_part_444.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_445.geometry}
        material={nodes.Oren_780_part_445.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_446.geometry}
        material={nodes.Oren_780_part_446.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_103.geometry}
        material={nodes.Oren_780_part_103.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_154.geometry}
        material={nodes.Oren_780_part_9_part_154.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_45.geometry}
        material={nodes.Oren_780_part_9_part_45.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_155.geometry}
        material={nodes.Oren_780_part_9_part_155.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_156.geometry}
        material={nodes.Oren_780_part_9_part_156.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_50.geometry}
        material={nodes.Oren_780_part_9_part_50.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_447.geometry}
        material={nodes.Oren_780_part_447.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_105.geometry}
        material={nodes.Oren_780_part_105.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_448.geometry}
        material={nodes.Oren_780_part_448.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_449.geometry}
        material={nodes.Oren_780_part_449.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_450.geometry}
        material={nodes.Oren_780_part_450.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_110.geometry}
        material={nodes.Oren_780_part_110.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_51.geometry}
        material={nodes.Oren_780_part_9_part_51.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_52.geometry}
        material={nodes.Oren_780_part_9_part_52.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_157.geometry}
        material={nodes.Oren_780_part_9_part_157.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_54.geometry}
        material={nodes.Oren_780_part_9_part_54.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_111.geometry}
        material={nodes.Oren_780_part_111.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_451.geometry}
        material={nodes.Oren_780_part_451.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_452.geometry}
        material={nodes.Oren_780_part_452.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_158.geometry}
        material={nodes.Oren_780_part_9_part_158.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_453.geometry}
        material={nodes.Oren_780_part_453.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_116.geometry}
        material={nodes.Oren_780_part_116.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_454.geometry}
        material={nodes.Oren_780_part_454.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_455.geometry}
        material={nodes.Oren_780_part_455.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_456.geometry}
        material={nodes.Oren_780_part_456.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_457.geometry}
        material={nodes.Oren_780_part_457.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_458.geometry}
        material={nodes.Oren_780_part_458.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_459.geometry}
        material={nodes.Oren_780_part_459.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_460.geometry}
        material={nodes.Oren_780_part_460.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_461.geometry}
        material={nodes.Oren_780_part_461.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_462.geometry}
        material={nodes.Oren_780_part_462.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_463.geometry}
        material={nodes.Oren_780_part_463.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_464.geometry}
        material={nodes.Oren_780_part_464.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_465.geometry}
        material={nodes.Oren_780_part_465.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_466.geometry}
        material={nodes.Oren_780_part_466.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_467.geometry}
        material={nodes.Oren_780_part_467.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_468.geometry}
        material={nodes.Oren_780_part_468.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_469.geometry}
        material={nodes.Oren_780_part_469.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_470.geometry}
        material={nodes.Oren_780_part_470.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_159.geometry}
        material={nodes.Oren_780_part_9_part_159.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_471.geometry}
        material={nodes.Oren_780_part_471.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_472.geometry}
        material={nodes.Oren_780_part_472.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_65.geometry}
        material={nodes.Oren_780_part_9_part_65.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_473.geometry}
        material={nodes.Oren_780_part_473.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_160.geometry}
        material={nodes.Oren_780_part_9_part_160.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_474.geometry}
        material={nodes.Oren_780_part_474.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_475.geometry}
        material={nodes.Oren_780_part_475.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_476.geometry}
        material={nodes.Oren_780_part_476.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_70.geometry}
        material={nodes.Oren_780_part_9_part_70.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_71.geometry}
        material={nodes.Oren_780_part_9_part_71.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_161.geometry}
        material={nodes.Oren_780_part_9_part_161.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_74.geometry}
        material={nodes.Oren_780_part_9_part_74.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_75.geometry}
        material={nodes.Oren_780_part_9_part_75.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_76.geometry}
        material={nodes.Oren_780_part_9_part_76.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_477.geometry}
        material={nodes.Oren_780_part_477.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_478.geometry}
        material={nodes.Oren_780_part_478.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_479.geometry}
        material={nodes.Oren_780_part_479.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_480.geometry}
        material={nodes.Oren_780_part_480.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_481.geometry}
        material={nodes.Oren_780_part_481.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_482.geometry}
        material={nodes.Oren_780_part_482.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_162.geometry}
        material={nodes.Oren_780_part_9_part_162.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_163.geometry}
        material={nodes.Oren_780_part_9_part_163.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_164.geometry}
        material={nodes.Oren_780_part_9_part_164.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_483.geometry}
        material={nodes.Oren_780_part_483.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_484.geometry}
        material={nodes.Oren_780_part_484.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_485.geometry}
        material={nodes.Oren_780_part_485.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_81.geometry}
        material={nodes.Oren_780_part_9_part_81.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_176.geometry}
        material={nodes.Oren_780_part_176.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_486.geometry}
        material={nodes.Oren_780_part_486.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_487.geometry}
        material={nodes.Oren_780_part_487.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_488.geometry}
        material={nodes.Oren_780_part_488.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_489.geometry}
        material={nodes.Oren_780_part_489.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_9_part_165.geometry}
        material={nodes.Oren_780_part_9_part_165.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_490.geometry}
        material={nodes.Oren_780_part_490.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_491.geometry}
        material={nodes.Oren_780_part_491.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_492.geometry}
        material={nodes.Oren_780_part_492.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_493.geometry}
        material={nodes.Oren_780_part_493.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_186.geometry}
        material={nodes.Oren_780_part_186.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_187.geometry}
        material={nodes.Oren_780_part_187.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_188.geometry}
        material={nodes.Oren_780_part_188.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_494.geometry}
        material={nodes.Oren_780_part_494.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_495.geometry}
        material={nodes.Oren_780_part_495.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_496.geometry}
        material={nodes.Oren_780_part_496.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_497.geometry}
        material={nodes.Oren_780_part_497.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_498.geometry}
        material={nodes.Oren_780_part_498.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_385.geometry}
        material={nodes.Oren_780_part_385.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_387.geometry}
        material={nodes.Oren_780_part_387.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_780_part_388.geometry}
        material={nodes.Oren_780_part_388.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_845.geometry}
        material={nodes.Oren_845.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_847.geometry}
        material={nodes.Oren_847.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oren_849.geometry}
        material={nodes.Oren_849.material}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Union_104.geometry}
        material={nodes.Union_104.material}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
}

useGLTF.preload("/world/LegoBox2.glb");
