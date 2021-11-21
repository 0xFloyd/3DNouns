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
import BagpipeHead from '../HeadFilesGenerated/BagpipeHead';
import BananaHead from '../HeadFilesGenerated/BananaHead';
import BankHead from '../HeadFilesGenerated/BankHead';
import BatHead from '../HeadFilesGenerated/BatHead';
import BdayHead from '../HeadFilesGenerated/BdayHead';
import CamcorderHead from '../HeadFilesGenerated/CamcorderHead';
import CarHead from '../HeadFilesGenerated/CarHead';
import CashregisterHead from '../HeadFilesGenerated/CashregisterHead';
import ChiliHead from '../HeadFilesGenerated/ChiliHead';
import ConeHead from '../HeadFilesGenerated/ConeHead';
import DiamondblueHead from '../HeadFilesGenerated/DiamondblueHead';
import DiamondredHead from '../HeadFilesGenerated/DiamondredHead';
import DictionaryHead from '../HeadFilesGenerated/DictionaryHead';
import DinoHead from '../HeadFilesGenerated/DinoHead';
import EggsHead from '../HeadFilesGenerated/EggsHead';
import FactoryHead from '../HeadFilesGenerated/FactoryHead';
import FilmreelHead from '../HeadFilesGenerated/FilmreelHead';
import FilmstripHead from '../HeadFilesGenerated/FilmstripHead';
import FlamingoHead from '../HeadFilesGenerated/FlamingoHead';
import GhettoblasterHead from '../HeadFilesGenerated/GhettoblasterHead';
import GlassesHead from '../HeadFilesGenerated/GlassesHead';
import HandheldHead from '../HeadFilesGenerated/HandheldHead';
import HouseHead from '../HeadFilesGenerated/HouseHead';
import JellyfishHead from '../HeadFilesGenerated/JellyfishHead';
import LockHead from '../HeadFilesGenerated/LockHead';
import MagichatHead from '../HeadFilesGenerated/MagichatHead';
import MazeHead from '../HeadFilesGenerated/MazeHead';
import MirrorHead from '../HeadFilesGenerated/MirrorHead';
import MustardHead from '../HeadFilesGenerated/MustardHead';
import OrcaHead from '../HeadFilesGenerated/OrcaHead';
import PandaHead from '../HeadFilesGenerated/PandaHead';
import PillHead from '../HeadFilesGenerated/PillHead';
import PlaneHead from '../HeadFilesGenerated/PlaneHead';
import PopsodaHead from '../HeadFilesGenerated/PopsodaHead';
import RoseHead from '../HeadFilesGenerated/RoseHead';
import SaguaroHead from '../HeadFilesGenerated/SaguaroHead';
import SawHead from '../HeadFilesGenerated/SawHead';
import ToothHead from '../HeadFilesGenerated/ToothHead';
import TunacanHead from '../HeadFilesGenerated/TunacanHead';
import TuringHead from '../HeadFilesGenerated/TuringHead';
import UfoHead from '../HeadFilesGenerated/UfoHead';
import VentHead from '../HeadFilesGenerated/VentHead';
import VolcanoHead from '../HeadFilesGenerated/VolcanoHead';
import WallsafeHead from '../HeadFilesGenerated/WallsafeHead';

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
  // glassesTest.magFilter = glassesTest.minFilter = THREE.NearestFilter;

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
      <BagpipeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BananaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BankHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BdayHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CamcorderHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CarHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CashregisterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChiliHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ConeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DiamondblueHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DiamondredHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DictionaryHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DinoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <EggsHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FactoryHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FilmreelHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FilmstripHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FlamingoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GhettoblasterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GlassesHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HandheldHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HouseHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <JellyfishHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LockHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MagichatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MazeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MirrorHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MustardHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OrcaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PandaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PillHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PlaneHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PopsodaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RoseHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SaguaroHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SawHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ToothHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <TunacanHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <TuringHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <UfoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <VentHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <VolcanoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WallsafeHead
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
