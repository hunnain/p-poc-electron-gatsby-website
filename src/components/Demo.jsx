import React from "react";
import headerLens from '../images/header-lens.png';

export default function Demo() {
  return (
    <div id="demo" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>DEMO</h2>
            <div className="p-heading p-large">
              Lights, Camera, Action! The live demo of Lens features.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <a
                  className="popup-youtube"
                  href="https://www.youtube.com/watch?v=04v2ODsmtIs"
                  data-effect="fadeIn"
                >
                  <img
                    className="img-fluid"
                    src={headerLens}
                    alt="alternative"
                  />
                  <span className="video-play-button">
                    <span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
