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
          <div className=" welcome-container">
            <p className="tw-text-center welcome-nounstoun tw-text-8xl">3D NOUNS</p>
          </div>
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
                  Open-Source Avatars
                </h1>
                <p className={classes.genericText}>
                  Experience 3D Nouns – a collection of composable characters that transform{' '}
                  <Link text={'NounsDAOs'} url={'https://nouns.wtf'} leavesPage={true} style={{ fontSize: '1.3rem' }} />{' '} pixel art into dynamic 3D avatars.
                  <br></br>
                  <br></br>
                  As the first community proposal of the Nouns ecosystem, 3D Nouns received enthusiastic support and secured funding from NounsDAO on September 2nd, 2021, under{' '}
                  <Link
                    text={'NounsDAO Proposal #2.'}
                    url={'https://nouns.wtf/vote/2'}
                    leavesPage={true}
                    style={{ fontSize: '1.3rem' }}
                  />
                  <br></br>
                  <br></br>
                  Step into the generator and unleash your creativity with endless combinations, bringing Nouns to life like never before!
                </p>
              </div>
            </div>

            <div className="accordion-wrap">

              <Accordion flush>
                <Accordion.Item eventKey="0" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>CC0 assets</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      All 3D Nouns assets are CC0 and can be used freely. Customize your noun, then download it as a
                      GLTF file for use within 3D modeling programs like {' '}
                  <Link text={'Blender'} url={'https://www.blender.org/'} leavesPage={true} style={{ fontSize: '1.3rem' }} />{' '} or game engines like {' '}
                  <Link text={'Unity'} url={'https://unity.com/'} leavesPage={true} style={{ fontSize: '1.3rem' }} />{' '} using this <Link text={'tool'} url={'https://gist.github.com/sgarcia22/b80f65d33ccfc3e449f46c47ec933c9f'} leavesPage={true} style={{ fontSize: '1.3rem' }} />{' '}. 
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>Augmented Reality</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      3D Nouns are also available as{' '}
                      <Link
                        text={'Snapchat'}
                        url={'https://lensstudio.snapchat.com/creator/6y_fgP0Vr6RqaJt3jIJLRw'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      {` `}, {' '}
                      <Link
                        text={'Instagram'}
                        url={'https://www.instagram.com/0xcoralorca/'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      {` `} and {' '}
                      <Link
                        text={'Tik Tok'}
                        url={'https://www.tiktok.com/@0xcoralorca'}
                        leavesPage={true}
                        style={{ fontSize: '1.2rem' }}
                      />{' '}
                      {` `}filters.
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
          <p className="tw-flex tw-flex-row" href="https://nouns.wtf/" >
            {`nouns.wtf `} <img className="nouns-heart tw-mx-1" src={nounsHeart}></img>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
