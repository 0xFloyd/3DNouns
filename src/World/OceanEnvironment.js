import { useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three-stdlib';
import { Sky, useGLTF } from '@react-three/drei';

extend({ Water });

// current --> https://sketchfab.com/3d-models/small-island-with-palm-tree-and-treasure-chest-da833c9267dc44ef868847281e911609
// https://sketchfab.com/3d-models/pirate-collection-island-cd3f93c54b364d7db5d59f6606be228f
const Island = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/textures/world/island.glb');
  return (
    <group
      ref={group}
      scale={[2.75, 2.75, 2.75]}
      position={[80, -9.75, -30]}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-23.94, -11.11, 0]} rotation={[0, 0, 0.27]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -0.7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Island01_chest_Unwrap_Texture_Checker_Material_0
                    .geometry
                }
                material={materials.Unwrap_Texture_Checker_Material}
                scale={[0.1, 0.1, 0.1]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const Ocean = () => {
  const ref = useRef();

  // renderer
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(
    THREE.TextureLoader,
    '/textures/world/waternormals.jpeg'
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(() => new THREE.PlaneGeometry(5000, 5000), []);
  const config = useMemo(
    () => ({
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += 0.005)
  );

  // config = material
  return (
    <water
      ref={ref}
      args={[geom, config]}
      position={[0, -8.5, 0]}
      rotation-x={-Math.PI / 2}
    />
  );
};

const OceanEnvironment = () => {
  return (
    <>
      <Sky distance={1000} sunPosition={[-100, 500, 1000]} />
      <Ocean />
      <Island />

      {/* <mesh receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[20, 0.05, 20]} />
        <meshStandardMaterial
          color={new THREE.Color(0xf6e4ad)
            .setHex(0xf6e4ad)
            .convertSRGBToLinear()}
        />
      </mesh>
      <gridHelper
        args={[2, 20, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
        position={[0, 0.001, 0]}
      /> */}
    </>
  );
};

export default OceanEnvironment;
