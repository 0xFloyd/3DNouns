import { BsDiscord } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';
import CoralPicture from '../../assets/images/CoralOrcaProfilePicture400.jpg';
import FloydPicture from '../../assets/images/FloydProfilePicture400.jpg';

const InformationModal = (props) => {
  return (
    <div className="modal-box-popup">
      <div>
        <h1 className="tw-text-4xl tw-mb-4" style={{ color: '#d63c5e', textAlign: 'center' }}>
          3D Nouns{' '}
        </h1>

        <h3 className="tw-text-justify tw-px-6">
          Experience 3D Nouns – a collection of composable characters that transform <a href="https://nouns.wtf" target="_blank" className="modal-link">
            NounsDAOs
          </a>{' '}
          pixel art into dynamic 3D avatars.
        </h3>
        <br></br>
        <h3 className="tw-text-justify tw-px-6">
        As the first community proposal of the Nouns ecosystem, 3D Nouns received enthusiastic support and secured funding from NounsDAO on September 2nd, 2021, under<a href="https://nouns.wtf/vote/2" target="_blank" className="modal-link">
            Propsal #2.
          </a>{' '}
        </h3>
        <br></br>
        <h3 className="tw-text-justify tw-px-6">
        Step into the generator and unleash your creativity with endless combinations, bringing Nouns to life like never before!
        </h3>
      </div>
      <div className="profile-section">
        <div className="profile-individual-section">
          <img className="profile-picture" src={CoralPicture} />
          <p className="bio-header">Creator</p>
          <div className="tw-flex tw-flex-row tw-items-center">
            <SiTwitter className="twitter-logo" size={props.isDesktop ? 30 : 25} color="#1DA1F2" />
            <a className="social-link" href="https://twitter.com/coralorca" target="_blank">
              CoralOrca
            </a>
          </div>
        </div>
        <div className="profile-individual-section">
          <img className="profile-picture" src={FloydPicture} />
          <p className="bio-header">Engineer</p>
          <div className="tw-flex tw-flex-row tw-items-center">
            <SiTwitter className="twitter-logo" size={props.isDesktop ? 30 : 25} color="#1DA1F2" />{' '}
            <a className="social-link" href="https://twitter.com/0xFloyd" target="_blank">
              0xFloyd
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <div className="profile-individual-section">
          {' '}
          <div className="tw-flex tw-flex-row tw-items-center">
            <SiTwitter className="twitter-logo" size={props.isDesktop ? 30 : 25} color="#1DA1F2" />
            <a className="social-link" href="https://twitter.com/3dnouns" target="_blank">
              3D Nouns Twitter
            </a>
          </div>
        </div>
        <div className="profile-individual-section">
          <div className="tw-flex tw-flex-row tw-items-center">
            <BsDiscord className="twitter-logo" size={props.isDesktop ? 30 : 25} color="#5865F2" />
            <a className="social-link" href="https://discord.gg/kZZaz6jy2k" target="_blank">
              3D Nouns Discord
            </a>
          </div>
        </div>
        <div className="profile-individual-section"></div>
      </div>

      <div className="modal-footer-container">
        <button className="modal-closer" onClick={() => props.setShowAboutModal(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default InformationModal;
