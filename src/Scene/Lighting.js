import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Lighting = ({ environmentParam }) => {
  const light = useRef();
  const spotLight = useRef();
  const logoLightRef = useRef();
  const logoLight = new THREE.SpotLight(0xffffff);
  useHelper(logoLightRef, THREE.SpotLightHelper, 'red');
  const d = 5;

  return (
    <>
      <group>
        <ambientLight intensity={environmentParam === 'Matrix' ? 0.35 : 1.35} />

        <hemisphereLight
          skyColor={new THREE.Color(0xffffbb)}
          groundColor={new THREE.Color(0x080820)}
          intensity={environmentParam === 'Matrix' ? 0.85 : 1.85}
        />

        {environmentParam === 'Matrix' ? (
          <spotLight
            penumbra={1}
            distance={1000}
            angle={0.35}
            attenuation={1}
            anglePower={4}
            intensity={500}
            position={[0, 200, 0]}
            castShadow
            color={new THREE.Color(0xffa95c)}
            // lookAt={[100, 0, -200]}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-bias={-0.0001}
          />
        ) : null}

        <directionalLight
          // color={0xffffbb}
          ref={light}
          intensity={environmentParam === 'Matrix' ? 0 : 1.35}
          position={[-100, 500, 500]}
          shadow-camera-left={d * -100}
          shadow-camera-bottom={d * -100}
          shadow-camera-right={d * 100}
          shadow-camera-top={d * 100}
          shadow-camera-near={10}
          shadow-camera-far={5000}
          shadow-bias={-0.0001}
          shadow-mapSize-height={4096}
          shadow-mapSize-width={4096}
          castShadow
        />
      </group>
    </>
  );
};

export default Lighting;
