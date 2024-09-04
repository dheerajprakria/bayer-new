import Cta from "@/components/Faq/Cta";
import FaqTabs from "@/components/Faq/FaqTabs";
import React from "react";

function Faq() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="container ">
          <div className="row py-5 my-5">
            <div className="col-lg-6">
              <h1>
                Find relief from Pain<br></br>
                with our FAQs
              </h1>
              <p className="mb-3">
                Discover answers to common questions about pain relief for
                female issues, headaches and body pain.
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
            <div className="col-lg-6"></div>
          </div>
          <div className="container text-center">
            <div className="d-flex justify-content-center">
              <input
                placeholder="Type here..."
                style={{ width: "500px", border: "1px solid #000" }}
                className="form-control me-1"
                type="text"
              />
              <button className="btn btn-dark rounded">Search</button>
            </div>
          </div>
          <div className="tabs my-5 ">
            <FaqTabs />
          </div>
          <Cta />
        </div>
      </div>
    </div>
  );
}

export default Faq;
