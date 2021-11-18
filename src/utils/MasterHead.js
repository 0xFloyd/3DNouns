import { useGLTF, useProgress, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { lookupAnimation } from 'assets/FullBodyNouns/FinalPipelineTest';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HeadTest119BonsaiHead from '../assets/Head/HeadTest119BonsaiHead';
import HeadTest119PineappleHead from '../assets/Head/HeadTest119PineappleHead';
import PlaceHolderHead from '../assets/Head/PlaceholderHead';

// import data from 'data.json';
// import CrabHead from './HeadFiles/CrabHead';
// import SharkHead from './HeadFiles/SharkHead';
// import BeerHead from 'HeadFiles/BeerHead';
import { headComponents } from './AllHeadModels';
import BeerHead from '../HeadFilesGenerated/BeerHead';
import BoatHead from '../HeadFilesGenerated/BoatHead';
import CloudHead from '../HeadFilesGenerated/CloudHead';
import ComputerHead from '../HeadFilesGenerated/ComputerHead';
import CrabHead from '../HeadFilesGenerated/CrabHead';
import GhostHead from '../HeadFilesGenerated/GhostHead';
import GrouperHead from '../HeadFilesGenerated/GrouperHead';
import KingHead from '../HeadFilesGenerated/KingHead';
import MixerHead from '../HeadFilesGenerated/MixerHead';
import NigiriHead from '../HeadFilesGenerated/NigiriHead';
import OwlHead from '../HeadFilesGenerated/OwlHead';
import PinappleHead from '../HeadFilesGenerated/PinappleHead';
import PirateshipHead from '../HeadFilesGenerated/PirateshipHead';
import QueenHead from '../HeadFilesGenerated/QueenHead';
import SandwichHead from '../HeadFilesGenerated/SandwichHead';
import SharkHead from '../HeadFilesGenerated/SharkHead';
import SkateHead from '../HeadFilesGenerated/SkateHead';
import SkullHead from '../HeadFilesGenerated/SkullHead';
import SquidHead from '../HeadFilesGenerated/SquidHead';
import SunsetHead from '../HeadFilesGenerated/SunsetHead';
import TrashcanHead from '../HeadFilesGenerated/TrashcanHead';
import UndeadHead from '../HeadFilesGenerated/UndeadHead';
import YetiHead from '../HeadFilesGenerated/YetiHead';
import AbstractHead from '../HeadFilesGenerated/AbstractHead';
import CloverHead from '../HeadFilesGenerated/CloverHead';
import DnaHead from '../HeadFilesGenerated/DnaHead';
import FrogHead from '../HeadFilesGenerated/FrogHead';
import GoatHead from '../HeadFilesGenerated/GoatHead';
import HelicopterHead from '../HeadFilesGenerated/HelicopterHead';
import HotdogHead from '../HeadFilesGenerated/HotdogHead';
import NoodlesHead from '../HeadFilesGenerated/NoodlesHead';
import OrangutanHead from '../HeadFilesGenerated/OrangutanHead';
import RabbitHead from '../HeadFilesGenerated/RabbitHead';
import SnowmobileHead from '../HeadFilesGenerated/SnowmobileHead';
import ToasterHead from '../HeadFilesGenerated/ToasterHead';
import WaveHead from '../HeadFilesGenerated/WaveHead';
import WizardhatHead from '../HeadFilesGenerated/WizardhatHead';
import BootHead from '../HeadFilesGenerated/BootHead';
import CassetteHead from '../HeadFilesGenerated/CassetteHead';
import CatHead from '../HeadFilesGenerated/CatHead';
import CdHead from '../HeadFilesGenerated/CdHead';
import DuckyHead from '../HeadFilesGenerated/DuckyHead';
import FoxHead from '../HeadFilesGenerated/FoxHead';
import GnomeHead from '../HeadFilesGenerated/GnomeHead';
import HeartHead from '../HeadFilesGenerated/HeartHead';
import IcepopHead from '../HeadFilesGenerated/IcepopHead';
import MicrowaveHead from '../HeadFilesGenerated/MicrowaveHead';
import MushroomHead from '../HeadFilesGenerated/MushroomHead';
import PaperclipHead from '../HeadFilesGenerated/PaperclipHead';
import PhoneHead from '../HeadFilesGenerated/PhoneHead';
import PorkbaoHead from '../HeadFilesGenerated/PorkbaoHead';
import RangefinderHead from '../HeadFilesGenerated/RangefinderHead';
import RobotHead from '../HeadFilesGenerated/RobotHead';
import WeedHead from '../HeadFilesGenerated/WeedHead';

const MasterHead = ({
  headProp,
  glassesProp,
  animationState,
  animationValue,
}) => {
  const MasterHead = useGLTF('/pipeline1110/headAnim.glb');

  const [allheadsState, setAllHeadsState] = useState([]);

  const glassesTest = useLoader(
    THREE.TextureLoader,
    `/textures/glasses/${glassesProp}`
  );

  glassesTest.flipY = false;
  glassesTest.magFilter = glassesTest.minFilter = THREE.NearestFilter;

  const allHeadComponents = headComponents.map((obj, index) => {
    const Component = obj.value;
    return (
      <Component
        key={index}
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
    );
  });

  // const HeadComponent = () => {
  //   let foundHead = headComponents.find((obj, index) => obj.name === headProp);
  //   let Component = foundHead?.value;
  //   if (Component) {
  //     return (
  //       <Component
  //         headProp={headProp}
  //         glassesProp={glassesTest}
  //         animationState={animationState}
  //         animationValue={animationValue}
  //         masterHeadModel={MasterHead}
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <>
      <HeadTest119BonsaiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      {/* {MasterHead.nodes && allHeadComponents} */}
      {/* <ExportHead/> */}
      <BeerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CrabHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />

      <BoatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />

      <CloudHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ComputerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GhostHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GrouperHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <KingHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MixerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <NigiriHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OwlHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PinappleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <QueenHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PirateshipHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SandwichHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SkateHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SkullHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SunsetHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <TrashcanHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SquidHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <UndeadHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <YetiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SharkHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <AbstractHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CloverHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DnaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FrogHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GoatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HelicopterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HotdogHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <NoodlesHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OrangutanHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RabbitHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SnowmobileHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ToasterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WaveHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WizardhatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BootHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CassetteHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CdHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DuckyHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FoxHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GnomeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HeartHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <IcepopHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MicrowaveHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MushroomHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PaperclipHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PhoneHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PorkbaoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RangefinderHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RobotHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WeedHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
    </>
  );
};

