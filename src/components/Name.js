import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Diode from "./icons/diode.png";
import Stack from "./icons/stack.png";
import UpGraph from "./icons/upgraph.png";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";

const blue = {
  500: "#353945",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const Root = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 10px;
  cursor: pointer;

 

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 23px;
    height: 23px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #3772ff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 34px;
      top: 3px;
      background-color: #3772ff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);

const Name = () => {
  const [state, setState] = useState("true");
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

  const inputChange = () => {
    setState(!state);
    console.log(state);
  };
  return (
    <>
      <div className="headname">
        <h1>
          <p>N</p>
          <span>Name</span>
          <span className="menu-icon">
            <ArrowBackIcon />
          </span>
        </h1>
        <div className="NavLink">
          <input type="radio" name="nav" className="nav" id="nav" />
          <label for="nav">
            <GridViewOutlinedIcon className="nav-icon" />
            Home
          </label>
          <input type="radio" name="nav" className="nav" id="nav1" />
          <label for="nav1">
            <AssessmentOutlinedIcon className="nav-icon" />
            Section 1
          </label>
          <input type="radio" name="nav" className="nav" id="nav2" />
          <label for="nav2">
            <img src={Diode} className="nav-icon png-nav" alt="diode icon" />
            Section 2
          </label>
          <input type="radio" name="nav" className="nav" id="nav3" />
          <label for="nav3">
            <BarChartOutlinedIcon className="nav-icon" />
            Section 3
          </label>
          <input type="radio" name="nav" className="nav" id="nav4" />
          <label for="nav4">
            <MonetizationOnOutlinedIcon className="nav-icon" />
            Section 4
          </label>
          <input type="radio" name="nav" className="nav" id="nav5" />
          <label for="nav5">
            <img src={Stack} className="nav-icon png-nav" alt="stack icon" />
            Section 5
          </label>
          <input type="radio" name="nav" className="nav" id="nav6" />
          <label for="nav6">
            <img src={UpGraph} className="nav-icon png-nav" alt="stack icon" />
            Section 6
          </label>
          <input type="radio" name="nav" className="nav" id="nav7" />
          <label for="nav7">
            <PieChartOutlineIcon className="nav-icon" />
            Section 7
          </label>
          <input
            type="radio"
            name="nav"
            className="nav"
            id="nav8"
            defaultChecked
          />
          <label for="nav8">
            <ShareIcon className="nav-icon" />
            Section 8
          </label>
          <input type="radio" name="nav" className="nav" id="nav9" />
          <label for="nav9">
            <ArticleOutlinedIcon className="nav-icon" />
            Documentation
          </label>
        </div>
        <div className="token">
          <button className="num">
            <p>N</p>$0.90
          </button>
          <button className="buy">Buy $XYZ</button>
        </div>
        <div className="toggle">
          <div className="language">
            <LanguageOutlinedIcon />
          </div>
          <div className="toggler">
            <span className="switch" onClick={inputChange}>
              <SwitchUnstyled
                className="toggleBtn"
                component={Root}
                {...label}
                defaultChecked
              />
            </span>

            <DarkModeIcon
              className={state ? "mode darkmode" : "mode lightmode"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Name;
