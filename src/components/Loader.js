import { Html, useProgress } from "@react-three/drei";
import { ProgressBar } from "react-bootstrap";
import "../styles/ProgressLoader.css";

const ProgressLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="initial-progress-loader">
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
