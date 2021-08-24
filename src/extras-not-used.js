extend({ Water });

const dummy = new THREE.Vector3();
const lookAtPos = new THREE.Vector3(0, 2, 0);

const Ocean = () => {
  const ref = useRef();

  // this is the renderer
  const gl = useThree((state) => state.gl);

  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  // memoize -->  storing the results of expensive function calls and returning the cached result when the same inputs occur again
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += 0.005)
  );

  // 2nd argument is config which is the material
  return (
    <water
      ref={ref}
      args={[geom, config]}
      position={[0, -1, 0]}
      rotation-x={-Math.PI / 2}
    />
  );
};

function Thing() {
  const ref = useRef();
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  const [zoom, setZoom] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setZoom((zoom) => !zoom);
  //   }, 2000);
  // }, [zoom]);

  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 10 : 42,
      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10),
      step
    );

    lookAtPos.x = Math.sin(state.clock.getElapsedTime() * 2);

    state.camera.lookAt(lookAtPos);
    state.camera.updateProjectionMatrix();
  });

  return <mesh></mesh>;
}

function MyCamera(props) {
  // This one makes the camera move in and out
  // useFrame(({ clock, camera }) => {
  //   camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30;
  // });
  // return null;
  const { gl, scene, camera, size } = useThree();
  useEffect(() => {
    props.setCurrentCameraPosition(camera.position);
    console.log(camera.position);
    // camera.position.x = 0;
    // camera.position.y = 0.5;
    // camera.position.z = 0.5;

    // // camera.lookAt(lookAtPos);
    // camera.near = 0.1;
    // camera.far = 100;
  });
  useFrame((state) => {
    props.setCurrentCameraPosition(camera.position);
  });

  return null;
}

// function Model(props) {
//   const [meshRef, reflectorProps, passes] = useReflector();
//   return (
//     <>
//       <Circle
//         ref={meshRef}
//         args={[12.75, 36, 36]}
//         rotation-x={-Math.PI / 2}
//         position={[0, 0, 0]}
//       >
//         <reflectorMaterial
//           transparent
//           opacity={0.5}
//           color="black"
//           metalness={0.95}
//           roughness={1}
//           {...reflectorProps}
//         />
//       </Circle>
//     </>
//   );
// }


const Ground = () => {
  const texture_1 = useLoader(TextureLoader, '/grasslight-big.jpg');
  texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
  texture_1.repeat.set(2, 2);
  texture_1.anisotropy = 16;
  texture_1.encoding = THREE.sRGBEncoding;

  return (
    <mesh receiveShadow position={[0, 0.01, 0]} rotation-x={-Math.PI / 2}>
      <planeBufferGeometry args={[5, 5]} />
      <meshStandardMaterial map={texture_1} attach="material" />
    </mesh>
  );
};

 {/* <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        /> */}
        {/* <spotLight
          position={[0, 5, 1]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        /> */}
        {/* <gridHelper
          args={[50, 20, new THREE.Color(0xf316bd), new THREE.Color(0xf316bd)]}
          position={[0, -5, 0]}
        /> */}
        {/* <mesh receiveShadow position={[0, -5.5, 0]}>
          <boxBufferGeometry args={[30, 1, 30]} />
          <meshStandardMaterial color={new THREE.Color(0x000000)} />
        </mesh> */}
        {/* <Thing /> */}