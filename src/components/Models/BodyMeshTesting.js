import { useLoader } from '@react-three/fiber';
import React, { useEffect, useMemo, useState } from 'react';
// import transparentSmiley from '../outUVTransparentSmiley.png';
// import solidBlue from '../solidBlue.png';
import * as THREE from 'three';
// import "./ImageFadeMaterial";
import data from '../../data.json';

const BodyMeshTesting = React.memo(function ({ skeletonParts, bodyTexture, patternTexture }) {
  const [bodyTextureState, setBodyTextureState] = useState(null);

  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  let canvasTexture = new THREE.CanvasTexture(canvas);
  canvasTexture.flipY = false;
  // canvasTexture.minFilter = THREE.NearestFilter;
  // canvasTexture.magFilter = THREE.NearestFilter;
  // for hi res textures
  canvasTexture.minFilter = THREE.LinearMipMapNearestFilter;
  canvasTexture.magFilter = THREE.LinearMipMapNearestFilter;
  canvasTexture.encoding = THREE.sRGBEncoding;

  let toLoad = 2;

  let patternImg;
  let bodyImg;
  useEffect(() => {
    patternImg = new Image();
    patternImg.src = `/textures/accessories/${patternTexture}`;
    patternImg.crossOrigin = 'anonymous';
    patternImg.onload = function () {
      onLoaded();
    };

    bodyImg = new Image();
    bodyImg.src = `/textures/body/${bodyTexture}`;
    bodyImg.crossOrigin = 'anonymous';
    bodyImg.onload = function () {
      onLoaded();
    };

    function onLoaded() {
      toLoad--;
      if (ctx && toLoad === 0) {
        canvas.width = Math.max(bodyImg.width, patternImg.width);
        canvas.height = Math.max(bodyImg.height, patternImg.height);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(bodyImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(patternImg, 0, 0, canvas.width, canvas.height);
        canvasTexture.needsUpdate = true;
      }
    }

    setBodyTextureState({
      map: canvasTexture,
    });
  }, [bodyTexture, patternTexture]);

  return bodyTextureState ? (
    <meshStandardMaterial args={[bodyTextureState]} />
  ) : (
    <meshStandardMaterial color={'grey'} />
  );
});

export default BodyMeshTesting;
