import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import data from 'data.json';
// import BodyMesh from './BodyMesh';
import BodyMeshTesting from './BodyMeshTesting';

export default function NounBody({
  headProp,
  animationState,
  animationValue,
  pantsProp,
  accessoryProp,
  bodyProp,
  shoeProp,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/baseModels/body.glb');
  const { ref, mixer, names, actions } = useAnimations(animations, group);

  // const [preLoadedBodyTextures, setPreLoadedBodyTextures] = useState(
  //   data.body.map((bodyObj) => {
  //     let bodyMaterial = useLoader(
  //       THREE.TextureLoader,
  //       `/textures/body/${bodyObj.value}`
  //     );

  //     bodyMaterial.flipY = false;
  //     bodyMaterial.magFilter = bodyMaterial.minFilter = THREE.NearestFilter;
  //     // bodyMaterial.premultiplyAlpha = true;

  //     return {
  //       name: bodyObj.name,
  //       value: bodyMaterial,
  //     };
  //   })
  // );

  const [preLoadedShoesTextures, setPreLoadedShoesTextures] = useState(
    data.shoes.map((shoeObj) => {
      let shoeMaterial = useLoader(THREE.TextureLoader, `/textures/shoes/${shoeObj.value}`);

      shoeMaterial.flipY = false;
      shoeMaterial.magFilter = shoeMaterial.minFilter = THREE.NearestFilter;
      shoeMaterial.premultiplyAlpha = true;

      return {
        name: shoeObj.name,
        value: shoeMaterial,
      };
    })
  );

  const [preloadedPantsTexture, setPreloadedPantsTexture] = useState(
    data.pants.map((pantObj) => {
      let pantsMaterial = useLoader(THREE.TextureLoader, `/textures/pants/${pantObj.value}`);

      pantsMaterial.flipY = false;
      pantsMaterial.magFilter = pantsMaterial.minFilter = THREE.NearestFilter;
      pantsMaterial.premultiplyAlpha = true;

      return {
        name: pantObj.name,
        value: pantsMaterial,
      };
    })
  );

  // const [preLoadedAccessoryTextures, setPreLoadedAccessoryTextures] = useState(
  //   data.accessory.map((accessoryObj) => {
  //     let accessoryMaterial = useLoader(
  //       THREE.TextureLoader,
  //       `/textures/accessories/${accessoryObj.value}`
  //     );

  //     accessoryMaterial.flipY = false;
  //     accessoryMaterial.magFilter = accessoryMaterial.minFilter =
  //       THREE.NearestFilter;
  //     // accessoryMaterial.premultiplyAlpha = true;

  //     return {
  //       name: accessoryObj.name,
  //       value: accessoryMaterial,
  //     };
  //   })
  // );

  // These were when we were passing the actual texture
  let accessoryTextureFound = lookupAccessoryTexture(accessoryProp, data.accessory);

  let handTextureFound = lookupHandTexture(headProp, data.head);
  let bodyTextureFound = lookupBodyTexture(bodyProp, data.body);
  let shoeTextureFound = lookupShoeTexture(shoeProp, preLoadedShoesTextures);
  let pantsTextureFound = lookupPantsTexture(pantsProp, preloadedPantsTexture);

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

  useEffect(() => {
    if (animationState) {
      actions[names[lookupAnimation(animationValue)]].reset().fadeIn(0.25).play();
      return () => actions[names[lookupAnimation(animationValue)]].fadeOut(0.25);
    }
  }, [actions, names, animationState, animationValue]);

  return (
    <group
      ref={group}
      dispose={null}
      castShadow
    >
      <primitive object={nodes.BodyAnimationSkeletonsJob_006Hipsd} />
      <skinnedMesh
        geometry={nodes.hands.geometry}
        // material={materials.handsMAT}
        skeleton={nodes.hands.skeleton}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={new THREE.Color(Number(handTextureFound)).convertSRGBToLinear()} />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.body.geometry}
        // material={materials.bodyMAT}
        skeleton={nodes.body.skeleton}
        castShadow
        receiveShadow
      >
        <BodyMeshTesting
          skeletonParts={nodes.body.skeleton}
          bodyTexture={bodyTextureFound}
          patternTexture={accessoryTextureFound}
          // accessoryProp={accessoryProp} for wireframe
        />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.legs.geometry}
        // material={materials.legsMAT}
        skeleton={nodes.legs.skeleton}
        castShadow
        // receiveShadow
      >
        <meshStandardMaterial
          map={pantsTextureFound}
          attach="material"
        />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.shoes.geometry}
        // material={materials.shoesMAT}
        skeleton={nodes.shoes.skeleton}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          map={shoeTextureFound}
          attach="material"
        />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload('/baseModels/body.glb');

export const lookupHandTexture = (headTextureParam, headData) => {
  let result = headData.find((obj) => {
    return obj.name === headTextureParam;
  });
  if (result) {
    return result.color;
  } else {
    return null;
  }
};

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

export const lookupAccessoryTexture = (accessoryTextureParam, preLoadedAccessoryTextures) => {
  let result = preLoadedAccessoryTextures.find((obj) => {
    return obj.name === accessoryTextureParam;
  });
  if (result) {
    return result.value;
  } else {
    return null;
  }
};

export const lookupPantsTexture = (pantsTextureParam, preloadedPantsTexture) => {
  let result = preloadedPantsTexture.find((obj) => {
    return obj.name === pantsTextureParam;
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
  let animationValue = data.animations.find((animation) => animation.name === animationState);
  if (animationValue) {
    return animationValue.value;
  } else {
    return data.animations[0].value;
  }
};
