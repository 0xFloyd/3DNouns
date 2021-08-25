//type: {name: string, value: string}

export const headNames = {
  Rabbit: 'Head-Rabbit',
  Cloud: 'Head-Cloud',
  Computer: 'Head-Computer',
  Crab: 'Head-Crab',
  Mixer: 'Head-Mixer',
  Pirate: 'Head-Pirate',
  Shark: 'SharkHead',
};

export const headAttributes = [
  { name: 'Cloud', value: 'Head-Cloud' },
  { name: 'Pirate', value: 'Head-Pirate' },
  { name: 'Computer', value: 'Head-Computer' },
  { name: 'Crab', value: 'Head-Crab' },
  { name: 'Mixer', value: 'Head-Mixer' },
  { name: 'Rabbit', value: 'Head-Rabbit' },
  { name: 'Shark', value: 'SharkHead' },
];

export const glassesAttributes = [
  { name: 'Pink Purple', value: 'Glasses4' },
  { name: 'Mint Green', value: 'Glasses_1' },
  { name: 'Sky Blue', value: 'Glasses3' },
  { name: 'Green Blue', value: 'Glasses5' },
  { name: 'Black', value: 'Glasses2' },
  { name: 'Orange', value: 'Glasses6' },
  { name: 'Black RGB', value: 'RGBglasses' },
];

export const bodyAttributes = [
  { name: 'Rainbow Steps', value: 'Body-RainbowSteps' },
  { name: 'Pride', value: 'Body-Pride' },
  { name: 'Decay Pride', value: 'Body-decay-pride' },
  { name: 'Light Blue Noun', value: 'Body-LightBlue' },
  { name: 'Fuchsia Hoodie', value: 'Body-Hoodie' },
  { name: 'Navy Carrot', value: 'BodyNavy' },
  { name: 'Fuchsia RGB', value: 'Oren_197_part' },
];

export const pantsAttributes = [
  { name: 'Denim Two', value: 'Pants-Denim2' },
  { name: 'Light Grey One', value: 'Pants-LightGrey1' },
  { name: 'Denim One', value: 'Pants-Denim1' },
  { name: 'Dark Grey Two', value: 'Pants-DarkGrey2' },
  { name: 'Dark Grey One', value: 'Pants-DarkGrey1' },
  { name: 'Light Grey', value: 'Pants-Lightgrey' },
];

export const shoesAttributes = [
  { name: 'Black Two', value: 'Shoes-Black2' },
  { name: 'White One', value: 'Shoes-White1' },
  { name: 'White Four', value: 'Shoes-White4' },
  { name: 'White Two', value: 'Shoes-White2' },
  { name: 'Black One', value: 'Shoes-Black1' },
  { name: 'White Three', value: 'Shoes-White-3' },
];

export const glassesPosition = {
  Rabbit: [-0.09, 0.26, 0.03],
  Cloud: [-0.09, 0.25, 0.06],
  Computer: [-0.09, 0.25, 0.04],
  Crab: [-0.09, 0.25, 0.03],
  Mixer: [-0.08, 0.25, 0.04],
  Pirate: [-0.09, 0.25, 0.05],
  Shark: [-0.09, 0.25, 0.04],
};

export const environmentAttributes = [
  { name: 'Normal', value: 'Normal' },
  { name: 'Ocean', value: 'Ocean' },
];

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};
