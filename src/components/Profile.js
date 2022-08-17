import React, { useEffect, useState } from "react";
import Input from "../Container/Input";
import axios from "axios";
import { baseURL } from "./Basepath";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [users, setUsers] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    axios({
      url: baseURL + "user/profile/" + id,
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data.message);
        setUsers(res.data.message);
        setName(res.data.message.name);
        setMobile(res.data.message.mobile);
        setOccupation(res.data.message.occupation);
        setAddress(res.data.message.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setMobile(onlyDigits);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("Token"));
    axios({
      url: baseURL + "user/updateprofile/" + id,
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
      data: { name, mobile, occupation, address },
    })
      .then((res) => {
        toast(res.data.status);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
                

      })
      .catch((err) => {
        console.log(err);
      });
    
  };

 
  // function refreshPage() {
  //   window.location.reload();
  // }
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Your Profile <span className="watermark">Profile</span>
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
              <div className="row ">
                <div className="col-lg-6 ">
                  <img src={process.env.PUBLIC_URL +'/images/profile.png'} alt="profile" />
                </div>
                
                <div className="col-lg-6 ">
                  <div className="profile-head">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>{users.name}</h5>
                        <h6>{users.occupation} </h6>
                      </div>
                      <div className="col-md-6">
                        <button
                          type="button"
                          class="profile-edit-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#editprofile"
                        >
                          Edit Profile{" "}
                        </button>

                        <div
                          class="modal fade rs-appointment"
                          id="editprofile"
                          tabindex="-1"
                          aria-labelledby="editprofile"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog appoint-schedule">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="editprofile">
                                  Edit Profile
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div className="contact-wrap">
                                  <div id="form-messages"></div>
                                  <form id="signup-form">
                                    <fieldset>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Input
                                            id="fname"
                                            type="text"
                                            name="fname"
                                            placeholder="FullName"
                                            value={name}
                                            onChange={(e) =>
                                              setName(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Input
                                          //  id="phone"
                                           // name="phone"
                                            type="tel"
                                            placeholder="Phone No."
                                            value={mobile}
                                            minLength={9}
                              maxLength={12}
                              onChange={(e) =>checkInput(e)}
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <select
                                            class="form-select occu"
                                            aria-label="Default select example"
                                            onChange={(e) =>
                                              setOccupation(e.target.value)
                                            }
                                          >
                                            <option selected>
                                              {occupation}
                                            </option>
                                            <option value="Student">
                                              Student
                                            </option>
                                            <option value="Fresher">
                                              Fresher
                                            </option>
                                            <option value="Employee">
                                              Employee
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <textarea
                                            class="form-control occu"
                                            id="address"
                                            rows="2"
                                            placeholder="Address"
                                            value={address}
                                            onChange={(e) =>
                                              setAddress(e.target.value)
                                            }
                                          ></textarea>
                                        </div>
                                      </div>
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                  //onClick={refreshPage}
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  onClick={handleSubmit}
                                >
                                  Save changes
                                </button>
                                <ToastContainer />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Name</label>
                          </div>
                          <div className="col-md-6">
                            <p>{users.name}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>{users.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>{users.mobile}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div class="col-md-6">
                            <label>Occupation</label>
                          </div>
                          <div class="col-md-6">
                            <p>{users.occupation}</p>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-md-6">
                            <label>Password</label>
                          </div>
                          <div className="col-md-6">
                            <p>****** </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Confirm Password</label>
                          </div>
                          <div className="col-md-6">
                            <p>****** </p>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-md-6">
                            <label>Address</label>
                          </div>
                          <div className="col-md-6">
                            <p>{users.address} </p>
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
      </div>
    </div>
  );
}
