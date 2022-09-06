import { useThree } from '@react-three/fiber';
import NounBody from 'components/Models/NounBody';
import MasterHead from 'utils/MasterHead';
import React, { useEffect, useRef, forwardRef } from 'react';

const NounHolder = (
  {
    headProp,
    glassesProp,
    animationState,
    animationValue,
    pantsProp,
    accessoryProp,
    bodyProp,
    shoeProp,
    setSceneState,
  },
  ref
) => {
  const modelDownloadMesh = useRef();
  const scene = useThree();

  useEffect(() => {
    setSceneState(scene);
  }, [
    headProp,
    glassesProp,
    animationState,
    animationValue,
    pantsProp,
    accessoryProp,
    bodyProp,
    shoeProp,
    setSceneState,
  ]);

  return (
    <group
      ref={ref}
      name="nounGroupHolder"
      onPointerOver={() => (document.body.style.cursor = 'grab')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      <MasterHead
        headProp={headProp}
        glassesProp={glassesProp}
        animationState={animationState}
        animationValue={animationValue}
      />
      <NounBody
        headProp={headProp}
        animationState={animationState}
        animationValue={animationValue}
        pantsProp={pantsProp}
        accessoryProp={accessoryProp}
        bodyProp={bodyProp}
        shoeProp={shoeProp}
      />
    </group>
  );
};

export default forwardRef(NounHolder);
