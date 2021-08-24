import { Html, useProgress } from '@react-three/drei';

const ProgressLoader = () => {
  const { progress } = useProgress();
  return <Html center>{progress}% loaded</Html>;
};

export default ProgressLoader;
