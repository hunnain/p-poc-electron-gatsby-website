import React from "react";

export default function Download() {
  return (
    <div id="download" className="basic-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>
                Download <span className="blue">Lens</span>
              </h2>
              <p className="p-large">
                Lens is the only IDE you’ll ever need to take control of your
                Kubernetes clusters. It is a standalone application for MacOS,
                Windows and Linux operating systems. Lens is open source and
                free. Download it today!
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
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className="img-fluid"
                src="images/header-lens.png"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
