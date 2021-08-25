import { Html, useProgress } from '@react-three/drei';
import { ProgressBar } from 'react-bootstrap';

const ProgressLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, .8)',
          height: '100%',
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 2147483647,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '640px',
            height: 'auto',
            margin: '0 auto',
            padding: '10px',
          }}
        >
          <ProgressBar
            now={progress && Math.round(progress)}
            label={`${progress && Math.round(progress)}%`}
          />
        </div>
      </div>
    </Html>
  );
};

export default ProgressLoader;
