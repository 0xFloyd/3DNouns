import React, { useEffect, useState } from "react";
import logo from "../../assets/images/HomePageLogo.png";

import SkeletonGif from "../../assets/images/SkeletonNoun.gif";
import CloudGif from "../../assets/images/CloudNoun.gif";
import BotGif from "../../assets/images/botNoun.gif";
import SquidGif from "../../assets/images/SquidNoun.gif";
import NoodlesGif from "../../assets/images/NoodlesNoun.gif";
import DinoGif from "../../assets/images/dinoNoun.gif";
import BonzaiGif from "../../assets/images/BonzaiNoun.gif";
import SandwichGif from "../../assets/images/nounSandwich.gif";

import ARGif from "../../assets/images/ARfilterCrop.gif";
import Section from "./Section";
import { Col } from "react-bootstrap";
import classes from "./HomePage.module.css";
import Accordion from "react-bootstrap/Accordion";
import Link from "./Link";
import "./HomePage.css";
import CoralPicture from "../../assets/images/CoralOrcaProfilePicture400.jpg";
import FloydPicture from "../../assets/images/FloydProfilePicture400.jpg";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { SiTwitter } from "react-icons/si";
import nounsArmy from "../../assets/images/ArmyFooterLarge.webp";
import Axo from "../../assets/images/Axo.jpg";
import nounsHeart from "../../assets/images/nounsHeart.gif";
import "../../index.css";
import { BsDiscord } from "react-icons/bs";
import { useProgress } from "@react-three/drei";
import Spinner from "react-bootstrap/Spinner";

import TweetEmbed from "./TwitterEmbed";

