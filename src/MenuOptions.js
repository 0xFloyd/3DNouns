import {
  accessoryAttributes,
  bodyAttributes,
  environmentAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
} from 'attributes';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MenuOptions = (props) => {
  return (
    <div
      className={
        props.isDesktop ? 'options-container' : 'mobile-menu-container'
      }
      style={{ display: props.optionsVisibility }}
    >
      {props.optionsVisibility === 'block' ? (
        <Container>
          <Row>
            <Col xs={10}>
              <p style={{ fontSize: '1.2rem' }}>Build your Noun!</p>
            </Col>
            <Col xs={{ span: 2 }}>
              <span
                className="menu-x-button"
                onClick={() => props.setOptionsVisibility('none')}
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
        style={{ display: props.optionsVisibility }}
      >
        {/* <h4 className="white-font" style={{ textAlign: 'center' }}>
            Settings
          </h4> */}
        {/*  Head */}
        <Container fluid>
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Head</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.head}
                onChange={(e) => props.setHead(e.target.value)}
                className="attribute-select-box"
                // name="cars"
                // id="cars"
                // form="carform"
              >
                {headAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {/*  Glasses */}
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Glasses</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.glasses}
                onChange={(e) => props.setGlasses(e.target.value)}
                className="attribute-select-box"
              >
                {glassesAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>

          {/*  Body */}
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Body</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.body}
                onChange={(e) => props.setBody(e.target.value)}
                className="attribute-select-box"
              >
                {bodyAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {/*  Accessory */}
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Accessory</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.accessory}
                onChange={(e) => props.setAccessory(e.target.value)}
                className="attribute-select-box"
              >
                {accessoryAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {/*  Pants */}
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Pants</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.pants}
                onChange={(e) => props.setPants(e.target.value)}
                className="attribute-select-box"
              >
                {pantsAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {/*  Shoes */}
          <Row style={{ marginBottom: '10px' }}>
            <Col xs={4}>
              <label className="white-font">Shoes</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.shoes}
                onChange={(e) => props.setShoes(e.target.value)}
                className="attribute-select-box"
              >
                {shoesAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {/* environment */}
          <Row>
            <Col xs={4}>
              <label className="white-font">World</label>
            </Col>
            <Col xs={8}>
              <select
                value={props.environment}
                onChange={(e) => props.setEnvironment(e.target.value)}
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
          <Row>
            <Col>
              <div style={{ marginTop: '15px' }}>
                <label>
                  <span className="white-font" style={{ marginRight: '3px' }}>
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
                  checked={props.autoRotate}
                  onChange={(e) => props.setAutoRotate(e.target.checked)}
                />
              </div>
            </Col>
          </Row>

          <div style={{ marginTop: '20px' }}>
            <Row>
              <Col></Col>
              <Col>
                <button
                  className="glow-on-hover"
                  onClick={() => props.generateRandomNoun()}
                >
                  Random Noun
                </button>
              </Col>
              <Col></Col>
            </Row>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Row>
              <Col></Col>
              <Col>
                <button
                  className="glow-on-hover"
                  onClick={() => props.exportGLTF()}
                >
                  Export Noun
                </button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MenuOptions;
