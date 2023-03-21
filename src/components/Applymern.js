import React, { useState } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
import axios from "axios";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function Applymern() {
  const [candidateName, setCandidateName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [applypostion, setApplypostion] = useState("");
  const [resume, setResume] = useState("");
  const [technology, setTechnology] = useState("");
  const [inputFile, setInputFile] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(/^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/).test(
            value
          )
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid Email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "name":
        if (!new RegExp(/^[a-zA-Z ]*$/).test(value)) {
          setErrors({
            ...errors,
            candidateName: "Enter a valid Name",
          });
        } else {
          let newObj = omit(errors, "candidateName");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    if (inputFile === false) {
      setResume(e.target.files[0]);
    } else {
      e.target.files = null;
    }
  };
  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val);
    if (name === "email") {
      setEmail(val);
    } else if (name === "name") {
      setCandidateName(val);
    }
    setValues({
      ...values,
      [name]: val,
    });
  };

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone_number(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regExp = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    if (regExp.test(candidateName)) {
      setMessage("");
    } else if (!regExp.test(candidateName) && candidateName !== "") {
      setMessage("Please enter a valid Name");
    } else {
      setMessage("");
    }

    //   if (!isNaN(candidateName)) {/*0*
    //     document.getElementById("blankMsg").innerHTML = "**Only characters are allowed";
    //     return false;
    // } else {
    //     document.getElementById("blankMsg").innerHTML = "";
    // }

    if (new RegExp(/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i).test(candidateName)) {
      if (
        new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(email)
      ) {
        if (phone_number !== "") {
          if (applypostion !== "") {
            if (resume !== "") {
              if (technology !== "") {
                let formData = new FormData();
                formData.append("candidateName", candidateName);
                formData.append("email", email);
                formData.append("phone_number", phone_number);
                formData.append("applypostion", applypostion);
                formData.append("resume", resume);
                formData.append("technology", technology);
                axios({
                  url: baseURL + "candidate/create",
                  method: "post",
                  headers: "",
                  data: formData,
                })
                  .then((res) => {
                    toast(res.data.message);

                    setTimeout(() => {
                      setCandidateName("");
                      setEmail("");
                      setPhone_number("");
                      setApplypostion("");
                      setTechnology("");
                      setInputFile(true);
                      setResume(null);
                    }, 500);
                  })
                  .catch((err) => console.log(err));
              } else {
                toast("Please fill the technology field");
              }
            } else {
              toast("Please fill the resume field");
            }
          } else {
            toast("Please fill the apply position field");
          }
        } else {
          toast("Please fill the Phone number field");
        }
      } else {
        if (email === "") {
          toast("Please fill the Email field");
        }
      }
    } else {
      if (candidateName === "") {
        toast("Please fill the Name field");
      }
    }
  };

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Apply For Mern Developers</title>
        <meta
          name="description"
          content="We are looking for a MERN Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to "
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:1, max-video-preview:1"
        />
        <link rel="canonical" href="https://www.therapidhire.com/applymern" />
        <meta
          name="fb:app_id"
          content="1369882117133030"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://www.therapidhire.com/applymern"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apply For Mern Developers" />
        <meta
          property="og:description"
          content="We are looking for a MERN Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception."
        />
        <meta
          property="og:image"
          content="https://www.therapidhire.com/images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:alt" content="therapidhire" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@therapidhire_"/>
          
        <meta
          property="twitter:url"
          content="https://www.therapidhire.com/applymern"
        />
        <meta name="twitter:title" content="Apply For Mern Developers" />
        <meta
          name="twitter:description"
          content="We are looking for a MERN Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception."
        />
        <meta
          name="twitter:image"
          content="https://www.therapidhire.com/images/logo.png"
        />
      </Helmet>

      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h2 className="page-title">Explore Opportunities</h2>
              <span className="sub-text">
                If you're enthusiastic, inquisitive, and enjoy using your ideas
                to overcome problems, this is the place for you.
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
                    <h2 className="title "> Apply For Mern Developers</h2>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 ">
                  <div className="cont22">
                    <p>
                      Ability to translate Wireframes and PSD Designs into
                      functional web apps using HTML5, AngularJS, React,
                      Node.js, and Mongo. Binding of UI elements to JavaScript
                      object models. Creating RESTful services with Node.js.
                      Architect scalable web architectures. Work in a
                      cross-functional team to deliver a complete user
                      experience. Create Unit and Integration tests to ensure
                      the quality of code. Be responsive to change requests and
                      feature requests. Write code that is cross-platform and
                      cross-device compatible. Ability to wear many hats and
                      learn new technologies quickly. creating complex
                      HTML-based solutions. Detail-oriented experience as a Web
                      Developer creating Angular-based solutions with Node.js
                      and Express. Ability to work both independently and in
                      collaborative teams to communicate design and build ideas
                      effectively. Experience using asynchronous RESTful
                      services (JSON).
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="contact-form">
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-6">
                            <Input
                              id="text"
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={candidateName}
                              style={{
                                borderBottomColor: errors.candidateName
                                  ? "red"
                                  : "",
                              }}
                              onChange={handleChange}
                            />

                            {errors.candidateName && (
                              <p
                                style={{
                                  color: errors.candidateName ? "red" : "",
                                  marginTop: "-4vh",
                                }}
                              >
                                {errors.candidateName}
                              </p>
                            )}

                            {/* <p className="validation">{message}</p> */}
                          </div>
                          <div className="col-lg-6">
                            <Input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Email Address"
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
                          <div className="col-lg-6">
                            <Input
                              type="tel"
                              placeholder="Phone No."
                              value={phone_number}
                              minLength={9}
                              maxLength={12}
                              onChange={(e) => checkInput(e)}
                            />
                          </div>
                          <div className="col-lg-6">
                            <Input
                              id="position"
                              name="position"
                              placeholder="Apply Position"
                              type="text"
                              value={applypostion}
                              onChange={(e) => setApplypostion(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <span className="wpcf7-form-control-wrap resume">
                              <Input
                                type="file"
                                name="resume"
                                size="40"
                                onChange={(e) => handleFileChange(e)}
                                className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required"
                                required
                              />
                            </span>{" "}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <Input
                              id="technology"
                              name="technology"
                              type="text"
                              placeholder="Technology"
                              value={technology}
                              onChange={(e) => setTechnology(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <Input
                              className="readon submit"
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                            />

                            <ToastContainer />
                          </div>
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

export default Applymern;
