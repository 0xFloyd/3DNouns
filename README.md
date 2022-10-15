![Nouns](https://raw.githubusercontent.com/0xFloyd/3DNouns/main/public/screenshot.png)

# [3D Nouns](https://3dnouns.com/)

3D Nouns is a web application used for the customization of Noun avatars in 3D. It was created by [@0xFloyd](https://twitter.com/0xFloyd) and [@CoralOrca](https://twitter.com/coralorca) and funded by [NounsDAO](https://github.com/nounsDAO/nouns-monorepo) under [Proposal 2](https://nouns.wtf/vote/2) on September 6, 2021.

## Technology

3D Nouns is built using [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), a React renderer for [three.js](https://threejs.org).

To get Noun avatar data by ID, 3D Nouns uses [Apollo](https://www.npmjs.com/package/@apollo/client), a GraphQL client, to fetch data. Nouns chain data is retrieved from the [Nouns Subgraph](https://thegraph.com/hosted-service/subgraph/nounsdao/nouns-subgraph).

## Gotchas

React cannot consume context from a foreign provider. This prevents the use of global state libraries like redux and zustand inside r3f.

_From [@0xca0a](https://twitter.com/0xca0a) (r3f creator):_

```
At the moment React context can not be readily used between two renderers, this is due to a problem within React. You can't use redux, tailwind, styled-components, or any foreign context in fiber ootb
```

[https://docs.pmnd.rs/react-three-fiber/advanced/gotchas](https://docs.pmnd.rs/react-three-fiber/advanced/gotchas)

_Update_: _A community solution emerged after the development of this project was finished, but keeping this here to explain engineering decisions made at the time._
[https://twitter.com/0xca0a/status/1573064826339094528](https://twitter.com/0xca0a/status/1573064826339094528)

## Usage

To use locally, clone the repository, install dependencies, run using CRA's live development server, and navigate to localhost:3000 in your browser:

```javascript
yarn install
yarn run start
```

## License

The project is licensed under the MIT License.

![Nouns](https://github.com/0xFloyd/3DNouns/blob/main/public/ArmyFooterLarge.jpg)
