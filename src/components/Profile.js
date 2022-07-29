import React from "react";
import Input from "../Container/Input";

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
                  <div className="profile-head">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Kshiti Ghelani</h5>
                        <h6>Fresher </h6>
                      </div>
                      <div className="col-md-6">
                        <button
                          type="button"
                          class="profile-edit-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#editprofile"
                        >
                          Edit Profile{" "}
                        </button>

                        <div
                          class="modal fade rs-appointment"
                          id="editprofile"
                          tabindex="-1"
                          aria-labelledby="editprofile"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog appoint-schedule">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="editprofile">
                                  Edit Profile
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div className="contact-wrap">
                                  <div id="form-messages"></div>
                                  <form id="signup-form">
                                    <fieldset>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Input
                                            id="fname"
                                            type="text"
                                            name="fname"
                                            placeholder="FullName"
                                            value="fname"
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <Input
                                            id="email"
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            value="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Input
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            placeholder="Phone No."
                                            value="phone"
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <select
                                            class="form-select occu"
                                            aria-label="Default select example"
                                          >
                                            <option selected>Occupation</option>
                                            <option value="Student">
                                              Student
                                            </option>
                                            <option value="Fresher">
                                              Fresher
                                            </option>
                                            <option value="Employee">
                                              Employee
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value="password"
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <Input
                                            id="cpassword"
                                            name="cpassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            value="cpassword"
                                          />
                                        </div>
                                      </div>
                                      
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <textarea
                                            class="form-control occu"
                                            id="address"
                                            rows="2"
                                            placeholder="Address"
                                          ></textarea>
                                        </div>
                                      </div>

                                     
                                     
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" class="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
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
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Name</label>
                          </div>
                          <div className="col-md-6">
                            <p>Kshiti Ghelani</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>kshitighelani@gmail.com</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>123 456 7890</p>
                          </div>
                        </div>
                        <div className="row">
                          <div class="col-md-6">
                            <label>Occupation</label>
                          </div>
                          <div class="col-md-6">
                            <p>Fresher</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Password</label>
                          </div>
                          <div className="col-md-6">
                            <p>****** </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Confirm Password</label>
                          </div>
                          <div className="col-md-6">
                            <p>****** </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Address</label>
                          </div>
                          <div className="col-md-6">
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