export default MasterHead;

useGLTF.preload('/pipeline1110/headAnim.glb');

{
  /* <HeadTest119BonsaiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      /> */
}
{
  /* {HeadComponents} */
}

{
  /* {allheadsState.length > 0 ? allheadsState : null} */
}
{
  /* {data.tempHeads.map((headData, index) => (
        <PlaceHolderHead
          currentHead={headProp}
          glassesProp={glassesTest}
          animationState={animationState}
          animationValue={animationValue}
          masterHeadModel={MasterHead}
          headData={headData}
          key={index}
        />
      ))} */
}

{
  /* <PirateshipHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      /> */
}

/*
      <SharkHead
      headProp={headProp}
      glassesProp={glassesTest}
      animationState={animationState}
      animationValue={animationValue}
      masterHeadModel={MasterHead}
    /> */

/*
    useEffect(() => {
      setAllHeadsState(
        data.tempHeads.map((headData, index) => (
          <PlaceHolderHead
            currentHead={headProp}
            glassesProp={glassesTest}
            animationState={animationState}
            animationValue={animationValue}
            masterHeadModel={MasterHead}
            headData={headData}
            key={index}
          />
        ))
      );
    }, []);
  
    // const HeadComponents = data.tempHeads.map((headData, index) => {
    //   return (
    //     <PlaceHolderHead
    //       currentHead={headProp}
    //       glassesProp={glassesTest}
    //       animationState={animationState}
    //       animationValue={animationValue}
    //       masterHeadModel={MasterHead}
    //       headData={headData}
    //       key={index}
    //     />
    //   );
    // });
     */