import React, {useEffect} from "react";


function Features() {
  useEffect(() => {
    document.title="Features"
    }, )
  
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Features
                <span className="watermark">Features</span>
              </h1>
              <span className="sub-text">
                Technology is transforming the way we buy, sell, and do
                everything. We help clients unlock potential and fuel growth
                with software development services.
              </span>
            </div>
          </div>
        </div>

        <section className="our-service-area bg17 pt-95 pb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat1.png" alt="" />
                    DEDICATED TEAM
                  </h3>
                  <p>
                    Our team provides you with a comprehensive solution using
                    innovative technique and great reliability. We work with
                    incredible passion and let that passion stay with us as we
                    deliver effective solutions to our clients.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat2.png" alt="" />
                    DIVERSE TECHNOLOGY
                  </h3>
                  <p>
                    Our team assists you in gaining control of your small
                    business through software designed to grow with you,
                    streamline all processes, gain greater insight into your
                    business, and make decisions based on real-time data to
                    drive profitable growth.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat3.png" alt="" />
                    RESEARCH AND DEVELOPMENT
                  </h3>
                  <p>
                    We use best-practice processes and development methodologies
                    as a foundation for the structured and methodical
                    development of cutting-edge technology solutions in the
                    global market and provide refined programming solutions to
                    our customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat4.png" alt="" />
                    CUSTOMER ACCOMPLISHMENT
                  </h3>
                  <p>
                    Client satisfaction is our priority, which contributes to
                    continuous improvement in order to maintain and improve
                    client satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat5.png" alt="" />
                    DEDICATED ASSISTANCE
                  </h3>
                  <p>
                    We are enthusiastic about our industry and enjoy what we do.
                    For client assurance, we provide regular updates, calls, and
                    product demos.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-services">
                  <h3>
                    <img src="images/feat6.png" alt="" />
                    EXPERTISE
                  </h3>
                  <p>
                    Working with the best businesses and leaders worldwide is
                    something we are capable of doing because of our experience
                    and knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;
