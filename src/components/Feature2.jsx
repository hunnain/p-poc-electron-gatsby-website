import React from "react";

export default function Feature2() {
  return (
    <div className="basic-3">
      <div className="third">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h3>Multi Cluster Management</h3>
                <p>
                  Access and work with your clusters with a confidence from a
                  single unified IDE. Lens works with any number of Kubernetes
                  clusters. Access to the clusters are made using the built-in
                  kubectl to enforce the Kubernetes RBAC. The clusters may be
                  local (e.g. minikube) or external (e.g. Docker Enterprise,
                  EKS, AKS, GKE, Pharos, UCP, Rancher, Tanzu or OpenShift).
                  Clusters may be added simply by importing the kubeconfig with
                  cluster details. Once added, it is easy to switch between
                  clusters to work on. With Lens, you'll get a single unified
                  IDE for all your clusters!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="images/multi-cluster-management.svg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
