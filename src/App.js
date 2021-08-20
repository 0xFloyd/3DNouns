import NounCanvas from 'NounCanvas';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const [head, setHead] = useState('rabbit');

  return (
    <Container fluid>
      <Navbar style={{ height: '50px' }} expand='lg'>
        <Navbar.Brand>Nouns</Navbar.Brand>
      </Navbar>
      <Row style={{ height: 'calc(100vh - 200px)' }}>
        <Col xs={4}>
          <form>
            <label>Head:</label>
            <select
              value={head}
              onChange={(e) => setHead(e.target.value)}
              name='cars'
              id='cars'
              form='carform'
            >
              <option value='crab'>Crab</option>
              <option value='rabbit'>rabbit</option>
            </select>
          </form>
        </Col>
        <Col>
          <div className='nouns-canvas'>
            <NounCanvas head={head} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
