import { Html, useProgress } from "@react-three/drei";
import { ProgressBar } from "react-bootstrap";

const ProgressLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, .8)",
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2147483647,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            padding: "10px",
          }}
        >
          <h2>Loading 3D Nouns...</h2>
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
