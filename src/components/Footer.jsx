import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4>About Lens</h4>
              <p>
                Lens was originally developed by Kontena, Inc. Today, all IPR is
                owned by Mirantis, Inc. – the fastest way to modern apps,
                providing containers-as-a-service at enterprise scale.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col middle">
              <h4>Resources</h4>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/lensapp/lens#contributing"
                      className="primary"
                    >
                      How to Contribute?
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/lensapp/lens"
                      className="primary"
                    >
                      Source Code
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <a href="http://k8slens.slack.com/" className="primary">
                      Community Slack
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/lensapp/lensapp.github.io/blob/master/licenses/eula.md"
                      className="primary"
                    >
                      EULA
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <a
                      href="https://www.mirantis.com/company/privacy-policy/"
                      className="primary"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col last">
              <h4>Community</h4>
              <span className="fa-stack">
                <a href="https://github.com/lensapp/lens">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="http://k8slens.slack.com/">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-slack fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://twitter.com/k8slens">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
