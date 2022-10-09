import { useLoader } from '@react-three/fiber';
import React, { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

const BodyMesh = React.memo(function ({ skeletonParts, bodyTexture, patternTexture }) {
  const patternImg = new Image();
  patternImg.src = `/textures/accessories/${patternTexture}`;
  patternImg.crossOrigin = 'anonymous';
  patternImg.onload = function () {
    onLoaded();
  };

  const bodyImg = new Image();
  bodyImg.src = `/textures/body/${bodyTexture}`;
  bodyImg.crossOrigin = 'anonymous';
  bodyImg.onload = function () {
    onLoaded();
  };

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const canvasTexture = new THREE.CanvasTexture(canvas);
  canvasTexture.flipY = false;
  // canvasTexture.minFilter = THREE.NearestFilter;
  // canvasTexture.magFilter = THREE.NearestFilter;
  // for hi res textures
  canvasTexture.minFilter = THREE.LinearMipMapNearestFilter;
  canvasTexture.magFilter = THREE.LinearMipMapNearestFilter;
  canvasTexture.encoding = THREE.sRGBEncoding;

  let toLoad = 2;
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

  const params = {
    map: canvasTexture,
  };

  return <meshStandardMaterial args={[params]} />;
});

export default BodyMesh;
