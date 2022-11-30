import React from "react";

import { Helmet } from "react-helmet";
import Card from "../Container/Card.js";
import CardData from "../Container/CardJSON";
import Common from "../Container/Common.js";

function Services() {
  return (
    <div>
      <Helmet>
        <title>
          Services - Cloud Services | Designing | MVP | Product Development- TheRapidHire
        </title>
        <meta
          name="description"
          content="We offer industry-specific services web designing, web development, data engineering, minimum viable product, cloud services"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://therapidhire.com/services/" />

        <meta
          name="description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."
        />

        <meta property="og:url" content="https://therapidhire.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TheRapidHire- Software Development and IT outsourcing company"
        />
        <meta
          property="og:description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."
        />
        <meta
          property="og:image"
          content="https://therapidhire.com/images/ser3.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="therapidhire.com" />
        <meta
          property="twitter:url"
          content="https://therapidhire.com/services"
        />
        <meta
          name="twitter:title"
          content="TheRapidHire- Software Development and IT outsourcing company"
        />
        <meta
          name="twitter:description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."
        />
        <meta
          name="twitter:image"
          content="https://therapidhire.com/images/ser3.png"
        />
      </Helmet>

      <div className="offwrap">
        <div className="main-content">
          <Common
            name="Services"
            description=" We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."
          />

          <div className="rs-services style2 servicepage rs-services-style2 bg17 pt-95 pb-95 ">
            <div className="container custom">
              <div className="row">
                {CardData.map((item, key) => (
                  <div
                    className="col-lg-4 col-md-6 mb-20 wow fadeInDown"
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
        </div>
      </div>
    </div>
  );
}

export default Services;
