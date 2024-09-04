import React from "react";

function FaqTabs() {
  return (
    <div className="container py-5 faq-tabs w-75">
      <ul
        className="nav nav-tabs border-0 justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link border-0 active"
            id="feminine-issues-tab"
            data-bs-toggle="tab"
            data-bs-target="#feminine-issues"
            type="button"
            role="tab"
            aria-controls="feminine-issues"
            aria-selected="true"
          >
            Feminine Issues
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link border-0"
            id="headache-tab"
            data-bs-toggle="tab"
            data-bs-target="#headache"
            type="button"
            role="tab"
            aria-controls="headache"
            aria-selected="false"
          >
            Headache
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link border-0"
            id="body-ache-tab"
            data-bs-toggle="tab"
            data-bs-target="#body-ache"
            type="button"
            role="tab"
            aria-controls="body-ache"
            aria-selected="false"
          >
            Body Ache
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="feminine-issues"
          role="tabpanel"
          aria-labelledby="feminine-issues-tab"
        >
          <div className="p-4">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How i can relieve menstrual pain?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first items accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It is also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can i use pain relievers for menstrual cramps?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It is also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What pain relief methods are safe during breastfeeding?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It is also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="headache"
          role="tabpanel"
          aria-labelledby="headache-tab"
        >
          <div className="p-4">
            <h4>Headache</h4>
            <p>
              Headaches are one of the most common forms of pain. They can range
              from mild discomfort to severe migraines, impacting daily
              activities and quality of life.
            </p>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="body-ache"
          role="tabpanel"
          aria-labelledby="body-ache-tab"
        >
          <div className="p-4">
            <h4>Body Ache</h4>
            <p>
              Body aches can be a sign of various conditions, from the flu to
              more serious health issues. Proper treatment and relief can help
              you get back to your normal routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqTabs;
