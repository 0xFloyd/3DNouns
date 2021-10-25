import { useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three-stdlib';
import { Sky } from '@react-three/drei';

extend({ Water });

const Ocean = () => {
  const ref = useRef();

  // this is the renderer
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  // memoize -->  storing the results of expensive function calls and returning the cached result when the same inputs occur again
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
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
    (state, delta) => (ref.current.material.uniforms.time.value += 0.002)
  );

  // 2nd argument is config which is the material
  return (
    <water
      ref={ref}
      args={[geom, config]}
      position={[0, -1, 0]}
      rotation-x={-Math.PI / 2}
    />
  );
};

const OceanEnvironment = () => {
  return (
    <>
      <Sky sunPosition={[-100, 20, 100]} />
      <Ocean />
      <mesh receiveShadow position={[0, -0.025, 0]}>
        <boxBufferGeometry args={[2, 0.05, 2]} />
        <meshStandardMaterial
          color={new THREE.Color(0xf6e4ad)
            .setHex(0xf6e4ad)
            .convertSRGBToLinear()}
        />
      </mesh>
      <gridHelper
        args={[2, 20, new THREE.Color(0x919191), new THREE.Color(0x919191)]}
        position={[0, 0.001, 0]}
      />
    </>
  );
};

export default OceanEnvironment;
