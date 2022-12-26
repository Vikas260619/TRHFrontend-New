import axios from "axios";
import React, { useState } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
import { baseURL } from "./Basepath";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Login() {
  const Navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Enter a min 8 character with at least one digit and one Special Characters",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val);
    setEmail(val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const pwvalidation = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val);
    setPassword(val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      if (password !== "") {
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
            }, 500);
            toast(res.data.message);
          })
          .catch((err) => toast(err.response.data.message));
      } else {
        toast("Please fill the Password field");
      }
    } else {
      toast("Please fill the Email field");
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
          console.log(res);
          toast(res.data.message);
        })
        .catch((err) => toast(err.response.data.message));
    } else {
      toast("Please fill the Email field");
    }
  };

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Join Our Team</title>

        <meta
          name="description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all times."
        />
        <meta name="image" content="https://therapidhire.com/images/ser6.png" />

        <meta itemprop="name" content="Join Our Team" />
        <meta
          itemprop="description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all times."
        />
        <meta
          itemprop="image"
          content="https://therapidhire.com/images/ser6.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Join Our Team" />
        <meta
          name="twitter:description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all times."
        />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta name="twitter:creator" content="@therapidhire_" />
        <meta
          name="twitter:image:src"
          content="https://therapidhire.com/images/ser6.png"
        />

        <meta name="og:title" content="Join Our Team" />
        <meta
          name="og:description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all times."
        />
        <meta name="og:image" content="https://www.therapidhire.com/logo.png" />
        <meta name="og:url" content="https://www.therapidhire.com/login" />
        <meta name="og:site_name" content="therapidhire" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:app_id" content="1369882117133030" />
        <meta name="og:type" content="article" />

        <meta name="article:section" content="Software development" />
        <meta name="article:author" content="https://www.facebook.com/profile.php?id=100054281690679" />
        <meta name="article:tag" content="Software development" />
      </Helmet>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h2 className="page-title">Join Our Team</h2>
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
                              style={{
                                borderBottomColor: errors.email ? "red" : "",
                              }}
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <p
                                style={{
                                  color: errors.email ? "red" : "",
                                  marginTop: "-4vh",
                                }}
                              >
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-xs-12 ">
                            <Input
                              id="password"
                              name="password"
                              type={passwordType}
                              onChange={pwvalidation}
                              value={password}
                              class="form-control"
                              placeholder="Password"
                            />
                            <span
                              for="icon"
                              class="p-viewer but88"
                              onClick={togglePassword}
                            >
                              {passwordType === "password" ? (
                                <i className="fa fa-eye-slash"></i>
                              ) : (
                                <i className="fa fa-eye"></i>
                              )}
                            </span>
                          </div>
                          {errors.password && (
                            <p
                              style={{
                                color: errors.password ? "red" : "",
                                marginTop: "-4vh",
                              }}
                            >
                              {errors.password}
                            </p>
                          )}
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
                            <button
                              className="readon submit"
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                            >
                              Login
                            </button>
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
