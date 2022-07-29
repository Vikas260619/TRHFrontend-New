import React from "react";
import Input from "../Container/Input";


export default function Forgotpassword() {
  
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Forgot Password <span className="watermark">Forgotpassword</span>
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
                    <img src="images/forgot.png" alt="join"/>
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
                            name="newpassword" placeholder="New password"
                            value="newpassword"
                           
                          />
                          </div>
                         
                          
                          </div>
                         
                          <div className="row">
                          <div className="col-lg-12 col-xs-12">
                        
                          <Input

                            id="cpassword"
                            name="cpassword"
                            type="password" placeholder="Confirm Password"
                            value="cpassword"/>
                          
                          </div>
                          </div>
                          
                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit" value="Reset Password"
                            
                             
                            />
                          
                          </div>
                        </div><br/>
                        <div className="signup "><span>Back To </span><a href="/Login">Login</a></div>
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
  )
}
