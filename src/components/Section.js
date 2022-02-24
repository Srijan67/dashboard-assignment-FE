import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import cryptoImage from "./icons/crypto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import MedLogo from "./icons/medlogo.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "../App.css";
import { useState } from "react";
const Section = () => {
  const [state, setState] = useState("false");
  const inputChange = () => {
    setState("true");
    console.log(state);
  };
  return (
    <>
      <div className="section-head">
        <div className="dash-head">
          <h2>Section</h2>
          <div className="tier">
            <AccountBalanceWalletOutlinedIcon className="wallet-top" /> 0.2 $XYZ
            <div className="tierbtn">Tier 1</div>
          </div>
        </div>
        <div className={state === "false" ? "tutorial" : "tutorial-down"}>
          <div className="tutorial-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>Tutorial</button>
          </div>
          <div className="crypto-cross">
            <img className="cryptoLogo" src={cryptoImage} alt="crypto logo" />
            <span onClick={inputChange}>
              <CancelIcon className="cross" />
            </span>
          </div>
        </div>
        <div className="rewards">
          <div className="reward-details">
            <h3>Your rewards</h3>
            <h1>$ 0.26231428</h1>
            <div className="convertion-details">
              <span>$40 AVAX</span>
              <span>$10 BNB</span>
              <span>$120 BTC</span>
            </div>
          </div>
          <div className="reward-button">
            <button>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <span>Custom Link</span>
            </button>
          </div>
        </div>
        <div className="referal-display">
          <div className="ref-data ref-data-One">
            <h2>
              <img className="med-logo" src={MedLogo} alt="medal logo" />
              12.5% of fee
            </h2>
            <p>Your Referral Link for xyz</p>
            <div className="link-to-copy">
              https://unityexchange.design{" "}
              <span>
                <ContentCopyIcon />
              </span>
            </div>
          </div>
          <div className="ref-data">
            <h2>
              <img className="med-logo" src={MedLogo} alt="medal logo" />
              12.5% of fee
            </h2>
            <p>Your Referral Link for xyz</p>
            <div className="link-to-copy">
              https://unityexchange.design{" "}
              <span>
                <ContentCopyIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section;
