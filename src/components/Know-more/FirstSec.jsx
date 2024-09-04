import React from "react";

function FirstSec() {
  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2>Know Your Pain</h2>
          </div>
          <div className="col-lg-6">
            <p className="mb-3">
              We understand your pain and are here to help you find relief. Our
              services are designed to address a wide range of pain issues, from
              headaches to body pain.
            </p>
            <div className="d-flex">
              <button type="button" className="btn btn-primary me-4">
                SUBSCRIBE
              </button>
              <button type="button" className="btn btn-secondary">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSec;
