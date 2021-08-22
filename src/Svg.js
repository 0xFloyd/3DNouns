import React, { Suspense, useMemo } from 'react';
// import { Box } from 'drei'
import * as THREE from 'three';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

// const DefaultModel = () => (
//   <Box args={[1, 1, 1]}>
//     <meshBasicMaterial attach="material" color="hotpink" />
//   </Box>
// )

const SvgShape = ({ shape, color, index }) => (
  <mesh>
    <meshLambertMaterial
      attach="material"
      color={color}
      side={THREE.DoubleSide}
      /*
        HACK: Offset SVG polygons by index
        The paths from SVGLoader Z-fight.
        This fix causes stacking problems with detailed SVGs.
      */

      polygonOffset
      polygonOffsetFactor={index * -0.1}
    />
    <shapeBufferGeometry attach="geometry" args={[shape]} />
  </mesh>
);

const SvgAsync = React.memo(({ sceneRef }) => {
  const { paths } = useLoader(SVGLoader, '/nouns-logo.svg');
  const shapes = useMemo(
    () =>
      paths.flatMap((path, index) =>
        path.toShapes(true).map((shape) => ({ index, shape, color: '#d63c5e' }))
      ),
    [paths]
  );
  return (
    <group
      ref={sceneRef}
      position={[0, 0.25, -10]}
      children={shapes.map((props, key) => (
        <SvgShape key={key} {...props} />
      ))}
      //   rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={[-0.01, 0.01, 0.01]}
    />
  );
});

const Svg = (props) => (
  <Suspense fallback={null} children={<SvgAsync {...props} />} />
);

export default Svg;
