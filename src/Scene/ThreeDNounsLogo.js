import React, { forwardRef, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDLogo = ({ environment }, ref) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/world/3Dglasses.glb');

  return (
    <>
      {environment === 'Normal' || environment === 'Matrix' ? (
        // <mesh
        //   ref={ref}
        //   castShadow
        //   receiveShadow
        //   geometry={nodes.NounsLogo.geometry}
        //   material={materials['3DblueRedLogo_material']}
        //   scale={[4, 4, 4]}
        //   position={[120, 0, -20]}
        //   rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
        // />
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GLASSES.geometry}
            material={nodes.GLASSES.material}
            position={[120, 12, -20]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NOUNS.geometry}
            material={nodes.NOUNS.material}
            position={[120, 0, -20]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
        </>
      ) : null}
      {environment === 'VoidDay' || environment === 'VoidNight' ? (
        // <mesh
        //   ref={ref}
        //   castShadow
        //   receiveShadow
        //   geometry={nodes.NounsLogo.geometry}
        //   material={materials['3DblueRedLogo_material']}
        //   scale={[4, 4, 4]}
        //   position={[120, 0, -150]}
        //   rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
        // />
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GLASSES.geometry}
            material={nodes.GLASSES.material}
            position={[120, 12, -150]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NOUNS.geometry}
            material={nodes.NOUNS.material}
            position={[120, 0, -150]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
            scale={[4, 4, 4]}
          />
        </>
      ) : null}
    </>

    // <group
    //   ref={group}
    //   {...props}
    //   dispose={null}
    //   scale={[4, 4, 4]}
    //   position={[125, -11, -150]}
    //   rotation={new THREE.Euler(0, -Math.PI / 4, 0)}
    // >
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes['3D'].geometry}
    //     material={nodes['3D'].material}
    //     rotation={[Math.PI / 2, 0, 0]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.nouns.geometry}
    //     material={nodes.nouns.material}
    //     rotation={[Math.PI / 2, 0, 0]}
    //   />
    // </group>
  );
};

export default forwardRef(ThreeDLogo);
