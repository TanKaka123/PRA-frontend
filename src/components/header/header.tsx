import React from "react";
import "./header.scss";
import Heading from "./heading";
import TitleHead from "./titleHead"

function header() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content-overlay"></div>
          <img src="./banner.png" alt="" className="img-banner" />
          <Heading/>
          <TitleHead/>
        </div>
      </div>
    </div>
  );
}

export default header;
