import React from "react";

export default function Feature3() {
  return (
    <div className="basic-3">
      <div className="fourth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="images/workspaces.svg"
                alt="alternative"
              />
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h3>Multiple Workspaces</h3>
                <p>
                  Organize clusters into logical groups. Workspaces are used to
                  organize a number of clusters into logical groups. They are
                  very useful for DevOps and SREs who need to deal with multiple
                  (even hundreds of) clusters. A single workspace contains a
                  list of clusters and their full configuration. It is easy to
                  create and switch between workspaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
