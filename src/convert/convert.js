import React from "react";

import "../landing page/landing.css";
import "./convert.css";

function convert() {
  return (
    <div className="convert-div">
      <div className="btn-wrapper">
        <div className="button-holder">
          <button type="submit" class="custom-btn btn-3 convert-btn">
            <span>Convert More</span>
            <div className="inside-container"> </div>
          </button>
        </div>
        <div className="button-holder">
          <button type="submit" class="custom-btn btn-3 convert-btn">
            <span>Download PDF</span>
            <div className="inside-container"> </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default convert;
