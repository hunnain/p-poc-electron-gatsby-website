import React from "react";
import headerLens from '../images/header-lens.png';

export default function Loader() {
  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h1>
                  Glasswall Desktop File Security <br />
                  FOR{" "}
                  <span id="js-rotating">
                    DEVELOPMENT, OPERATIONS, MONITORING, DEBUGGING, DEVOPS
                  </span>
                </h1>
                <p className="p-large">
                  Lens is the only IDE you’ll ever need to take control of your
                  Kubernetes clusters. It's open source and free. Download it
                  today!
                </p>
                <a
                  className="btn-solid-lg"
                  href="https://github.com/lensapp/lens/releases/latest"
                >
                  <i className="fas fa-download"></i> Download
                </a>
                <i className="supported-os-icon fab fa-apple"></i>
                <i className="supported-os-icon fab fa-windows"></i>
                <i className="supported-os-icon fab fa-linux"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src={headerLens}
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
