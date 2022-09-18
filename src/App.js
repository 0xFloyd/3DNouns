import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/GlowButton.css';
import HomePage from './components/HomePage/HomePage';
import NounCanvas from 'Scene/NounCanvas';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ height: '100%' }}>
        <HomePage />
        <div className="nouns-canvas">
          <NounCanvas />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
