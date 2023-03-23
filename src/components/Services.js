import React from "react";

import { Helmet } from "react-helmet";
import Card from "../Container/Card.js";
import CardData from "../Container/CardJSON";
import Common from "../Container/Common.js";

function Services() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Services - Cloud Services|Designing|MVP|Product Development
        </title>
        <meta
          name="description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.therapidhire.com/services" />

        <meta
          name="fb:app_id"
          content="1369882117133030"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://www.therapidhire.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cloud Services|Designing|MVP|Product Development"
        />
        <meta
          property="og:description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions."
        />
        <meta
          property="og:image"
          content="https://www.therapidhire.com/images/software.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="therapidhire" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta
          property="twitter:url"
          content="https://www.therapidhire.com/services"
        />
        <meta
          name="twitter:title"
          content="Cloud Services|Designing|MVP|Product Development"
        />
        <meta
          name="twitter:description"
          content="We offer industry-specific and need-based services, allowing us to deliver customized solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.therapidhire.com/images/software.jpg"
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
