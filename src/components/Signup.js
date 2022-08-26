import axios from "axios";
import React, { useState } from "react";
import Input from "../Container/Input";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setMobile(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirm_password !== "" &&
      mobile !== "" &&
      occupation !== "" &&
      address !== ""
    ) {
      let data = {
        name,
        email,
        password,
        confirm_password,
        mobile,
        occupation,
        address,
      };
      axios({
        url: baseURL + "user/create",
        method: "post",
        data: data,
      })
        .then((res) => {
          setTimeout(() => {
            toast(res.data.message);
          }, 1000);
          setTimeout(() => {
            setName("");
            setEmail("");
            setMobile("");
            setOccupation("");
            setPassword("");
            setConfirm_password("");
            setAddress("");
          }, 3000);
        })

        .catch((err) => console.log(err));
    } else {
      toast("Fill all the medatory");
    }
  };

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
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              id="email"
                              type="text"
                              name="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              type="tel"
                              placeholder="Phone No."
                              value={mobile}
                              minLength={9}
                              maxLength={12}
                              onChange={(e) => checkInput(e)}
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
                            <select
                              class="form-select occu"
                              aria-label="Default select example"
                              value={occupation}
                              onChange={(e) => setOccupation(e.target.value)}
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              id="cpassword"
                              name="cpassword"
                              type="password"
                              placeholder="Confirm Password"
                              value={confirm_password}
                              onChange={(e) =>
                                setConfirm_password(e.target.value)
                              }
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
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            ></textarea>
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
                              onClick={(e) => handleSubmit(e)}
                            />
                            <ToastContainer />
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
