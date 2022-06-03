import React from "react";
import "./header.scss";
import Heading from "./heading";
import TitleHead from "./titleHead"
import NavMobile from "./navMobile";

function header() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content-overlay"></div>
          <img src="./banner.png" alt="" className="img-banner" />
          <div className="nav--display">
            <div className="pc">
            <Heading/>
            </div>
            <div className="mobile">
            <NavMobile/>
            </div>
           
          </div>
          
          <TitleHead/>
        </div>
      </div>
    </div>
  );
}

export default header;
