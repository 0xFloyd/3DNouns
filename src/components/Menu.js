import React, { useState } from 'react';
import { Button, Col, Container, Form, FormCheck, Modal, Nav, Navbar, NavDropdown, Row, Spinner } from 'react-bootstrap';
import data from '../data.json';
import '../styles/menu.css';
import { FiRefreshCw, FiLock, FiUnlock } from 'react-icons/fi';
import { SiTwitter } from 'react-icons/si';
import { BsCameraFill, BsDiscord } from 'react-icons/bs';
import RandomNounButton from 'past-ideas/RandomNounButton';
import { useThree } from '@react-three/fiber';
import CoralPicture from '../assets/images/CoralOrcaProfilePicture400.jpg';
import FloydPicture from '../assets/images/FloydProfilePicture400.jpg';
import { isDesktop, isMobile } from 'react-device-detect';
import { useProgress } from '@react-three/drei';
import ScreenshotModal from 'components/ScreenshotModal';
import AnimationSelect from 'components/AnimationSelect';
import CameraIcon from '../assets/images/cameraIcon.svg';
import ClosedLockIcon from '../assets/images/lockIconClosed.svg';
import OpenLockIcon from '../assets/images/lockIconOpen.svg';
import * as THREE from 'three';

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
  // saveAsImage,
  randomizerOn,
  setRandomizerOn,
  // setSceneState,
  showScreenshotModal,
  setShowScreenshotModal,
  saveAsImage,
}) => {
  const rotateOptions = [
    { name: 'Off', value: 'false' },
    { name: 'On', value: 'true' },
  ];

  const [disabledButtonState, setDisabledButtonState] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);
  // const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [sceneScreenshotState, setSceneScreenshotState] = useState(null);

  const throttleClicks = () => {
    // throttle random button clicks
    setDisabledButtonState(true);
    setTimeout(() => {
      setDisabledButtonState(false);
    }, 350);
  };

  const { progress } = useProgress();

  return (
    <>
      {progress === 100 && (
        <>
          <div className={isDesktop ? 'options-container' : 'mobile-menu-container'} style={{ display: optionsVisibility }}>
            {optionsVisibility === 'block' ? (
              <div className="menu-header-row">
                <button
                  className={disabledButtonState ? 'screenshot-button-disabled' : 'screenshot-button'}
                  onClick={() => {
                    // saveAsImage();
                    // stop animation
                    setDisabledButtonState(true);
                    setAnimationState(false);
                    setAnimationValue('none');
                    setTimeout(() => {
                      setShowScreenshotModal(true);
                      setDisabledButtonState(false);
                    }, 1000);
                  }}
                  disabled={disabledButtonState}>
                  {/* <BsCameraFill size={20} color="black" /> */}
                  <img src={CameraIcon} alt="camera-icon" className="camera-noun-icon" />
                </button>

                <div className="header-randomize-container">
                  <button
                    className={
                      // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
                      disabledButtonState ? 'rainbow-button-disabled' : 'rainbow-button'
                    }
                    onClick={() => {
                      generateRandomNoun();
                      throttleClicks();
                    }}
                    disabled={disabledButtonState}>
                    RANDOMIZE
                  </button>
                </div>
                <button
                  className="options-menu-x-button"
                  onClick={() => {
                    setOptionsVisibility('none');
                    setShowMintModal(false);
                  }}>
                  X
                </button>
              </div>
            ) : null}

            <div className="options-controls" style={{ display: optionsVisibility }}>
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
                  <select value={head} className="trait-select" onChange={(e) => setHead(e.target.value)}>
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.head ? (
                      // <FiLock
                      //   className="select-shuffle-icon"
                      //   color={'black'}
                      //   size={27.5}
                      // />
                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      // <FiUnlock
                      //   className="select-shuffle-icon"
                      //   color={'grey'}
                      //   size={27.5}
                      // />
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <label className="trait-label">Glasses</label>

                  <select value={glasses} onChange={(e) => setGlasses(e.target.value)} className="trait-select">
                    {data.glasses.map((glasses) => (
                      <option key={glasses.value} value={glasses.value}>
                        {truncateString(glasses.name)}
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.glasses ? (
                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <label className="trait-label">Body</label>
                  <select value={body} onChange={(e) => setBody(e.target.value)} className="trait-select">
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.body ? (
                      // <FiLock
                      //   className="select-shuffle-icon"
                      //   color={'black'}
                      //   size={27.5}
                      // />

                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      // <FiUnlock
                      //   className="select-shuffle-icon"
                      //   color={'grey'}
                      //   size={27.5}
                      // />
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <label className="trait-label">Accessory</label>
                  <select value={accessory} onChange={(e) => setAccessory(e.target.value)} className="trait-select">
                    {data.tempAccessories.map((accessory, index) => (
                      <option key={index} value={accessory.name}>
                        {accessory.name}
                        {/* {truncateString(accessory.name)} */}
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.accessory ? (
                      // <FiLock
                      //   className="select-shuffle-icon"
                      //   color={'black'}
                      //   size={27.5}
                      // />

                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      // <FiUnlock
                      //   className="select-shuffle-icon"
                      //   color={'grey'}
                      //   size={27.5}
                      // />
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <label className="trait-label">Pants</label>
                  <select value={pants} onChange={(e) => setPants(e.target.value)} className="trait-select">
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.pants ? (
                      // <FiLock
                      //   className="select-shuffle-icon"
                      //   color={'black'}
                      //   size={27.5}
                      // />

                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      // <FiUnlock
                      //   className="select-shuffle-icon"
                      //   color={'grey'}
                      //   size={27.5}
                      // />
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <label className="trait-label">Shoes</label>

                  <select value={shoes} onChange={(e) => setShoes(e.target.value)} className="trait-select">
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
                    className="select-shuffle-icon-button">
                    {lockedTraits.shoes ? (
                      // <FiLock
                      //   className="select-shuffle-icon"
                      //   color={'black'}
                      //   size={27.5}
                      // />

                      <img src={ClosedLockIcon} alt="lock-icon" className="lock-noun-icon" />
                    ) : (
                      // <FiUnlock
                      //   className="select-shuffle-icon"
                      //   color={'grey'}
                      //   size={27.5}
                      // />
                      <img src={OpenLockIcon} alt="lock-icon" className="lock-noun-icon" />
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
                  <select value={environment} onChange={(e) => setEnvironment(e.target.value)} className="trait-select">
                    {data.world.map((arrayValue) => (
                      <option key={arrayValue.value} value={arrayValue.value}>
                        {arrayValue.name}
                      </option>
                    ))}
                  </select>
                </div>{' '}
              </div>
              {/* end world */}

              {/*  Animation */}
              <AnimationSelect animationValue={animationValue} setAnimationState={setAnimationState} setAnimationValue={setAnimationValue} />

              {/*  End animation */}

              {/*  Rotate */}
              <div className="inline-option-row">
                <span />
                <div className="inline-select-wrap">
                  <label className="trait-label">Rotate View</label>
                  <select value={autoRotate} onChange={(e) => setAutoRotate(e.target.value)} className="trait-select">
                    {rotateOptions.map((rotateObj, index) => (
                      <option key={index} value={rotateObj.value}>
                        {rotateObj.name}
                      </option>
                    ))}
                  </select>
                </div>




              </div>
              {/* end Rotate */}
              {/* <Form>
              <FormCheck
                id="switchEnabled"
                type="switch"
                checked={randomizerOn}
                onChange={() => setRandomizerOn(!randomizerOn)}
                label="Cycle (dev only - remove on prod)"
              />
            </Form> */}
              <div className="menu-footer-row">
                {/*<div className="menu-footer-row-container">
                  <button
                    className="menu-button"
                    onClick={() => {
                      setShowMintModal(true);
                    }}>
                    MINT NOUN
                  </button>
                </div>
                */}
                <div className="menu-footer-row-container">
                  <button
                    className="download-menu-button"
                    onClick={() => {
                      setAnimationState(false);
                      // setAnimationValue('tpose');
                      setDownloadingModel(true);
                      setTimeout(() => {
                        downloadModel();
                      }, 1500);
                    }}
                    // disabled={true}
                  >
                    DOWNLOAD
                    <br />
                    NOUN
                    {/* {`< Coming soon! >`} */}
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

          {/* {showScreenshotModal && (
            <div className="screenshot-container">
              <div className="modal-footer-container">
                <button
                  className="options-menu-x-button"
                  onClick={() => setShowScreenshotModal(false)}
                >
                  X
                </button>
              </div>
            </div>
          )} */}
        </>
      )}
      <div className="open-menu-container">
        {optionsVisibility === 'none' && isDesktop ? (
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
              className={
                // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
                disabledButtonState ? 'rainbow-button-disabled' : 'rainbow-button'
              }
              onClick={() => {
                generateRandomNoun();
                throttleClicks();
              }}
              disabled={disabledButtonState}>
              RANDOMIZE
            </button>
            <button
              style={{ marginLeft: '20px', marginRight: '0px' }}
              className={disabledButtonState ? 'screenshot-button-disabled' : 'screenshot-button'}
              onClick={() => {
                // saveAsImage();
                // stop animation
                setDisabledButtonState(true);
                setAnimationState(false);
                setAnimationValue('none');
                setTimeout(() => {
                  setShowScreenshotModal(true);
                  setDisabledButtonState(false);
                }, 1000);
              }}>
              {/* <BsCameraFill size={20} color="black" /> */}
              <img src={CameraIcon} alt="camera-icon" className="camera-noun-icon" />
            </button>
            <button
              className="menu-button"
              style={{ marginLeft: '20px' }}
              onClick={() => {
                saveAsImage();
                // setAnimationState(false);
                // setAnimationValue('none');
                // setTimeout(() => {
                //   setShowScreenshotModal(true);
                // }, 1000);
              }}>
              SCREENSHOT
            </button>
            <button
              onClick={() => {
                setOptionsVisibility('block');
                hideModals(setShowAboutModal, setShowMintModal);
              }}
              className="menu-button-options"
              style={{ marginLeft: '20px' }}>
              OPTIONS
            </button>

          </>
        ) : null}

        {isMobile && optionsVisibility === 'none' && (
          // <div className= <>
          <Navbar style={{ touchAction: 'manipulation' }} expand="lg" className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav.Link
                onClick={() => {
                  setOptionsVisibility('block');
                  hideModals(setShowAboutModal, setShowMintModal);
                }}>
                Options
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setShowAboutModal(true);
                  setShowMintModal(false);
                }}>
                About
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        )}
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
      {showScreenshotModal && (
        <ScreenshotModal
          head={head}
          body={body}
          accessory={accessory}
          pants={pants}
          glasses={glasses}
          shoes={shoes}
          animationState={animationState}
          animationValue={animationValue}
          setAnimationState={setAnimationState}
          setAnimationValue={setAnimationValue}
          // setSceneScreenshotState={setSceneScreenshotState}
          showScreenshotModal={showScreenshotModal}
          setShowScreenshotModal={setShowScreenshotModal}
        />
      )}
      {isMobile && optionsVisibility === 'none' && (
        <div className="mobile-footer">
          <button
            className={
              // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
              disabledButtonState ? 'menu-button-disabled' : 'menu-button'
            }
            onClick={() => {
              generateRandomNoun();
              throttleClicks();
            }}
            disabled={disabledButtonState}>
            RANDOMIZE
          </button>
          {/* <button
            className={
              // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
              disabledButtonState ? 'footer-button-disabled' : 'footer-button'
            }
            onClick={() => {
              saveAsImage();
            }}
            disabled={disabledButtonState}
          >
            SCREENSHOT
          </button> */}
          <button
            className={disabledButtonState ? 'mobile-screenshot-button-disabled' : 'mobile-screenshot-button'}
            onClick={() => {
              // saveAsImage();
              // stop animation
              setDisabledButtonState(true);
              setAnimationState(false);
              setAnimationValue('none');
              setTimeout(() => {
                setShowScreenshotModal(true);
                setDisabledButtonState(false);
              }, 1000);
            }}>
            {/* <BsCameraFill size={20} color="black" /> */}
            <img src={CameraIcon} alt="camera-icon" className="camera-noun-icon" />
          </button>
          <button
            className="menu-button"
            onClick={() => {
              saveAsImage();
              // setAnimationState(false);
              // setAnimationValue('none');
              // setTimeout(() => {
              //   setShowScreenshotModal(true);
              // }, 1000);
            }}>
            {/* <BsCameraFill size={20} color="black" /> */}
            SCREENSHOT
          </button>
        </div>
      )}
    </>
  );
};

export default MenuTwo;

const hideModals = (setShowAboutModal, setShowMintModal) => {
  setShowAboutModal(false);
  setShowMintModal(false);
};

//hidden for now
const InformationModal = (props) => {
  return (
    <div className="modal-box-popup">
      <div>
        <h1 style={{ color: '#d63c5e', textAlign: 'center' }}>3D Nouns </h1>

        <h3 style={{ textAlign: 'center' }}>
          3D Nouns is the first community extension of the Nouns ecosystem. The project was proposed under Nouns DAO Proposal Two, where it passed unanimously
          on September 2nd, 2021.
        </h3>
        <h5 className="about-paragraph-text">
          <a href="https://nouns.wtf" target="_blank" className="modal-link">
            Nouns
          </a>{' '}
          are an experimental attempt to improve the formation of on-chain avatar communities, attempting to bootstrap identity, community, governance and a
          treasury for the community.
        </h5>
        <h5 className="about-paragraph-text">
          3D Nouns aims to expand Nouns into the online metaverse by creating avatars for existing and future digital platforms. Eventually, 3D Nouns will
          extend into many different mediums, including gaming, animation, virtual reality, and augmented reality.
        </h5>
        <h5 className="about-paragraph-text">
          3D Nouns stay true to the original Nouns ethos by emulating the original artwork and open source nature, while letting you craft your own 3D Noun or
          randomly generating one of over one billion different combinations.
        </h5>
      </div>
      <div className="profile-section">
        <div className="profile-individual-section">
          <img className="profile-picture" src={FloydPicture} />
          <p className="bio-header">Engineer</p>
          <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />{' '}
          <a className="social-link" href="https://twitter.com/0xFloyd" target="_blank">
            0xFloyd
          </a>
        </div>
        <div className="profile-individual-section">
          <img className="profile-picture" src={CoralPicture} />
          <p className="bio-header">Creator</p>
          <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
          <a className="social-link" href="https://twitter.com/coralorca" target="_blank">
            CoralOrca
          </a>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <div className="profile-individual-section">
          <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
          <a className="social-link" href="https://twitter.com/3dnouns" target="_blank">
            3D Nouns Twitter
          </a>
        </div>
        <div className="profile-individual-section">
          <BsDiscord className="twitter-logo" size={isDesktop ? 30 : 25} color="#5865F2" />
          <a className="social-link" href="https://discord.gg/kZZaz6jy2k" target="_blank">
            3D Nouns Discord
          </a>
        </div>
        <div className="profile-individual-section"></div>
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
        <button className="modal-closer" onClick={() => props.setShowAboutModal(false)}>
          X
        </button>
      </div>
    </div>
  );
};

//hidden for now
const MintModal = (props) => {
  return (
    <div className="modal-box-popup">
      <button onClick={() => props.setShowMintModal(false)} className="modal-closer">
        X
      </button>
      <div>
        <h2>
          Interested in minting your own custom <span className="noun-color-h2">3D Noun</span>?
        </h2>
        <h4>
          We're currently working on the feasibility of a 3D Noun NFT collection. If this interests you, follow us on twitter{' '}
          <SiTwitter className="mint-twitter-logo" size={25} color="#1DA1F2" />{' '}
          <a href="https://twitter.com/3dnouns" target="_blank" className="mint-modal-link">
            @3DNouns
          </a>{' '}
          and join the discord for updates <BsDiscord className="mint-twitter-logo" size={25} color="#5865F2" />
          <a className="mint-modal-link" href="https://discord.gg/kZZaz6jy2k" target="_blank">
            Discord
          </a>
          !
        </h4>
      </div>
    </div>
  );
};

const truncateString = (str) => {
  if (str.length > 15) {
    return str.slice(0, 16) + '...';
  } else {
    return str;
  }
};

// { "name": "none", "value": 9999 },
// { "name": "dance1", "value": 1 },
// { "name": "dance2", "value": 2 },
// { "name": "idle", "value": 3 },
// { "name": "jump", "value": 4 },
// { "name": "run", "value": 5 },
// { "name": "swim", "value": 6 },
// { "name": "tpose", "value": 7 },
// { "name": "walk", "value": 8 }
