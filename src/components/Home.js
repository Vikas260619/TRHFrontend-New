import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Clients from "./Clients";
import Expertteam from "./Expertteam";
import Testimonial from "./Testimonial";
import ReactWhatsapp from 'react-whatsapp';


import { Helmet } from "react-helmet";

function Home() {
  const list = [
    {
      item: "Cloud Services",
      image: "images/slider1.webp",
      descp:
        "We can assist you in identifying and implementing the appropriate cloud solution to meet your critical application and ERP migration goals and business circumstances.",
    },
    {
      item: "Web Development",
      image: "images/slider2.webp",
      descp:
        "With a broad selection of web application services, we guarantee to meet all of your business needs. Our web developers are driven to produce outcomes that assist you in growing your company.",
    },
    {
      item: "Mobile App Development",
      image: "images/slider3.webp",
      descp:
        "We provide complete application design, integration, and management services. Whether it's a consumer-oriented app or a transformative enterprise-class solution",
    },
    {
      item: "Agile Team Deployment",
      image: "images/slider4.webp",
      descp:
        "We have the ability to respond quickly to the growing demand for Agile Team Deployment in the business sector through continuous training and procedure upgrades.",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items1 = [
    <div className="item" data-value="1">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services1.webp" alt="CloudServices" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Cloud Services</a>
          </h3>
          <div className="desc">
            Our cloud services provide the options of availing remote services
            via cloud computing servers.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2"> 
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services2.jpeg" alt="WebDevelopment" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Web Development</a>
          </h3>
          <div className="desc">
            We provide designing, coding, programming and modifying websites,
            from layout to function.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services3.webp" alt="AWS Services" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">AWS Services</a>
          </h3>
          <div className="desc">
            Build, Deploy, and Manage websites, Apps or Processes on AWS secure,
            reliable network.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services4.webp" alt="Web Designing" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Web Designing</a>
          </h3>
          <div className="desc">
            Want to build your product with a team that establishes a clear
            design process, meets deadlines,and delivers?{" "}
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services5.webp" alt="DatabaseManagement" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Database Management</a>
          </h3>
          <div className="desc">
            Database Management Services experts can provide administration,
            backup and recovery services, and performance troubleshooting for
            clients who use Microsoft SQL Server and MySQL.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services6.webp" alt="cybersecurity" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Cyber Security</a>
          </h3>
          <div className="desc">
            Transform your business and manage risk by partnering with
            TheRapidHire in Cyber security consulting and managed security
            services.
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <Helmet>
        {/* <meta charset="utf-8"/> */}
        <title>
          TheRapidHire-Software Development | IT outsourcing Company
        </title>
        <meta
          name="description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta
          name="Keywords"
          content="Website Development, Cloud Services, Business Consulting,Software Development, It Services, Java, Php, Aws, Python, Wordpress, Blockchain, System Developer,IT outsourcing, hr outsourcing offshore development,,Mobile App Development, Minimum Viable Product,Data Engineering, New Product Development."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="image"
          content="https://www.therapidhire.com/images/services2.jpeg"
        />
        <meta
          itemprop="name"
          content="TheRapidHire-Software Development | IT outsourcing Company"
        />
        <meta
          itemprop="description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta
          itemprop="image"
          content="https://www.therapidhire.com/images/services2.jpeg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="TheRapidHire-Software Development | IT outsourcing Company"
        />
        <meta
          name="twitter:description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta name="twitter:creator" content="@therapidhire_" />
        <meta
          name="twitter:image:src"
          content="https://www.therapidhire.com/images/services2.jpeg"
        />
        <meta
          name="og:title"
          content="TheRapidHire-Software Development | IT outsourcing Company"
        />
        <meta
          name="og:description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta
          name="og:image"
          content="https://www.therapidhire.com/images/logo.png"
        />
        <meta name="og:url" content="https://www.therapidhire.com" />
        <meta name="og:site_name" content="therapidhire" />
        <meta name="og:locale" content="en_US"/>
        <meta name="fb:app_id" content="1369882117133030" />
        <meta name="og:type" content="article" />
        <meta name="article:section" content="software development" />
        <meta name="article:author" content="https://www.facebook.com/profile.php?id=100054281690679" />
        <meta name="article:tag" content="software development " />

        <link rel="canonical" href="https://www.therapidhire.com/" />

        <link
          rel="alternate"
          href="https://www.therapidhire.com/"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/en/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/fr/"
          hreflang="fr"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/es/"
          hreflang="es"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/mx/"
          hreflang="es-mx"
        />
      </Helmet>

      <AliceCarousel
        
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="fadeout"
        infinite
      >
        {list.map((items) => (
          <>
            <div
              id="rs-slider"
              className="rs-slider slider3 rs-slider-style3"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div className="bend niceties">
                {/* <div id="nivoSlider" className="slides"></div> */}
                <img src={items.image} alt="trhslider" title="" />
              </div>
              <div className="wave"></div>
              <div id="slide-1" className="slider-direction">
                <div className="content-part">
                  <div className="slider-des">
                    <h1 className="sl-subtitle">{items.item}</h1>
                    <p className="sl-title">{items.descp}</p>
                  </div>
                  <div className="slider-bottom">
                    <a className="readon blue-slide" href="/services">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </AliceCarousel>
      <div
        className="rs-about style4 pt-25 pb-95"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div className="animat-rat">
            <img src="images/squar.png" className="rat-sib" alt="squre" />
            <img src="images/round-2.webp" className="rat-round" alt="round" />
            <img src="images/ract.webp" className="rat-ract" alt="ract" />
            <img src="images/squar.png" className="rat-squar1" alt="squar1" />
            <img src="images/squar.png" className="rat-squar2" alt="squar2" />
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="sec-title3 text-center ">
                <span className="sub-title">ABOUT US</span>
                <h2 className="title ">
                  We are a complete IT solutions and technology firm.
                </h2>
                <div className="heading-border-line"></div>
              </div>
              <p className="pt-50 text-center para21">
                TheRapidHire is a software development and IT outsourcing
                company based in India. TheRapidHire takes an energetic,
                collaborative strategy to create and customize solutions across
                the digital value chain. We aim to create a network of
                businesses that help each other to acquire more customers.
                Giving a better idea of making your online presence better,
                TheRapidHire company helps you with quality service at minimal
                prices and complimentary with great satisfaction.
              </p>
              <br />
              <div className="row">
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat1.webp" alt="feat1" />
                    <h3>DEDICATED TEAM</h3>
                    <p>
                      Our team provides you with a comprehensive solution using
                      innovative techniques and great reliability. We work with
                      incredible passion, and we let that passion stay with us.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat2.webp" alt="feat2" />

                    <h3>DIVERSE TECHNOLOGY</h3>
                    <p>
                      Our team assists you in gaining control of your small
                      business through software designed to grow with you,
                      streamline all processes, and provide greater insight into
                      your business.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat3.webp" alt="feat3" />

                    <h3>RESEARCH AND DEVELOPMENT</h3>
                    <p>
                      We use best-practice processes and development
                      methodologies as a foundation for the structured and
                      methodical development of cutting-edge technology
                      solutions in the global market.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat4.webp" alt="faet4" />

                    <h3>CUSTOMER ACCOMPLISHMENT</h3>
                    <p>
                      Client satisfaction is our priority, which contributes to
                      continuous improvement in order to maintain and improve
                      client satisfaction.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat5.webp" alt="feat5" />

                    <h3>COMMITTED ASSISTANCE</h3>
                    <p>
                      We are enthusiastic about our industry and enjoy what we
                      do. For client assurance, we provide regular updates,
                      calls, and product demos.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="single-services">
                    <img src="images/feat6.webp" alt="feat6" />

                    <h3>EXPERTISE</h3>
                    <p>
                      Working with the best businesses and leaders worldwide is
                      something we are capable of doing because of our
                      experience and knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clients />
      <div
        id="rs-services"
        className="rs-services serviceindustry style2 pb-25 "
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12  col-md-12">
              <div className="sec-title3 text-center mb-35">
                <span className="sub-title">OUR SERVICES</span>
                <h2 className="title pb-25 ">
                  We provide industry-specific and need-based services, which
                  allows us to deliver tailor-made solutions. We serve customers
                  ranging from small individual startups to big corporate
                  houses.
                </h2>
                <div className="heading-border-line"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            infinite
            mouseTracking
            items={items1}
            height="50vh"
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
      <Testimonial />
      <Expertteam />

    </div>
  );
}

export default Home;
