import React from "react";

import { Helmet } from "react-helmet";
import Card from "../Container/Card.js";
import CardData from "../Container/CardJSON";
import Common from "../Container/Common.js";

function Services() {
  return (
    <div>
      <Helmet>



      <meta charset="utf-8"/>
<title>Services - Cloud Services|Designing|MVP|Product Development</title>
<meta name="description" content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."/>
<meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
<meta name="image" content="https://www.therapidhire.com/images/ser3.png"/>
<meta itemprop="name" content="Services - Cloud Services|Designing|MVP|Product Development"/>
<meta itemprop="description" content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."/>
<meta itemprop="image" content="https://www.therapidhire.com/images/ser3.png"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Services - Cloud Services|Designing|MVP|Product Development"/>
<meta name="twitter:description" content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."/>
<meta name="twitter:site" content="@therapidhire_"/>
<meta name="twitter:creator" content="@therapidhire_"/>
<meta name="twitter:image:src" content="https://www.therapidhire.com/images/ser3.png"/>
<meta name="og:title" content="Services - Cloud Services|Designing|MVP|Product Development"/>
<meta name="og:description" content="We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations."/>
<meta name="og:image" content="https://www.therapidhire.com/logo.png"/>
<meta name="og:url" content="https://www.therapidhire.com/services"/>
<meta name="og:site_name" content="therapidhire"/>
<meta name="og:locale" content="en_US"/>
<meta name="fb:app_id" content="1369882117133030"/>
<meta name="og:type" content="article"/>
<meta name="article:section" content="Software development"/>
<meta name="article:author" content="https://www.facebook.com/profile.php?id=100054281690679"/>
<meta name="article:tag" content="Software development"/>


      
        <link rel="canonical" href="https://www.therapidhire.com/services" />
        <link rel="alternate" href="https://www.therapidhire.com/services" hreflang="x-default"/>
        <link rel="alternate" href="https://www.therapidhire.com/services/en" hreflang="en"/>
        <link rel="alternate" href="https://www.therapidhire.com/services/fr" hreflang="fr"/>
        <link rel="alternate" href="https://www.therapidhire.com/services/es" hreflang="es"/>
        <link rel="alternate" href="https://www.therapidhire.com/services/mx" hreflang="es-mx"/>
  

      
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
