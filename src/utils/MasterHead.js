import { useGLTF, useProgress, useTexture } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import HeadTest119BonsaiHead from '../assets/Head/HeadTest119BonsaiHead';

// import data from 'data.json';
// import AardvarkHead from '../HeadFilesGenerated/AardvarkHead';
// import AbstractHead from '../HeadFilesGenerated/AbstractHead';
// import ApeHead from '../HeadFilesGenerated/ApeHead';
// import BagHead from '../HeadFilesGenerated/BagHead';
// import BagpipeHead from '../HeadFilesGenerated/BagpipeHead';
// import BananaHead from '../HeadFilesGenerated/BananaHead';
// import BankHead from '../HeadFilesGenerated/BankHead';
// import BaseballHead from '../HeadFilesGenerated/BaseballHead';
// import BasketballHead from '../HeadFilesGenerated/BasketballHead';
// import BatHead from '../HeadFilesGenerated/BatHead';
// import BearHead from '../HeadFilesGenerated/BearHead';
// import BeerHead from '../HeadFilesGenerated/BeerHead';
// import BeetHead from '../HeadFilesGenerated/BeetHead';
// import BellHead from '../HeadFilesGenerated/BellHead';
// import BigfootHead from '../HeadFilesGenerated/BigfootHead';
// import BigfootyetiHead from '../HeadFilesGenerated/BigfootyetiHead';
// import BlackholeHead from '../HeadFilesGenerated/BlackholeHead';
// import BlueberryHead from '../HeadFilesGenerated/BlueberryHead';
// import BombHead from '../HeadFilesGenerated/BombHead';
// import BonsaiHead from '../HeadFilesGenerated/BonsaiHead';
// import BoomboxHead from '../HeadFilesGenerated/BoomboxHead';
// import BootHead from '../HeadFilesGenerated/BootHead';
// import BoxHead from '../HeadFilesGenerated/BoxHead';
// import BoxinggloveHead from '../HeadFilesGenerated/BoxinggloveHead';
// import BrainHead from '../HeadFilesGenerated/BrainHead';
// import BubblegumHead from '../HeadFilesGenerated/BubblegumHead';
// import BubblespeechHead from '../HeadFilesGenerated/BubblespeechHead';
// import BurgerdollarmenuHead from '../HeadFilesGenerated/BurgerdollarmenuHead';
// import CakeHead from '../HeadFilesGenerated/CakeHead';
// import CalculatorHead from '../HeadFilesGenerated/CalculatorHead';
// import CalendarHead from '../HeadFilesGenerated/CalendarHead';
// import CamcorderHead from '../HeadFilesGenerated/CamcorderHead';
// import CannedhamHead from '../HeadFilesGenerated/CannedhamHead';
// import CarHead from '../HeadFilesGenerated/CarHead';
// import CashregisterHead from '../HeadFilesGenerated/CashregisterHead';
// import CassetteHead from '../HeadFilesGenerated/CassetteHead';
// import CatHead from '../HeadFilesGenerated/CatHead';
// import CdHead from '../HeadFilesGenerated/CdHead';
// import ChainHead from '../HeadFilesGenerated/ChainHead';
// import ChainsawHead from '../HeadFilesGenerated/ChainsawHead';
// import ChameleonHead from '../HeadFilesGenerated/ChameleonHead';
// import ChartbarsHead from '../HeadFilesGenerated/ChartbarsHead';
// import CheeseHead from '../HeadFilesGenerated/CheeseHead';
// import ChefhatHead from '../HeadFilesGenerated/ChefhatHead';
// import CherryHead from '../HeadFilesGenerated/CherryHead';
// import ChickenHead from '../HeadFilesGenerated/ChickenHead';
// import ChiliHead from '../HeadFilesGenerated/ChiliHead';
// import ChipboardHead from '../HeadFilesGenerated/ChipboardHead';
// import ChipsHead from '../HeadFilesGenerated/ChipsHead';
// import ChocolateHead from '../HeadFilesGenerated/ChocolateHead';
// import CloudHead from '../HeadFilesGenerated/CloudHead';
// import CloverHead from '../HeadFilesGenerated/CloverHead';
// import ClutchHead from '../HeadFilesGenerated/ClutchHead';
// import CoffeebeanHead from '../HeadFilesGenerated/CoffeebeanHead';
// import ConeHead from '../HeadFilesGenerated/ConeHead';
// import ConsolehandheldHead from '../HeadFilesGenerated/ConsolehandheldHead';
// import CookieHead from '../HeadFilesGenerated/CookieHead';
// import CordlessphoneHead from '../HeadFilesGenerated/CordlessphoneHead';
// import CottonballHead from '../HeadFilesGenerated/CottonballHead';
// import CowHead from '../HeadFilesGenerated/CowHead';
// import CrabHead from '../HeadFilesGenerated/CrabHead';
// import CraneHead from '../HeadFilesGenerated/CraneHead';
// import CrochatHead from '../HeadFilesGenerated/CrochatHead';
// import CrownHead from '../HeadFilesGenerated/CrownHead';
// import CrtbsodHead from '../HeadFilesGenerated/CrtbsodHead';
// import CrystalballHead from '../HeadFilesGenerated/CrystalballHead';
// import DiamondblueHead from '../HeadFilesGenerated/DiamondblueHead';
// import DiamondredHead from '../HeadFilesGenerated/DiamondredHead';
// import DictionaryHead from '../HeadFilesGenerated/DictionaryHead';
// import DinoHead from '../HeadFilesGenerated/DinoHead';
// import DnaHead from '../HeadFilesGenerated/DnaHead';
// import DogHead from '../HeadFilesGenerated/DogHead';
// import DoughnutHead from '../HeadFilesGenerated/DoughnutHead';
// import DrillHead from '../HeadFilesGenerated/DrillHead';
// import DuckHead from '../HeadFilesGenerated/DuckHead';
// import DuckyHead from '../HeadFilesGenerated/DuckyHead';
// import EarthHead from '../HeadFilesGenerated/EarthHead';
// import EggsHead from '../HeadFilesGenerated/EggsHead';
// import FabergeHead from '../HeadFilesGenerated/FabergeHead';
// import FactoryHead from '../HeadFilesGenerated/FactoryHead';
// import FanHead from '../HeadFilesGenerated/FanHead';
// import FenceHead from '../HeadFilesGenerated/FenceHead';
// import Film35MmHead from '../HeadFilesGenerated/Film35MmHead';
// import FilmstripHead from '../HeadFilesGenerated/FilmstripHead';
// import FirHead from '../HeadFilesGenerated/FirHead';
// import FirehydrantHead from '../HeadFilesGenerated/FirehydrantHead';
// import FlamingoHead from '../HeadFilesGenerated/FlamingoHead';
// import FlowerHead from '../HeadFilesGenerated/FlowerHead';
// import FoxHead from '../HeadFilesGenerated/FoxHead';
// import FrogHead from '../HeadFilesGenerated/FrogHead';
// import GarlicHead from '../HeadFilesGenerated/GarlicHead';
// import GavelHead from '../HeadFilesGenerated/GavelHead';
// import GhostHead from '../HeadFilesGenerated/GhostHead';
// import GlassesHead from '../HeadFilesGenerated/GlassesHead';
// import GnomeHead from '../HeadFilesGenerated/GnomeHead';
// import GoatHead from '../HeadFilesGenerated/GoatHead';
// import GoldcoinHead from '../HeadFilesGenerated/GoldcoinHead';
// import GoldfishHead from '../HeadFilesGenerated/GoldfishHead';
// import GrouperHead from '../HeadFilesGenerated/GrouperHead';
// import HairHead from '../HeadFilesGenerated/HairHead';
// import HardhatHead from '../HeadFilesGenerated/HardhatHead';
// import HeartHead from '../HeadFilesGenerated/HeartHead';
// import HelicopterHead from '../HeadFilesGenerated/HelicopterHead';
// import HighheelsHead from '../HeadFilesGenerated/HighheelsHead';
// import HockeypuckHead from '../HeadFilesGenerated/HockeypuckHead';
// import HorsedeepfriedHead from '../HeadFilesGenerated/HorsedeepfriedHead';
// import HotdogHead from '../HeadFilesGenerated/HotdogHead';
// import HouseHead from '../HeadFilesGenerated/HouseHead';
// import IcepopHead from '../HeadFilesGenerated/IcepopHead';
// import IglooHead from '../HeadFilesGenerated/IglooHead';
// import IslandHead from '../HeadFilesGenerated/IslandHead';
// import JellyfishHead from '../HeadFilesGenerated/JellyfishHead';
// import JupiterHead from '../HeadFilesGenerated/JupiterHead';
// import KangarooHead from '../HeadFilesGenerated/KangarooHead';
// import KetchupHead from '../HeadFilesGenerated/KetchupHead';
// import LaptopHead from '../HeadFilesGenerated/LaptopHead';
// import LightningboltHead from '../HeadFilesGenerated/LightningboltHead';
// import LintHead from '../HeadFilesGenerated/LintHead';
// import LipsHead from '../HeadFilesGenerated/LipsHead';
// import LipstickHead from '../HeadFilesGenerated/LipstickHead';
// import LockHead from '../HeadFilesGenerated/LockHead';
// import MacaroniHead from '../HeadFilesGenerated/MacaroniHead';
// import MailboxHead from '../HeadFilesGenerated/MailboxHead';
// import MazeHead from '../HeadFilesGenerated/MazeHead';
// import MicrowaveHead from '../HeadFilesGenerated/MicrowaveHead';
// import MilkHead from '../HeadFilesGenerated/MilkHead';
// import MirrorHead from '../HeadFilesGenerated/MirrorHead';
// import MixerHead from '../HeadFilesGenerated/MixerHead';
// import MoonHead from '../HeadFilesGenerated/MoonHead';
// import MooseHead from '../HeadFilesGenerated/MooseHead';
// import MosquitoHead from '../HeadFilesGenerated/MosquitoHead';
// import MountainHead from '../HeadFilesGenerated/MountainHead';
// import MouseHead from '../HeadFilesGenerated/MouseHead';
// import MugHead from '../HeadFilesGenerated/MugHead';
// import MushroomHead from '../HeadFilesGenerated/MushroomHead';
// import MustardHead from '../HeadFilesGenerated/MustardHead';
// import NigiriHead from '../HeadFilesGenerated/NigiriHead';
// import NoodlesHead from '../HeadFilesGenerated/NoodlesHead';
// import OnionHead from '../HeadFilesGenerated/OnionHead';
// import OrangutanHead from '../HeadFilesGenerated/OrangutanHead';
// import OrcaHead from '../HeadFilesGenerated/OrcaHead';
// import OtterHead from '../HeadFilesGenerated/OtterHead';
// import OutletHead from '../HeadFilesGenerated/OutletHead';
// import OwlHead from '../HeadFilesGenerated/OwlHead';
// import OysterHead from '../HeadFilesGenerated/OysterHead';
// import PaintbrushHead from '../HeadFilesGenerated/PaintbrushHead';
// import PandaHead from '../HeadFilesGenerated/PandaHead';
// import PaperclipHead from '../HeadFilesGenerated/PaperclipHead';
// import PeanutHead from '../HeadFilesGenerated/PeanutHead';
// import PencilHead from '../HeadFilesGenerated/PencilHead';
// import PeyoteHead from '../HeadFilesGenerated/PeyoteHead';
// import PianoHead from '../HeadFilesGenerated/PianoHead';
// import PickleHead from '../HeadFilesGenerated/PickleHead';
// import PieHead from '../HeadFilesGenerated/PieHead';
// import PiggybankHead from '../HeadFilesGenerated/PiggybankHead';
// import PillHead from '../HeadFilesGenerated/PillHead';
// import PillowHead from '../HeadFilesGenerated/PillowHead';
// import PineappleHead from '../HeadFilesGenerated/PineappleHead';
// import PipeHead from '../HeadFilesGenerated/PipeHead';
// import PirateshipHead from '../HeadFilesGenerated/PirateshipHead';
// import PizzaHead from '../HeadFilesGenerated/PizzaHead';
// import PlaneHead from '../HeadFilesGenerated/PlaneHead';
// import PopHead from '../HeadFilesGenerated/PopHead';
// import PorkbaoHead from '../HeadFilesGenerated/PorkbaoHead';
// import PotatoHead from '../HeadFilesGenerated/PotatoHead';
// import PufferfishHead from '../HeadFilesGenerated/PufferfishHead';
// import PumpkinHead from '../HeadFilesGenerated/PumpkinHead';
// import PyramidHead from '../HeadFilesGenerated/PyramidHead';
// import QueencrownHead from '../HeadFilesGenerated/QueencrownHead';
// import RabbitHead from '../HeadFilesGenerated/RabbitHead';
// import RainbowHead from '../HeadFilesGenerated/RainbowHead';
// import RangefinderHead from '../HeadFilesGenerated/RangefinderHead';
// import RavenHead from '../HeadFilesGenerated/RavenHead';
// import RetainerHead from '../HeadFilesGenerated/RetainerHead';
// import RgbHead from '../HeadFilesGenerated/RgbHead';
// import RingHead from '../HeadFilesGenerated/RingHead';
// import RoadHead from '../HeadFilesGenerated/RoadHead';
// import RobotHead from '../HeadFilesGenerated/RobotHead';
// import RockHead from '../HeadFilesGenerated/RockHead';
// import RoseHead from '../HeadFilesGenerated/RoseHead';
// import RulertriangularHead from '../HeadFilesGenerated/RulertriangularHead';
// import SaguaroHead from '../HeadFilesGenerated/SaguaroHead';
// import SailboatHead from '../HeadFilesGenerated/SailboatHead';
// import SandwichHead from '../HeadFilesGenerated/SandwichHead';
// import SaturnHead from '../HeadFilesGenerated/SaturnHead';
// import SawHead from '../HeadFilesGenerated/SawHead';
// import ScorpionHead from '../HeadFilesGenerated/ScorpionHead';
// import SharkHead from '../HeadFilesGenerated/SharkHead';
// import ShowerHead from '../HeadFilesGenerated/ShowerHead';
// import SkateHead from '../HeadFilesGenerated/SkateHead';
// import SkeletonhatHead from '../HeadFilesGenerated/SkeletonhatHead';
// import SkiliftHead from '../HeadFilesGenerated/SkiliftHead';
// import SmileHead from '../HeadFilesGenerated/SmileHead';
// import SnowglobeHead from '../HeadFilesGenerated/SnowglobeHead';
// import SnowmobileHead from '../HeadFilesGenerated/SnowmobileHead';
// import SpaghettiHead from '../HeadFilesGenerated/SpaghettiHead';
// import SpongeHead from '../HeadFilesGenerated/SpongeHead';
// import SquidHead from '../HeadFilesGenerated/SquidHead';
// import StaplerHead from '../HeadFilesGenerated/StaplerHead';
// import StarsparkleHead from '../HeadFilesGenerated/StarsparkleHead';
// import SteakHead from '../HeadFilesGenerated/SteakHead';
// import SunsetHead from '../HeadFilesGenerated/SunsetHead';
// import TacoHead from '../HeadFilesGenerated/TacoHead';
// import TaxiHead from '../HeadFilesGenerated/TaxiHead';
// import ThumbsupHead from '../HeadFilesGenerated/ThumbsupHead';
// import ToasterHead from '../HeadFilesGenerated/ToasterHead';
// import ToiletpaperHead from '../HeadFilesGenerated/ToiletpaperHead';
// import ToothHead from '../HeadFilesGenerated/ToothHead';
// import ToothbrushHead from '../HeadFilesGenerated/ToothbrushHead';
// import TornadoHead from '../HeadFilesGenerated/TornadoHead';
// import TrashcanHead from '../HeadFilesGenerated/TrashcanHead';
// import TuringHead from '../HeadFilesGenerated/TuringHead';
// import UfoHead from '../HeadFilesGenerated/UfoHead';
// import UndeadHead from '../HeadFilesGenerated/UndeadHead';
// import UnicornHead from '../HeadFilesGenerated/UnicornHead';
// import VentHead from '../HeadFilesGenerated/VentHead';
// import VoidHead from '../HeadFilesGenerated/VoidHead';
// import VolcanoHead from '../HeadFilesGenerated/VolcanoHead';
// import VolleyballHead from '../HeadFilesGenerated/VolleyballHead';
// import WallHead from '../HeadFilesGenerated/WallHead';
// import WalletHead from '../HeadFilesGenerated/WalletHead';
// import WallsafeHead from '../HeadFilesGenerated/WallsafeHead';
// import WashingmachineHead from '../HeadFilesGenerated/WashingmachineHead';
// import WatchHead from '../HeadFilesGenerated/WatchHead';
// import WatermelonHead from '../HeadFilesGenerated/WatermelonHead';
// import WaveHead from '../HeadFilesGenerated/WaveHead';
// import WeedHead from '../HeadFilesGenerated/WeedHead';
// import WeightHead from '../HeadFilesGenerated/WeightHead';
// import WerewolfHead from '../HeadFilesGenerated/WerewolfHead';
// import WhaleHead from '../HeadFilesGenerated/WhaleHead';
// import WhalealiveHead from '../HeadFilesGenerated/WhalealiveHead';
// import WineHead from '../HeadFilesGenerated/WineHead';
// import WizardhatHead from '../HeadFilesGenerated/WizardhatHead';
// import ZebraHead from '../HeadFilesGenerated/ZebraHead';
// import Head4156 from '../HeadFilesGenerated/Head4156';
import TestHead from './TestHead';

