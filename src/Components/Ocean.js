import { extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three-stdlib';

extend({ Water });

// Extras
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

export default Ocean;
