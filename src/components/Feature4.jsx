import React from "react";

export default function Feature4() {
  return (
    <div className="basic-3">
      <div className="fifth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h3>Built-In Prometheus Stats</h3>
                <p>
                  See all relevant graphs and resource utilization charts
                  integrated as part of the dashboard. Lens comes with a
                  built-in and multi-tenant Prometheus setup that will respect
                  RBAC for each user. Users will see visualization for all the
                  namespaces and resources they have access to. All graphs and
                  resource utilization charts are designed to be very accessible
                  and available in the right context no matter which part of the
                  dashboard you are operating.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="images/built-in-prometheus-stats.svg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
