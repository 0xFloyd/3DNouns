import { BsDiscord } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';

const MintModal = (props) => {
  return (
    <div className="modal-box-popup">
      <button
        onClick={() => props.setShowMintModal(false)}
        className="modal-closer"
      >
        X
      </button>
      <div>
        <h2>
          Interested in minting your own custom <span className="noun-color-h2">3D Noun</span>?
        </h2>
        <h4>
          We're currently working on the feasibility of a 3D Noun NFT collection. If this interests you, follow us on
          twitter{' '}
          <SiTwitter
            className="mint-twitter-logo"
            size={25}
            color="#1DA1F2"
          />{' '}
          <a
            href="https://twitter.com/3dnouns"
            target="_blank"
            className="mint-modal-link"
          >
            @3DNouns
          </a>{' '}
          and join the discord for updates{' '}
          <BsDiscord
            className="mint-twitter-logo"
            size={25}
            color="#5865F2"
          />
          <a
            className="mint-modal-link"
            href="https://discord.gg/kZZaz6jy2k"
            target="_blank"
          >
            Discord
          </a>
          !
        </h4>
      </div>
    </div>
  );
};

export default MintModal;
