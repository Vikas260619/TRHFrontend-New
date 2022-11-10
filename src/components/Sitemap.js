import React from 'react'
import { useEffect } from 'react'
function Sitemap() {
  useEffect(() => {
    document.title="Sitemap"
    }, )


  return (
    <div>
    <div className="main-content">
      <div className="rs-breadcrumbs img1">
        <div className="container-fluid">
          <div className="breadcrumbs-inner">
            <h1 className="page-title">
              Sitemap
              <span className="watermark">SiteMap</span>
            </h1>
          
          </div>
        </div>
      </div>
      <div className="rs-appointment style1 apply-career bg17 pt-95 pb-95">
        <div className="container">
          <div className="appoint-schedule">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title3 text-center ">
                  <h1>Site Map</h1>
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
                <h4 ><a href="/">Home</a></h4> 
               </li>
             <li className="footer-title">
                 <h4><a href="/aboutus">About us</a></h4>
               </li>
               
               <li className="footer-title">
                <h4><a href="/services">Services</a></h4>
               </li>
               <li className="footer-title">
                 <h4><a href="/technology">Technology</a></h4>
               </li>
               <li className="footer-title">
                <h4><a href="/team">Team</a></h4> 
               </li>
               <li className="footer-title">
                 <h4><a href="/blog">Blog</a></h4> 
               </li>
               <li  className="footer-title">
               <h4> <a href="/faq">FAQ</a></h4> 
               </li>
               <li  className="footer-title">
               <h4> <a href="/workwithus">Work with us</a></h4> 
               </li>
               <li  className="footer-title">
               <h4> <a href="/termsofservices">Terms of Service</a></h4> 
               </li>
               <li className="footer-title">
               <h4><a href="/login">Login</a></h4> 
               </li>
               <li className="footer-title">
               <h4> <a href="/privacy">Privacy policy</a></h4> 
               </li>
             
             </ul>
           </div>
           <div className="col-lg-6 col-xs-12  col-md-6">
                <div className="cont22">
                  <img src="images/siitemap.png" alt="siitemap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        
              
            
      
    
  
  )
}

export default Sitemap