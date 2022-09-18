import { BsDiscord } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';
import CoralPicture from '../../assets/images/CoralOrcaProfilePicture400.jpg';
import FloydPicture from '../../assets/images/FloydProfilePicture400.jpg';

const InformationModal = (props) => {
  return (
    <div className="modal-box-popup">
      <div>
        <h1 style={{ color: '#d63c5e', textAlign: 'center' }}>3D Nouns </h1>

        <h3 style={{ textAlign: 'center' }}>
          3D Nouns is the first community extension of the Nouns ecosystem. The project was proposed under Nouns DAO
          Proposal Two, where it passed unanimously on September 2nd, 2021.
        </h3>
        <h5 className="about-paragraph-text">
          <a
            href="https://nouns.wtf"
            target="_blank"
            className="modal-link"
          >
            Nouns
          </a>{' '}
          are an experimental attempt to improve the formation of on-chain avatar communities, attempting to bootstrap
          identity, community, governance and a treasury for the community.
        </h5>
        <h5 className="about-paragraph-text">
          3D Nouns aims to expand Nouns into the online metaverse by creating avatars for existing and future digital
          platforms. Eventually, 3D Nouns will extend into many different mediums, including gaming, animation, virtual
          reality, and augmented reality.
        </h5>
        <h5 className="about-paragraph-text">
          3D Nouns stay true to the original Nouns ethos by emulating the original artwork and open source nature, while
          letting you craft your own 3D Noun or randomly generating one of over one billion different combinations.
        </h5>
      </div>
      <div className="profile-section">
        <div className="profile-individual-section">
          <img
            className="profile-picture"
            src={FloydPicture}
          />
          <p className="bio-header">Engineer</p>
          <SiTwitter
            className="twitter-logo"
            size={props.isDesktop ? 30 : 25}
            color="#1DA1F2"
          />{' '}
          <a
            className="social-link"
            href="https://twitter.com/0xFloyd"
            target="_blank"
          >
            0xFloyd
          </a>
        </div>
        <div className="profile-individual-section">
          <img
            className="profile-picture"
            src={CoralPicture}
          />
          <p className="bio-header">Creator</p>
          <SiTwitter
            className="twitter-logo"
            size={props.isDesktop ? 30 : 25}
            color="#1DA1F2"
          />
          <a
            className="social-link"
            href="https://twitter.com/coralorca"
            target="_blank"
          >
            CoralOrca
          </a>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <div className="profile-individual-section">
          <SiTwitter
            className="twitter-logo"
            size={props.isDesktop ? 30 : 25}
            color="#1DA1F2"
          />
          <a
            className="social-link"
            href="https://twitter.com/3dnouns"
            target="_blank"
          >
            3D Nouns Twitter
          </a>
        </div>
        <div className="profile-individual-section">
          <BsDiscord
            className="twitter-logo"
            size={props.isDesktop ? 30 : 25}
            color="#5865F2"
          />
          <a
            className="social-link"
            href="https://discord.gg/kZZaz6jy2k"
            target="_blank"
          >
            3D Nouns Discord
          </a>
        </div>
        <div className="profile-individual-section"></div>
      </div>

      <div className="modal-footer-container">
        <button
          className="modal-closer"
          onClick={() => props.setShowAboutModal(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default InformationModal;
