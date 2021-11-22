import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import finalBody from '../Models/FINALBODY.glb';
import shoeTexture from '../Textures/Shoes/shoes-teal-light.png';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import data from 'data.json';
import BodyMesh from './BodyMesh';

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

  const [preLoadedShoesTextures, setPreLoadedShoesTextures] = useState(
    data.shoes.map((shoeObj) => {
      let shoeMaterial = useLoader(
        THREE.TextureLoader,
        `/textures/shoes/${shoeObj.value}`
      );

      shoeMaterial.flipY = false;
      shoeMaterial.magFilter = shoeMaterial.minFilter = THREE.NearestFilter;
      shoeMaterial.premultiplyAlpha = true;

      return {
        name: shoeObj.name,
        value: shoeMaterial,
      };
    })
  );

  const [preLoadedAccessoryTextures, setPreLoadedAccessoryTextures] = useState(
    data.tempAccessories.map((accessoryObj) => {
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
  let shoeTextureFound = lookupShoeTexture(shoeProp, preLoadedShoesTextures);

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

  useEffect(() => {
    if (animationState) {
      actions[names[lookupAnimation(animationValue)]]
        .reset()
        .fadeIn(0.5)
        .play();
      return () => actions[names[lookupAnimation(animationValue)]].fadeOut(0.5);
    }
  }, [actions, names, animationState, animationValue]);

  // useEffect(() => {
  //   // Reset and fade in animation after an index has been changed

  //   actions[names[3]].reset().fadeIn(0.5).play();

  //   // if (walkAnimation) {
  //   //   actions[names[0]].reset().fadeIn(0.5).play();
  //   // }

  //   //In the clean-up phase, fade it out
  //   return () => actions[names[3]].fadeOut(0.5);
  // }, [actions, names]);

  return (
    <group ref={group} dispose={null} castShadow>
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.hands.geometry}
        material={materials.handsMAT}
        skeleton={nodes.hands.skeleton}
        castShadow
      />
      <skinnedMesh
        geometry={nodes.body.geometry}
        // material={materials.bodyMAT}
        skeleton={nodes.body.skeleton}
      >
        <BodyMesh
          skeletonParts={nodes.body.skeleton}
          bodyTexture={bodyTextureFound}
          patternTexture={accessoryTextureFound}
        />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.pants.geometry}
        material={materials.pantsMAT}
        skeleton={nodes.pants.skeleton}
        castShadow
      />
      <skinnedMesh
        geometry={nodes.shoes.geometry}
        // material={materials.shoesMAT}
        skeleton={nodes.shoes.skeleton}
        castShadow
      >
        <meshStandardMaterial map={shoeTextureFound} attach="material" />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload('/FINALBODY.glb');

export const lookupBodyTexture = (bodyTextureParam, preLoadedBodyTextures) => {
  let result = preLoadedBodyTextures.find((obj) => {
    return obj.name === bodyTextureParam;
  });
  if (result) {
    return result.value;
  } else {
    return null;
  }
};

export const lookupAccessoryTexture = (
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

export const lookupShoeTexture = (shoeTextureParam, preLoadedShoeTextures) => {
  let result = preLoadedShoeTextures.find((obj) => {
    return obj.name === shoeTextureParam;
  });
  if (result) {
    return result.value;
  } else {
    return null;
  }
};

export const lookupAnimation = (animationState) => {
  let animationValue = data.animations.find(
    (animation) => animation.name === animationState
  );
  if (animationValue) {
    return animationValue.value;
  } else {
    return data.animations[1].value;
  }
};

data.body.forEach((bodyObj) => {
  useTexture.preload(`/textures/body/${bodyObj.value}`);
});

data.accessory.forEach((accessoryObj) => {
  useTexture.preload(`/textures/accessories/${accessoryObj.value}`);
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

let test;
