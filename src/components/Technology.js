import Common from "../Container/Common.js";
import { TechnoData } from "../Container/CardJSON";
import CardTechno from "../Container/CardTechno.js";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

function Technology() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Technology- Java | AngularJs | MernStack | Python | React</title>
        <meta
          name="description"
          content="We Work on the technology Java, React, Vue.js, python, salesforce , MEAN , MERN , .net , angular , C#"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="image"
          content="https://www.therapidhire.com/images/ser3.png"
        />
        <meta
          itemprop="name"
          content="Technology- Java | AngularJs | MernStack | Python | React"
        />
        <meta
          itemprop="description"
          content="We Work on the technology Java, React, Vue.js, python, salesforce , MEAN , MERN , .net , angular , C#"
        />
        <meta
          itemprop="image"
          content="https://www.therapidhire.com/images/ser3.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Technology- Java | AngularJs | MernStack | Python | React"
        />
        <meta
          name="twitter:description"
          content="We Work on the technology Java, React, Vue.js, python, salesforce , MEAN , MERN , .net , angular , C#"
        />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta name="twitter:creator" content="@therapidhire_" />
        <meta
          name="twitter:image:src"
          content="https://www.therapidhire.com/images/ser3.png"
        />
        <meta
          name="og:title"
          content="Technology- Java | AngularJs | MernStack | Python | React"
        />
        <meta
          name="og:description"
          content="We Work on the technology Java, React, Vue.js, python, salesforce , MEAN , MERN , .net , angular , C#"
        />
        <meta name="og:image" content="https://www.therapidhire.com/logo.png" />
        <meta name="og:url" content="https://www.therapidhire.com/technology" />
        <meta name="og:site_name" content="therapidhire" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:app_id" content="1369882117133030" />
        <meta name="og:type" content="article" />
        <meta name="article:section" content="Software development" />
        <meta name="article:author" content="https://www.facebook.com/profile.php?id=100054281690679" />
        <meta name="article:tag" content="Software development" />
        <link rel="canonical" href="https://www.therapidhire.com/technology" />
        .
        <link
          rel="alternate"
          href="https://www.therapidhire.com/technology"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/technology/en"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/technology/fr"
          hreflang="fr"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/technology/es"
          hreflang="es"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/technology/mx"
          hreflang="es-mx"
        />
        <meta
          property="og:url"
          content="https://www.therapidhire.com/technology"
        />
      </Helmet>
      <div className="offwrap"></div>

      <div className="main-content">
        <Common
          name="Technology"
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
                  <h1 className="title pb-25 ">
                    We help clients harness the power and scope of the digital
                    world for enhanced business performance and awareness.
                  </h1>
                  <div className="heading-border-line"></div>
                </div>
              </div>
              <Marquee className="marq1">
                <div>
                  <img src="images/microsoft.webp" alt="microsoft" />
                </div>
                <div>
                  <img src="images/cloudcomputing.webp" alt="cloudcomputing" />
                </div>
                <div>
                  <img src="images/vuejs.webp" alt="vuejs" />
                </div>
                <div>
                  <img src="images/bootstrap.webp" alt="bootstrap" />
                </div>
                <div>
                  <img src="images/emben.webp" alt="emben" />
                </div>
                <div>
                  <img src="images/aws.webp" alt="aws" />
                </div>
                <div>
                  <img src="images/jquery.webp" alt="jquery" />
                </div>
                <div>
                  <img src="images/kafka.webp" alt="kafka" />
                </div>
                <div>
                  <img src="images/terraform.png" alt="terraform" />
                </div>
                <div>
                  <img src="images/mern.png" alt="mern" />
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
