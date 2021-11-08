import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import finalBody from '../Models/FINALBODY.glb';
import shoeTexture from '../Textures/Shoes/shoes-teal-light.png';
import { useFrame, useLoader } from '@react-three/fiber';
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
    { name: 'accessory-1n', value: 'accessory-1n.png' },
    { name: 'accessory-aardvark', value: 'accessory-aardvark.png' },
    { name: 'accessory-axe', value: 'accessory-axe.png' },
    {
      name: 'accessory-belly-chameleon',
      value: 'accessory-belly-chameleon.png',
    },
    { name: 'accessory-bird-flying', value: 'accessory-bird-flying.png' },
    { name: 'accessory-bird-side', value: 'accessory-bird-side.png' },
    { name: 'accessory-blind-anchor', value: 'accessory-blind-anchor.png' },
    { name: 'accessory-bling-anvil', value: 'accessory-bling-anvil.png' },
    { name: 'accessory-bling-arrow', value: 'accessory-bling-arrow.png' },
    { name: 'accessory-bling-cheese', value: 'accessory-bling-cheese.png' },
    {
      name: 'accessory-bling-gold-ingot',
      value: 'accessory-bling-gold-ingot.png',
    },
    { name: 'accessory-bling-love', value: 'accessory-bling-love.png' },
    { name: 'accessory-bling-mask', value: 'accessory-bling-mask.png' },
    { name: 'accessory-bling-ring', value: 'accessory-bling-ring.png' },
    { name: 'accessory-bling-scissors', value: 'accessory-bling-scissors.png' },
    { name: 'accessory-bling-sparkles', value: 'accessory-bling-sparkles.png' },
    {
      name: 'accessory-body-gradient-checkerdisco',
      value: 'accessory-body-gradient-checkerdisco.png',
    },
    {
      name: 'accessory-body-gradient-dawn',
      value: 'accessory-body-gradient-dawn.png',
    },
    {
      name: 'accessory-body-gradient-dusk',
      value: 'accessory-body-gradient-dusk.png',
    },
    {
      name: 'accessory-body-gradient-glacier',
      value: 'accessory-body-gradient-glacier.png',
    },
    {
      name: 'accessory-body-gradient-ice',
      value: 'accessory-body-gradient-ice.png',
    },
    {
      name: 'accessory-body-gradient-pride',
      value: 'accessory-body-gradient-pride.png',
    },
    {
      name: 'accessory-body-gradient-redpink',
      value: 'accessory-body-gradient-redpink.png',
    },
    {
      name: 'accessory-body-gradient-sunset',
      value: 'accessory-body-gradient-sunset.png',
    },
    { name: 'accessory-carrot', value: 'accessory-carrot.png' },
    { name: 'accessory-chain', value: 'accessory-chain.png' },
    {
      name: 'accessory-checker-bigwalk-blue-prime',
      value: 'accessory-checker-bigwalk-blue-prime.png',
    },
    {
      name: 'accessory-checker-bigwalk-greylight',
      value: 'accessory-checker-bigwalk-greylight.png',
    },
    {
      name: 'accessory-checker-bigwalk-rainbow',
      value: 'accessory-checker-bigwalk-rainbow.png',
    },
    { name: 'accessory-checker-RGB', value: 'accessory-checker-RGB.png' },
    { name: 'accessory-cloud', value: 'accessory-cloud.png' },
    { name: 'accessory-clover', value: 'accessory-clover.png' },
    { name: 'accessory-collar-sunset', value: 'accessory-collar-sunset.png' },
    { name: 'accessory-cow', value: 'accessory-cow.png' },
    { name: 'accessory-dinosaur', value: 'accessory-dinosaur.png' },
    { name: 'accessory-dollar-bling', value: 'accessory-dollar-bling.png' },
    { name: 'accessory-dragon', value: 'accessory-dragon.png' },
    { name: 'accessory-ducky', value: 'accessory-ducky.png' },
    { name: 'accessory-eth', value: 'accessory-eth.png' },
    { name: 'accessory-eye', value: 'accessory-eye.png' },
    { name: 'accessory-flash', value: 'accessory-flash.png' },
    { name: 'accessory-fries', value: 'accessory-fries.png' },
    {
      name: 'accessory-glasses-logo-sun',
      value: 'accessory-glasses-logo-sun.png',
    },
    { name: 'accessory-glasses-logo', value: 'accessory-glasses-logo.png' },
    { name: 'accessory-glasses', value: 'accessory-glasses.png' },
    { name: 'accessory-heart', value: 'accessory-heart.png' },
    {
      name: 'accessory-hoodiestrings-uneven',
      value: 'accessory-hoodiestrings-uneven.png',
    },
    { name: 'accessory-id', value: 'accessory-id.png' },
    { name: 'accessory-infinity', value: 'accessory-infinity.png' },
    { name: 'accessory-insignia', value: 'accessory-insignia.png' },
    { name: 'accessory-leaf', value: 'accessory-leaf.png' },
    { name: 'accessory-lightbulb', value: 'accessory-lightbulb.png' },
    { name: 'accessory-lp', value: 'accessory-lp.png' },
    { name: 'accessory-marsface', value: 'accessory-marsface.png' },
    { name: 'accessory-matrix', value: 'accessory-matrix.png' },
    { name: 'accessory-moon-block', value: 'accessory-moon-block.png' },
    { name: 'accessory-pizza-bling', value: 'accessory-pizza-bling.png' },
    { name: 'accessory-pocket-pencil', value: 'accessory-pocket-pencil.png' },
    { name: 'accessory-rain', value: 'accessory-rain.png' },
    { name: 'accessory-rgb', value: 'accessory-rgb.png' },
    { name: 'accessory-scarf-clown', value: 'accessory-scarf-clown.png' },
    { name: 'accessory-secret-x', value: 'accessory-secret-x.png' },
    { name: 'accessory-shirt-black', value: 'accessory-shirt-black.png' },
    { name: 'accessory-shrimp', value: 'accessory-shrimp.png' },
    { name: 'accessory-slimesplat', value: 'accessory-slimesplat.png' },
    { name: 'accessory-small-bling', value: 'accessory-small-bling.png' },
    { name: 'accessory-snowflake', value: 'accessory-snowflake.png' },
    { name: 'accessory-stains-blood', value: 'accessory-stains-blood.png' },
    { name: 'accessory-stains-zombie', value: 'accessory-stains-zombie.png' },
    {
      name: 'accessory-stripes-and-checks',
      value: 'accessory-stripes-and-checks.png',
    },
    {
      name: 'accessory-stripes-big-red',
      value: 'accessory-stripes-big-red.png',
    },
    { name: 'accessory-stripes-blit', value: 'accessory-stripes-blit.png' },
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    { name: 'accessory-stripes-brown', value: 'accessory-stripes-brown.png' },
    { name: 'accessory-stripes-olive', value: 'accessory-stripes-olive.png' },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
    { name: 'accessory-sunset', value: 'accessory-sunset.png' },
    { name: 'accessory-taxi-checkers', value: 'accessory-taxi-checkers.png' },
    { name: 'accessory-text-yolo', value: 'accessory-text-yolo.png' },
    { name: 'accessory-think', value: 'accessory-think.png' },
    {
      name: 'accessory-tie-black-on-white',
      value: 'accessory-tie-black-on-white.png',
    },
    { name: 'accessory-tie-dye', value: 'accessory-tie-dye.png' },
    {
      name: 'accessory-tie-purple-on-white',
      value: 'accessory-tie-purple-on-white.png',
    },
    { name: 'accessory-tie-red', value: 'accessory-tie-red.png' },
    { name: 'accessory-txt-a2+b2', value: 'accessory-txt-a2+b2.png' },
    { name: 'accessory-txt-cc', value: 'accessory-txt-cc.png' },
    { name: 'accessory-txt-cc2', value: 'accessory-txt-cc2.png' },
    { name: 'accessory-txt-copy', value: 'accessory-txt-copy.png' },
    { name: 'accessory-txt-dao', value: 'accessory-txt-dao.png' },
    { name: 'accessory-txt-doom', value: 'accessory-txt-doom.png' },
    { name: 'accessory-txt-dope-text', value: 'accessory-txt-dope-text.png' },
    { name: 'accessory-txt-foo-black', value: 'accessory-txt-foo-black.png' },
    { name: 'accessory-txt-ico', value: 'accessory-txt-ico.png' },
    { name: 'accessory-txt-io', value: 'accessory-txt-io.png' },
    { name: 'accessory-txt-lmao', value: 'accessory-txt-lmao.png' },
    { name: 'accessory-txt-lol', value: 'accessory-txt-lol.png' },
    { name: 'accessory-txt-mint', value: 'accessory-txt-mint.png' },
    {
      name: 'accessory-txt-nil-grey-dark',
      value: 'accessory-txt-nil-grey-dark.png',
    },
    { name: 'accessory-txt-noun-f0f', value: 'accessory-txt-noun-f0f.png' },
    { name: 'accessory-txt-noun-green', value: 'accessory-txt-noun-green.png' },
    {
      name: 'accessory-txt-noun-multicolor',
      value: 'accessory-txt-noun-multicolor.png',
    },
    { name: 'accessory-txt-noun', value: 'accessory-txt-noun.png' },
    { name: 'accessory-txt-pi', value: 'accessory-txt-pi.png' },
    { name: 'accessory-txt-pop', value: 'accessory-txt-pop.png' },
    { name: 'accessory-txt-rofl', value: 'accessory-txt-rofl.png' },
    { name: 'accessory-txt-we', value: 'accessory-txt-we.png' },
    { name: 'accessory-txt-yay', value: 'accessory-txt-yay.png' },
    { name: 'accessory-wave', value: 'accessory-wave.png' },
    { name: 'accessory-wet-money', value: 'accessory-wet-money.png' },
    { name: 'accessory-yingyang', value: 'accessory-yingyang.png' },
    { name: 'body-bege', value: 'body-bege.png' },
    { name: 'body-gray-scale-1', value: 'body-gray-scale-1.png' },
    { name: 'body-gray-scale-9', value: 'body-gray-scale-9.png' },
    { name: 'body-ice-cold', value: 'body-ice-cold.png' },
  ];

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
          accessoryTexture={accessoryTextureFound}
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
