import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="container-fluid hero-sec"
        style={{ background: "#efefef", padding: "0", height: "100%" }}
      >
        <div className="row">
          <div className="col-lg-5 m-auto" style={{ paddingLeft: "120px" }}>
            <small className="badge badge-secondary">Saridon</small>
            <h1>
              Get Relief<br></br> from your pain
            </h1>
            <p className="my-4">
              Expensive fast and effective pain relief. Say goodbye to headaches
              and vosy aches, and get back to doing what to love
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
          <div className="col-lg-7">
            <img
              // height="500px"
              className="img-fluid rounded-0"
              src="/images/main.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
