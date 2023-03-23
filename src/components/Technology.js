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
        <link rel="canonical" href="https://www.therapidhire.com/technology" />

        <meta
          name="fb:app_id"
          content="1369882117133030"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://www.therapidhire.com/technology"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Java | AngularJs | MernStack | Python | React"
        />
        <meta
          property="og:description"
          content="We Work on the technology Java, React, Vue.js, python, salesforce, MEAN, MERN, .net, angular, C#."
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
          content="https://www.therapidhire.com/technology"
        />
        <meta
          name="twitter:title"
          content="Java | AngularJs | MernStack | Python | React"
        />
        <meta
          name="twitter:description"
          content=" We Work on the technology Java, React, Vue.js, python, salesforce, MEAN, MERN, .net, angular, C#."
        />
        <meta
          name="twitter:image"
          content="https://www.therapidhire.com/images/software.jpg"
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
