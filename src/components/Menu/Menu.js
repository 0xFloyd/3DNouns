import React, { useEffect, useState } from "react";
import { Nav, Navbar, Spinner } from "react-bootstrap";
import data from "../../data.json";
import "../../styles/menu.css";
import { isDesktop, isMobile } from "react-device-detect";
import ScreenshotModal from "components/ScreenshotModal";
import AnimationSelect from "components/Menu/AnimationSelect";
import CameraIcon from "../../assets/images/cameraIcon.svg";
import CrossIcon from "../../assets/images/XcrossIcon.svg";
import { gql, useQuery } from "@apollo/client";
import {
  GET_NOUNS,
  hideModals,
  rotateOptions,
  throttleClicks,
  truncateString,
} from "utils/utils";
import MintModal from "./MintModal";
import InformationModal from "./InformationModal";
import MenuOption from "./MenuOption";
import NounIdInput from "./NounIdInput";

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
  const [optionsVisibility, setOptionsVisibility] = useState("block");
  const [randomizerOn, setRandomizerOn] = useState(false);
  const [seed, setSeed] = useState(null);
  const [triggeredOnce, setTriggeredOnce] = useState(false);
  const [graphqlError, setGraphqlError] = useState("");

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
      setGlasses(
        data.glasses[Math.floor(Math.random() * data.glasses.length)].name
      );
    }
    if (!lockedTraits.body) {
      setBody(data.body[Math.floor(Math.random() * data.body.length)].name);
    }

    if (!lockedTraits.accessory) {
      setAccessory(
        data.accessory[Math.floor(Math.random() * data.accessory.length)].name
      );
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
        let traitData = graphQLData.nouns.find(
          (element) => element.id === seed
        );

        if (traitData) {
          let head = data.head.find(
            (element) => element.id == traitData.seed.head
          );
          let body = data.body.find(
            (element) => element.id == traitData.seed.body
          );
          let glasses = data.glasses.find(
            (element) => element.id == traitData.seed.glasses
          );
          let accessory = data.accessory.find(
            (element) => element.id == traitData.seed.accessory
          );

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
          if (triggeredOnce) {
            setGraphqlError("Error fetching Noun data");
            setTimeout(() => {
              setGraphqlError("");
            }, 5000);
          }
        }
      } else {
        if (triggeredOnce) {
          setGraphqlError("Error fetching Noun data");
          setTimeout(() => {
            setGraphqlError("");
          }, 5000);
        }
      }
    } catch {}
  }, [seed, graphQLData]);

  return (
    <>
      {/* {progress === 100 && ( */}
      <>
        <div
          className="tw-transition-all options-container "
          style={{ display: optionsVisibility }}
        >
          {optionsVisibility === "block" ? (
            <div className="tw-flex tw-flex-row tw-items-center tw-justify-between ">
              <button
                className={
                  disabledButtonState
                    ? "screenshot-button-disabled"
                    : "screenshot-button" + " button-studio"
                }
                onClick={() => {
                  // saveAsImage();
                  // stop animation
                  setDisabledButtonState(true);
                  setAnimationState(false);
                  setAnimationValue("none");
                  setTimeout(() => {
                    setShowScreenshotModal(true);
                    setDisabledButtonState(false);
                  }, 1000);
                }}
                disabled={disabledButtonState}
              >
                {/* <BsCameraFill size={20} color="black" /> */}
                <p className="special-font-style ">STUDIO</p>
              </button>

              {/* <div className="header-randomize-container"> */}
              <button
                className={
                  disabledButtonState
                    ? "rainbow-button-disabled"
                    : "rainbow-button"
                }
                onClick={() => {
                  generateRandomNoun();
                  throttleClicks(setDisabledButtonState);
                }}
                disabled={disabledButtonState}
              >
                <p className="special-font-style ">GENERATE!</p>
              </button>
              {/* </div> */}

              <button
                className="options-menu-x-button"
                onClick={() => {
                  setOptionsVisibility("none");
                  setShowMintModal(false);
                }}
              >
                <img src={CrossIcon} alt="x-icon" className="X-Cross-icon" />
              </button>
            </div>
          ) : null}

          <NounIdInput
            seed={seed}
            setSeed={setSeed}
            setTriggeredOnce={setTriggeredOnce}
            graphqlError={graphqlError}
            setGraphqlError={setGraphqlError}
          />

          <div
            className="options-controls"
            style={{ display: optionsVisibility }}
          >
            {/* HEAD */}
            <MenuOption
              value={head}
              setValue={setHead}
              category={"head"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  GLASSES */}
            <MenuOption
              value={glasses}
              setValue={setGlasses}
              category={"glasses"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  BODY */}
            <MenuOption
              value={body}
              setValue={setBody}
              category={"body"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  ACCESSORY */}
            <MenuOption
              value={accessory}
              setValue={setAccessory}
              category={"accessory"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  PANTS */}
            <MenuOption
              value={pants}
              setValue={setPants}
              category={"pants"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            {/*  SHOES */}
            <MenuOption
              value={shoes}
              setValue={setShoes}
              category={"shoes"}
              lockedTraits={lockedTraits}
              setLockedTraits={setLockedTraits}
              disabled={disabledButtonState}
            />

            <div className=" tw-flex tw-justify-between">
              <div className="inline-option-row special-footer-button">
                <div className="inline-select-wrap ">
                  <label className="trait-label menu-bottom-title">world</label>
                  <select
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                    className="trait-select menu-bottom-dropdown"
                  >
                    {data.world.map((arrayValue) => (
                      <option key={arrayValue.value} value={arrayValue.value}>
                        {arrayValue.name}
                      </option>
                    ))}
                  </select>
                </div>{" "}
              </div>

              <AnimationSelect
                animationValue={animationValue}
                setAnimationState={setAnimationState}
                setAnimationValue={setAnimationValue}
              />
            </div>

            <div className=" tw-flex tw-flex-row tw-justify-between">
              <div className="inline-option-row">
                <div className="toggle-wrap ">
                  <label className="toggle-button-title border-select">
                    Rotate
                  </label>
                  <button
                    className={`toggle-button ${autoRotate ? "active" : ""}`}
                    onClick={() => setAutoRotate(!autoRotate)}
                  >
                    {autoRotate ? "On" : "Off"}
                  </button>
                </div>
              </div>

              <div className="inline-option-row special-footer-button download-menu-button bg-black">
                <button
                  onClick={() => {
                    setAnimationState(false);
                    setDownloadingModel(true);
                    setTimeout(() => {
                      downloadModel();
                    }, 1500);
                  }}
                >
                  <p className="special-font-style"> GET GLTF</p>
                  {downloadingModel && (
                    <Spinner
                      animation="border"
                      style={{
                        marginLeft: "10px",
                        width: "15px",
                        height: "15px",
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
        {optionsVisibility === "none" ? (
          <div className="tw-hidden lg:tw-flex tw-flex tw-flex-row tw-items-center">
            <button
              className={
                // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
                disabledButtonState
                  ? "rainbow-button-disabled"
                  : "rainbow-button"
              }
              onClick={() => {
                generateRandomNoun();
                throttleClicks(setDisabledButtonState);
              }}
              disabled={disabledButtonState}
            >
              <p className="special-font-style "> GENERATE!</p>
            </button>
            <button
              style={{ marginLeft: "20px", marginRight: "0px" }}
              className={
                disabledButtonState
                  ? "screenshot-button-disabled"
                  : "screenshot-button"
              }
              onClick={() => {
                // saveAsImage();
                // stop animation
                setDisabledButtonState(true);
                setAnimationState(false);
                setAnimationValue("none");
                setTimeout(() => {
                  setShowScreenshotModal(true);
                  setDisabledButtonState(false);
                }, 1000);
              }}
            >
              {/* <BsCameraFill size={20} color="black" /> */}
              <p className="special-font-style "> STUDIO </p>
            </button>
            <button
              className="screenshot-button bg-white"
              style={{ marginLeft: "20px" }}
              onClick={() => {
                saveAsImage();
                // setAnimationState(false);
                // setAnimationValue('none');
                // setTimeout(() => {
                //   setShowScreenshotModal(true);
                // }, 1000);
              }}
            >
              <img
                src={CameraIcon}
                alt="camera-icon"
                className="tw-object-fit camera-icon"
              />
            </button>
            <button
              onClick={() => {
                setOptionsVisibility("block");
                hideModals(setShowAboutModal, setShowMintModal);
              }}
              className="menu-button-options bg-black"
              style={{ marginLeft: "20px" }}
            >
              <p className="special-font-style "> OPTIONS </p>
            </button>
          </div>
        ) : null}

        {optionsVisibility === "none" && (
          // <div className= <>
          <div className="tw-block lg:tw-hidden">
            <Navbar
              style={{ touchAction: "manipulation" }}
              expand="lg"
              className="justify-content-end"
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav.Link
                  onClick={() => {
                    setOptionsVisibility("block");
                    hideModals(setShowAboutModal, setShowMintModal);
                  }}
                  className="special-font-style font-white navbar-font"
                >
                  Options
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setShowAboutModal(true);
                    setShowMintModal(false);
                  }}
                  className="special-font-style font-white navbar-font"
                >
                  About
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
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
      {optionsVisibility === "none" && (
        <div className="tw-flex lg:tw-hidden mobile-footer ">
          <button
            className={
              // disabledButtonState ? 'menu-button-disabled' : 'menu-button'
              disabledButtonState
                ? "menu-button-disabled"
                : "menu-button" + " test-class"
            }
            onClick={() => {
              generateRandomNoun();
              throttleClicks(setDisabledButtonState);
            }}
            disabled={disabledButtonState}
          >
            <p className="special-font-style font-white ">GENERATE!</p>
          </button>

          <button
            className={
              disabledButtonState
                ? "mobile-screenshot-button-disabled" +
                  " button-studio-disabled"
                : "mobile-screenshot-button" + " button-studio"
            }
            onClick={() => {
              // saveAsImage();
              // stop animation
              setDisabledButtonState(true);
              setAnimationState(false);
              setAnimationValue("none");
              setTimeout(() => {
                setShowScreenshotModal(true);
                setDisabledButtonState(false);
              }, 1000);
            }}
          >
            {/* <BsCameraFill size={20} color="black" /> */}
            <p className="special-font-style font-white"> STUDIO </p>
          </button>
          <button
            className="menu-button"
            onClick={() => {
              saveAsImage();
            }}
          >
            {/* <BsCameraFill size={20} color="black" /> */}

            <img
              src={CameraIcon}
              alt="camera-icon"
              className="X-Cross-icon-2"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
