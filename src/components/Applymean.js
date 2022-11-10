import React, { useState } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
import axios from "axios";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Applymean() {
  const [candidateName, setCandidateName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [applypostion, setApplypostion] = useState("");
  const [resume, setResume] = useState("");
  const [technology, setTechnology] = useState("");
  const [inputFile, setInputFile] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    document.title = "Apply Mean";
  });

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
    setEmail(val);
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

    if (candidateName !== "") {
      if (email !== "") {
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
                    }, 3000);
                  })
                  .catch((err) => console.log(err));
              } else {
                toast("Please Fill the Technology field");
              }
            } else {
              toast("Please Fill the Resume field");
            }
          } else {
            toast("Please Fill the Apply Postion field");
          }
        } else {
          toast("Please Fill the Phone number field");
        }
      } else {
        toast("Please Fill the email field");
      }
    } else {
      toast("Please Fill the Name field");
    }
  };

  return (
    <div>
      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Explore Opportunities
                <span className="watermark">Apply Now</span>
              </h1>
              <span className="sub-text">
                If you're enthusiastic, inquisitive, and enjoy using your ideas
                to overcome problems, this is the place for you.
              </span>
            </div>
          </div>
        </div>
        <div className="rs-appointment style1 apply-career bg17 pt-95  pb-95">
          <div className="container">
            <div className="appoint-schedule">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-title3 text-center ">
                    <h2 className="title ">Apply For MEAN Developer</h2>
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
                      Basic understanding of server-side requirements and
                      processes. In-depth knowledge of client-side requirements
                      and processes. Knowledge of workflow and architecture.
                      Understanding of MongoDB, Express.js, Node.js, and
                      Angular.js. Extensive knowledge of cloud technology,
                      continuous integration, and web development. Knowledge of
                      software development lifecycle (SDLC) and agile
                      methodology. Excellent verbal and communication skills.
                      Strong analytical skills with a creative mindset.
                      Proficiency in CSS, HTML, and JavaScript. Ability to
                      implement applications using Angular JS. Well-versed in a
                      domain-specific language. Strong time management and
                      critical thinking skills.
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
                              onChange={(e) => setCandidateName(e.target.value)}
                            />
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
                              maxLength={10}
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
                                key={resume || ""}
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

export default Applymean;
