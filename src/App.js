import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/GlowButton.css';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import NounCanvas from 'Scene/NounCanvas';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph',
  cache: new InMemoryCache(),
});

const App = () => {
  const [hidePage, setHidePage] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div style={{ height: '100%' }}>
        <HomePage hidePage={hidePage} setHidePage={setHidePage} />
        <div className="nouns-canvas">
          <NounCanvas hidePage={hidePage} setHidePage={setHidePage} />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
