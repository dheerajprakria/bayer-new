import Link from "next/link";
import React from "react";

function Newsletter() {
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="newsletter-box bg-light p-5 d-flex align-items-center">
              <img
                width="100px"
                className="me-4"
                src="https://static.vecteezy.com/system/resources/previews/003/099/623/non_2x/line-icon-for-newsletter-vector.jpg"
                alt=""
              />
              <div>
                <h3>
                  Receive Health News<br></br>Directly in Your Inbox!
                </h3>
                <p>
                  Stay informed with the latest health trends, tips, and
                  insights delivered right to your box
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5 m-auto">
            <h4>Subscribe to the newsletter</h4>
            <div className="d-flex gap-3 mb-3">
              <input className="form-control rounded-0" type="text" />
              <button className="btn btn-secondary"> Subscribe</button>
            </div>
            <small>
              By subscribing, you agree to our &nbsp;
              <Link className="text-primary" href="#">
                Privacy Policy
              </Link>
              &nbsp; and consent to receive updates by us in your email
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
