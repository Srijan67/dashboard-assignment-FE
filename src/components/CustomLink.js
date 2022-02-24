import Ava from "./icons/Ava.png";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
const CustomLink = () => {
  return (
    <>
      <div className="options">
        <img className="ava-image" src={Ava} alt="ava" />

        <select className="avalanche">
          <option value="Avalanche">Avalanche</option>

          <option value="Select">Select</option>
        </select>
        <AccountBalanceWalletOutlinedIcon className="ava-image wallet" />
        <select className="user-id">
          <option value="0xFbE..0f58A7D">0xFbE..0f58A7D</option>

          <option value="select user ID">Select user id</option>
        </select>
      </div>

      <h2 className="custom-link-title">
        <ArrowBackIcon />
        <span>Custom link</span>
      </h2>
      <div className="ref-link">
        <div className="ref-link-untouchable">
          https://testnet.xyz.xyz/trade?ref=
        </div>
        <input type="text" placeholder="Enter" className="ref-link-value" />

        <div className="button-bundle">
          <button className="custom-btn">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            {"  "}
            Custom link
          </button>
          <button className="cancel-btn">
            <DriveFileMoveIcon className="cancel-icon" fontSize="smaller" />
            {"  "}
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomLink;
