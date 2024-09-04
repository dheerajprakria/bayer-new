import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div style={{ background: "#e4e4e4" }}>
      <div className="container  pt-2 footer" id="footer-a">
        <div className="box ">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <h2 className="text-white">Relieve Your Pain Today</h2>
              <p className="text-white">
                Discover the power of fast pain relief with our solution
              </p>
            </div>
            <div className="col-lg-6 m-auto text-end">
              <div className="">
                <button type="button" className="btn btn-primary me-4">
                  TRY
                </button>
                <button type="button" className="btn btn-secondary">
                  Learn More ➝
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-list py-4">
          <div className="col-lg-3">
            <img
              className="img-fluid"
              width="130px"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <h6>About Us</h6>
            <ul>
              <li>
                <Link href="#"> Home</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Know Your Pain</Link>
              </li>
              <li>
                <Link href="#">Newsletter</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>Pain Relief</h6>
            <ul>
              <li>
                <Link href="#">Pain Myth & Facts</Link>
              </li>
              <li>
                <Link href="#">Home Remedies</Link>
              </li>
              <li>
                <Link href="#">Exercise Tips</Link>
              </li>
              <li>
                <Link href="#">Stress Management</Link>
              </li>
              <li>
                <Link href="#">Explore More</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>Partners</h6>
            <ul>
              <li>
                <Link href="#">Investors</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Newsletter Subscription</h6>
            <input placeholder="Enter Your Email" className="mb-2" style={{width:"100%", padding:"8px 10px"}} type="text" />
            <div className="d-grid gap-2">
             
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="copyright py-4 text-center">
          <small>2024 Saridon. All Rights Reserved</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
