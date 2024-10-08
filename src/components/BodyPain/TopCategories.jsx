import React from "react";

function TopCategories() {
  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="heading-box d-flex justify-content-between align-items-center">
          <h2>Top Categories</h2>
          <button type="button" className="btn btn-primary">
            SEE ALL ➝
          </button>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="cat-card d-flex align-items-center">
              <img
                className="rounded-circle"
                width="100px"
                src="/images/sleep.jpeg"
                alt="sleep issues"
              />
              <div>
                <h3>Pain Myths</h3>
                <p>10 Articles</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cat-card d-flex align-items-center">
              <img
                className="rounded-circle"
                width="100px"
                src="/images/sleep.jpeg"
                alt="sleep issues"
              />
              <div>
                <h3>Remedies</h3>
                <p>14 Articles</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cat-card d-flex align-items-center">
              <img
                className="rounded-circle"
                width="100px"
                src="/images/sleep.jpeg"
                alt="sleep issues"
              />
              <div>
                <h3>Exercise Tips</h3>
                <p>6 Articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
