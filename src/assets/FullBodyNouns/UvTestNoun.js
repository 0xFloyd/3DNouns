import { useLoader, useThree } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";
import img from "../accessory-carrot.png";

const UvTestNoun = () => {
  const texture = useLoader(THREE.TextureLoader, img);
  const { gl } = useThree();

  useMemo(() => {
    texture.generateMipmaps = true;
    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [
    texture.generateMipmaps,
    texture.wrapS,
    texture.wrapT,
    texture.minFilter,
    texture.needsUpdate,
  ]);

  return (
    <mesh
      receiveShadow
      rotation={[0, 0, Math.PI / 2]}
      position={[0, 0.1, -0.25]}
    >
      <boxBufferGeometry args={[0.1, 0.05, 0.1]} />
      <meshStandardMaterial
        map={texture}
        // color={new THREE.Color(0x000000).setHex(0x000000).convertSRGBToLinear()}
      />
    </mesh>
  );
};

export default UvTestNoun;
