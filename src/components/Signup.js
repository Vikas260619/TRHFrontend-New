import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
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
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [message, setMessage] = useState("");


  const [passwordType, setPasswordType] = useState("password");

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control-mod");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  useEffect(() => {
    document.title = "Signup";
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [cpasswordType, setCPasswordType] = useState("password");
  const toggleCPassword = () => {
    if (cpasswordType === "password") {
      setCPasswordType("text");
      return;
    }
    setCPasswordType("password");
  };

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === confirm_password) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control-mod is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control-mod is-invalid");
      }
    }
  }, [confirm_password]);

  const handleCPassword = (e) => {
    setConfirm_password(e.target.value);
    setIsCPasswordDirty(true);
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
            email: "Enter a valid Email Address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Enter a min 8 character with at least one digit and one special characters",
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

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setMobile(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!isNaN(name)) {
    //   document.getElementById("blankMsg").innerHTML =
    //     "**Only characters are allowed";
    //   return false;
    // } else {
    //   document.getElementById("blankMsg").innerHTML = "";
    // }

    const regExp =  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

    
    if(regExp.test(name)){
      setMessage("")
    }else if(!regExp.test(name) && name !== ""){
      setMessage("Please enter a valid Name");

    }else{
      setMessage("")
    }
    if (new RegExp(/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i).test(name)) {
      if (new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(email)) {
        if (password !== "") {
          if (occupation !== "") {
            if (confirm_password !== "") {
              if (mobile !== "") {
                if (address !== "") {
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
                      toast(res.data.message);
                      setTimeout(() => {
                        setName("");
                        setEmail("");
                        setMobile("");
                        setOccupation("");
                        setPassword("");
                        setConfirm_password("");
                        setAddress("");
                      }, 500);
                    })
                    // .catch((err) => toast(err.response.data.message));
                } else {
                  toast("Please fill the Address field ");
                }
              } else {
                toast("Please fill the Phone number field ");
              }
            } else {
              toast("Please fill the Confirm Password field ");
            }
          } else {
            toast("Please fill the Occupation field ");
          }
        } else {
          toast("Please fill the Password field ");
        }
      } else {
if(email === ""){
  toast("Please fill the Email field")
}      }
    } else {
      if (name === "") {
        toast("Please fill the Name field");
      }
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
                    <img src="images/signup.webp" alt="join" />
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
                            {/* <span id="blankMsg" style={{ color: "red" }} /> */}
                            <p className="validation">{message}</p>

                          </div>
                          <div className="col-lg-6 col-xs-12">
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
                              name="drop"
                              class="form-select occu"
                              aria-label="Default select example"
                              value={occupation}
                              onChange={(e) => setOccupation(e.target.value)}
                            >
                              <label selected>fdsf</label>
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
                              type={passwordType}
                              className="form-control-mod"
                              placeholder="Password"
                              value={password}
                              minLength={8}
                              style={{
                                borderBottomColor: errors.password ? "red" : "",
                              }}
                              onChange={pwvalidation}
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
                          <div className="col-lg-6 col-xs-12">
                            <Input
                              id="cpassword"
                              name="cpassword"
                              type={cpasswordType}
                              className={cPasswordClass}
                              placeholder="Confirm Password"
                              minLength={8}
                              value={confirm_password}
                              onChange={handleCPassword}
                            />

                            <span
                              for="icon"
                              class="p-viewer but88"
                              onClick={toggleCPassword}
                            >
                              {cpasswordType === "password" ? (
                                <i className="fa fa-eye-slash"></i>
                              ) : (
                                <i className="fa fa-eye"></i>
                              )}
                            </span>

                            {showErrorMessage && isCPasswordDirty ? (
                              <p
                                style={{
                                  color: "red",
                                  marginTop: "-4vh",
                                }}
                              >
                                {" "}
                                Password did not match{" "}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <textarea
                              class="form-control"
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
                                class="form-check-label createtext"
                                for="flexCheckDefault"
                              >
                                By clicking 'Create Account', I agree to
                                TheRapidHire's{" "}
                                <a href="/termsofservices">Terms of service </a> 
                                 and acknowledge <a href="/privacy">Privacy Policy</a>.{" "}
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
                              <a href="/Login">Log In</a>
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