const MasterHead = ({ headProp, glassesProp, animationState, animationValue }) => {
  const { gl } = useThree();
  const MasterHead = useGLTF('/pipeline1110/headAnim.glb');

  const [allheadsState, setAllHeadsState] = useState([]);

  // const allHeadComponents = headComponents.map((obj, index) => {
  //   const Component = obj.value;
  //   return (
  //     <Component
  //       key={index}
  //       headProp={headProp}
  //       glassesProp={glassesTest}
  //       animationState={animationState}
  //       animationValue={animationValue}
  //       masterHeadModel={MasterHead}
  //     />
  //   );
  // });

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
      {/* <HeadTest119BonsaiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      /> */}
      {/* {MasterHead.nodes && allHeadComponents} */}
      {/* <ExportHead/> */}

      <TestHead headProp={headProp} glassesProp={glassesProp} animationState={animationState} animationValue={animationValue} masterHeadModel={MasterHead} />

      {/* <AardvarkHead
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
      <ApeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BagHead
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
      <BaseballHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BasketballHead
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
      <BearHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BeerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BeetHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BellHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BigfootHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BigfootyetiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BlackholeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BlueberryHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BombHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BonsaiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BoomboxHead
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
      <BoxHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BoxinggloveHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BrainHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BubblegumHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BubblespeechHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <BurgerdollarmenuHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CakeHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CalculatorHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CalendarHead
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
      <CannedhamHead
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
      <ChainHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChainsawHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChameleonHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChartbarsHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CheeseHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChefhatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CherryHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChickenHead
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
      <ChipboardHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChipsHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ChocolateHead
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
      <CloverHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ClutchHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CoffeebeanHead
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
      <ConsolehandheldHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CookieHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CordlessphoneHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CottonballHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CowHead
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
      <CraneHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CrochatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CrownHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CrtbsodHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <CrystalballHead
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
      <DnaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DogHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DoughnutHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DrillHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <DuckHead
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
      <EarthHead
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
      <FabergeHead
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
      <FanHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FenceHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <Film35MmHead
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
      <FirHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <FirehydrantHead
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
      <FlowerHead
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
      <FrogHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GarlicHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GavelHead
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
      <GlassesHead
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
      <GoatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GoldcoinHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <GoldfishHead
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
      <HairHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HardhatHead
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
      <HelicopterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HighheelsHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HockeypuckHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <HorsedeepfriedHead
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
      <HouseHead
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
      <IglooHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <IslandHead
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
      <JupiterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <KangarooHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <KetchupHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LaptopHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LightningboltHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LintHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LipsHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <LipstickHead
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
      <MacaroniHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MailboxHead
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
      <MicrowaveHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MilkHead
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
      <MixerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MoonHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MooseHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MosquitoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MountainHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MouseHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <MugHead
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
      <MustardHead
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
      <NoodlesHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OnionHead
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
      <OrcaHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OtterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <OutletHead
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
      <OysterHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PaintbrushHead
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
      <PaperclipHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PeanutHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PencilHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PeyoteHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PianoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PickleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PieHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PiggybankHead
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
      <PillowHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PineappleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PipeHead
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
      <PizzaHead
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
      <PopHead
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
      <PotatoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PufferfishHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PumpkinHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <PyramidHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <QueencrownHead
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
      <RainbowHead
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
      <RavenHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RetainerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RgbHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RingHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <RoadHead
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
      <RockHead
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
      <RulertriangularHead
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
      <SailboatHead
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
      <SaturnHead
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
      <ScorpionHead
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
      <ShowerHead
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
      <SkeletonhatHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SkiliftHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SmileHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SnowglobeHead
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
      <SpaghettiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SpongeHead
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
      <StaplerHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <StarsparkleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <SteakHead
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
      <TacoHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <TaxiHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <ThumbsupHead
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
      <ToiletpaperHead
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
      <ToothbrushHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <TornadoHead
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
      <UndeadHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <UnicornHead
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
      <VoidHead
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
      <VolleyballHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WallHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WalletHead
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
      <WashingmachineHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WatchHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WatermelonHead
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
      <WeedHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WeightHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WerewolfHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WhaleHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WhalealiveHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <WineHead
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
      <ZebraHead
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      />
      <Head4156
        headProp={headProp}
        glassesProp={glassesTest}
        animationState={animationState}
        animationValue={animationValue}
        masterHeadModel={MasterHead}
      /> */}
    </>
  );
};

export default React.memo(MasterHead);

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
  /* {data.head.map((headData, index) => (
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
        data.head.map((headData, index) => (
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
  
    // const HeadComponents = data.head.map((headData, index) => {
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
