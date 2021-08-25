extend({ Water });

const dummy = new THREE.Vector3();
const lookAtPos = new THREE.Vector3(0, 2, 0);

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

{
  /* <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        /> */
}
{
  /* <spotLight
          position={[0, 5, 1]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        /> */
}
{
  /* <gridHelper
          args={[50, 20, new THREE.Color(0xf316bd), new THREE.Color(0xf316bd)]}
          position={[0, -5, 0]}
        /> */
}
{
  /* <mesh receiveShadow position={[0, -5.5, 0]}>
          <boxBufferGeometry args={[30, 1, 30]} />
          <meshStandardMaterial color={new THREE.Color(0x000000)} />
        </mesh> */
}
{
  /* <Thing /> */
}
