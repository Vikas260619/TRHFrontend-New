import React from "react";
import Input from "../Container/Input";


export default function Login() {
  
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
                <div className="col-lg-6 ">
                  <div className="cont22">
                    <img src="images/join.jpg" alt="join"/>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="contact-form">
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-12">
                          
                          <Input
                            id="email"
                            type="text"
                            name="email" placeholder="Email"
                            value="email"
                           
                          />
                          </div>
                         
                          
                          </div>
                         
                          <div className="row">
                          <div className="col-lg-12">
                        
                          <Input

                            id="password"
                            name="password"
                            type="password" placeholder="Password"
                            value="password"/>
                          
                          </div>
                          </div>
                          <div className="forgot"><a href="">Forgot Password ?</a></div>
                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit"
                            
                             
                            />
                          
                          </div>
                        </div><br/>
                        <div className="signup "><span>Don't have an account?</span><a href="/Signup">Signup</a></div>
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
