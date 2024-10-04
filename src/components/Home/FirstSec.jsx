import React from "react";

function FirstSec() {
  return (
    <div className="home first-sec">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <small className="badge badge-secondary">Our Solutions</small>
          <h2 style={{ color: "#25215e" }}>Understand Your Pain</h2>
          <p>
            Expensive fast and effective pain relief. Say goodbye to headaches
           
            and vosy aches, and get back to doing what to love
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/images/femissue.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Fem Issues</h5>
                <p className="card-text mb-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <button class="button-57" role="button">
                  <span class="text">Learn More</span>
                  <span>Fem Issues</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/images/headach1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Headache</h5>
                <p className="card-text mb-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <button class="button-57" role="button">
                  <span class="text">Learn More</span>
                  <span>Headache</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/images/bodypain.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Body Pain</h5>
                <p className="card-text mb-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <button class="button-57" role="button">
                  <span class="text">Learn More</span>
                  <span>Body Pain</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSec;
