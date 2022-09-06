import { Sky, Stars, useGLTF, useProgress } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import * as THREE from 'three';
import City from './City';
import Street from './Street';

const NormalEnvironment = ({ environment }) => {
  // color="#101010"
  // transparent
  // depthWrite={false}

  // const { nodes, materials } = useGLTF('/world/voxelworld.glb');
  const SPEED = isMobile ? 1.5 : 0.5;

  const truck = useGLTF('/world/cocatruck.glb');
  const taxi = useGLTF('/world/taxi.glb');

  const truckRef = useRef();
  const taxiRef = useRef();

  const [showTruck, setShowTruck] = useState(true);
  const [showTaxi, setShowTaxi] = useState(isMobile ? false : true);

  useFrame(() => {
    if (truckRef.current && showTruck) {
      truckRef.current.position.x += SPEED;
      if (truckRef.current.position.x > 1300) {
        setShowTruck(false);
        delayTruck();
      }
    }
    if (taxiRef.current && showTaxi) {
      taxiRef.current.position.x -= 0.7;
      if (taxiRef.current.position.x < -1050) {
        setShowTaxi(false);
        delayTaxi();
      }
    }
  });

  const delayTruck = () => {
    if (truckRef && truckRef.current) {
      setTimeout(() => {
        if (truckRef && truckRef.current) {
          truckRef.current.position.x = -500;
          setShowTruck(true);
        }
      }, randomIntFromInterval(1000, 2500));
    }
  };

  const delayTaxi = () => {
    if (taxiRef && taxiRef.current) {
      setTimeout(() => {
        if (taxiRef && taxiRef.current) {
          taxiRef.current.position.x = 650;
          setShowTaxi(true);
        }
      }, randomIntFromInterval(1200, 2700));
    }
  };

  const Ground = () => {
    // const texture_1 = useLoader(
    //   THREE.TextureLoader,
    //   '/textures/world/grass2.png'
    // );
    // texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
    // texture_1.repeat.set(32, 32);
    // texture_1.anisotropy = 64;
    // texture_1.encoding = THREE.sRGBEncoding;

    return (
      <mesh
        receiveShadow
        position={[32, -1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
        {/* <meshStandardMaterial map={texture_1} attach="material" /> */}
        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
          // roughness={0.1}
          // metalness={0}
        />
      </mesh>
    );
  };

  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <>
      {environment === 'Normal' || environment === 'VoidDay' ? (
        <fog
          attach="fog"
          args={[new THREE.Color(0xffffff), 1, 2500]}
        />
      ) : null}
      {environment === 'Matrix' ? (
        <fog
          attach="fog"
          args={[new THREE.Color(0x181818), 1, 2500]}
        />
      ) : null}
      {environment === 'VoidNight' ? (
        <fog
          attach="fog"
          args={[new THREE.Color(0x181818), 1, 1000]}
        />
      ) : null}
      {/* <Sky distance={1000} sunPosition={[-100, 500, 1000]0} /> */}
      {/* <color attach="background" args={[new THREE.Color(0x87ceeb)]} /> */}
      {/* <fog attach="fog" args={[new THREE.Color(0x87ceeb), 1, 5000]} /> */}
      {/* <Sky distance={5000} sunPosition={[-100, 500, 1000]} /> */}

      {loaded && (environment === 'Matrix' || environment === 'VoidNight') ? (
        <color
          attach="background"
          args={[0x181818]}
        />
      ) : null}
      {loaded && (environment === 'Normal' || environment === 'VoidDay') ? (
        <Sky
          azimuth={0.5}
          turbidity={7.5}
          rayleigh={0.4}
          inclination={0.6}
          distance={3000}
          sunPosition={[-100, 500, 1000]}
        />
      ) : null}
      {/* {loaded && environment === 'Matrix' && (
        <Stars
          radius={100}
          depth={700}
          count={5000}
          factor={16}
          saturation={2}
          fade
          // position={[100, 100, 100]}
        />
      )} */}
      {/* <SkyShader /> */}
      {/* <House /> */}
      {/* <Ground /> */}
      {/* <mesh
        receiveShadow
        position={[-70, -0.5, -70]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxBufferGeometry args={[250, 1, 300]} />

        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
          // roughness={0.1}
          // metalness={0}
        />
      </mesh> */}
      {/* position={[75, 6, 0]} */}
      <City environment={environment} />
      <Street environment={environment} />
      {environment === 'Normal' || environment === 'Matrix' ? (
        <>
          <group
            dispose={null}
            scale={[140, 140, 140]}
            position={[0, 1.5, 100]}
          >
            {' '}
            {/* position={[2600, -24, 1700]} */}
            {/* <mesh
              castShadow
              receiveShadow
              geometry={nodes.Union_142.geometry}
              material={materials.city3_material}
              position={[-3.99, -0.1, -3.54]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.03, 0.03, 0.03]}
            /> */}
          </group>
          {truck && truck.nodes && truck.materials && (
            <group
              ref={truckRef}
              dispose={null}
              visible={showTruck}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={truck.nodes.Oren_1117.geometry}
                material={truck.materials.truck_material}
                position={[-450, -4, -180]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
          {taxi && taxi.nodes && taxi.materials && (
            <group
              ref={taxiRef}
              dispose={null}
              visible={showTaxi}
            >
              {/* <mesh
                castShadow
                receiveShadow
                geometry={truck.nodes.Oren_1117.geometry}
                material={truck.materials.coca_material}
                position={[-450, -49, -210]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              /> */}
              <mesh
                castShadow
                receiveShadow
                geometry={taxi.nodes.Oren_1113.geometry}
                material={taxi.materials.cab_material}
                position={[100, -4, -90]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
        </>
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        <gridHelper
          receiveShadow
          // castShadow
          args={[5000, 150, new THREE.Color(0x7d7d7d), new THREE.Color(0x7d7d7d)]}
          position={[0, 0.1, 0]}
        />
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        <mesh
          receiveShadow
          position={[32, -1, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
          {/* <meshStandardMaterial map={texture_1} attach="material" /> */}
          <meshStandardMaterial
            color={new THREE.Color(0x404040).convertSRGBToLinear()}
            // roughness={0.1}
            // metalness={0}
          />
        </mesh>
      ) : null}
    </>
  );
};

export default NormalEnvironment;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
