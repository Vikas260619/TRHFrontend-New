import React from 'react'
import Marquee from "react-fast-marquee";


function Productcommon(props) {
  return (
    <div>
     <div className="offwrap">
    
      <div className="container">
        <h3 className="section-heading pt-5 text-center fs-1 pb-2">
          {props.title}
          <span className="section-heading text-red fs-1">
            <br />
{props.title1}
          </span>
        </h3>
        <div className="col-lg-10 col-md-10 col-10 col-xxl-10 mx-auto">
          <p className="ms-1 text-start section-paragraph">
           {props.para}
          </p>
        </div>
        <div className="pb-5 text-center mt-5">
          <a href="/contact-us" class="blue_button py-3 ">
            Get in touch
          </a>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 image pt-4">
          <img
              className="imgset"
              src={props.imgsrc}
              alt="rqc"
            />

          </div>

          <div className="col-lg-6 pt-2">
            <h3 className="section-heading ps-3 fs-1 text-center">
              {props.heading}
              <span className="text-red fs-1">{props.heading1}</span>
            </h3>
            <p className="section-paragraph text-start py-1 ps-3">
             {props.paragraph}
            </p>
            <p className="section-paragraph text-start py-1 ps-3">
             {props.paragraph1}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-lg-6 pt-3 my-5 mx-auto">
          <h3 className="section-heading pb-10 text-center fs-1">
{props.sectionheading}
            <span className="text-red section-heading fs-1">
              {" "}
{props.sectionheading1}

            </span>
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >
<path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                  </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheading}</h3>
                  <p className="ps-4">
                  {props.Productpara}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                  </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheading1}</h3>
                  <p className="ps-4">
                  {props.Productpara1}

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >

<path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>                  

                  </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheading2}</h3>
                  <p className="ps-4">
                  {props.Productpara2}

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >
<path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z"/>
  <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"/>
  <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13Z"/>
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>                               </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheading3}</h3>
                  <p className="ps-4">
                  {props.Productpara3}

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                  </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheadin4}</h3>
                  <p className="ps-4">
                  {props.Productpara4}

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card-services">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-laptop icon-color"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                  </svg>
                </div>
                <div className="col-lg-10 col-md-12 col-12">
                  <h3 className="text-center">{props.Productheadin5}</h3>
                  <p className="ps-4">
                  {props.Productpara5}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 text-center mt-3 text-center">
        <a href="/contact-us" class="blue_button_bottom py-3 ">
          Get in touch
        </a>
      </div>

      <div className="container-fluid">
        <h3 className="section-heading pt-5 text-center fs-1 pb-2">
          {props.sectitle}
          <span className="section-heading text-red fs-1">
            <br />
            {props.sectitle1}

          </span>
        </h3>
        <div className="col-lg-10 col-md-10 col-10 col-xxl-10 mx-auto">
          <p className="ms-1 text-start section-paragraph">
           {props.secpara}
          </p>
        </div>

        <Marquee className="marq1">
          <div>
            <img src="images/mistminds.webp" alt="microsoft" />
          </div>
          <div>
            <img src="images/trootech.webp" alt="cloudcomputing" />
          </div>
          <div>
            <img src="images/bynebits.webp" alt="vuejs" />
          </div>
          <div>
            <img src="images/coditas.webp" alt="bootstrap" />
          </div>
          <div>
            <img src="images/cloud9.webp" alt="emben" />
          </div>
          <div>
            <img src="images/digital.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/aventussoftware.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/elgebra.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/innovation.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/linkage.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/manven.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/sartdata.jpg" alt="emben" />
          </div>
          <div>
            <img src="images/softude.jpg" alt="emben" />
          </div>


        </Marquee>
      </div>
      <div></div>

      <section className="main_heading mt-5 bg-gray">
        <div className="row text-center pt-5">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12 mx-auto">
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5 "></div>
            <div className="col-lg-7 col-md-7 col-10 col-xxl-7 mx-auto">
              <h1 className="mx-auto fs-1 pt-3 section-heading">
                {props.prodheading}
                <span className="section-heading text-red fs-1">
                  <br />
                  {props.prodheading1}               
                   </span>{" "}
                   {props.prodheading2}               

              </h1>
            </div>
            <div className="col-lg-2.5 col-md-2.5 col-10 col-xxl-2.5"></div>
          </div>
        </div>

        <div className="container">
          <div className="row border-bottom">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h5 className="my-3 section-heading">
                <span className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-hand-thumbs-up-fill icon-color me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                </span>
                {props.prodheading3}
              </h5>
              <p className="section-paragraph">
                {props.prodpara}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <h5 className="my-3 section-heading">
                <span className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-person-fill icon-color me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </span>
                {props.prodheading4}
              </h5>
              <p className="section-paragraph">
              {props.prodpara1}

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 mx-auto pt-2">
              <h5 className="my-3 section-heading">
                <span className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-clipboard-data-fill icon-color me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" />
                  </svg>
                </span>
                {props.prodheading5}
              </h5>
              <p className="section-paragraph">
              {props.prodpara2}

              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-10 col-xxl-6 border-start mx-auto pt-2">
              <h5 className="my-3 section-heading">
                <span className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-briefcase-fill icon-color me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                  </svg>
                </span>
                {props.prodheading6}
              </h5>
              <p className="section-paragraph">
              {props.prodpara3}

              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/contact-us" class="blue_button py-3 fs-5 px-5">
              Get in touch
            </a>
          </div>
        </div>
      </section>
      
    </div>

    </div>
  )
}

export default Productcommon