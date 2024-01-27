import React from "react";
import data from "../../data.json";
import ClosedLockIcon from "../../assets/images/lockIconClosed.svg";
import OpenLockIcon from "../../assets/images/lockIconOpen.svg";

const MenuOption = ({
  value,
  setValue,
  category,
  lockedTraits,
  setLockedTraits,
  disabled,
}) => {
  return (
    <div className="inline-option-row">
      <span />

      <div className="inline-select-wrap">
        <label className="trait-label">{category}</label>
        <select
          value={value}
          className="trait-select border-select"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {data[category].map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setLockedTraits({
              ...lockedTraits,
              [category]: !lockedTraits[category],
            });
          }}
          disabled={disabled}
          className="select-shuffle-icon-button"
        >
          {lockedTraits[category] ? (
            <img
              src={ClosedLockIcon}
              alt="lock-icon"
              className="lock-noun-icon"
            />
          ) : (
            <img
              src={OpenLockIcon}
              alt="lock-icon"
              className="lock-noun-icon"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MenuOption;
