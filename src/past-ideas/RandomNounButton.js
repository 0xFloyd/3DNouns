import React from 'react';

const RandomNounButton = ({ generateRandomNoun }) => {
  return (
    <button className="noun-button" onClick={() => generateRandomNoun()}>
      Random Noun
    </button>
  );
};

export default RandomNounButton;
