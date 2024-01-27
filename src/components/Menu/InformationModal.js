import { BsDiscord } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import CoralPicture from "../../assets/images/CoralOrcaProfilePicture400.jpg";
import FloydPicture from "../../assets/images/FloydProfilePicture400.jpg";
import CrossIcon from "../../assets/images/XcrossIcon.svg";

const InformationModal = (props) => {
  return (
    <div className="modal-box-popup ">
      <div>
        <h1
          className="tw-text-4xl tw-mb-4 special-font-style"
          style={{
            color: "white",
            textAlign: "center",
            textShadow:
              "-3px 3px rgb(0, 0, 0), -2px 2px black, 0px 1px rgb(0, 0, 0), 0 -0px black",
          }}
        >
          3D Nouns{" "}
        </h1>
        <br></br>
        <h5 className="tw-text-justify tw-px-6 info-text">
          Experience 3D Nouns – a collection of composable characters that
          transform{" "}
          <a href="https://nouns.wtf" target="_blank" className="modal-link">
            NounsDAOs
          </a>{" "}
          pixel art into dynamic 3D avatars.
        </h5>
        <br></br>

        <h5 className="tw-text-justify tw-px-6 info-text">
          As the first NounsDAO community proposal, 3D Nouns received
          enthusiastic support and secured funding under{" "}
          <a
            href="https://nouns.wtf/vote/2"
            target="_blank"
            className="modal-link"
          >
            proposal #2.
          </a>
        </h5>
        <br></br>
        <h5 className="tw-text-justify tw-px-6 info-text">
          Step into the generator and unleash your creativity with endless
          combinations, bringing Nouns to life like never before!
        </h5>
      </div>

      <div className="profile-section ">
        <div className="profile-individual-section ">
          <img className="profile-picture" src={CoralPicture} />
          <p className="bio-header">Creator</p>
          <div className="tw-flex tw-flex-row tw-items-center">
            <SiTwitter
              className="twitter-logo"
              size={props.isDesktop ? 30 : 25}
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
              size={props.isDesktop ? 30 : 25}
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

      <div className="modal-footer-container ">
        <button
          className="modal-closer tw-m-5 "
          onClick={() => props.setShowAboutModal(false)}
        >
          <img src={CrossIcon} alt="x-icon" className="X-Cross-icon " />
        </button>
      </div>
    </div>
  );
};

export default InformationModal;
