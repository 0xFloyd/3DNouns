import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import finalBody from '../Models/FINALBODY.glb';
import shoeTexture from '../Textures/Shoes/shoes-teal-light.png';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import data from 'data.json';
import { BodyMesh } from './BodyMesh';

export default function FINALBODY({
  animationState,
  animationValue,
  pantsProp,
  accessoryProp,
  bodyProp,
  shoeProp,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(finalBody);
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  const [preLoadedBodyTextures, setPreLoadedBodyTextures] = useState(
    data.body.map((bodyObj) => {
      let bodyMaterial = useLoader(
        THREE.TextureLoader,
        `/textures/body/${bodyObj.value}`
      );

      bodyMaterial.flipY = false;
      bodyMaterial.magFilter = bodyMaterial.minFilter = THREE.NearestFilter;
      bodyMaterial.premultiplyAlpha = true;

      return {
        name: bodyObj.name,
        value: bodyMaterial,
      };
    })
  );

  let tempAccessories = [
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
  ];

  const [preLoadedAccessoryTextures, setPreLoadedAccessoryTextures] = useState(
    tempAccessories.map((accessoryObj) => {
      let accessoryMaterial = useLoader(
        THREE.TextureLoader,
        `/textures/accessories/${accessoryObj.value}`
      );

      accessoryMaterial.flipY = false;
      accessoryMaterial.magFilter = accessoryMaterial.minFilter =
        THREE.NearestFilter;
      accessoryMaterial.premultiplyAlpha = true;

      return {
        name: accessoryObj.name,
        value: accessoryMaterial,
      };
    })
  );

  let accessoryTextureFound = lookupAccessoryTexture(
    accessoryProp,
    preLoadedAccessoryTextures
  );
  let bodyTextureFound = lookupBodyTexture(bodyProp, preLoadedBodyTextures);

  // const [preLoadedAccessoryTextures, setPreLoadedAccessoryTextures] = useState(
  //   data.accessory.map((accessoryObj) => {
  //     let accessoryMaterial = useLoader(
  //       THREE.TextureLoader,
  //       `/textures/accessories/${accessoryObj.value}`
  //     );

  //     accessoryMaterial.flipY = false;
  //     accessoryMaterial.magFilter = accessoryMaterial.minFilter =
  //       THREE.NearestFilter;
  //     accessoryMaterial.premultiplyAlpha = true;

  //     return {
  //       name: accessoryObj.name,
  //       value: accessoryMaterial,
  //     };
  //   })
  // );

  const shoeMaterial = useLoader(THREE.TextureLoader, shoeTexture);
  shoeMaterial.flipY = false;
  shoeMaterial.magFilter = shoeMaterial.minFilter = THREE.NearestFilter;
  shoeMaterial.premultiplyAlpha = true;

  // useEffect(() => {
  //   if (animationState) {
  //     actions[names[animationValue.index]].reset().fadeIn(0.5).play();
  //   }
  //   return () => actions[names[animationValue.index]].fadeOut(0.5);
  // }, [actions, names, animationState, animationValue]);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed

    actions[names[3]].reset().fadeIn(0.5).play();

    // if (walkAnimation) {
    //   actions[names[0]].reset().fadeIn(0.5).play();
    // }

    //In the clean-up phase, fade it out
    return () => actions[names[3]].fadeOut(0.5);
  }, [actions, names]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.hands.geometry}
        material={materials.handsMAT}
        skeleton={nodes.hands.skeleton}
      />
      <skinnedMesh
        geometry={nodes.body.geometry}
        // material={materials.bodyMAT}
        skeleton={nodes.body.skeleton}
      >
        <BodyMesh
          skeletonParts={nodes.body.skeleton}
          bodyTexture={bodyTextureFound}
          accessoryTexture={accessoryTextureFound}
        />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.pants.geometry}
        material={materials.pantsMAT}
        skeleton={nodes.pants.skeleton}
      />
      <skinnedMesh
        geometry={nodes.shoes.geometry}
        material={materials.shoesMAT}
        skeleton={nodes.shoes.skeleton}
      >
        <meshStandardMaterial map={shoeMaterial} attach="material" />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload('/FINALBODY.glb');

const lookupBodyTexture = (bodyTextureParam, preLoadedBodyTextures) => {
  let result = preLoadedBodyTextures.find((obj) => {
    return obj.name === bodyTextureParam;
  });
  if (result) {
    return result.value;
  } else {
    return null;
  }
};

const lookupAccessoryTexture = (
  accessoryTextureParam,
  preLoadedAccessoryTextures
) => {
  let result = preLoadedAccessoryTextures.find((obj) => {
    return obj.name === accessoryTextureParam;
  });
  if (result) {
    return result.value;
  } else {
    return null;
  }
};

data.body.forEach((bodyObj) => {
  useTexture.preload(`/textures/body/${bodyObj.value}`);
});

data.accessory.forEach((accessoryObj) => {
  useTexture.preload(`/textures/accessories/${accessoryObj.value}`);
});

data.pants.forEach((pantsObj) => {
  useTexture.preload(`/textures/pants/${pantsObj.value}`);
});

data.shoes.forEach((shoeObj) => {
  useTexture.preload(`/textures/shoes/${shoeObj.value}`);
});

data.glasses.forEach((glassesObj) => {
  useTexture.preload(`/textures/glasses/${glassesObj.value}`);
});
