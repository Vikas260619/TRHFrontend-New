import React from "react";
import Card from "../Container/Card";
import CardData from "../Container/CardJSON";
import Common from "../Container/Common";

function Healthcare() {
  return (
    <div>
      <Common
      name="Healthcare"
      
      
      />
      <div className="offwrap">
        <div className="main-content">
          
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 image">
                <img className="imgset" src="images/healthcare.jpg" alt="rqc" />
              </div>

              <div className="col-lg-6 pt-3 cloudsection">
                <h3 className="section-heading pb-10">
                  Redefining healthcare with{" "}
                  <span className="text-red">digital technologies</span>{" "}
                </h3>
                <p className="section-paragraph">
                  One of the biggest challenges facing players in the healthcare
                  industry today is ancient, outdated modes of operation, and
                  the real and hidden costs involved in sustaining them.
                </p>
                <p className="section-paragraph">
                  At Softude, we are constantly thinking of inventive ways to
                  help healthcare companies trapped in legacy systems make the
                  jump to digital effortlessly, relieving them of any worry of
                  lost business intelligence or downtime, while giving them a
                  head-start in mobility-enabled, smart, advanced tech
                  solutions.
                </p>
                <div className="pt-20"></div>
              </div>
            </div>
          </div>

          <section className="">
            <div className="cloudsection text-center py-5">
              <h3 className="section-heading pb-10">
                Explore our
                <br />
                <span className="text-red">healthcare solutions</span>{" "}
              </h3>
              <div className="pt-20"></div>
            </div>
            <div className="rs-services style2 servicepage rs-services-style2 bg17  pb-95 ">
              <div className="container custom">
                <div className="row">
                  {CardData.map((item, key) => (
                    <div
                      className="col-lg-6 col-md-6 mb-20 wow fadeInDown text-center"
                      data-wow-duration="0.5s"
                      data-wow-delay="0.1s"
                    >
                      <Card
                        imgsrc={item.imgsrc}
                        title={item.title}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div style={{ background: "#EFEFEF" }}>

          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 image">
                <img className="imgset" src="images/healthcare.jpg" alt="rqc" />
              </div>

              <div className="col-lg-6 pt-3 cloudsection">
                <h3 className="section-heading pb-10">
                  Healthcare <span className="text-red">segments we serve</span>{" "}
                </h3>

                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2 w-25 p-3">
                    Healthcare Providers and Diagnostics
                  </span>
                </p>
                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2">Insurers/HMOs</span>
                </p>
                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2 ">
                    Pharmaceuticals, Medical Equipment & Device Manufactures
                  </span>
                </p>
                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2">
                    Suppliers (Distributors, Group Purchase Organizations,
                    Wholesalers)
                  </span>
                </p>
                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2">
                    Payer(Government, Employer, Individual)
                  </span>
                </p>
                <p className="section-paragraph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    fill="#00a3e8"
                    class="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ps-2">Healthcare Software Provider</span>
                </p>
                <div className="pt-20"></div>
              </div>
            </div>
          </div>
          </div>

          <div className="cloudsection text-center py-5">
              <h3 className="section-heading pb-10">
              Why choose 

                <br />
                <span className="text-red">Softude</span>{" "}
              </h3>
              <div className="pt-20"></div>
            </div>
            <div className="rs-contact pb-5 main-home">
            <div className="contact-icons-style box-address  ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 md-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon container">
                          <h2 className="title">Structured approach
</h2>
                          <p className="services-txt">
                          We follow a structural and organized approach to deliver the requirements as expected. Our team also overviews the process constantly to ensure quicker completion and timely delivery.


                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon"></div>
                        <h2 className="title">Domain expertise
</h2>
                        <p className="services-txt">
                        Our technical team at Softude is known for its credibility in the market along with several years of experience in the field of healthcare software development and IT consulting services services
                        services services.


                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon"></div>
                        <h2 className="title">Seamless UI/UX design
</h2>
                        <p className="services-txt">
                        We are a leading healthcare technology company solutions with an immense focus on the overall UI/UX design. We create responsive, easy-to-navigate, and user-friendly application services for the healthcare industry.


                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="main_heading">
        <div className="row text-white pb-4">
          <div className="container-fluid">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto text-center btn">
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 mx-auto"></div>
              <div className="col-lg10 col-md-10 col-10 col-xxl-10 mx-auto pb-4">
                <h1 className="text-white mt-5 fs-1">Talk to expert</h1>
                <p className="fontpara text-white">
                  We help businesses achieve incredible ROI by creating
                  tech-savvy, visually appealing mobile apps.
                </p>
                <button className=" getconnected w-auto fs-6 my-3 py-3">
                  Connect to know more
                </button>
              </div>
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

        </div>
      </div>
    </div>
  );
}

export default Healthcare;
