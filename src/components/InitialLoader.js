import { useProgress } from '@react-three/drei';
import * as React from 'react';
import LoadingNounImage from '../assets/images/loadingNounImage.jpg';

// interface LoaderOptions {
//   containerStyles: any;
//   innerStyles: any;
//   barStyles: any;
//   dataStyles: any;
//   dataInterpolation: (p: number) => string;
//   initialState: (active: boolean) => boolean;
// }

// const defaultDataInterpolation = (p: number) => `Loading ${p.toFixed(2)}%`;
const defaultDataInterpolation = (p) => `Loading 3D Nouns ${p.toFixed()}%`;

const InitialLoader = React.memo(
  ({
    containerStyles,
    innerStyles,
    barStyles,
    dataStyles,
    dataInterpolation = defaultDataInterpolation,
    initialState = (active) => active,
  }) => {
    const { active, progress } = useProgress();
    const progressRef = React.useRef(0);
    const rafRef = React.useRef(0);
    const progressSpanRef = React.useRef(null);
    const [shown, setShown] = React.useState(initialState(true));

    React.useEffect(() => {
      let t;
      if (active !== shown) t = setTimeout(() => setShown(active), 300);
      return () => clearTimeout(t);
    }, [shown, active]);

    const updateProgress = React.useCallback(() => {
      if (!progressSpanRef.current) return;
      progressRef.current += (progress - progressRef.current) / 2;
      if (progressRef.current > 0.95 * progress || progress === 100) progressRef.current = progress;
      progressSpanRef.current.innerText = dataInterpolation(progressRef.current);
      if (progressRef.current < progress) rafRef.current = requestAnimationFrame(updateProgress);
    }, [dataInterpolation, progress]);

    React.useEffect(() => {
      updateProgress();
      return () => cancelAnimationFrame(rafRef.current);
    }, [updateProgress]);

    return shown ? (
      // <div
      //   style={{
      //     ...styles.container,
      //     opacity: active ? 1 : 0,
      //     ...containerStyles,
      //   }}>
      <div>
        <div style={{ ...styles.inner, ...innerStyles }}>
          <div
            style={{
              ...styles.bar,
              transform: `scaleX(${progress / 100})`,
              ...barStyles,
            }}
          ></div>
          <span
            ref={progressSpanRef}
            style={{ ...styles.data, ...dataStyles }}
          />
        </div>
      </div>
    ) : /* </div> */
    null;
  }
);

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 300ms ease',
    zIndex: 1000,
    textAlign: 'center',
    fontFamily: 'Londrina Solid',
  },
  inner: {
    height: 3,
    background: '#272727',
    textAlign: 'center',
    width: '100%',
  },
  bar: {
    width: '100%',
    background: 'white',
    transition: 'transform 200ms',
    transformOrigin: 'left center',
    height: '20px',
    maxWidth: '100%',
  },
  data: {
    display: 'inline-block',
    position: 'relative',
    fontVariantNumeric: 'tabular-nums',
    marginTop: '0.8em',
    color: '#f0f0f0',
    fontFamily: 'Londrina Solid',
    whiteSpace: 'nowrap',
    fontSize: '1rem',
    textAlign: 'center',
  },
};

export default InitialLoader;
