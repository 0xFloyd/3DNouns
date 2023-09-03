import { Sky, Stars, useGLTF, useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import City from "./City";
import BlockPark from "./BlockPark";
import BlockTNS from "./BlockTNS";

const NormalEnvironment = ({ environment }) => {
  const SPEED = isMobile ? 1 : 1.5;

  const truck = useGLTF("/world/cocatruck.glb");
  const taxi = useGLTF("/world/taxi.glb");

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
    return (
      <mesh receiveShadow position={[32, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
        />
      </mesh>
    );
  };

  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <>
      {environment === "Normal" || environment === "VoidDay" ? (
        <fog attach="fog" args={[new THREE.Color(0xffffff), 1, 2500]} />
      ) : null}
      {environment === "Matrix" ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 2500]} />
      ) : null}
      {environment === "VoidNight" ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 1000]} />
      ) : null}
      {loaded && (environment === "Matrix" || environment === "VoidNight") ? (
        <color attach="background" args={[0x181818]} />
      ) : null}
      {loaded && (environment === "Normal" || environment === "VoidDay") ? (
        <Sky
          azimuth={0.5}
          turbidity={7.5}
          rayleigh={0.4}
          inclination={0.6}
          distance={3000}
          sunPosition={[-100, 500, 1000]}
        />
      ) : null}
      <City environment={environment} />
      <BlockPark environment={environment} />
      <BlockTNS environment={environment} />
      {environment === "Normal" || environment === "Matrix" ? (
        <>
          {truck && truck.nodes && truck.materials && (
            <group ref={truckRef} dispose={null} visible={showTruck}>
              <mesh
                castShadow
                receiveShadow
                geometry={truck.nodes.Oren_1117.geometry}
                material={truck.materials.truck_material}
                position={[-450, -4, -127]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
          {taxi && taxi.nodes && taxi.materials && (
            <group ref={taxiRef} dispose={null} visible={showTaxi}>
              <mesh
                castShadow
                receiveShadow
                geometry={taxi.nodes.Oren_1113.geometry}
                material={taxi.materials.cab_material}
                position={[100, -4, -60]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
        </>
      ) : null}
      {environment === "VoidDay" || environment === "VoidNight" ? (
        <gridHelper
          receiveShadow
          // castShadow
          args={[
            5000,
            150,
            new THREE.Color(0x7d7d7d),
            new THREE.Color(0x7d7d7d),
          ]}
          position={[0, 0.1, 0]}
        />
      ) : null}
      {environment === "VoidDay" || environment === "VoidNight" ? (
        <mesh
          receiveShadow
          position={[32, -1, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
          <meshStandardMaterial
            color={new THREE.Color(0x404040).convertSRGBToLinear()}
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
