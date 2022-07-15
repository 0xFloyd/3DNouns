import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import { Col } from 'react-bootstrap';
import classes from './HomePage.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from './components/Link';
import './styles/HomePage.css';
import headerImage from './assets/images/nounstown.png';
import mobileHeadImage from './assets/images/mobile-toun.png';
import CoralPicture from './assets/images/CoralOrcaProfilePicture400.jpg';
import FloydPicture from './assets/images/FloydProfilePicture400.jpg';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import { SiTwitter } from 'react-icons/si';
import logo from './assets/images/3DNounsLogo.png';
import nounsArmy from './assets/images/3darmy.jpeg';
import './index.css';
import { BsDiscord } from 'react-icons/bs';

const HomePage = () => {
  const [hidePage, setHidePage] = useState(false);

  const [isFadingOut, setIsFadingOut] = useState(false);

  const fadeOut = () => {
    setIsFadingOut(true);
    setTimeout(() => handleRemoveItem(), 1000);
  };
  const handleRemoveItem = () => {
    setHidePage(true);
    setIsFadingOut(false);
  };

  const [isDesktopSize, setIsDesktopSize] = useState(isDesktop);
  const [isTabletSize, setIsTabletSize] = useState(isTablet);
  const [isMobileSize, setIsMobileSize] = useState(isMobile);

  useEffect(() => {
    function autoResize() {
      setIsDesktopSize(window.innerWidth <= 1280);
      setIsTabletSize(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsMobileSize(window.innerWidth <= 768);
    }

    window.addEventListener('resize', autoResize);

    // This is likely unnecessary, as the initial state should capture
    // the size, however if a resize occurs between initial state set by
    // React and before the event listener is attached, this
    // will just make sure it captures that.
    autoResize();

    // Return a function to disconnect the event listener
    return () => window.removeEventListener('resize', autoResize);
  }, []);

  return (
    <div className={`homepage-body ${isFadingOut ? 'item-fadeout' : ''}`} style={{ visibility: hidePage ? 'hidden' : 'visible' }}>
      <div className="container-huh">
        <div className="relative header-image">
          <div className="homepage-logo-container">
            <a href="https://3dnouns.com">
              <img className="nouns-logo" src={logo} alt="NOUNS" />
            </a>
            {/* <button onClick={() => setMoveCamera(true)}>hey</button> */}
          </div>
          <img src={isMobileSize ? mobileHeadImage : headerImage} alt="Nounstoun" className="header-image" />
          <div className="welcome-container">
            <h1 className="welcome-nounstoun">WELCOME TO NOUNSTOUN!</h1>
          </div>
          <div className="enter-container">
            <button className="enter-button" onClick={() => fadeOut()}>
              ENTER
            </button>
          </div>
        </div>
        <Section fullWidth={false}>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className={classes.headerWrapper}>
              <h1 style={{ textAlign: 'center', color: '#d63c5e' }}>An Experiment in CC0 Avatars</h1>
              <p className={classes.genericText}>
                3D NOUNS is a collection of composable characters turning{' '}
                <Link text={'NounsDAO'} url={'https://nouns.wtf'} leavesPage={true} style={{ fontSize: '1.3rem' }} /> art into 3D avatars. Enter the generator
                and test infinite possibilities with the randomize button or pick and choose your traits one by one. Our goal is to bring 3D NOUNS to a
                multitude of metaverse platforms and extend the nouns ecosystem to other creative fields like gaming, animation and many more! 3D Nouns were the
                first community extension of the Nouns ecosystem and received funding NounsDAO on September 2nd, 2021 under{' '}
                <Link text={'NounsDAO Proposal #2.'} url={'https://nouns.wtf/vote/2'} leavesPage={true} style={{ fontSize: '1.3rem' }} />
                <br />
                <br />
              </p>
            </div>
            <div className="accordion-wrap">
              <Accordion flush>
                <Accordion.Item eventKey="0" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>CC0</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      All 3D Nouns are CC0 and can be used freely. Once you have customized your 3D noun, you can download it as a GLTF or FBX file and import
                      it within a 3D modeler like Blender or Maya, or add it to a motion capture library like Mixamo.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>EXTENDABLE</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      We want to extend traits with the community and allow for customization beyond the original collection. Currently we have a few easter
                      eggs but we are working with other NFTs project and will be featuring more collaborations in the future.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>NOUNS TOUN</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      Nouns town is where the 3D NOUNS live, a web first microverse. We are currently building environment assets and want to provide
                      interoperability with other VR, AR and 3D platforms.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>AR</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      AR models will be available for download as USDZ files so that 3D NOUNS can populate the real world! We also have some fun 3D Snapchat
                      filters that you can check out <a href="https://lensstudio.snapchat.com/creator/6y_fgP0Vr6RqaJt3jIJLRw">here</a>. More to come!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className={classes.accordionItem}>
                  <Accordion.Header className={classes.accordionHeader}>NFTs</Accordion.Header>
                  <Accordion.Body>
                    <p className={classes.genericText}>
                      Join the <Link text={'3D Nouns Discord'} url={'https://discord.gg/kZZaz6jy2k'} leavesPage={true} style={{ fontSize: '1.2rem' }} /> {` `}
                      and follow the 3D Nouns <Link
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
                    <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
                    <a className="social-link" href="https://twitter.com/coralorca" target="_blank">
                      CoralOrca
                    </a>
                  </div>
                  <div className="profile-individual-section">
                    <img className="profile-picture" src={FloydPicture} />
                    <p className="bio-header">Engineer</p>
                    <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />{' '}
                    <a className="social-link" href="https://twitter.com/0xFloyd" target="_blank">
                      0xFloyd
                    </a>
                  </div>
                </div>
              </Accordion>
            </div>
          </Col>
        </Section>
        <div>
          <img src={nounsArmy} className="footer-image" />
        </div>
        <div className="footer-info">
          <div className="footer-social-section">
            <div className="profile-individual-section">
              <SiTwitter className="twitter-logo" size={isDesktop ? 30 : 25} color="#1DA1F2" />
              <a style={{ color: 'white' }} className="social-link" href="https://twitter.com/3dnouns" target="_blank">
                3D Nouns Twitter
              </a>
            </div>
            <div className="profile-individual-section">
              <BsDiscord className="twitter-logo" size={isDesktop ? 30 : 25} color="#5865F2" />
              <a style={{ color: 'white' }} className="social-link" href="https://discord.gg/kZZaz6jy2k" target="_blank">
                3D Nouns Discord
              </a>
            </div>
          </div>
          <p>nouns.wtf ❤️ by CoralOrca and 0xFloyd</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
