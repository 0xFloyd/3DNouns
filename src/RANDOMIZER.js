import React, { useEffect } from "react";
import data from "./data.json";

const RANDOMIZER = ({
  setBody,
  setAccessory,
  setHead,
  setGlasses,
  setPants,
  setShoes,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
      setAccessory(
        data.tempAccessories[
          Math.floor(Math.random() * data.tempAccessories.length)
        ].name
      );
      setHead(
        data.tempHeads[Math.floor(Math.random() * data.tempHeads.length)].name
      );
      setGlasses(
        data.glasses[Math.floor(Math.random() * data.glasses.length)].value
      );
      setPants(data.pants[Math.floor(Math.random() * data.pants.length)].name);
      setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
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
