import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  bodyAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
  environmentAttributes,
} from 'attributes';
import ProgressLoader from './Loader';
import Cloud from './assets/FullBodyNouns/Cloud';
import Computer from './assets/FullBodyNouns/Computer';
import Crab from './assets/FullBodyNouns/Crab';
import Mixer from './assets/FullBodyNouns/Mixer';
import TestComputer from './assets/FullBodyNouns/TestComputer';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import {
  Html,
  RoundedBox,
  Stars,
  useGLTF,
  useProgress,
} from '@react-three/drei';
import Text from './Text';
import { FontLoader } from 'utils/FontLoader';
import { useSpring, animated, config } from '@react-spring/three';
import TestText from 'TestText';
import RandomNoun from 'RandomNoun';
import data from './data.json';
import { BodyMesh } from 'assets/FullBodyNouns/BodyMesh';

const lookAtPos = new THREE.Vector3(0, 5, 0);

const isDesktop = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    // return "tablet";
    return false;
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    // return "mobile";
    return false;
  }
  // return "desktop";
  return true;
};

const GenerateRandomNoun = ({
  z,
  preLoadedAccessoryTextures,
  preLoadedBodyTextures,
  preLoadedShoesTextures,
}) => {
  const ref = useRef();

  const [clicked, setClicked] = useState(false);

  const { nodes, materials, animations } = useGLTF('/FINALBODY.glb');

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [
    0,
    0,
    Math.max(z, -100),
  ]);

  const [data, setData] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });
  // useFrame(() => {
  //   groupRef.current.position.z = THREE.MathUtils.lerp(
  //     groupRef.current.position.z,
  //     clicked ? 1 : 0,
  //     0.1
  //   );
  // });

  useFrame(() => {
    // @ts-ignore
    if (ref && ref.current) {
      ref.current.rotation.set(0, (data.rY += 0.005), 0);
      ref.current.position.set(
        data.x * width,
        (data.y += 0.025),
        Math.max(z, -100)
      );

      if (data.y > height / 1) {
        setData({
          x: THREE.MathUtils.randFloatSpread(2),
          y: -height / 1,
          rX: Math.random() * Math.PI,
          rY: Math.random() * Math.PI,
          rZ: Math.random() * Math.PI,
        });
      }
    }
  });

  let accessoryTextureFound;
  let bodyTextureFound;
  let shoeTextureFound;

  useEffect(() => {
    accessoryTextureFound =
      preLoadedAccessoryTextures[
        Math.floor(Math.random() * preLoadedAccessoryTextures.length)
      ].value;
    bodyTextureFound =
      preLoadedBodyTextures[
        Math.floor(Math.random() * preLoadedBodyTextures.length)
      ].value;
    shoeTextureFound =
      preLoadedShoesTextures[
        Math.floor(Math.random() * preLoadedShoesTextures.length)
      ].value;
  }, []);

  // return (
  //   <group ref={ref}>
  //     <RandomNoun
  //       accessoryTexture={accessoryTextureFound}
  //       bodyTexture={bodyTextureFound}
  //       shoeTexture={shoeTextureFound}
  //     />
  //   </group>
  // );
  return <TestComputer ref={ref} />;
};

function Intro({ ready, setReady, clicked, setClicked }) {
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 1.05, 3 + state.mouse.y * 1.05, 14),
      0.5
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function NounsTitle() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.cos(clock.getElapsedTime()) * 0.05)
  );
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 5.5, 3]} children="3D" />
      <Text hAlign="center" position={[0, 2.5, 3]} children="NOUNS" />
    </group>
  );
}

// https://threejs.org/examples/?q=text#webgl_loader_ttf
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_ttf.html
const EnterButton = ({
  enterRef,
  setActive,
  active,
  setHover,
  hovered,
  store,
}) => {
  const font = useLoader(FontLoader, '/bold.blob');

  const { position } = useSpring({
    position: hovered ? [0, -0.25, 2] : [0, -0.5, 2],
  });

  const config = useMemo(
    () => ({
      font,
      size: 1,
      height: 0.5,
      curveSegments: 16,
      //   bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1.25,
      bevelOffset: 0,
      bevelSegments: 4,
    }),
    [font]
  );

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const meshProps = {};

  return (
    <animated.group
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={position}
      onClick={() => store.loadScene()}
    >
      {/* <mesh
        ref={enterRef}
        position={[0.15, -1.6, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        // scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      >
        <boxGeometry args={[5, 1.5, 1]} />
        <meshStandardMaterial />
      </mesh> */}
      <RoundedBox
        args={[5, 1.5, 1]}
        ref={enterRef}
        radius={0.5}
        smoothness={4}
        position={[0.15, -1.6, 0]}
      >
        <meshPhongMaterial attach="material" color="#f3f3f3" />
      </RoundedBox>
      <mesh
        ref={enterRef}
        position={[-2, -2, 0.1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        // scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      >
        <textGeometry args={['ENTER', config]} />
        <meshStandardMaterial attach="material" color={'#d63c5e'} />
      </mesh>
    </animated.group>
  );
};

const PreloadAssets = () => {
  const desktop = isDesktop();
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

  return (
    <>
      {Array.from({ length: desktop ? 150 : 50 }, (_, i) => (
        <GenerateRandomNoun
          key={i}
          z={-i}
          preLoadedAccessoryTextures={preLoadedAccessoryTextures}
          preLoadedBodyTextures={preLoadedBodyTextures}
          preLoadedShoesTextures={preLoadedShoesTextures}
        />
      ))}
    </>
  );
};

const SplashScreen = (store) => {
  const { progress } = useProgress();

  const enterRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      {/* {progress === 100 && (
        <div className="starting-screen-container">
          <button className="ready-button" onClick={() => store.loadScene()}>
            Enter
          </button>
        </div>
      )} */}
      <Canvas
        gl={{ alpha: false }}
        camera={{ near: 0.01, far: 500 }}
        onCreated={({ camera }) => {
          // do things here
          camera.position.x = 24;
          camera.position.y = 32;
          camera.position.z = 48;
          camera.lookAt(lookAtPos);
          camera.updateProjectionMatrix();
          // camera.fov =
        }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} intensity={0.1} /> */}
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Intro {...store} />

        <Suspense fallback={<ProgressLoader />}>
          <PreloadAssets />

          {progress === 100 && (
            <EnterButton
              enterRef={enterRef}
              setActive={setActive}
              active={active}
              setHover={setHover}
              hovered={hovered}
              store={store}
            />
          )}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          {/* <TestText /> */}
          <NounsTitle />
          {/* <EffectComposer>
            <DepthOfField
              target={[0, 0, 30]}
              focalLength={3}
              bokehScale={11}
              height={700}
            />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
    </>
  );
};

export default SplashScreen;
