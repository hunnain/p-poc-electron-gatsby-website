import React from "react";

export default function Feature5() {
  return (
    <div className="basic-3">
      <div className="sixth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="images/context-aware-terminal.svg"
                alt="alternative"
              />
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h3>Context Aware Terminal</h3>
                <p>
                  The built-in terminal comes with kubectl that is always API
                  compatible with your cluster and in the right context. Lens
                  built-in terminal will ensure the version of Kubernetes
                  cluster API is compatible with the version of kubectl. It will
                  download and assign the correct version on fly so you don't
                  have to. It will also provide peace of mind by switching the
                  kubectl context to match the cluster you are currently working
                  with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
