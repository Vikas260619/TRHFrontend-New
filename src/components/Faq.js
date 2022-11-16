import React, { useEffect} from "react";

export default function Faq() {
  useEffect(() => {
    document.title="Faq"
    }, )
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Frequently Asked Questions
                <span className="watermark">FAQ</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="faq  pb-25">
          <div className="container">
            <img src="images/faq.png" alt="faq" />
            <section className="accordion">
              <input
                type="checkbox"
                name="collapse"
                id="handle1"
               
              />
              <h2 className="handle">
                <label for="handle1">Q. What does TheRapidHire do?</label>
              </h2>
              <div className="content">
                <p>
                  <strong>TRH</strong> is a software development and IT
                  outsourcing company specializing in the design & development
                  of customized Mobile and Web applications.
                </p>
              </div>
            </section>
            <section className="accordion">
              <input type="checkbox" name="collapse2" id="handle2" />
              <h2 className="handle">
                <label for="handle2">
                  Q. What types of technology do you support overall?
                </label>
              </h2>
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
              <h2 className="handle">
                <label for="handle3">
                  Q. Why should you go forward with The Rapid Hire?
                </label>
              </h2>
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
              <h2 className="handle">
                <label for="handle4">
                  Q. What is your method of the development?
                </label>
              </h2>
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
              <h2 className="handle">
                <label for="handle5">
                  Q. Why Choose TheRapidHire as a software development service
                  provider?
                </label>
              </h2>
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
              <h2 className="handle">
                <label for="handle6">
                  Q. As a software development firm, what software development
                  services do you offer?
                </label>
              </h2>
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
