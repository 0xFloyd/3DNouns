import { environmentAttributes } from 'attributes';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from './data.json';

const Menu = ({
  isDesktop,
  optionsVisibility,
  setOptionsVisibility,
  head,
  setHead,
  body,
  setBody,
  accessory,
  setAccessory,
  pants,
  setPants,
  glasses,
  setGlasses,
  shoes,
  setShoes,
  environment,
  setEnvironment,
  autoRotate,
  setAutoRotate,
  generateRandomNoun,
}) => {
  let tempAccessories = [
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
  ];

  return (
    <>
      <div
        className={isDesktop ? 'options-container' : 'mobile-menu-container'}
        style={{ display: optionsVisibility }}
      >
        {optionsVisibility === 'block' ? (
          <Container>
            <Row>
              <Col xs={10}>
                <p style={{ fontSize: '1.2rem' }}>Build your Noun!</p>
              </Col>
              <Col xs={{ span: 2 }}>
                <span
                  className="menu-x-button"
                  onClick={() => setOptionsVisibility('none')}
                  style={{ textAlign: 'right', fontSize: '1.2em' }}
                >
                  ❌
                </span>
              </Col>
            </Row>
          </Container>
        ) : null}

        <div
          className="options-controls"
          style={{ display: optionsVisibility }}
        >
          {/* <h3 className="white-font attribute-label" style={{ textAlign: 'center' }}>
            Settings
          </h3> */}
          {/*  Head */}
          <Container fluid>
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Head</label>
              </Col>
              <Col xs={9}>
                <select
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  className="attribute-select-box"
                  // name="cars"
                  // id="cars"
                  // form="carform"
                >
                  {data.head.map((head) => (
                    <option key={head.value} value={head.name}>
                      {head.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Glasses */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Glasses</label>
              </Col>
              <Col xs={9}>
                <select
                  value={glasses}
                  onChange={(e) => setGlasses(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.glasses.map((glasses) => (
                    <option key={glasses.value} value={glasses.value}>
                      {glasses.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            {/*  Body */}
            <Row style={{ marginBottom: '10px' }}>
              <Col>
                <label className="white-font attribute-label attribute-label">
                  Body
                </label>
              </Col>
              <Col xs={9}>
                <select
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.body.map((body, index) => (
                    <option key={index} value={body.name}>
                      {body.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            {/*  Accessory */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Accessory</label>
              </Col>
              <Col xs={9}>
                <select
                  value={accessory}
                  onChange={(e) => setAccessory(e.target.value)}
                  className="attribute-select-box"
                >
                  {tempAccessories.map((accessory, index) => (
                    <option key={index} value={accessory.name}>
                      {accessory.name}
                    </option>
                  ))}
                </select>
                {/* <select
                  value={accessory}
                  onChange={(e) => setAccessory(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.accessory.map((accessory) => (
                    <option key={accessory.value} value={accessory.value}>
                      {accessory.name}
                    </option>
                  ))}
                </select> */}
              </Col>
            </Row>
            {/*  Pants */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Pants</label>
              </Col>
              <Col xs={9}>
                <select
                  value={pants}
                  onChange={(e) => setPants(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.pants.map((pants) => (
                    <option key={pants.value} value={pants.value}>
                      {pants.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  Shoes */}
            <Row style={{ marginBottom: '10px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Shoes</label>
              </Col>
              <Col xs={9}>
                <select
                  value={shoes}
                  onChange={(e) => setShoes(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.shoes.map((shoes) => (
                    <option key={shoes.value} value={shoes.value}>
                      {shoes.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/* environment */}
            <Row>
              <Col xs={3}>
                <label className="white-font attribute-label">World</label>
              </Col>
              <Col xs={9}>
                <select
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  className="attribute-select-box"
                >
                  {environmentAttributes.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            {/*  */}

            {/* <Row style={{ marginTop: '30px' }}>
              <Col xs={3}>
                <label className="white-font attribute-label">Body Tex</label>
              </Col>
              <Col xs={9}>
                <select
                  value={bodyTexTest}
                  onChange={(e) => setBodyTexTest(e.target.value)}
                  className="attribute-select-box"
                >
                  {bodyTextureTest.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            <Row>
              <Col xs={3}>
                <label className="white-font attribute-label">Accessory Tex</label>
              </Col>
              <Col xs={9}>
                <select
                  value={accessoryTexTest}
                  onChange={(e) => setAccessoryTexTest(e.target.value)}
                  className="attribute-select-box"
                >
                  {accessoryTextureTest.map((arrayValue) => (
                    <option key={arrayValue.value} value={arrayValue.value}>
                      {arrayValue.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row> */}

            {/*  */}
            <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span
                      className="white-font attribute-label"
                      style={{ marginRight: '3px' }}
                    >
                      Auto
                      <br />
                      Rotate
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            {/* <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span className="white-font attribute-label" style={{ marginRight: '3px' }}>
                      Walk
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={walkAnimation}
                    onChange={(e) => setWalkAnimation(e.target.checked)}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div style={{ marginTop: '15px' }}>
                  <label>
                    <span className="white-font attribute-label" style={{ marginRight: '3px' }}>
                      Nod
                    </span>
                  </label>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: '25px' }}>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={nodAnimation}
                    onChange={(e) => setNodAnimation(e.target.checked)}
                  />
                </div>
              </Col>
            </Row> */}

            <div style={{ marginTop: '20px' }}>
              <Row>
                <Col></Col>
                <Col>
                  <button
                    className="glow-on-hover"
                    onClick={() => generateRandomNoun()}
                  >
                    Random Noun
                  </button>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <div className="open-menu-container">
        {optionsVisibility === 'none' ? (
          <>
            <button
              className="glow-on-hover"
              style={{ marginRight: '10px' }}
              onClick={() => generateRandomNoun()}
            >
              Random Noun
            </button>

            <button
              onClick={() => setOptionsVisibility('block')}
              className={'show-menu-button'}
            >
              Options
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
