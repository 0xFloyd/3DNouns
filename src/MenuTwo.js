import { environmentAttributes } from 'attributes';
import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';
import data from './data.json';
import './menu.css';
import { FiRefreshCw, FiLock, FiUnlock } from 'react-icons/fi';
import RandomNounButton from 'RandomNounButton';
import { useThree } from '@react-three/fiber';
import CoralPicture from './assets/coral.jpg';
import FloydPicture from './assets/floyd.jpg';

const MenuTwo = ({
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
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);

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
          <div className="menu-header-row">
            <div>
              {/* <input
                type="checkbox"
                className="toggle"
                checked={autoRotate}
                onChange={(e) => setAutoRotate(e.target.checked)}
              ></input> */}
            </div>

            <div className="header-randomize-container">
              <button
                className={
                  disabledButtonState ? 'menu-button-disabled' : 'menu-button'
                }
                onClick={() => {
                  generateRandomNoun();
                  throttleClicks();
                }}
                disabled={disabledButtonState}
              >
                RANDOMIZE
              </button>
            </div>
            <button
              className="menu-x-button"
              onClick={() => {
                setOptionsVisibility('none');
                setShowMintModal(false);
              }}
            >
              CLOSE
            </button>
          </div>
        ) : null}

        <div
          className="options-controls"
          style={{ display: optionsVisibility }}
        >
          {/* <h3 className="white-font attribute-label" style={{ textAlign: 'center' }}>
            Settings
          </h3> */}

          {/* HEAD */}
          <div className="inline-option-row">
            <span />
            {/* <button
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
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <div className="inline-select-wrap">
              <label className="trait-label">Head</label>
              <select
                value={head}
                className="trait-select"
                onChange={(e) => setHead(e.target.value)}
              >
                {data.tempHeads.map((head) => (
                  <option key={head.value} value={head.name}>
                    {head.name}
                  </option>
                ))}
              </select>
              {/* <button
                onClick={() => {
                  setHead(
                    data.tempHeads[
                      Math.floor(Math.random() * data.tempHeads.length)
                    ].name
                  );

                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    head: !lockedTraits.head,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.head ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
            </div>
            {/* <button
              onClick={() => {
                setHead(
                  data.tempHeads[
                    Math.floor(Math.random() * data.tempHeads.length)
                  ].name
                );

                throttleClicks();
              }}
              disabled={disabledButtonState}
              className="shuffle-icon-button"
            >
              <FiRefreshCw
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
                size={25}
              />
            </button> */}
          </div>
          {/* END HEAD */}

          {/*  GLASSES */}
          <div className="inline-option-row">
            {/* <button
              onClick={() => {
                setLockedTraits({
                  ...lockedTraits,
                  glasses: !lockedTraits.glasses,
                });
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              {lockedTraits.glasses ? (
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <span />
            <div className="inline-select-wrap">
              <label>Glasses</label>

              <select
                value={glasses}
                onChange={(e) => setGlasses(e.target.value)}
                className="trait-select"
              >
                {data.glasses.map((glasses) => (
                  <option key={glasses.value} value={glasses.value}>
                    {glasses.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    glasses: !lockedTraits.glasses,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.glasses ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
              {/* <button
                onClick={() => {
                  setGlasses(
                    data.glasses[
                      Math.floor(Math.random() * data.glasses.length)
                    ].value
                  );
                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
            </div>
            {/* <button
              onClick={() => {
                setGlasses(
                  data.glasses[Math.floor(Math.random() * data.glasses.length)]
                    .value
                );
                throttleClicks();
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              <FiRefreshCw
                size={25}
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
              />{' '}
            </button> */}
          </div>
          {/*  END GLASSES */}

          {/*  BODY */}
          <div className="inline-option-row">
            {/* <button
              onClick={() => {
                setLockedTraits({
                  ...lockedTraits,
                  body: !lockedTraits.body,
                });
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              {lockedTraits.body ? (
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <span />
            <div className="inline-select-wrap">
              <label>Body</label>
              <select
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="trait-select"
              >
                {data.body.map((body, index) => (
                  <option key={index} value={body.name}>
                    {body.name}
                  </option>
                ))}
              </select>
              {/* <button
                onClick={() => {
                  setBody(
                    data.body[Math.floor(Math.random() * data.body.length)].name
                  );
                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    body: !lockedTraits.body,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.body ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
            </div>
            {/* <button
              onClick={() => {
                setBody(
                  data.body[Math.floor(Math.random() * data.body.length)].name
                );
                throttleClicks();
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              <FiRefreshCw
                size={25}
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
              />{' '}
            </button> */}
          </div>
          {/*  END BODY */}

          {/*  ACCESSORY */}
          <div className="inline-option-row">
            {/* <button
              onClick={() => {
                setLockedTraits({
                  ...lockedTraits,
                  accessory: !lockedTraits.accessory,
                });
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              {lockedTraits.accessory ? (
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <span />
            <div className="inline-select-wrap">
              <label>Accessory</label>
              <select
                value={accessory}
                onChange={(e) => setAccessory(e.target.value)}
                className="trait-select"
              >
                {data.tempAccessories.map((accessory, index) => (
                  <option key={index} value={accessory.name}>
                    {accessory.name}
                  </option>
                ))}
              </select>
              {/* <button
                onClick={() => {
                  setAccessory(
                    data.tempAccessories[
                      Math.floor(Math.random() * data.tempAccessories.length)
                    ].name
                  );
                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    accessory: !lockedTraits.accessory,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.accessory ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
            </div>{' '}
            {/* <button
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
                size={25}
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
              />{' '}
            </button> */}
          </div>
          {/*  END ACCESSORY */}

          {/*  Pants */}
          <div className="inline-option-row">
            {/* <button
              onClick={() => {
                setLockedTraits({
                  ...lockedTraits,
                  pants: !lockedTraits.pants,
                });
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              {lockedTraits.pants ? (
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <span />
            <div className="inline-select-wrap">
              <label>Pants</label>
              <select
                value={pants}
                onChange={(e) => setPants(e.target.value)}
                className="trait-select"
              >
                {data.pants.map((pants) => (
                  <option key={pants.value} value={pants.name}>
                    {pants.name}
                  </option>
                ))}
              </select>
              {/* <button
                onClick={() => {
                  setPants(
                    data.pants[Math.floor(Math.random() * data.pants.length)]
                      .name
                  );
                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    pants: !lockedTraits.pants,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.pants ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
            </div>{' '}
            {/* <button
              onClick={() => {
                setPants(
                  data.pants[Math.floor(Math.random() * data.pants.length)].name
                );
                throttleClicks();
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              <FiRefreshCw
                size={25}
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
              />
            </button> */}
          </div>
          {/*  END PANTS */}

          {/*  SHOES */}
          <div className="inline-option-row">
            {/* <button
              onClick={() => {
                setLockedTraits({
                  ...lockedTraits,
                  shoes: !lockedTraits.shoes,
                });
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              {lockedTraits.shoes ? (
                <FiLock color={'black'} size={30} />
              ) : (
                <FiUnlock color={'black'} size={30} />
              )}
            </button> */}
            <span />
            <div className="inline-select-wrap">
              <label>Shoes</label>

              <select
                value={shoes}
                onChange={(e) => setShoes(e.target.value)}
                className="trait-select"
              >
                {data.shoes.map((shoes) => (
                  <option key={shoes.value} value={shoes.name}>
                    {shoes.name}
                  </option>
                ))}
              </select>
              {/* <button
                onClick={() => {
                  setShoes(
                    data.shoes[Math.floor(Math.random() * data.shoes.length)]
                      .name
                  );
                  throttleClicks();
                }}
                className="select-shuffle-icon-button"
              >
                <FiRefreshCw size={30} className="select-shuffle-icon" />
              </button> */}
              <button
                onClick={() => {
                  setLockedTraits({
                    ...lockedTraits,
                    shoes: !lockedTraits.shoes,
                  });
                }}
                disabled={disabledButtonState}
                className="select-shuffle-icon-button"
              >
                {lockedTraits.shoes ? (
                  <FiLock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                ) : (
                  <FiUnlock
                    className="select-shuffle-icon"
                    color={'black'}
                    size={27.5}
                  />
                )}
              </button>
            </div>
            {/* <button
              onClick={() => {
                setShoes(
                  data.shoes[Math.floor(Math.random() * data.shoes.length)].name
                );
                throttleClicks();
              }}
              disabled={disabledButtonState}
              className="no-style-button"
            >
              <FiRefreshCw
                size={25}
                className={
                  disabledButtonState
                    ? 'disabled-random-trait-icon'
                    : 'random-trait-icon'
                }
              />{' '}
            </button> */}
          </div>
          {/* END SHOES */}

          {/* world */}
          <div className="inline-option-row">
            <span />
            <div className="inline-select-wrap">
              <label className="trait-label">World</label>
              <select
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className="trait-select"
              >
                {environmentAttributes.map((arrayValue) => (
                  <option key={arrayValue.value} value={arrayValue.value}>
                    {arrayValue.name}
                  </option>
                ))}
              </select>
            </div>{' '}
          </div>
          {/* end world */}

          {/*  Animation */}
          <div className="inline-option-row">
            <span />
            <div className="inline-select-wrap">
              <label>Animation</label>
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
                className="trait-select"
              >
                {data.animations.map((animationObj) => (
                  <option key={animationObj.value} value={animationObj.name}>
                    {animationObj.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/*  End animation */}

          {/*  Rotate */}
          <div className="inline-option-row">
            <span />
            <div className="inline-select-wrap">
              <label>Rotate View</label>
              <select
                value={autoRotate}
                onChange={(e) => setAutoRotate(e.target.value)}
                className="trait-select"
              >
                {rotateOptions.map((rotateObj, index) => (
                  <option key={index} value={rotateObj.value}>
                    {rotateObj.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* end Rotate */}

          <div className="menu-footer-row">
            <div className="menu-footer-row-container">
              <button
                className="menu-button"
                onClick={() => {
                  setShowMintModal(true);
                }}
              >
                MINT NOUN
              </button>
            </div>
            <div className="menu-footer-row-container">
              <button
                className="menu-button"
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
                DOWNLOAD NOUN
                {downloadingModel && (
                  <Spinner
                    animation="border"
                    style={{
                      marginLeft: '10px',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="open-menu-container">
        {optionsVisibility === 'none' ? (
          <>
            {/* <button
              className={disabledButtonState ? 'disabled' : 'noun-button'}
              onClick={() => {
                generateRandomNoun();
                throttleClicks();
              }}
              disabled={disabledButtonState}
            >
              RANDOMIZE
            </button> */}
            <button
              onClick={() => {
                setOptionsVisibility('block');
                hideModals(setShowAboutModal, setShowMintModal);
              }}
              className={'noun-button'}
              style={{ marginLeft: '20px' }}
            >
              OPTIONS
            </button>
            <button
              onClick={() => {
                setShowAboutModal(true);
                setShowMintModal(false);
              }}
              className={'noun-button'}
              style={{ marginLeft: '20px' }}
            >
              ABOUT
            </button>
          </>
        ) : null}
      </div>
      {showAboutModal && (
        <InformationModal
          show={showAboutModal}
          setShowAboutModal={setShowAboutModal}
          //   onHide={() => setShowAboutModal(false)}
        />
      )}
      {showMintModal && (
        <MintModal
          show={showMintModal}
          setShowMintModal={setShowMintModal}
          //   onHide={() => setShowMintModal(false)}
        />
      )}
    </>
  );
};

export default MenuTwo;

const hideModals = (setShowAboutModal, setShowMintModal) => {
  setShowAboutModal(false);
  setShowMintModal(false);
};

const InformationModal = (props) => {
  return (
    <div className="modal-box-popup">
      <div>
        <h2>3D Nouns </h2>
        <h4>
          <a href="https://nouns.wtf" target="_blank" className="modal-link">
            Nouns
          </a>{' '}
          are an experimental attempt to improve the formation of on-chain
          avatar communities. While projects such as Cryptopunks have attempted
          to bootstrap digital community and identity, Nouns attempt to
          bootstrap identity, community, governance and a treasury that can be
          used by the community.
        </h4>
        <h4>
          3D Nouns was the first community extension of the Nouns ecosystem. The
          project was proposed under Nouns DAO Proposal Two, where it passed
          with a vote of 12-0 on September 2nd, 2021.
        </h4>
      </div>
      <div className="profile-section">
        <div className="margin-auto">
          <img className="profile-picture" src={FloydPicture} />
          <p className="bio-header">Software Engineer</p>
        </div>
        <div className="margin-auto">
          <img className="profile-picture" src={CoralPicture} />
          <p className="bio-header">Designer/ Artist</p>
        </div>
      </div>
      {/* <div className="credit-container">
        <span className="credit-container-text">
          <a className="credit-container-link" href="https://nouns.wtf">
            nouns.wtf
          </a>{' '}
          ❤️ by{' '}
          <a
            className="credit-container-link"
            href="https://twitter.com/0xFloyd"
          >
            0xFloyd
          </a>{' '}
          and{' '}
          <a
            className="credit-container-link"
            href="https://twitter.com/coralorca"
          >
            CoralOrca
          </a>
        </span>
      </div> */}
      <div className="modal-footer-container">
        <button
          className="modal-closer"
          onClick={() => props.setShowAboutModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MintModal = (props) => {
  return (
    <div className="modal-box-popup">
      <button
        onClick={() => props.setShowMintModal(false)}
        className="modal-closer"
      >
        Close
      </button>
      <div>
        <h2>
          Interested in minting your own custom{' '}
          <span className="noun-color-h2">3D Noun</span>?
        </h2>
        <h4>
          We're currently looking into options that would let community members
          mint their own 3D Noun as part of a larger 3D Nouns collection. If
          this interests you, reach out and let us know on twitter{' '}
          <a
            href="https://twitter.com/3dnouns"
            target="_blank"
            className="modal-link"
          >
            @3DNouns
          </a>
          !
        </h4>
      </div>
    </div>
  );
};
