import React, { useEffect } from 'react';
import data from './data.json';

const RANDOMIZER = ({ setBody, setAccessory }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
      setAccessory(
        data.tempAccessories[
          Math.floor(Math.random() * data.tempAccessories.length)
        ].name
      );
    }, 200);
    // setTimeout(() => {
    //   let huh = data.tempAccessories.find(
    //     (element) => element.name === 'wireframe'
    //   );
    //   setAccessory(huh.name);
    // }, 6500);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default RANDOMIZER;
