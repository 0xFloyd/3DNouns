import 'bootstrap/dist/css/bootstrap.css'
import './styles/App.css'
import './styles/GlowButton.css'
import './index.css'
import HomePage from './components/HomePage/HomePage'
import NounCanvas from 'Scene/NounCanvas'
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'
import { useState } from 'react'

const client = createClient({
  url: `https://gateway.thegraph.com/api/${process.env.REACT_APP_GRAPH_API_KEY}/subgraphs/id/5qcR6rAfDMZCVGuZ6DDois7y4zyXqsyqvaqhE6NRRraW`,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GRAPH_API_KEY}`
    }
  },
  exchanges: [cacheExchange, fetchExchange]
})

const App = () => {
  const [hidePage, setHidePage] = useState(false)

  return (
    <Provider value={client}>
      <div style={{ height: '100%' }}>
        <HomePage hidePage={hidePage} setHidePage={setHidePage} />
        <div className="nouns-canvas">
          <NounCanvas hidePage={hidePage} setHidePage={setHidePage} />
        </div>
      </div>
    </Provider>
  )
}

export default App
