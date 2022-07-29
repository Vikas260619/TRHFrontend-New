import React from "react";
import Input from "../Container/Input";

export default function Signup() {
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Join Our Team
                <span className="watermark">Signup</span>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-title3 text-center ">
                    <h2 className="title ">Signup To Your Account</h2>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 col-xs-12">
                  <div className="cont22">
                    <img src="images/signup.png" alt="join" />
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12 ">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="signup-form">
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-6  col-xs-12">
                            <Input
                              id="fname"
                              type="text"
                              name="fname"
                              placeholder="FullName"
                              value="fname"
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
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
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              id="phone"
                              name="phone"
                              type="number"
                              placeholder="Phone No."
                              value="phone"
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
                            <select
                              class="form-select occu"
                              aria-label="Default select example"
                            >
                              <option selected>Occupation</option>
                              <option value="Student">Student</option>
                              <option value="Fresher">Fresher</option>
                              <option value="Employee">Employee</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              value="password"
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
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
                          <textarea class="form-control occu" id="address" rows="2" placeholder="Address"></textarea>
                          </div>
                         
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                I agree all statements in{" "}
                                <a href="/Terms">Terms of service</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="btn-part ">
                          <div className="form-group mb-0 ">
                            <input
                              className="readon submit"
                              type="submit"
                              value="Create Account"
                            />
                          </div>
                          <br />
                          <p>
                            <strong>
                              Already have an account ?{" "}
                              <a href="/Login">Log in</a>
                            </strong>
                          </p>
                        </div>
                      </fieldset>
                    </form>
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
