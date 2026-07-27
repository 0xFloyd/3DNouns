![Nouns](https://raw.githubusercontent.com/0xFloyd/3DNouns/main/public/screenshot.png)

# [3D Nouns](https://3dnouns.com/)

3D Nouns es una aplicación web utilizada para la personalización de avatares de Nouns en 3D. Fue creada por [@0xFloyd](https://twitter.com/0xFloyd) y [@CoralOrca](https://twitter.com/coralorca) y financiada por [NounsDAO](https://github.com/nounsDAO/nouns-monorepo) bajo la [Propuesta 2](https://nouns.wtf/vote/2) el 6 de septiembre de 2021.

## Tecnología

3D Nouns está construido utilizando [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), un renderizador de React para [three.js](https://threejs.org).

Para obtener los datos del avatar de Noun mediante su ID, 3D Nouns utiliza [Apollo](https://www.npmjs.com/package/@apollo/client), un cliente de GraphQL, para recuperar la información. Los datos de la cadena de Nouns se obtienen del [Nouns Subgraph](https://thegraph.com/hosted-service/subgraph/nounsdao/nouns-subgraph).

## Gotchas (Consideraciones)

React no puede consumir el contexto de un proveedor externo. Esto impide el uso de librerías de estado global como redux y zustand dentro de r3f.

_De [@0xca0a](https://twitter.com/0xca0a) (creador de r3f):_

```
At the moment React context can not be readily used between two renderers, this is due to a problem within React. You can't use redux, tailwind, styled-components, or any foreign context in fiber ootb
```

[https://docs.pmnd.rs/react-three-fiber/advanced/gotchas](https://docs.pmnd.rs/react-three-fiber/advanced/gotchas)

_Actualización_: _Surgió una solución comunitaria después de que finalizara el desarrollo de este proyecto, pero mantenemos esto aquí para explicar las decisiones de ingeniería tomadas en su momento._
[https://twitter.com/0xca0a/status/1573064826339094528](https://twitter.com/0xca0a/status/1573064826339094528)

## Uso

Para usarlo localmente, clona el repositorio, instala las dependencias, ejecuta el servidor de desarrollo en vivo de CRA y navega a localhost:3000 en tu navegador:

```javascript
yarn install
yarn run start
```

## Licencia

El proyecto está licenciado bajo la Licencia MIT.

![Nouns](https://github.com/0xFloyd/3DNouns/blob/main/public/ArmyFooterLarge.jpg)
