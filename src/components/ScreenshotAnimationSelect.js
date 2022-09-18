import React, { useState } from 'react';
import '../styles/ScreenshotAnimationSelect.css';
import data from '../data.json';
import { animationName } from './Menu/AnimationSelect';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';

const ScreenshotAnimationSelect = ({ animationValue, setAnimationState, setAnimationValue }) => {
  return (
    <div className="animation-select-wrap">
      <select
        value={animationValue}
        onChange={(e) => {
          if (e.target.value === 'none') {
            setAnimationState(false);
            setAnimationValue(e.target.value);
          } else {
            setAnimationState(true);
            setAnimationValue(e.target.value);
          }
        }}
        className="animation-name"
      >
        {data.animations.map((animationObj) => (
          <option
            key={animationObj.value}
            value={animationObj.name}
          >
            {animationName(animationObj.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScreenshotAnimationSelect;

// const ScreenshotAnimationSelect = ({
//   animationValue,
//   setAnimationState,
//   setAnimationValue,
// }) => {
//   // remap animations to index values

//   const [currentAnimationIndex, setCurrentAnimationIndex] = useState(
//     findIndex(animationValue)
//   );
//   const [disabledButtonState, setDisabledButtonState] = useState(false);

//   const incrementAnimation = () => {
//     if (currentAnimationIndex < data.animations.length - 1) {
//       setCurrentAnimationIndex(currentAnimationIndex + 1);
//       setAnimationValue(findAnimationName(currentAnimationIndex + 1));
//       setAnimationState(true);
//     } else {
//       setCurrentAnimationIndex(0);
//       setAnimationValue('none');
//       setAnimationState(false);
//     }
//   };

//   const decrementAnimation = () => {
//     if (currentAnimationIndex > 0) {
//       setCurrentAnimationIndex(currentAnimationIndex - 1);
//       setAnimationValue(findAnimationName(currentAnimationIndex - 1));
//     } else {
//       setCurrentAnimationIndex(data.animations.length - 1);
//       setAnimationValue(findIndex(data.animations.length - 1));
//     }
//   };

//   const throttleClicks = () => {
//     // throttle random button clicks
//     setDisabledButtonState(true);
//     setTimeout(() => {
//       setDisabledButtonState(false);
//     }, 500);
//   };

//   return (
//     <>
//       <div className="animation-container">
//         <button
//           className="animation-next-button"
//           onClick={() => {
//             decrementAnimation();
//             throttleClicks();
//           }}
//           disabled={disabledButtonState}
//         >
//           <RiArrowLeftSFill size={30} />
//         </button>
//         <span className="animation-name">{`${animationName(
//           animationValue
//         )} ${currentAnimationIndex}`}</span>
//         <button
//           className="animation-next-button"
//           onClick={() => {
//             incrementAnimation();
//             throttleClicks();
//           }}
//           disabled={disabledButtonState}
//         >
//           <RiArrowRightSFill
//             size={30}
//             style={{ margin: '0px', padding: '0px' }}
//           />
//         </button>
//       </div>
//     </>
//   );
// };

// export default ScreenshotAnimationSelect;

const findIndex = (animationValue) => {
  let foundAnimation = data.animations.find((obj, index) => (obj.name = animationValue));
  return foundAnimation.index;
};

const findAnimationName = (animationIndex) => {
  let foundAnimation = data.animations.find((obj, index) => (obj.index = animationIndex));
  return foundAnimation.name;
};
