import axios from "axios";
import React, { useState } from "react";
import Input from "../Container/Input";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";


export default function Forgotpassword() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "" && confirm_password !== "") {
      let data = {
        password,
        confirm_password, 
      };
      axios({
        url: baseURL + "user/reset-pwd/"+id,
        method: "post",
        data: data,
      })
        .then((res) => {
          console.log(res)
          setTimeout(() => {
            toast(res.data.message);
          }, 1000);
          toast(res.data.message);
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
                Forgot Password{" "}
                <span className="watermark">Forgotpassword</span>
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
                    <img src="images/forgot.png" alt="join" />
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
                              id="newpassword"
                              type="password"
                              name="newpassword"
                              placeholder="New password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-xs-12">
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

                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit"
                              value="Reset Password"
                              onClick={(e) => handleSubmit(e)}
                            />
                            <ToastContainer/>
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
