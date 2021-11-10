import { environmentAttributes } from 'attributes';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from './data.json';
import './menu.css';
import { FiRefreshCw } from 'react-icons/fi';

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
}) => {
  let tempAccessories = [
    { name: 'accessory-1n', value: 'accessory-1n.png' },
    { name: 'accessory-aardvark', value: 'accessory-aardvark.png' },
    { name: 'accessory-axe', value: 'accessory-axe.png' },
    {
      name: 'accessory-belly-chameleon',
      value: 'accessory-belly-chameleon.png',
    },
    { name: 'accessory-bird-flying', value: 'accessory-bird-flying.png' },
    { name: 'accessory-bird-side', value: 'accessory-bird-side.png' },
    { name: 'accessory-blind-anchor', value: 'accessory-blind-anchor.png' },
    { name: 'accessory-bling-anvil', value: 'accessory-bling-anvil.png' },
    { name: 'accessory-bling-arrow', value: 'accessory-bling-arrow.png' },
    { name: 'accessory-bling-cheese', value: 'accessory-bling-cheese.png' },
    {
      name: 'accessory-bling-gold-ingot',
      value: 'accessory-bling-gold-ingot.png',
    },
    { name: 'accessory-bling-love', value: 'accessory-bling-love.png' },
    { name: 'accessory-bling-mask', value: 'accessory-bling-mask.png' },
    { name: 'accessory-bling-ring', value: 'accessory-bling-ring.png' },
    { name: 'accessory-bling-scissors', value: 'accessory-bling-scissors.png' },
    { name: 'accessory-bling-sparkles', value: 'accessory-bling-sparkles.png' },
    {
      name: 'accessory-body-gradient-checkerdisco',
      value: 'accessory-body-gradient-checkerdisco.png',
    },
    {
      name: 'accessory-body-gradient-dawn',
      value: 'accessory-body-gradient-dawn.png',
    },
    {
      name: 'accessory-body-gradient-dusk',
      value: 'accessory-body-gradient-dusk.png',
    },
    {
      name: 'accessory-body-gradient-glacier',
      value: 'accessory-body-gradient-glacier.png',
    },
    {
      name: 'accessory-body-gradient-ice',
      value: 'accessory-body-gradient-ice.png',
    },
    {
      name: 'accessory-body-gradient-pride',
      value: 'accessory-body-gradient-pride.png',
    },
    {
      name: 'accessory-body-gradient-redpink',
      value: 'accessory-body-gradient-redpink.png',
    },
    {
      name: 'accessory-body-gradient-sunset',
      value: 'accessory-body-gradient-sunset.png',
    },
    { name: 'accessory-carrot', value: 'accessory-carrot.png' },
    { name: 'accessory-chain', value: 'accessory-chain.png' },
    {
      name: 'accessory-checker-bigwalk-blue-prime',
      value: 'accessory-checker-bigwalk-blue-prime.png',
    },
    {
      name: 'accessory-checker-bigwalk-greylight',
      value: 'accessory-checker-bigwalk-greylight.png',
    },
    {
      name: 'accessory-checker-bigwalk-rainbow',
      value: 'accessory-checker-bigwalk-rainbow.png',
    },
    { name: 'accessory-checker-RGB', value: 'accessory-checker-RGB.png' },
    { name: 'accessory-cloud', value: 'accessory-cloud.png' },
    { name: 'accessory-clover', value: 'accessory-clover.png' },
    { name: 'accessory-collar-sunset', value: 'accessory-collar-sunset.png' },
    { name: 'accessory-cow', value: 'accessory-cow.png' },
    { name: 'accessory-dinosaur', value: 'accessory-dinosaur.png' },
    { name: 'accessory-dollar-bling', value: 'accessory-dollar-bling.png' },
    { name: 'accessory-dragon', value: 'accessory-dragon.png' },
    { name: 'accessory-ducky', value: 'accessory-ducky.png' },
    { name: 'accessory-eth', value: 'accessory-eth.png' },
    { name: 'accessory-eye', value: 'accessory-eye.png' },
    { name: 'accessory-flash', value: 'accessory-flash.png' },
    { name: 'accessory-fries', value: 'accessory-fries.png' },
    {
      name: 'accessory-glasses-logo-sun',
      value: 'accessory-glasses-logo-sun.png',
    },
    { name: 'accessory-glasses-logo', value: 'accessory-glasses-logo.png' },
    { name: 'accessory-glasses', value: 'accessory-glasses.png' },
    { name: 'accessory-heart', value: 'accessory-heart.png' },
    {
      name: 'accessory-hoodiestrings-uneven',
      value: 'accessory-hoodiestrings-uneven.png',
    },
    { name: 'accessory-id', value: 'accessory-id.png' },
    { name: 'accessory-infinity', value: 'accessory-infinity.png' },
    { name: 'accessory-insignia', value: 'accessory-insignia.png' },
    { name: 'accessory-leaf', value: 'accessory-leaf.png' },
    { name: 'accessory-lightbulb', value: 'accessory-lightbulb.png' },
    { name: 'accessory-lp', value: 'accessory-lp.png' },
    { name: 'accessory-marsface', value: 'accessory-marsface.png' },
    { name: 'accessory-matrix', value: 'accessory-matrix.png' },
    { name: 'accessory-moon-block', value: 'accessory-moon-block.png' },
    { name: 'accessory-pizza-bling', value: 'accessory-pizza-bling.png' },
    { name: 'accessory-pocket-pencil', value: 'accessory-pocket-pencil.png' },
    { name: 'accessory-rain', value: 'accessory-rain.png' },
    { name: 'accessory-rgb', value: 'accessory-rgb.png' },
    { name: 'accessory-scarf-clown', value: 'accessory-scarf-clown.png' },
    { name: 'accessory-secret-x', value: 'accessory-secret-x.png' },
    { name: 'accessory-shirt-black', value: 'accessory-shirt-black.png' },
    { name: 'accessory-shrimp', value: 'accessory-shrimp.png' },
    { name: 'accessory-slimesplat', value: 'accessory-slimesplat.png' },
    { name: 'accessory-small-bling', value: 'accessory-small-bling.png' },
    { name: 'accessory-snowflake', value: 'accessory-snowflake.png' },
    { name: 'accessory-stains-blood', value: 'accessory-stains-blood.png' },
    { name: 'accessory-stains-zombie', value: 'accessory-stains-zombie.png' },
    {
      name: 'accessory-stripes-and-checks',
      value: 'accessory-stripes-and-checks.png',
    },
    {
      name: 'accessory-stripes-big-red',
      value: 'accessory-stripes-big-red.png',
    },
    { name: 'accessory-stripes-blit', value: 'accessory-stripes-blit.png' },
    {
      name: 'accessory-stripes-blue-med',
      value: 'accessory-stripes-blue-med.png',
    },
    { name: 'accessory-stripes-brown', value: 'accessory-stripes-brown.png' },
    { name: 'accessory-stripes-olive', value: 'accessory-stripes-olive.png' },
    {
      name: 'accessory-stripes-red-cold',
      value: 'accessory-stripes-red-cold.png',
    },
    { name: 'accessory-sunset', value: 'accessory-sunset.png' },
    { name: 'accessory-taxi-checkers', value: 'accessory-taxi-checkers.png' },
    { name: 'accessory-text-yolo', value: 'accessory-text-yolo.png' },
    { name: 'accessory-think', value: 'accessory-think.png' },
    {
      name: 'accessory-tie-black-on-white',
      value: 'accessory-tie-black-on-white.png',
    },
    { name: 'accessory-tie-dye', value: 'accessory-tie-dye.png' },
    {
      name: 'accessory-tie-purple-on-white',
      value: 'accessory-tie-purple-on-white.png',
    },
    { name: 'accessory-tie-red', value: 'accessory-tie-red.png' },
    { name: 'accessory-txt-a2+b2', value: 'accessory-txt-a2+b2.png' },
    { name: 'accessory-txt-cc', value: 'accessory-txt-cc.png' },
    { name: 'accessory-txt-cc2', value: 'accessory-txt-cc2.png' },
    { name: 'accessory-txt-copy', value: 'accessory-txt-copy.png' },
    { name: 'accessory-txt-dao', value: 'accessory-txt-dao.png' },
    { name: 'accessory-txt-doom', value: 'accessory-txt-doom.png' },
    { name: 'accessory-txt-dope-text', value: 'accessory-txt-dope-text.png' },
    { name: 'accessory-txt-foo-black', value: 'accessory-txt-foo-black.png' },
    { name: 'accessory-txt-ico', value: 'accessory-txt-ico.png' },
    { name: 'accessory-txt-io', value: 'accessory-txt-io.png' },
    { name: 'accessory-txt-lmao', value: 'accessory-txt-lmao.png' },
    { name: 'accessory-txt-lol', value: 'accessory-txt-lol.png' },
    { name: 'accessory-txt-mint', value: 'accessory-txt-mint.png' },
    {
      name: 'accessory-txt-nil-grey-dark',
      value: 'accessory-txt-nil-grey-dark.png',
    },
    { name: 'accessory-txt-noun-f0f', value: 'accessory-txt-noun-f0f.png' },
    { name: 'accessory-txt-noun-green', value: 'accessory-txt-noun-green.png' },
    {
      name: 'accessory-txt-noun-multicolor',
      value: 'accessory-txt-noun-multicolor.png',
    },
    { name: 'accessory-txt-noun', value: 'accessory-txt-noun.png' },
    { name: 'accessory-txt-pi', value: 'accessory-txt-pi.png' },
    { name: 'accessory-txt-pop', value: 'accessory-txt-pop.png' },
    { name: 'accessory-txt-rofl', value: 'accessory-txt-rofl.png' },
    { name: 'accessory-txt-we', value: 'accessory-txt-we.png' },
    { name: 'accessory-txt-yay', value: 'accessory-txt-yay.png' },
    { name: 'accessory-wave', value: 'accessory-wave.png' },
    { name: 'accessory-wet-money', value: 'accessory-wet-money.png' },
    { name: 'accessory-yingyang', value: 'accessory-yingyang.png' },
    { name: 'body-bege', value: 'body-bege.png' },
    { name: 'body-gray-scale-1', value: 'body-gray-scale-1.png' },
    { name: 'body-gray-scale-9', value: 'body-gray-scale-9.png' },
    { name: 'body-ice-cold', value: 'body-ice-cold.png' },
  ];

  let tempHeads = [
    { name: 'Bonsai', value: 'head-pineapple' },
    { name: 'Pineapple', value: 'head-frog' },
  ];

  const rotateOptions = [
    { name: 'OFF', value: 'false' },
    { name: 'ON', value: 'true' },
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
            {/* test */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setHead(
                      tempHeads[Math.floor(Math.random() * tempHeads.length)]
                        .name
                    )
                  }
                />
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
                    {tempHeads.map((head) => (
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
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setGlasses(
                      data.glasses[
                        Math.floor(Math.random() * data.glasses.length)
                      ].value
                    )
                  }
                />
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
              </Col>
            </Row>

            {/*  Body */}
            <Row className="attribute-row">
              <Col xs={12} className="attribute-column">
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setBody(
                      data.body[Math.floor(Math.random() * data.body.length)]
                        .name
                    )
                  }
                />
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
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setAccessory(
                      tempAccessories[
                        Math.floor(Math.random() * tempAccessories.length)
                      ].name
                    )
                  }
                />
                <div className="trait-dropdown-container">
                  <label className="trait-select-box-label">
                    Accessory<span className="trait-divider"></span>
                  </label>
                  <select
                    value={accessory}
                    onChange={(e) => setAccessory(e.target.value)}
                    className="trait-select-box"
                  >
                    {tempAccessories.map((accessory, index) => (
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
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setPants(
                      data.pants[Math.floor(Math.random() * data.pants.length)]
                        .value
                    )
                  }
                />
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
                      <option key={pants.value} value={pants.value}>
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
                <FiRefreshCw
                  size={30}
                  className="random-trait-icon"
                  onClick={() =>
                    setShoes(
                      data.shoes[Math.floor(Math.random() * data.shoes.length)]
                        .name
                    )
                  }
                />
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
                    className="random-noun-button"
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
              className="random-noun-button"
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
