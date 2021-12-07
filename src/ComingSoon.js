import { Stars } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import ProgressLoader from 'Loader';
import React, {
  Suspense,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as THREE from 'three';
import { FontLoader } from './utils/FontLoader';
import { TextGeometry } from './utils/TextGeometry';

extend({ TextGeometry });

function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#000000',
  ...props
}) {
  const font = useLoader(FontLoader, '/bold.blob');
  const config = useMemo(
    () => ({
      font,
      size: 15,
      height: 6,
      curveSegments: 16,
      //   bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 1.25,
      bevelOffset: 0,
      bevelSegments: 10,
    }),
    [font]
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.position.x =
      hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
    mesh.current.position.y =
      vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
  }, [children]);
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textGeometry args={[children, config]} />
        <meshStandardMaterial attach="material" color={'#d63c5e'} />
      </mesh>
    </group>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 1.1, 3 + state.mouse.y * 1.1, 14),
      0.5
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function NounsTitle() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.cos(clock.getElapsedTime()) * 0.05)
  );
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 5.5, -5]} children="3D" />
      <Text hAlign="center" position={[0, 2.5, -5]} children="NOUNS" />
      <Text hAlign="center" position={[0, -0.5, -5]} children="COMING" />
      <Text hAlign="center" position={[0, -3.5, -5]} children="SOON" />
    </group>
  );
}

const ComingSoon = () => {
  return (
    <Canvas
      gl={{ alpha: false }}
      camera={{ near: 0.01, far: 500 }}
      onCreated={({ camera }) => {
        // do things here
        camera.position.x = 24;
        camera.position.y = 32;
        camera.position.z = 68;
        // camera.lookAt(lookAtPos);
        camera.updateProjectionMatrix();
        // camera.fov =
      }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      {/* <spotLight position={[10, 10, 10]} intensity={0.1} /> */}
      <directionalLight
        position={[5, 5, 5]}
        castShadow
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Intro />

      <Suspense fallback={<ProgressLoader />}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        {/* <TestText /> */}
        <NounsTitle />
        {/* <EffectComposer>
            <DepthOfField
              target={[0, 0, 30]}
              focalLength={3}
              bokehScale={11}
              height={700}
            />
          </EffectComposer> */}
      </Suspense>
    </Canvas>
  );
};

export default ComingSoon;
