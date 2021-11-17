import { environmentAttributes } from 'attributes';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import data from './data.json';
import './menu.css';
import { FiRefreshCw, FiLock, FiUnlock } from 'react-icons/fi';
import RandomNounButton from 'RandomNounButton';
import { useThree } from '@react-three/fiber';

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
  animationState,
  animationValue,
  setAnimationState,
  setAnimationValue,
  downloadModel,
  downloadingModel,
  setDownloadingModel,
  lockedTraits,
  setLockedTraits,
}) => {
  const rotateOptions = [
    { name: 'OFF', value: 'false' },
    { name: 'ON', value: 'true' },
  ];

  const [disabledButtonState, setDisabledButtonState] = useState(false);

  const throttleClicks = () => {
    // throttle random button clicks
    setDisabledButtonState(true);
    setTimeout(() => {
      setDisabledButtonState(false);
    }, 250);
  };

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
            {/* test */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setHead(
                      data.tempHeads[
                        Math.floor(Math.random() * data.tempHeads.length)
                      ].name
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                    // onClick={() =>
                    //   setHead(
                    //     data.tempHeads[
                    //       Math.floor(Math.random() * data.tempHeads.length)
                    //     ].name
                    //   )
                    // }
                  />
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Head
                    <span className="trait-divider"></span>
                  </label>

                  <select
                    value={head}
                    onChange={(e) => setHead(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.tempHeads.map((head) => (
                      <option key={head.value} value={head.name}>
                        {head.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>

              {/* <select
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  className="attribute-select-box"
                >
                  {data.head.map((head) => (
                    <option key={head.value} value={head.name}>
                      {head.name}
                    </option>
                  ))}
                </select> */}
            </Row>

            {/*  Glasses */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setGlasses(
                      data.glasses[
                        Math.floor(Math.random() * data.glasses.length)
                      ].value
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                  />{' '}
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Glasses<span className="trait-divider"></span>
                  </label>

                  <select
                    value={glasses}
                    onChange={(e) => setGlasses(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.glasses.map((glasses) => (
                      <option key={glasses.value} value={glasses.value}>
                        {glasses.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Form></Form>
              </Col>
            </Row>

            {/*  Body */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setBody(
                      data.body[Math.floor(Math.random() * data.body.length)]
                        .name
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                  />{' '}
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Body<span className="trait-divider"></span>
                  </label>
                  <select
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.body.map((body, index) => (
                      <option key={index} value={body.name}>
                        {body.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>

            {/*  Accessory */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setAccessory(
                      data.tempAccessories[
                        Math.floor(Math.random() * data.tempAccessories.length)
                      ].name
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                  />{' '}
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Accessory<span className="trait-divider"></span>
                  </label>
                  <select
                    value={accessory}
                    onChange={(e) => setAccessory(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.tempAccessories.map((accessory, index) => (
                      <option key={index} value={accessory.name}>
                        {accessory.name}
                      </option>
                    ))}
                  </select>
                </div>
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
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setPants(
                      data.pants[Math.floor(Math.random() * data.pants.length)]
                        .name
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                  />
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Pants<span className="trait-divider"></span>
                  </label>
                  <select
                    value={pants}
                    onChange={(e) => setPants(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.pants.map((pants) => (
                      <option key={pants.value} value={pants.name}>
                        {pants.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
            {/*  Shoes */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <button
                  onClick={() => {
                    setShoes(
                      data.shoes[Math.floor(Math.random() * data.shoes.length)]
                        .name
                    );
                    throttleClicks();
                  }}
                  disabled={disabledButtonState}
                  className="no-style-button"
                >
                  <FiRefreshCw
                    size={30}
                    className={
                      disabledButtonState
                        ? 'disabled-random-trait-icon'
                        : 'random-trait-icon'
                    }
                  />{' '}
                </button>
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Shoes<span className="trait-divider"></span>
                  </label>

                  <select
                    value={shoes}
                    onChange={(e) => setShoes(e.target.value)}
                    className="trait-select-box"
                  >
                    {data.shoes.map((shoes) => (
                      <option key={shoes.value} value={shoes.name}>
                        {shoes.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
            {/* environment */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <FiRefreshCw size={30} className="invisible-icon" />
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    World<span className="trait-divider"></span>
                  </label>
                  <select
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                    className="trait-select-box"
                  >
                    {environmentAttributes.map((arrayValue) => (
                      <option key={arrayValue.value} value={arrayValue.value}>
                        {arrayValue.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>

            {/*  Animation */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <FiRefreshCw size={30} className="invisible-icon" />
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Animation<span className="trait-divider"></span>
                  </label>
                  <select
                    value={animationValue.name}
                    onChange={(e) => {
                      if (e.target.value === 'none') {
                        setAnimationState(false);
                        setAnimationValue(e.target.value);
                      } else {
                        setAnimationState(true);
                        setAnimationValue(e.target.value);
                      }
                    }}
                    className="trait-select-box"
                  >
                    {data.animations.map((animationObj) => (
                      <option
                        key={animationObj.value}
                        value={animationObj.name}
                      >
                        {animationObj.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>

            {/*  Rotate */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <FiRefreshCw size={30} className="invisible-icon" />
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Rotate<span className="trait-divider"></span>
                  </label>
                  <select
                    value={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.value)}
                    className="trait-select-box"
                  >
                    {rotateOptions.map((rotateObj, index) => (
                      <option key={index} value={rotateObj.value}>
                        {rotateObj.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
            {/*  */}

            <div style={{ marginTop: '20px' }}>
              <Row>
                <Col></Col>
                <Col>
                  {/* <RandomNounButton generateRandomNoun={generateRandomNoun} /> */}
                  <button
                    className={disabledButtonState ? 'disabled' : 'noun-button'}
                    onClick={() => {
                      generateRandomNoun();
                      throttleClicks();
                    }}
                    disabled={disabledButtonState}
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
                    className="noun-button"
                    onClick={() => {
                      //   { "name": "tpose", "value": 7 },
                      setAnimationState(true);
                      setAnimationValue('tpose');
                      setDownloadingModel(true);
                      setTimeout(() => {
                        downloadModel();
                      }, 1500);
                    }}
                  >
                    Download Noun
                    {downloadingModel && <Spinner animation="border" />}
                  </button>
                </Col>
                <Col></Col>
              </Row>
            </div>
            {/* HEAD */}
            <div className="inline-option-row">
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    head: !lockedTraits.head,
                  });
                }}
                disabled={disabledButtonState}
                className="no-style-button"
              >
                {lockedTraits.head ? (
                  <FiLock color={'red'} size={40} />
                ) : (
                  <FiUnlock color={'green'} size={40} />
                )}
              </button>
              <div className="inline-select-wrap">
                <label>Head</label>
                <select value={head} className="trait-select">
                  {data.tempHeads.map((head) => (
                    <option key={head.value} value={head.name}>
                      {head.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => {
                  setHead(
                    data.tempHeads[
                      Math.floor(Math.random() * data.tempHeads.length)
                    ].name
                  );
                  setLockedTraits({
                    ...lockedTraits,
                    head: false,
                  });
                  throttleClicks();
                }}
                disabled={disabledButtonState}
                className="no-style-button"
              >
                <FiRefreshCw
                  className={
                    disabledButtonState
                      ? 'disabled-random-trait-icon'
                      : 'random-trait-icon'
                  }
                  size={30}
                />
              </button>
            </div>
            {/* END HEAD */}
          </Container>
        </div>
      </div>
      <div className="open-menu-container">
        {optionsVisibility === 'none' ? (
          <>
            <button
              className={disabledButtonState ? 'disabled' : 'noun-button'}
              onClick={() => {
                generateRandomNoun();
                throttleClicks();
              }}
              disabled={disabledButtonState}
            >
              Random Noun
            </button>
            <button
              onClick={() => setOptionsVisibility('block')}
              className={'show-menu-button'}
              style={{ marginLeft: '10px' }}
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
