import data from '../data.json';

export const lookupAnimation = (animationState) => {
  let animationValue = data.animations.find((animation) => animation.name === animationState);
  if (animationValue) {
    return animationValue.value;
  } else {
    return data.animations[1].value;
  }
};

export const lookupHead = (headProp) => {
  let head = data.head.find((headData) => headData.name === headProp);
  if (head) {
    return head.filePath;
  } else {
    return null;
  }
};
