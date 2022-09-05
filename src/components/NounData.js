import { useQuery, gql } from '@apollo/client';
import { getNounData } from '@nouns/assets';
import json from '../data.json';

const GET_NOUNS = gql`
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

const NounData = ({ seed, setHead, setGlasses, setBody, setAccessory }) => {
  const { loading, error, data } = useQuery(GET_NOUNS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  try {
    if (data && seed) {
      let traitData = data.nouns.find((element) => element.id === seed);
      // console.log(`head: ${json.head[0].id}`);
      if (traitData) {
        let head = json.head.find((element) => {
          element.id == traitData.seed.head;
        });
        let body = json.body.find((element) => element.id == traitData.seed.body);
        let glasses = json.glasses.find((element) => element.id == traitData.seed.glasses);
        let accessory = json.accessory.find((element) => element.id == traitData.seed.accessory);

        // if (head) {
        //   setHead(head.name);
        // }
        // if (body) {
        //   setBody(body.value);
        // }
        // if (accessory) {
        //   setAccessory(accessory.value);
        // }
        // if (glasses) {
        //   setGlasses(glasses.value);
        // }
      } else {
        console.log('no trait data');
      }
    } else {
      console.log('no graphql data');
    }
  } catch {}

  // const { parts, background } = getNounData(data.nouns[seed]?.seed);

  // console.log(parts);

  // setSeed(parts);

  return null;
};

export default NounData;
