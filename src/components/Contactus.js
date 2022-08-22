import React, { useState } from "react";
import Common from "../Container/Common.js";
import axios from "axios";
import { baseURL } from "./Basepath.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { omit } from "lodash";

function Contactus() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setwebsite] = useState("");
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
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

  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setEmail(val);

    setValues({
      ...values,
      [email]: val,
    });
  };
  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && phone !== "" && message !== "") {
      let data = {
        message,
        name,
        email,
        phone,
        website,
      };
      axios({
        url: baseURL + "contact/create",
        method: "post",
        data: data,
      })
        .then((res) => {
          setTimeout(() => {
            toast(res.data.message);
          }, 1000);
          setTimeout(() => {
            setName("");
            setMessage("");
            setEmail("");
            setPhone("");
            setwebsite("");
          }, 3000);
        })

        .catch((err) => console.log(err));
    } else {
      toast("Fill all the medatory");
    }
  };

  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">
        <Common
          name="Get in touch"
          background="Contact"
          description="Get in touch with us and discuss the needs and requirements of
         your Development project."
        />

        <div className="rs-contact contact-style2 bg9 pt-95 pb-95 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.95864591758658!2d75.86723884040701!3d22.75282198501708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e32b2894590f%3A0x4e73ebc1261cc50!2sTheRapidHire%20Private%20Limited!5e0!3m2!1sen!2sin!4v1658831054327!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title mb-45 md-mb-25">
                  <h2 className="title pb-20">
                    Let us help your business to move <span>forward.</span>
                  </h2>
                  <br />
                </div>
                <div className="contact-wrap">
                  <div id="form-messages"></div>
                  <form id="contact-form" method="post" action="mailer.php">
                    <fieldset>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            name="email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="E-Mail"
                            style={{
                              borderBottomColor: errors.email ? "red" : "",
                            }}
                            required
                          />
                          {errors.email && (
                            <p
                              style={{
                                color: errors.email ? "red" : "",
                              }}
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="tel"
                            // id="phone"
                            // name="number"
                            value={phone}
                            minLength={9}
                            maxLength={12}
                            placeholder="Phone Number"
                            onChange={(e) => checkInput(e)}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="Website"
                            value={website}
                            name="website"
                            onChange={(e) => setwebsite(e.target.value)}
                            placeholder="Your Website"
                            required
                          />
                        </div>

                        <div className="col-lg-12 mb-35">
                          <textarea
                            className="from-control"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message Here"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="btn-part">
                        <div className="form-group mb-0">
                          <input
                            className="readon submit"
                            type="submit"
                            onClick={handleSubmit}
                            value="Contact Us"
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

          <div className="rs-contact main-home">
            <div className="container">
              <div className="contact-icons-style box-address pt-95 ">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <img src="images/usa.png" alt="usaflag" />
                        </div>
                        <h2 className="title">
                          <a href="#">USA Office</a>
                        </h2>
                        <p className="services-txt">
                          1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
                          <br />
                          USA
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <img src="images/indiaflag.png" alt="indiaflag" />
                        </div>
                        <h2 className="title">
                          <a href="/">India Office</a>
                        </h2>
                        <p className="services-txt">
                          51, Electronic Complex, Pardesi Pura Main Road,
                          <br />
                          INDORE(M.P){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">Email Us</a>
                        </h2>
                        <a href="mailto:sales@therapidhire.com">
                          sales@therapidhire.com
                        </a>
                        <br />
                        <a href="mailto:info@therapidhire.com">
                          info@therapidhire.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">Call Us</a>
                        </h2>
                        <a href="tel:+1 (917) 628 2406">+1 (917) 628 2406</a>
                        <br />
                        <a href="tel:073135620055">+0731 356 20055</a>
                      </div>
                    </div>
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

export default Contactus;
