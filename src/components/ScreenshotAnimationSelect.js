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
          <option key={animationObj.value} value={animationObj.name}>
            {animationName(animationObj.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScreenshotAnimationSelect;
