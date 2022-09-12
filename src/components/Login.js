import axios from "axios";
import React, { useState } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
import { baseURL } from "./Basepath";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

export default function Login() {
  const Navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
              password: "Enter a minimum 8 character with strong password ",
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
            }, 3000);
            toast(res.data.message);
          })
          .catch((err) => console.log(err));
      } else {
        toast("Please Fill the password field");
      }
    } else {
      toast("Please Fill the email field");
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
                              // onChange={(e) => setEmail(e.target.value)}
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
