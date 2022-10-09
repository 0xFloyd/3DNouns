import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Spinner } from 'react-bootstrap';
import data from '../../data.json';
import '../../styles/menu.css';
import { isDesktop, isMobile } from 'react-device-detect';
import ScreenshotModal from 'components/ScreenshotModal';
import AnimationSelect from 'components/Menu/AnimationSelect';
import CameraIcon from '../../assets/images/cameraIcon.svg';
import { gql, useQuery } from '@apollo/client';
import { GET_NOUNS, hideModals, rotateOptions, throttleClicks, truncateString } from 'utils/utils';
import MintModal from './MintModal';
import InformationModal from './InformationModal';
import MenuOption from './MenuOption';

const Menu = ({
  isDesktop,
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
  animationState,
  animationValue,
  setAnimationState,
  setAnimationValue,
  downloadModel,
  downloadingModel,
  setDownloadingModel,
  // saveAsImage,
  // setSceneState,
  showScreenshotModal,
  setShowScreenshotModal,
  saveAsImage,
}) => {
  const [disabledButtonState, setDisabledButtonState] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);
  const [optionsVisibility, setOptionsVisibility] = useState('block');
  const [randomizerOn, setRandomizerOn] = useState(false);
  const [seed, setSeed] = useState(null);
  const [userInput, setUserInput] = useState('');

  const [lockedTraits, setLockedTraits] = useState({
    head: false,
    glasses: false,
    body: false,
    accessory: false,
    pants: false,
    shoes: false,
  });

  const { loading, error, data: graphQLData } = useQuery(GET_NOUNS);

  const generateRandomNoun = () => {
    if (!lockedTraits.head) {
      setHead(data.head[Math.floor(Math.random() * data.head.length)].name);
    }

    if (!lockedTraits.glasses) {
      setGlasses(data.glasses[Math.floor(Math.random() * data.glasses.length)].name);
    }
    if (!lockedTraits.body) {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
    }

    if (!lockedTraits.accessory) {
      setAccessory(data.accessory[Math.floor(Math.random() * data.accessory.length)].name);
    }

    if (!lockedTraits.pants) {
      setPants(data.pants[Math.floor(Math.random() * data.pants.length)].name);
    }
    if (!lockedTraits.shoes) {
      setShoes(data.shoes[Math.floor(Math.random() * data.shoes.length)].name);
    }
  };

  useEffect(() => {
    try {
      if (graphQLData && seed && data) {
        let traitData = graphQLData.nouns.find((element) => element.id === seed);

        if (traitData) {
          let head = data.head.find((element) => element.id == traitData.seed.head);
          let body = data.body.find((element) => element.id == traitData.seed.body);
          let glasses = data.glasses.find((element) => element.id == traitData.seed.glasses);
          let accessory = data.accessory.find((element) => element.id == traitData.seed.accessory);

          if (head) {
            setHead(head.name);
          }
          if (body) {
            setBody(body.name);
          }
          if (accessory) {
            setAccessory(accessory.name);
          }
          if (glasses) {
            setGlasses(glasses.name);
          }
        } else {
          // console.log('no trait data');
        }
      } else {
        //  console.log('no graphql data');
      }
    } catch {}
  }, [seed, graphQLData]);

  return (
    <>
      {/* {progress === 100 && ( */}
      <>
        <div
          className={isDesktop ? 'options-container' : 'mobile-menu-container'}
          style={{ display: optionsVisibility }}
        >
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
                disabled={disabledButtonState}
              >
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
                    throttleClicks(setDisabledButtonState);
                  }}
                  disabled={disabledButtonState}
                >
                  RANDOMIZE
                </button>
              </div>
              <button
                className="options-menu-x-button"
                onClick={() => {
                  setOptionsVisibility('none');
                  setShowMintModal(false);
                }}
              >
                X
              </button>
            </div>
          ) : null}

          <div className="options-controls" style={{ display: optionsVisibility }}>
            {/* HEAD */}
            <MenuOption
              value={head}
              setValue={setHead}
              category={'head'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  GLASSES */}
            <MenuOption
              value={glasses}
              setValue={setGlasses}
              category={'glasses'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  BODY */}
            <MenuOption
              value={body}
              setValue={setBody}
              category={'body'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  ACCESSORY */}
            <MenuOption
              value={accessory}
              setValue={setAccessory}
              category={'accessory'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  PANTS */}
            <MenuOption
              value={pants}
              setValue={setPants}
              category={'pants'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  SHOES */}
            <MenuOption
              value={shoes}
              setValue={setShoes}
              category={'shoes'}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

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
            <AnimationSelect
              animationValue={animationValue}
              setAnimationState={setAnimationState}
              setAnimationValue={setAnimationValue}
            />
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
      </>

      <div className="open-menu-container">
        {optionsVisibility === 'none' && isDesktop ? (
          <>
            <button
              className={
                // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
                disabledButtonState ? 'rainbow-button-disabled' : 'rainbow-button'
              }
              onClick={() => {
                generateRandomNoun();
                throttleClicks(setDisabledButtonState);
              }}
              disabled={disabledButtonState}
            >
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
              }}
            >
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
              }}
            >
              SCREENSHOT
            </button>
            <button
              onClick={() => {
                setOptionsVisibility('block');
                hideModals(setShowAboutModal, setShowMintModal);
              }}
              className="menu-button-options"
              style={{ marginLeft: '20px' }}
            >
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
                }}
              >
                Options
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setShowAboutModal(true);
                  setShowMintModal(false);
                }}
              >
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
          isDesktop={isDesktop}
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
              throttleClicks(setDisabledButtonState);
            }}
            disabled={disabledButtonState}
          >
            RANDOMIZE
          </button>

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
            }}
          >
            {/* <BsCameraFill size={20} color="black" /> */}
            <img src={CameraIcon} alt="camera-icon" className="camera-noun-icon" />
          </button>
          <button
            className="menu-button"
            onClick={() => {
              saveAsImage();
            }}
          >
            {/* <BsCameraFill size={20} color="black" /> */}
            SCREENSHOT
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
