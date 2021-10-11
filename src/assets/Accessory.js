import { Plane, useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';
import * as THREE from 'three';
import carrot from './accessories/cropped-carrot.png';
import eye from './accessories/cropped-eye.png';
import blingGoldIngot from './accessories/cropped-gold-chain.png';

const Accessory = (props) => {
  const { accessoryName } = props;
  const carrotTexture = useTexture(carrot);
  const eyeTexture = useTexture(eye);
  const blingGoldIngotTexture = useTexture(blingGoldIngot);

  const accessoriesArray = [
    { name: 'accessory-carrot', value: carrotTexture },
    { name: 'accessory-eye', value: eyeTexture },
    { name: 'accessory-bling-gold-ingot', value: blingGoldIngotTexture },
  ];

  useMemo(() => {
    accessoriesArray.forEach((accesory) => {
      accesory.value.generateMipmaps = true;
      accesory.value.needsUpdate = true;
      accesory.value.magFilter = THREE.NearestFilter;
      accesory.value.minFilter = THREE.NearestFilter;
    });

    // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

    // texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [accessoriesArray]);

  // let texture = selectAccessory(accessoryName, accessoriesArray);

  console.log('accessoryName:', accessoryName);

  return (
    <group dispose={null} scale={[0.01, 0.01, 0.01]}>
      <Plane
        args={[8, 11]}
        material-map={selectAccessory(accessoryName, accessoriesArray)}
        material-transparent
        position={[0, 15.5, 2.01]}
      />
    </group>
  );
};

export default Accessory;

const selectAccessory = (accessory, accessoriesArray) => {
  let foundAccessory = accessoriesArray.find((obj) => {
    return obj.name === accessory;
  });

  return foundAccessory ? foundAccessory.value : null;
};