const HomePage = ({ hidePage, setHidePage }) => {
  const gifList = [
    SkeletonGif,
    CloudGif,
    BotGif,
    SquidGif,
    NoodlesGif,
    DinoGif,
    BonzaiGif,
    SandwichGif,
  ];

  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) =>
        prevIndex === gifList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500); // Swap GIFs every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const [isFadingOut, setIsFadingOut] = useState(false);

  const { active, progress, errors, item, loaded, total } = useProgress();

  const fadeOut = () => {
    setIsFadingOut(true);
    setTimeout(() => handleRemoveItem(), 1000);
  };
  const handleRemoveItem = () => {
    setHidePage(true);
    // setIsFadingOut(false);
  };

  return (
    <div
      className={
        `homepage-body ${isFadingOut ? "item-fadeout" : ""}` +
        " tw-scroll-smooth"
      }
      style={{ visibility: hidePage ? "hidden" : "visible" }}
    >
      <div className="tw-bg-opacity-30 tw-bg-black !tw-h-[75vh] ">
        <header>
          <section>
            <div
              className="div-section-test"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img className="App-logo" src={logo} alt="3D NOUNS" />
              <p className="special-font-style main-title-homepage">3D NOUNS</p>

              <div className="tw-flex-grow" />

              <div>
                <nav
                  aria-label="main"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: "2rem",
                  }}
                >
                  <a
                    href="#CC0"
                    className="special-font-style main-title-menu hover:opacity-90 "
                  >
                    CC0
                  </a>
                  <a
                    href="#Assets"
                    className="special-font-style main-title-menu hover:opacity-90 "
                  >
                    Assets
                  </a>
                  <a
                    href="#AR"
                    className="special-font-style main-title-menu hover:opacity-90 "
                  >
                    AR
                  </a>
                </nav>
              </div>
            </div>
          </section>
        </header>

        <div className="enter-container ">
          {
            <button
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="enter-button tw-transition-all hover:tw-scale-110 special-font-style"
              disabled={!loaded}
              onClick={() => fadeOut()}
            >
              ENTER
            </button>
          }
        </div>
      </div>

      {/* <Section fullWidth={false}> */}

      <div
        className="tw-pt-8 lg:tw-pt-10"
        style={{
          background: "#121212",
        }}
      >
        <Col lg={{ span: 10, offset: 1 }}>
          <div className={classes.headerWrapper}>
            <h1
              id="CC0"
              className="tw-mb-12 md:tw-mb-0 special-font-style tw-scroll-mt-10 top-title-style"
              style={{
                textAlign: "center",
                lineHeight: "1.8",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              OPEN-SOURCE 3D AVATARS
            </h1>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32">
              <div className=" div-section-test ">
                <img
                  className=" tw-mb-12 md:tw-mb-0 section-picture "
                  src={Axo}
                />
              </div>
              <div className=" homepage-text-block">
                <p className={classes.genericText}>
                  Experience 3D Nouns – a collection of 250 composable
                  characters that turns{" "}
                  <Link
                    text={"NounsDAOs'"}
                    url={"https://nouns.wtf"}
                    leavesPage={true}
                  />{" "}
                  pixel art into dynamic 3D avatars.
                  <br></br>
                  <br></br>
                  Step into the generator and unleash your creativity with
                  endless combinations, bringing Nouns to life like never
                  before!
                  <br></br>
                  <br></br>
                  As the first NounsDAO community proposal, 3D Nouns received
                  enthusiastic support and secured funding under{" "}
                  <Link
                    text={"Proposal #2."}
                    url={"https://nouns.wtf/vote/2"}
                    leavesPage={true}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* CC0 Assets */}

          <div className={classes.headerWrapper}>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32 ">
              <div className=" div-section-test ">
                <h1
                  id="Assets"
                  className="tw-mb-12 md:tw-mb-0 special-font-style tw-py-5 tw-scroll-mt-10  top-title-style"
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "XX-large",
                  }}
                >
                  CC0 Game Assets
                </h1>

                <img
                  className=" tw-mb-12 md:tw-mb-0 section-picture"
                  src={gifList[currentGifIndex]} // Use the current GIF based on the index
                  alt={`GIF ${currentGifIndex + 1}`}
                />
              </div>
              <div className=" homepage-text-block">
                <p className={classes.genericText}>
                  There are 250 CCO assets available for your enjoyement!
                  Customize your character, animate and download it as a GLTF
                  file.
                  <br></br>
                  <br></br>
                  You can import GLTF files in 3D programs like{" "}
                  <Link
                    text={"Blender"}
                    url={"https://www.blender.org/"}
                    leavesPage={true}
                  />{" "}
                  or game engines like{" "}
                  <Link
                    text={"Unity"}
                    url={"https://unity.com/"}
                    leavesPage={true}
                  />{" "}
                  using this{" "}
                  <Link
                    text={"script"}
                    url={
                      "https://gist.github.com/sgarcia22/b80f65d33ccfc3e449f46c47ec933c9f"
                    }
                    leavesPage={true}
                    style={{ fontSize: "1.3rem" }}
                  />{" "}
                  .<br></br>
                  <br></br>
                  You can consider 3D printing them by converting the GLTF to
                  FBX with Blender and then to a STL file suitable for printing.
                </p>
              </div>
            </div>
          </div>

          {/* AR Filters */}

          <div className={classes.headerWrapper}>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32">
              <div className="div-section-test">
                <h1
                  id="AR"
                  className="tw-mb-12 md:tw-mb-0 special-font-style tw-py-5 tw-scroll-mt-10 top-title-style"
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "XX-large",
                  }}
                >
                  AR Filters
                </h1>

                <img
                  className=" tw-mb-12 md:tw-mb-0 section-picture "
                  src={ARGif}
                />
              </div>
              <div className=" homepage-text-block">
                <p className={classes.genericText}>
                  50+ 3D Nouns heads are also available as{" "}
                  <Link
                    text={"Snapchat"}
                    url={
                      "https://lensstudio.snapchat.com/creator/6y_fgP0Vr6RqaJt3jIJLRw"
                    }
                    leavesPage={true}
                    style={{ fontSize: "1.2rem" }}
                  />
                  ,{" "}
                  <Link
                    text={"Instagram"}
                    url={"https://www.instagram.com/0xcoralorca/"}
                    leavesPage={true}
                    style={{ fontSize: "1.2rem" }}
                  />{" "}
                  {` `} and{" "}
                  <Link
                    text={"Tik Tok"}
                    url={"https://www.tiktok.com/@0xcoralorca"}
                    leavesPage={true}
                    style={{ fontSize: "1.2rem" }}
                  />{" "}
                  {` `} Augmented Reality filters with over 2M plays!
                  <br></br>
                  <br></br>
                  Create Nounish stories and share them with your friends!
                  <br></br>
                  <br></br>
                  Additionnaly, you can download all blendshapes FBX models{" "}
                  <Link
                    text={"here"}
                    url={"https://www.tiktok.com/@0xcoralorca"}
                    leavesPage={true}
                    style={{ fontSize: "1.2rem" }}
                  />{" "}
                  to use in animations or games.
                  <br></br>
                  <br></br>
                  This was made possible thanks to NounsDAO's{" "}
                  <Link
                    text={"Proposal #182."}
                    url={"https://nouns.wtf/vote/182"}
                    leavesPage={true}
                  />
                </p>
              </div>
            </div>
          </div>

          <ul className="tw-flex tw-flex-row tw-list-none tw-mx-auto tw-items-center tw-gap-8 ul-twitter tw-mb-24">
            <li className=" tw-flex tw-flex-row tw-items-center">
              <TweetEmbed tweetId="1410600358317936640" />
            </li>
            <li className=" tw-flex tw-flex-row tw-items-center">
              <TweetEmbed tweetId="1454023001784020994" />
            </li>
            <li className=" tw-flex tw-flex-row tw-items-center">
              <TweetEmbed tweetId="1460203270199123975" />
            </li>
          </ul>

          <div className="profile-section-creators">
            <div className="profile-individual-section">
              <img className="profile-picture" src={CoralPicture} />
              <p className="bio-header">Creator</p>
              <div className="tw-flex tw-flex-row tw-items-center">
                <SiTwitter
                  className="twitter-logo"
                  size={isDesktop ? 30 : 25}
                  color="#1DA1F2"
                />
                <a
                  className="social-link special-font-style"
                  href="https://twitter.com/coralorca"
                  target="_blank"
                >
                  CoralOrca
                </a>
              </div>
            </div>

            <div className="profile-individual-section">
              <img className="profile-picture" src={FloydPicture} />

              <p className="bio-header">Engineer</p>
              <div className="tw-flex tw-flex-row tw-items-center">
                <SiTwitter
                  className="twitter-logo"
                  size={isDesktop ? 30 : 25}
                  color="#1DA1F2"
                />{" "}
                <a
                  className="social-link special-font-style"
                  href="https://twitter.com/0xFloyd"
                  target="_blank"
                >
                  0xFloyd
                </a>
              </div>
            </div>
          </div>
          <br></br>
        </Col>
      </div>

      {/* </Section> */}

      <div>
        <img src={nounsArmy} className="footer-image" />
      </div>
      <div className="footer-info">
        <p className="tw-flex tw-flex-row ">
          <a
            href="https://nouns.wtf/"
            target="_blank"
            className="custom-footer-link special-font-style"
          >
            Nouns.WTF
          </a>
          <img className="nouns-heart tw-mx-1" src={nounsHeart}></img>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
