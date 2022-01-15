import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

const TraitSelector = ({ data, selectState, setSelectState }) => {
  return (
    <div className="inline-option-row">
      <FiRefreshCw />
      <div className="inline-select-wrap">
        <label>Label</label>
        <select className="trait-select">
          {data.animations.map((animationObj) => (
            <option key={animationObj.value} value={animationObj.name}>
              {animationObj.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TraitSelector;
