import React, { useEffect } from "react";
import Common from "../Container/Common.js";
import { TechnoData } from "../Container/CardJSON";
import CardTechno from "../Container/CardTechno.js";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

function Technology() {
  useEffect(() => {
    document.title="Tchnology"
    }, )
 
  return (
    <div>
      <Helmet>
      <title>Technology-Java|AngularJs|MernStack|Python|React</title>
        <meta
      name="description"
      content="The way we buy, sell, and do everything is changing as a result of technological advancements. Java, React, and Vue.js, python"
    />
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<link rel="canonical" href="https://therapidhire.com/technology/" /> 
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Technology - TheRapidHire "/>
<meta property="og:url" content="https://therapidhire.com/technology"/>
<meta property="og:image" content="https://therapidhire.com/images/ser3.png"/>
<meta property="og:description" content= "TheRapidHire Pvt. Ltd. is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Technology - TheRapidHire"/>
<meta name="twitter:site" content="@therapidhire"/>
<meta name="twitter:description" content= "TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."/>
<meta name="twitter:image" content="https://therapidhire.com/images/ser3.png"/>
<meta name="twitter:image:alt" content="therapidhire"/>

      </Helmet>
      <div className="offwrap"></div>

      <div className="main-content">
        <Common
          name="Technology"
          background="Technology"
          description=" The way we buy, sell, and do everything is changing as a result of technological advancements. With software development services, we help clients realize their full potential and accelerate their growth.	"
        />

        <section className="pt-95 pb-95 bg17">
          <div className="container">
            <div className="row">
              {TechnoData.map((item, key) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.2s"
                >
                  <CardTechno
                    imgsrc={item.imgsrc}
                    title={item.title}
                    description={item.description}
                    icon_imgsrc={item.icon_imgsrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-95 pb-95 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12  col-md-12 ">
                <div className="sec-title3 text-center mb-35">
                  <span className="sub-title">OUR EXPERTISE</span>
                  <h2 className="title pb-25 ">
                    We help clients harness the power and scope of the digital
                    world for enhanced business performance and awareness.
                  </h2>
                  <div className="heading-border-line"></div>
                </div>
              </div>
              <Marquee className="marq1">
                <div>
                  <img src="images/microsoft.png" alt="microsoft" />
                </div>
                <div>
                  <img src="images/cloudcomputing.png" alt="cloudcomputing" />
                </div>
                <div>
                  <img src="images/vuejs.png" alt="vuejs" />
                </div>
                <div>
                  <img src="images/bootstrap.png" alt="bootstrap" />
                </div>
                <div>
                  <img src="images/emben.png" alt="emben" />
                </div>
                <div>
                  <img src="images/aws.png" alt="aws" />
                </div>
                <div>
                  <img src="images/jquery.png" alt="jquery" />
                </div>
                <div>
                  <img src="images/kafka.png" alt="kafka" />
                </div>
                <div>
                  <img src="images/terraform.png" alt="terraform" />
                </div>
                <div>
                  <img src="images/mern2.png" alt="mern" />
                </div>
              </Marquee>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technology;
