import React from "react";
import "../rapidcss/Androidappdevelopment.css";

function Commonpage(props) {
  return (
    <div className="offwrap">
    
      <div className="container py-5 ">
        <div className="row mx-auto py-4 pb-1">
          <div className="col-lg-5 col-md-5 col-12 col-xxl-5 d-flex flex-column justify-content-center align-item-start">
            <h1 className="fs-1">
              <span className="hedingcolor">
              {props.title} <br />{props.title2}
              </span>{" "}
              {props.title3}
            </h1>
            <p className="fontsizepara fs-4 pb-2">
            {props.paragraph}
            </p>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 col-xxl-12 justify-content-start mb-4">
                <button className="fontpara btn w-auto fs-5 py-2 text-white">Get in touch</button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12 col-xxl-7 mx-auto">
            <figure>
              <img
                className="img-fluid w-100"
                src={props.imgsrc}
                alt="android-app-banner"
              ></img>
            </figure>
          </div>
        </div>
      </div>
      <section className="main_heading">
        <div className="row btn text-white pb-4">
          <div className="container-fluid">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto text-center">
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 mx-auto"></div>
              <div className="col-lg10 col-md-10  col-10 col-xxl-10 mx-auto">
                <h1 className="text-white mt-5 fs-1">
                 {props.androidtitle}
                </h1>
                <p className="fontpara">
                 {props.androidpara}
                </p>
              </div>
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="main_heading">
        <section className="main_heading">
          <div className="row text-center py-5">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto">
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
              <div className="col-lg-10 col-md-10 col-10 col-xxl-10   mx-auto">
                <h1 className="mx-auto fs-1 py-2">
                    
     {props.heding}                  <span className="hedingcolor">
                    <br />
                   {props.heading1}
                  </span>
                </h1>
                <p className="fontpara pb-2 text-center">
                 {props.para}
                </p>
              </div>
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
            </div>
          </div>
        </section>
        <div className="rs-contact pb-5 main-home">
          <div className="contact-icons-style box-address  ">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 pb-3 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      {/* <h2 className="title">  </h2> */}
                      <i class="fa fa-android" aria-hidden="true"></i>

                      <p className="androidpara services-txt pt-3">
                     {props.para1}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 pb-3 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      {/* <h2 className="title">  </h2> */}
                      <i class="fa fa-android" aria-hidden="true"></i>

                      <p className="services-txt pt-3">
                      {props.para2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      <i class="fa fa-android" aria-hidden="true"></i>
                      <p className="services-txt pt-3">
                      {props.para3}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      <i class="fa fa-android" aria-hidden="true"></i>
                      <p className="services-txt pt-3">
                      {props.para4}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>

      <section className="main_heading mt-5 bg-gray">
        <div className="row text-center py-5">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto">
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
            <div className="col-lg-10 col-md-10 col-10 col-xxl- mx-auto">
              <h1 className="mx-auto fs-1 py-2">
                {props.commontitle}
                <span className="headingcolor">
                  <br />
                {props.commontitle2}</span>
              </h1>
              <p className="fontpara pb-2 text-start">
              {props.commonpara}
              </p>
            </div>
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
          </div>
        </div>

        <div className="container">
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h4 className="my-3">
                <span className="text-secondary">01--</span>
{props.pointheading}              </h4>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <p className="my-3">
               {props.pointpara}
              </p>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h4 className="my-3">
                <span className="text-secondary">02--</span>
                {props.pointheading1}
              </h4>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <p className="my-3">
              {props.pointpara1}

              </p>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h4 className="my-3">
                <span className="text-secondary">03--</span> 
                {props.pointheading2}
              </h4>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <p className="my-3">
              {props.pointpara2}

              </p>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h4 className="my-3">
                <span className="text-secondary">04--</span>
                {props.pointheading3}
              </h4>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <p className="my-3">
              {props.pointpara3}

              </p>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h4 className="my-3">
                <span className="text-secondary">05--</span>
                {props.pointheading4}
              </h4>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <p className="my-3">
              {props.pointpara4}

              </p>
            </div>
          </div>
       
        </div>
      </section>

      <section className="main_heading">
        <div className="row text-white pb-4">
          <div className="container-fluid">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto text-center btn">
              <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 mx-auto"></div>
              <div className="col-lg10 col-md-10 col-10 col-xxl-10 mx-auto pb-4">
                <h1 className="text-white mt-5 fs-1">Talk to expert</h1>
                <p className="fontpara text-white">
                 {props.mainpara}
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

      <section className="main_heading mt-5">
        <div className="row text-center py-5">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto">
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
            <div className="col-lg-10 col-md-110 col-10 col-xxl-10 mx-auto">
              <h1 className="mx-auto fs-1 py-2">
                {props.mainheading}
                <span className=" headingcolor">
                  <br />
                  {props.mainheading1}
                </span>
              </h1>
              <p className="fontpara pb-2 text-start">
                {props.mainpara1}
              </p>
            </div>
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
           

         
            <div className="row">
              <div className="col-lg-4">
                <div className="single-services">
                  <h3>{props.cardheading}</h3>
                  <p>
                   {props.cardpara}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-services">
                  <h3>{props.cardheading1}</h3>
                  <p>
                  {props.cardpara1}

                  </p>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className="single-services">
                  <h3>{props.cardheading2}</h3>
                  <p>
                  {props.cardpara2}

                  </p>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className="single-services">
                  <h3>{props.cardheading3}</h3>
                  <p>
                  {props.cardpara3}

                  </p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="single-services">
                  <h3>{props.cardheading4}</h3>
                  <p>
                  {props.cardpara4}

                  </p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="single-services">
                  <h3>{props.cardheading5}</h3>
                  <p>
                  {props.cardpara5}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <div className="container">
        <div className="row mx-auto py-4 pb-1">
          <div className="col-lg-7 col-md-7 col-12 col-xxl-7 mx-auto">
            <figure>
              <img
                className="img-fluid w-100"
                src={props.srcimg1}
                alt="android-app-banner"
              ></img>
            </figure>
          </div>
          <div className="col-lg-5 col-md-5 col-12 col-xxl-5 d-flex flex-column justify-content-center align-item-start text-center">
            <h1 className="fs-1 text-center">
              <span className="headingcolor">
                {props.headingapp} <br />{props.headingapp1}
              </span>{" "}
              {props.headingapp2}
            </h1>
            <p className="fs-5 fw-light pb-2 text-center">
             {props.paraapp}
            </p>

            <div className="row mx-auto">
              <div className="col-lg-12 col-md-12 col-12 col-xxl-12 justify-content-start">
                <button className="fontpara btn btn-info w-auto fs-5 my-3 py-2 text-white">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      
      
      
      
      </div>


      <div className="imagecolor container-fluid">
      <h1 className="fs-1 text-center py-5">
              <span className="faqcolor">
                   FAQ's </span>
            
            </h1>
            <div className="faq  pb-25">
          <div className="container">
            <section className="accordion">
              <input type="checkbox" name="collapse" id="handle1" />
              <h2 className="handle">
                <label for="handle1">Q. What does TheRapidHire do?</label>
              </h2>
              <div className="content">
                <p>
                  <strong>TheRapidHire</strong> is a software development and IT
                  outsourcing company specializing in the design & development
                  of customized Mobile and Web applications.
                </p>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle2" />
              <h3 className="handle">
                <label for="handle2">
                  Q. What types of technology do you support overall?
                </label>
              </h3>
              <div className="content faqlist">
                <p>
                  We have skilled programmers on a wide spectrum of
                  technologies.
                </p>
                <ul>
                  <li>
                    Core PHP, Laravel, CodeIgniter, Magento, WordPress,
                    OpenCart, Shopify
                  </li>
                  <li>HTML/HTML5, CSS, Bootstrap</li>
                  <li>Python, Django, Ember, Kubernetes ,</li>
                  <li>Java, J2EE, Spring Boot, MVC, Hibernate, Core Java</li>
                  <li>
                    Javascript/JQuery, Node.js, AngularJS, DOJO, ArcGIS, ReactJS
                  </li>
                  <li>NET, C# ,PHP, IoT ,</li>
                  <li>React Native , Kafka ,Terraform , Microsoft Azure</li>
                  <li>Android (Android Studio/Eclipse)</li>
                  <li>iOS (Native), Swift</li>
                  <li>Aws Cloud Services,</li>
                  <li>
                    Firebase, BaasBox, PostgreSQL, ArangoDB , MongoDB ,Mysql,
                    DBMS
                  </li>
                </ul>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle3" />
              <h4 className="handle">
                <label for="handle3">
                  Q. Why should you go forward with TheRapidHire?
                </label>
              </h4>
              <div className="content faqlist">
                <p>Because we keep our promises.</p>
                <p>
                  Our dedication to quality ensures that everything we deliver
                  to you is analyzed, validated, and rigorously tested for
                  functionality and user experience.
                </p>
                <p>
                  Our dedication to time. We understand how important your
                  clients are, so your deadlines become our deadlines. We go
                  above and beyond to meet your expectations.
                </p>
                <p>
                  Our dedication to establishing mutual benefits ensures that
                  you receive more than what you invest in us.
                </p>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle4" />
              <h5 className="handle">
                <label for="handle4">
                  Q. What is your method of the development?
                </label>
              </h5>
              <div className="content faqlist">
                <ul>
                  <li>
                    The Agile technique is what we use to carry out projects.
                  </li>
                  <li>
                    At the beginning of the project, a project plan with many
                    sprints is created and provided to the client. We have Scrum
                    meetings to monitor daily progress, spot hazards, and make
                    sure the deliverables adhere to the original project plan.
                  </li>
                  <li>
                    A functional specification document, which includes
                    wireframes and descriptions of each workflow, field
                    definitions, and use cases for all necessary
                    functionalities, is the initial step in the execution of any
                    project.
                  </li>
                  <li>
                    After this has been approved, the designing phase starts,
                    during which we initially suggest 2-3 theme variations. The
                    theme is made up on the fly based on client input. The
                    remainder of the project's screens is then designed using
                    the selected theme.
                  </li>
                  <li>
                    As a result, it is simple to picture the finished product at
                    this very early stage.
                  </li>
                  <li>
                    The actual development then starts and is broken down into
                    milestones. Testing is completed at the conclusion of each
                    milestone, and only then is it shared with the client for
                    review.
                  </li>
                  <li>
                    Regression and final acceptance testing are conducted at the
                    end of the cycle.
                  </li>
                  <li>
                    Deployment takes place only after receiving approval from
                    the client and the internal QA team.
                  </li>
                </ul>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle5" />
              <h6 className="handle">
                <label for="handle5">
                  Q. Why Choose TheRapidHire as a software development service
                  provider?
                </label>
              </h6>
              <div className="content">
                <p>
                  TheRapidHire is a well-known software and mobile app
                  development company when it comes to custom software
                  development. Numerous businesses have benefited from our
                  long-term experience and expertise in providing diverse custom
                  software development services in accordance with the most
                  recent technological standards.{" "}
                </p>
                <p>
                  Our software developers are experts in agile team deployment,
                  custom-centric engagement models, strict quality measures,
                  in-depth technical and domain expertise, and an understanding
                  of various software development frameworks, programming
                  languages, and platforms to deliver the best web software
                  solutions.
                </p>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle6" />
              <h6 className="handle">
                <label for="handle6">
                  Q. As a software development firm, what software development
                  services do you offer?
                </label>
              </h6>
              <div className="content">
                <p>
                  We offer full-service software development, including custom
                  software development, web app development, mobile app
                  development, software testing, and other related services. Our
                  robust software development services are completed in a clean
                  manner to provide high-quality services.
                </p>
              </div>
            </section>
          </div>
        </div>


      </div>

      
    </div>
  );
}

export default Commonpage;
