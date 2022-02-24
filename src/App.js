import "./App.css";
import { Data } from "./components/Data";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Name from "./components/Name";
import Section from "./components/Section";
import CustomLink from "./components/CustomLink";

function App() {
  const [query, setquery] = useState(Data);
  const [tab, setTab] = useState("false");

  return (
    <>
      <div className="lorem-text">Lorem ipsum this is upper text</div>
      <div className="App">
        <div className="name">
          <Name />
        </div>
        <div className="section">
          <Section />
          <div className="tabs">
            {/* <div className="first-tab">First Tab</div>
            <div className="second-tab">Second Tab</div> */}
            <input
              onClick={() => setTab("false")}
              type="radio"
              id="tab1"
              name="tab"
              className="tab"
              style={{ display: "none" }}
              defaultChecked
            />
            <label for="tab1" className="first-tab">
              First Tab
            </label>
            <input
              onClick={() => setTab("true")}
              type="radio"
              id="tab2"
              name="tab"
              className="tab"
              style={{ display: "none" }}
            />
            <label for="tab2" className="second-tab">
              Second Tab
            </label>
          </div>
          <div className="table-head">
            <div className="asset-tab">Asset</div>
            <div className="amt-tab">amount</div>
            <div className="acc-tab">User Account</div>
            <div className="ref-tab">referral earning</div>
          </div>
          {tab === "false" &&
            query.map((curVal, index) => {
              return <Dashboard key={index} {...curVal} />;
            })}
        </div>
        <div className="custom-link">
          <CustomLink />
        </div>
      </div>
    </>
  );
}

export default App;
