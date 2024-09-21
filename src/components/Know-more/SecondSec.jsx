import React from "react";

function SecondSec() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage:
          "linear-gradient(358deg, rgb(221, 232, 255), rgb(255, 255, 255))",
      }}
    >
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-6 m-auto slides">
            <h2 style={{ fontSize: "55px" }}>
              Explore Common<br></br> Concerns and <br></br>Solutions
            </h2>
          </div>
          <div className="col-lg-6">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/femissue.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Fem Issues</h5>
                    <p>
                      We understand your pain and are here to help you find
                      relief.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/headache.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Headaches</h5>
                    <p>
                      We understand your pain and are here to help you find
                      relief.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/bodypain.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Body Pain</h5>
                    <p>
                      We understand your pain and are here to help you find
                      relief.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSec;
