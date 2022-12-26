import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "../Container/Input";
import { baseURL } from "./Basepath";
import { omit } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function Forgotpassword() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control-mod");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  useEffect(() => {
    document.title = "Forgotpassword";
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
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

    if (password !== "") {
      if (confirm_password !== "") {
        let data = {
          password,
          confirm_password,
        };
        axios({
          url: baseURL + "user/reset-pwd/" + id,
          method: "post",
          data: data,
        })
          .then((res) => {
            toast(res.data.message);
    
          })
          .catch((err) => console.log(err));
      } else {
        toast("Please fill the confirm password field");
      }
    } else {
      toast("Please fill the  password field");
    }
  };
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h2 className="page-title">
                Forgot Password{" "}
                <span className="watermark">Forgot Password</span>
              </h2>
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
                    <h2 className="title ">Forgot Your Password</h2>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 col-xs-12">
                  <div className="cont22">
                    <img
                      src={process.env.PUBLIC_URL + "/images/forgot.webp"}
                      alt="join"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="contact-form">
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-12 col-xs-12">
                            <Input
                              id="password"
                              type={passwordType}
                              name="password"
                              placeholder="New password"
                              className="form-control-mod"
                              value={password}
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
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-xs-12">
                            <Input
                              id="cpassword"
                              name="cpassword"
                              type="password"
                              placeholder="Confirm Password"
                              className={cPasswordClass}
                              value={confirm_password}
                              onChange={handleCPassword}
                            />
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

                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit"
                              value="Reset Password"
                              onClick={(e) => handleSubmit(e)}
                            />
                            <ToastContainer />
                          </div>
                        </div>
                        <br />
                        <div className="signup ">
                          <span>Back To </span>
                          <a href="/Login">Login</a>
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

