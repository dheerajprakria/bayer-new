import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid  know-more-hero m-auto d-flex align-items-center"
      style={{ background: "url(/images/femissue-bg.jpg)", backgroundSize:"cover" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-white">Get More Done, Because You Can</h1>
            <p className="text-white">
              Empowering striong women with expert tips and insights to enhance
              health, boost productivity, and achieve their fullest potential!
            </p>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
