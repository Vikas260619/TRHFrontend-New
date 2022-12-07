import React from "react";
import { Helmet } from "react-helmet";
function Sitemap() {
  return (
    <div>
      <Helmet>
        <title>Sitemap - TheRapidHire</title>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://therapidhire.com/sitemap/" />
        <meta property="og:url" content="https://therapidhire.com/sitemap" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - TheRapidHire" />
        <meta
          property="og:description"
          content="Sitemap - Page List of the website.
 Home |Services|Technology|Work with us"
        />
        <meta
          property="og:image"
          content="https://therapidhire.com/images/siitemap.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="therapidhire.com" />
        <meta
          property="twitter:url"
          content="https://therapidhire.com/sitemap"
        />
        <meta name="twitter:title" content="Sitemap - TheRapidHire" />
        <meta
          name="twitter:description "
          content="Sitemap - Page List of the website.
 Home |Services|Technology|Work with us"
        />
        <meta
          name="twitter:image"
          content="https://therapidhire.com/images/siitemap.png"
        />
      </Helmet>

      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h2 className="page-title">Sitemap</h2>
            </div>
          </div>
        </div>
        <div className="rs-appointment style1 apply-career bg17 pt-95 pb-95">
          <div className="container">
            <div className="appoint-schedule">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-title3 text-center ">
                    <h1>Sitemap</h1>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-12 md-mb-10 pl-55 md-pl-15">
                  <ul className="site-map">
                    <li className="footer-title">
                      <h4>
                        <a href="/">Home</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        <a href="/aboutus">About Us</a>
                      </h4>
                    </li>

                    <li className="footer-title">
                      <h4>
                        <a href="/services">Services</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        <a href="/technology">Technology</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        <a href="/team">Team</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        <a href="/blog">Blog</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        {" "}
                        <a href="/faq">FAQ</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        {" "}
                        <a href="/workwithus">Work with us</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        {" "}
                        <a href="/termsofservices">Terms of Services</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        <a href="/login">Login</a>
                      </h4>
                    </li>
                    <li className="footer-title">
                      <h4>
                        {" "}
                        <a href="/privacy">Privacy Policy</a>
                      </h4>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-xs-12  col-md-6">
                  <div className="cont22">
                    <img src="images/siitemap.png" alt="sitemap" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
