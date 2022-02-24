// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
const Dashboard = (props) => {
  //   var [show, setshow] = useState(false);

  return (
    <>
      <div className="table-value">
        <div className="assetVal">
          <div className="coinLogo">
            <img src={props.img} alt="crypto png" />
          </div>
          <div className="assetInfo">
            <p style={{ fontWeight: 700 }}>{props.asset}</p>

            <p>
              <span className="type">{props.type}</span>
              {"  "}{" "}
              <span className="chain">
                <img src={props.chain.img} alt="crypto png" />
                {props.chain.name}
              </span>
            </p>
          </div>
        </div>
        <div className="amtVal">
          <p style={{ fontWeight: 700 }}>{props.amount} BNB</p>
          <p className="state">{props.state}</p>
        </div>
        <div className="accVal">
          <p style={{ fontWeight: 700 }}>
            {props.user.slice(0, 5)}
            {".."}
            {props.user.slice(props.user.length - 7)}
          </p>
        </div>
        <div className="referralVal">
          <p style={{ fontWeight: 700 }}>{props.referral_earnings}</p>
          <p className="ref-brief">
            View on BSC Scan{" "}
            <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
          </p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
