import React, { useState } from "react";
import Input from "../Container/Input";
import { omit } from "lodash";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Apply() {
  const [candidateName, setCandidateName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [applypostion, setApplypostion] = useState("");
  const [resume, setResume] = useState("");
  const [technology, setTechnology] = useState("");

  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = (event, name, value) => {
    //A function to validate each input values

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

  const hiddenFileInput = React.useRef(null);

  

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e) e.preventDefault();
    if (
      candidateName !== "" &&
      email !== "" &&
      phone_number !== "" &&
      applypostion !== "" &&
      technology !== "" &&
      resume !== ""
    ) {
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
          setTimeout(() => {
            toast(res.data.message);
          }, 1000);
        })
        .catch((err) => console.log(err));
    } else {
      toast("Fill all the mendetaory  field");
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
              If you're enthusiastic, inquisitive, and enjoy using your ideas to overcome problems, this is the place for you.
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
                    <h2 className="title ">Apply For Java Developer</h2>
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
                      Experience in core Java advanced programming. Experience
                      in Spring & Hibernate is mandatory. Experience in building
                      mechanisms like Maven. Good knowledge on design patterns
                      and anti-patterns. Good in algorithms and data structures.
                      Good understanding of Database concepts and Experience in
                      SQL, PLSQL and NoSQL. Excellent Analytical and program
                      solving skills Excellent written and oral communication
                      skills self-starter and highly motivated Work in a dynamic
                      environment and ability to adapt quickly to changes.
                      Experience with Test and defect management tools. An
                      innovator, always suggesting newer ways of improving
                      Productivity. Mentor and train team members. Identify and
                      escalate Risks on time and suggest mitigation measures.
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
                            name="name" placeholder="Name"
                            value={candidateName}
                            onChange={(e)=>setCandidateName(e.target.value)}
                          />
                          </div>
                          <div className="col-lg-6">
                          <Input
                            id="email"
                            name="email"
                            type="text" placeholder="Email Address"
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
                            id="phone"
                            name="phone"
                            type="number" placeholder="Phone No."
                            value={phone_number}
                            minLength={9}
                            maxLength={12}
                            onChange={(e) => setPhone_number(e.target.value)}
                          /></div>
                           <div className="col-lg-6">
                          <Input
                            id="position"
                            name="position" placeholder="Apply Position"
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
                              value={resume}
                              onChange={(e) => handleFileChange(e)}
                              className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required"
                              required
                            />
                          </span>{" "}</div>
                          </div>
                          {/* <div className="row" >

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
                        </div> */}
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

export default Apply;
