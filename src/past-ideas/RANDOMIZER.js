import React, { useEffect } from 'react';
import data from '../data.json';

const RANDOMIZER = ({ setBody, setAccessory, setHead, setGlasses, setPants, setShoes }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
      setAccessory(data.accessory[Math.floor(Math.random() * data.accessory.length)].name);
      setHead(data.head[Math.floor(Math.random() * data.head.length)].name);
      setGlasses(data.glasses[Math.floor(Math.random() * data.glasses.length)].value);
      setPants(data.pants[Math.floor(Math.random() * data.pants.length)].name);
      setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
    }, 200);

    // setTimeout(() => {
    //   let huh = data.accessory.find(
    //     (element) => element.name === 'wireframe'
    //   );
    //   setAccessory(huh.name);
    // }, 6500);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default RANDOMIZER;
