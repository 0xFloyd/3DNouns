import React, { useEffect, useState } from 'react';
import headerImage from '../../assets/images/nounstown.webp';
import logo from '../../assets/images/3DNounsLogo.png';
import Section from './Section';
import { Col } from 'react-bootstrap';
import classes from './HomePage.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from './Link';
import './HomePage.css';
import mobileHeadImage from '../../assets/images/mobile-toun.png';
import CoralPicture from '../../assets/images/CoralOrcaProfilePicture400.jpg';
import FloydPicture from '../../assets/images/FloydProfilePicture400.jpg';
import ThreeDNounsPicture from '../../assets/images/3DnounsProfilePicture.jpg';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import { SiTwitter } from 'react-icons/si';
import nounsArmy from '../../assets/images/ArmyFooterLarge.webp';
import nounsHeart from '../../assets/images/nounsHeart.gif';
import '../../index.css';
import { BsDiscord } from 'react-icons/bs';
import { useProgress } from '@react-three/drei';
import Spinner from 'react-bootstrap/Spinner';

const HomePage = ({ hidePage, setHidePage }) => {
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
      className={`homepage-body ${isFadingOut ? 'item-fadeout' : ''}`}
      style={{ visibility: hidePage ? 'hidden' : 'visible' }}
    >
      <div className="container-huh">
        {/* tw-bg-opacity-30 tw-bg-black */}
        <div className="relative header-image tw-bg-opacity-30 tw-bg-black  !tw-h-[80vh] -tw-mb-12">
          <div className="homepage-logo-container">
            <a href="https://3dnouns.com">
              <img className="tw-transition-all hover:tw-scale-110 nouns-logo !tw-select-none" src={logo} alt="NOUNS" />
            </a>
            {/* <button onClick={() => setMoveCamera(true)}>hey</button> */}
          </div>
          {/* <img src={isMobileSize ? mobileHeadImage : headerImage} alt="Nounstoun" className="header-image" /> */}

          <div className="enter-container">
            {!loaded ? (
              <p>
                Loading...
                <Spinner animation={'border'} />
              </p>
            ) : (
              <button
                style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                className="enter-button tw-transition-all hover:tw-scale-110"
                disabled={!loaded}
                onClick={() => fadeOut()}
              >
                {loaded ? 'ENTER' : 'LOADING...'}
              </button>
            )}
          </div>
        </div>
        {/* <Section fullWidth={false}> */}
        <div className="tw-pt-16 lg:tw-pt-32  tw-bg-white">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className={classes.headerWrapper}>
              <div className="tw-grid tw-grid-cols-1 md:tw-gap-x-8 md:tw-grid-cols-2 tw-mb-16 md:tw-mb-32">
                <h1 className="tw-mb-12 md:tw-mb-0" style={{ textAlign: 'center', color: '#d63c5e' }}>
                  An Experiment in CC0 Avatars
                </h1>
                <p className={classes.genericText}>
                  3D Nouns is a collection of composable characters turning{' '}
                  <Link text={'NounsDAO'} url={'https://nouns.wtf'} leavesPage={true} style={{ fontSize: '1.3rem' }} />{' '}
                  pixel art into 3D avatars. Enter the generator and play with endless combinations to bring Nouns to
                  life. <br />
                  <br />
                  3D Nouns was the first community proposal of the Nouns ecosystem and received funding from NounsDAO
                  on September 2nd, 2021 under{' '}
                  <Link
                    text={'NounsDAO Proposal #2.'}
                    url={'https://nouns.wtf/vote/2'}
                    leavesPage={true}
                    style={{ fontSize: '1.3rem' }}
                  />
                </p>
              </div>
            </div>
            <div className="accordion-wrap">
              <Accordion flush>
                <Accordion.Item eventKey="0" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>CC0</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      All 3D Nouns assets are CC0 and can be used freely. Customize your noun, then download it as a
                      GLTF file for use within 3D modeling programs like Blender.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>EXTENDABLE</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      3D Nouns grow with the community, and the downloadable model files allow for customization beyond
                      the original collection. The 3D Nouns collection contains additional traits outside of the current
                      Nouns traits, and there will be more collaborations in the future.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="2" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>NOUNS TOUN</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      Nouns town is where the 3D NOUNS live, a web-first microverse. We are currently building
                      environment assets and want to provide interoperability with other VR, AR and gaming platforms.
                    </p>
                  </Accordion.Body>
                </Accordion.Item> */}
                <Accordion.Item eventKey="2" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>AR</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      3D Nouns are also available as Snapchat filters that you can check out{' '}
                      <Link
                        text={'here'}
                        url={'https://lensstudio.snapchat.com/creator/6y_fgP0Vr6RqaJt3jIJLRw'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      {` `}.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>NFTs</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      Join the{' '}
                      <Link
                        text={'3D Nouns Discord'}
                        url={'https://discord.gg/kZZaz6jy2k'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      {` `}
                      and follow the 3D Nouns{' '}
                      <Link
                        text={'Twitter'}
                        url={'https://twitter.com/3dnouns'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      account to stay updated on the project's future plans!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <div className="profile-section-creators">
                  <div className="profile-individual-section">
                    <img className="profile-picture" src={CoralPicture} />
                    <p className="bio-header">Creator</p>
                    <div className="tw-flex tw-flex-row tw-items-center">
                      <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
                      <a className="social-link" href="https://twitter.com/coralorca" target="_blank">
                        CoralOrca
                      </a>
                    </div>
                  </div>

                  <div className="profile-individual-section">
                    <img className="profile-picture" src={FloydPicture} />

                    <p className="bio-header">Engineer</p>
                    <div className="tw-flex tw-flex-row tw-items-center">
                      <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />{' '}
                      <a className="social-link" href="https://twitter.com/0xFloyd" target="_blank">
                        0xFloyd
                      </a>
                    </div>
                  </div>
                </div>

                <div className="profile-individual-section tw-pb-20">
                  <img className="profile-picture" src={ThreeDNounsPicture} />
                  <div className="profile-individual-section ">
                    <div className="tw-flex tw-flex-row tw-items-center">
                      <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
                      <a
                        style={{ color: 'black' }}
                        className="social-link"
                        href="https://twitter.com/3dnouns"
                        target="_blank"
                      >
                        3D Nouns Twitter
                      </a>
                    </div>
                  </div>

                  <div className="profile-individual-section">
                    <div className="tw-flex tw-flex-row tw-items-center">
                      <BsDiscord className="twitter-logo" size={isDesktop ? 30 : 25} color="#5865F2" />
                      <a
                        style={{ color: 'black' }}
                        className="social-link"
                        href="https://discord.gg/kZZaz6jy2k"
                        target="_blank"
                      >
                        3D Nouns Discord
                      </a>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Col>
        </div>
        {/* </Section> */}
        <div>
          <img src={nounsArmy} className="footer-image" />
        </div>
        <div className="footer-info">
          <p className="tw-flex tw-flex-row">
            {`nouns.wtf `} <img className="nouns-heart tw-mx-1" src={nounsHeart}></img> {` by CoralOrca and 0xFloyd`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
