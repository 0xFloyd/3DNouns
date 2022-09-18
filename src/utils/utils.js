import { gql } from '@apollo/client';
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

export const lookupGlasses = (glassesProp) => {
  let glasses = data.glasses.find((glassesData) => glassesData.name === glassesProp);
  if (glasses) {
    return glasses.value;
  } else {
    return null;
  }
};

export const saveArrayBuffer = (buffer, filename) => {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
};
export const saveString = (text, filename) => {
  save(new Blob([text], { type: 'text/plain' }), filename);
};
export const save = (blob, filename) => {
  let link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link); // Firefox workaround, see #6594
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  // URL.revokeObjectURL( url ); breaks Firefox...
};

export const saveScreenshot = (strData, filename) => {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link); //remove the link when done
  }
};

export const truncateString = (str) => {
  if (str.length > 15) {
    return str.slice(0, 16) + '...';
  } else {
    return str;
  }
};

export const throttleClicks = (setDisabledButtonState) => {
  // throttle random button clicks
  setDisabledButtonState(true);
  setTimeout(() => {
    setDisabledButtonState(false);
  }, 350);
};

export const rotateOptions = [
  { name: 'Off', value: 'false' },
  { name: 'On', value: 'true' },
];

export const hideModals = (setShowAboutModal, setShowMintModal) => {
  setShowAboutModal(false);
  setShowMintModal(false);
};

export const GET_NOUNS = gql`
  {
    nouns(first: 1000) {
      id
      seed {
        background
        body
        accessory
        head
        glasses
      }
      owner {
        id
      }
    }
  }
`;
