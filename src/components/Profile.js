import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Your Profile <span className="watermark">Profile</span>
              </h1>
              <span className="sub-text">
                At TheRapidHire, we believe in hard work and transparency. We
                encourage professionalism and clarity of thought at all times.{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="rs-appointment style1 apply-career bg17 pt-95 pb-95">
          <div className="container">
            <div className="appoint-schedule">
              <div className="row ">
                <div className="col-lg-6 ">
                  <img src="images/profile.png" alt="profile" />
                </div>

                <div className="col-lg-6 ">
                  <div class="profile-head">
                    <h5>Kshiti Ghelani</h5>
                    <h6>Fresher </h6>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Name</label>
                          </div>
                          <div class="col-md-6">
                            <p>Kshiti Ghelani</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>kshitighelani@gmail.com</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div class="col-md-6">
                            <p>123 456 7890</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Occupation</label>
                          </div>
                          <div class="col-md-6">
                            <p>Fresher</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Address</label>
                          </div>
                          <div class="col-md-6">
                            <p>Keas 69 Str. 15234, Chalandri Athens, Greece </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
