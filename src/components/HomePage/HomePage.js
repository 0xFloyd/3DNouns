import React, { useEffect, useState } from "react";
import logo from "../../assets/images/HomePageLogo.png";

import SkeletonGif from "../../assets/images/SkeletonNoun.gif";
import CloudGif from "../../assets/images/CloudNoun.gif";
import BotGif from "../../assets/images/botNoun.gif";
import SquidGif from "../../assets/images/SquidNoun.gif";
import NoodlesGif from "../../assets/images/NoodlesNoun.gif";

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
import nounsHeart from "../../assets/images/nounsHeart.gif";
import nounsArmyAxo from "../../assets/images/ArmyAxo.png";
import "../../index.css";
import { BsDiscord } from "react-icons/bs";
import { useProgress } from "@react-three/drei";
import Spinner from "react-bootstrap/Spinner";

const HomePage = ({ hidePage, setHidePage }) => {
  const gifList = [SkeletonGif, CloudGif, BotGif, SquidGif, NoodlesGif];

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
      className={`homepage-body ${isFadingOut ? "item-fadeout" : ""}`}
      style={{ visibility: hidePage ? "hidden" : "visible" }}
    >
      <div className="tw-bg-opacity-30 tw-bg-black !tw-h-[80vh] ">
        <header className=" text-white sticky top-0 z-10 ">
          <section className="max-w-6xl mx-auto p-4 flex justify-betweem items-center sticky top-0 ">
            <a href="https://3dnouns.com">
              <img className=" App-logo " src={logo} alt="NOUNS" />
            </a>

            <h1 className="special-font-style main-title-homepage sticky top-0 ">
              3D NOUNS
            </h1>

            <div className="flex ml-auto">
              <button
                id="mobile-open-button"
                className="text-3xl sm:hidden focus:outline-none"
              >
                &#9776;
              </button>

              <nav
                className="hidden sm:block space-x-8 text-xl font-large "
                aria-label="main"
              >
                <a href="#anchor1" className=" hover:opacity-90">
                  CC0
                </a>
                <a href="#anchor2" className=" hover:opacity-90">
                  AR
                </a>
                <a href="#anchor3" className=" hover:opacity-90">
                  Game Assets
                </a>
              </nav>
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

      <div className="tw-pt-8 lg:tw-pt-16  tw-bg-white">
        <Col lg={{ span: 10, offset: 1 }}>
          <div className={classes.headerWrapper}>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32">
              <h1
                className="tw-mb-12 md:tw-mb-0 special-font-style"
                style={{
                  textAlign: "center",
                  color: "#000000",
                  fontSize: "XX-large",
                  lineHeight: "1.8",
                }}
              >
                Open-Source<br></br>3D Avatars
              </h1>
              <p className={classes.genericText}>
                Experience 3D Nouns – a collection of 250 composable characters
                that turns{" "}
                <Link
                  text={"NounsDAOs'"}
                  url={"https://nouns.wtf"}
                  leavesPage={true}
                />{" "}
                pixel art into dynamic 3D avatars.
                <br></br>
                <br></br>
                Step into the generator and unleash your creativity with endless
                combinations, bringing Nouns to life like never before!
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

          {/* CC0 Assets */}

          <div className={classes.headerWrapper}>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32 ">
              <div className=" div-section-test ">
                <h1
                  className="tw-mb-12 md:tw-mb-0 special-font-style tw-py-5"
                  style={{
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "X-large",
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
              <div className="div-test">
                <p className={classes.genericText}>
                  250 CCO assets available for your enjoyement!
                  <br></br>
                  <br></br>
                  Customize your character, animate and download it as a GLTF
                  file!
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
                  .
                </p>
              </div>
            </div>
          </div>

          {/* AR Filters */}

          <div className={classes.headerWrapper}>
            <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32">
              <div className="div-section-test">
                <h1
                  className="tw-mb-12 md:tw-mb-0 special-font-style "
                  style={{
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "X-large",
                  }}
                >
                  AR Filters
                </h1>

                <img
                  className=" tw-mb-12 md:tw-mb-0 section-picture "
                  src={ARGif}
                />
              </div>
              <div className="div-test">
                <p className={classes.genericText}>
                  50+ 3D Nouns heads are available as{" "}
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
                  Additionnaly, you can download all blendshapes model to use in
                  animations.
                  <br></br>
                  <br></br>
                  This was made possible by NounsDAO proposal 182.
                </p>
              </div>
            </div>
          </div>

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
