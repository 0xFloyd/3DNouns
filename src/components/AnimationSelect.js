import React from 'react';
import data from '../data.json';

const AnimationSelect = ({
  animationValue,
  setAnimationState,
  setAnimationValue,
}) => {
  return (
    <div className="inline-option-row">
      <span />
      <div className="inline-select-wrap">
        <label className="trait-label">Animation</label>
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
          className="trait-select"
        >
          {data.animations.map((animationObj) => (
            <option key={animationObj.value} value={animationObj.name}>
              {animationName(animationObj.name)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AnimationSelect;

export const animationName = (name) => {
  switch (name) {
    case 'none':
      return 'None';
    case 'walk':
      return 'Walk';
    case 'run':
      return 'Run';

    case 'dance1':
      return 'Dance 1';

    case 'dance2':
      return 'Dance 2';

    case 'idle':
      return 'Idle';

    case 'jump':
      return 'Jump';
    case 'tpose':
      return 'T-Pose';

    default:
      break;
  }
};
