import React, { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/GlowButton.css';
// import SplashScreen from './SplashScreen';
import { useProgress } from '@react-three/drei';
import InitialLoader from 'components/InitialLoader';
import HomePage from './HomePage';
import NounCanvas from 'NounCanvas';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// const NounCanvas = React.lazy(() => import('./NounCanvas'));

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ height: '100%' }}>
        {/* <Navbar style={{ height: '80px' }} expand="lg">
        <img className="nouns-logo" src={logo} alt="NOUNS" />
      </Navbar> */}
        {/* <Row style={{ height: 'calc(100vh - 80px)' }}> */}
        {/* <Row style={{ height: '100vh' }}>
        <Col xs={2}>
          <div></div>
          <form>
            <label>Head:</label>
            <select
              value={head}
              onChange={(e) => setHead(e.target.value)}
              name="cars"
              id="cars"
              form="carform"
            >
              <option value="crab">Crab</option>
              <option value="rabbit">rabbit</option>
            </select>
          </form>
        </Col>
        <Col>
          <div className="nouns-canvas">
            <NounCanvas head={head} />
          </div>
        </Col>
      </Row> */}
        {/* {!ready && (
        <div
          className={`splash-screen ${clicked ? " elementToFadeInAndOut" : ""}`}
        >
          <SplashScreen {...store} />
        </div>
      )} */}
        <HomePage />
        {/* <InitialLoader /> */}
        {/* 
      <div className="nouns-canvas">{loaded && <NounCanvas />}</div> */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div className="nouns-canvas">
          <NounCanvas />
        </div>
        {/* </Suspense> */}

        {/* <div className="nouns-canvas">
        <NounCanvas autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
      </div> */}
      </div>
    </ApolloProvider>
  );
};

export default App;
