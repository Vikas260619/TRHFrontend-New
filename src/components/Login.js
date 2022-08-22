import axios from "axios";
import React, { useState } from "react";
import Input from "../Container/Input";
import { baseURL } from "./Basepath";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let data = {
        email,
        password,
      };
      axios({
        url: baseURL + "user/login",
        method: "post",
        data: data,
      })
        .then((res) => {
          localStorage.setItem("Token", JSON.stringify(res.data.token));
          setTimeout(() => {
            Navigate("/profile/" + res.data.Data._id);
            window.location.reload();
          }, 3000);
          toast(res.data.message);
        })
        .catch((err) => console.log(err));
    } else {
      toast("Fill all the medatory");
    }
  };

  const Forgethandle = (e) => {
    e.preventDefault();
    if (email !== "") {
      let data = {
        email,
      };
      axios({
        url: baseURL + "user/forget",
        method: "post",
        data: data,
      })
        .then((res) => {
          toast(res.data.message);

          setTimeout(() => {}, 1000);
        })
        .catch((err) => console.log(err));
    } else {
      toast("Please Fill the email field");
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
                <span className="watermark">Login</span>
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
                    <h2 className="title ">Login To Your Account</h2>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 col-xs-12 ">
                  <div className="cont22">
                    <img src="images/join.jpg" alt="join" />
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12 ">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="contact-form">
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-12 col-xs-12 ">
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
                          <div className="col-lg-12 col-xs-12 ">
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="forgot">
                          <a href="" onClick={Forgethandle}>
                            {" "}
                            <ToastContainer />
                            Forgot Password ?
                          </a>
                        </div>
                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                            />
                          </div>
                        </div>
                        <br />
                        <div className="signup ">
                          <span>Don't have an account?</span>
                          <a href="/Signup">Signup</a>
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
