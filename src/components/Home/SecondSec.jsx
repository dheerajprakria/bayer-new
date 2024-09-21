import React from "react";

function SecondSec() {
  return (
    <div>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src="/images/onetablet.jpg" alt="" />
          </div>
          <div className="col-lg-6 m-auto px-5">
            <small className="badge badge-secondary">Pain Relief</small>
            <h2>
              Just one tablet is enough to alleviate all your aches and pain.
            </h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr
            </p>
            <div className="d-flex">
              <button type="button" className="btn btn-primary me-4">
                SUBSCRIBE
              </button>
              <button type="button" className="btn btn-secondary">
                Sign Up ➝
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSec;
