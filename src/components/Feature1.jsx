import React from "react";
import betterKubernetes from '../images/better-kubernetes.svg';

export default function Feature1() {
  return (
    <div id="features" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src={betterKubernetes}
              alt="alternative"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-container">
              <h3>The Kubernetes IDE</h3>
              <p>
                Lens is the most powerful IDE for people who need to deal with
                Kubernetes clusters on a daily basis. It is a standalone
                application for MacOS, Windows and Linux operating systems.
                Ensure your clusters are properly setup and configured. Enjoy
                increased visibility, real time statistics, log streams and
                hands-on troubleshooting capabilities. With Lens, you can work
                with your clusters more easily and fast, radically improving
                productivity and the speed of business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
