import { lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import posthog from "posthog-js";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";
import Sitemap from "./components/Sitemap";
import CookieBanner from "./components/CookieBanner";
import CloudApplication from "./Services/CloudApplication";
import Advancedtech from "./Services/Advancedtech";
import Userexperience from "./Services/Userexperience";
import Digitalacceleration from "./Services/Digitalacceleration";
import Pengineering from "./Services/Pengineering";
import Androidappdevelopment from "./Services/Androidappdevelopment";
import Flutterappdevelopment from "./Services/Flutterappdevelopment";
import Iosappdevelopment from "./Services/Iosappdevelopment";
import Reactnativeapp from "./Services/Reactnativeapp";
import Rorappdevelopment from "./Services/Rorappdevelopment";
import Angularjs from "./Services/Angularjs";
import Merndevelopment from "./Services/Merndevelopment";
import Meandevelopment from "./Services/Meandevelopment";
import Javadevelopment from "./Services/Javadevelopment";
import Mvcdevelopment from "./Services/Mvcdevelopment";
import Pythondevelopment from "./Services/Pythondevelopment";
import Reactjsdevelopment from "./Services/Reactjsdevelopment";
import Aiandml from "./Services/Aiandml";
import Datascience from "./Services/Datascience";
import Iotdevelopment from "./Services/Iotdevelopment";
import Lowcodedevelopment from "./Services/Lowcodedevelopment";
import Whatsappchatbot from "./Services/Whatsappchatbot";
import Staffaugmentation from "./Services/Staffaugmentation";
import Cybersecurity from "./Services/Cybersecurity";
import Devops from "./Services/Devops";
import Itoutsourcing from "./Services/Itoutsourcing";
import Uiuxdesign from "./Services/Uiuxdesign";
import Leadership from "./components/Leadership";
import Healthcare from "./components/Healthcare";
import Culture from "./components/Culture";
import Ecommerce from "./components/Ecommerce";
import Education from "./components/Education";
import Entertainment from "./components/Entertainment";
import TravelandHospitality from "./components/TravelandHospitality";
import Publisector from "./components/Publicsector";
import Frontentapply from "./components/Frontentapply";
import BackEndapply from "./components/BackEndapply";
import Qaengineer from "./components/Qaengineer";
import Javaapply from "./components/Javaapply";
import Reactapply from "./components/Reactapply";
import Telentapply from "./components/Telentapply";
import Businessdevelopment from "./components/Businessdevelopment ";

const Home = lazy(() => import("./components/Home"));

const Aboutus = lazy(() => import("./components/Aboutus"));
const Services = lazy(() => import("./components/Services"));
const Blog = lazy(() => import("./components/Blog"));
const Contactus = lazy(() => import("./components/Contactus"));
const Technology = lazy(() => import("./components/Technology"));
const Pricing = lazy(() => import("./components/Pricing"));
const Team = lazy(() => import("./components/Team"));
const Career = lazy(() => import("./components/Career"));
const Privacypolicy = lazy(() => import("./components/Privacypolicy"));
const Blogdetail = lazy(() => import("./components/Blogdetail"));
const Apply = lazy(() => import("./components/Apply"));
const Terms = lazy(() => import("./components/Terms"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Profile = lazy(() => import("./components/Profile"));
const Forgotpassword = lazy(() => import("./components/Forgotpassword"));
const Verifie = lazy(() => import("./components/Verifie"));
const Faq = lazy(() => import("./components/Faq"));
const Applymean = lazy(() => import("./components/Applymean"));
const Applymern = lazy(() => import("./components/Applymern"));
const Pagefound = lazy(() => import("./components/Pagefound"));
const cookies = new Cookies();
const token = cookies.get("token");

function App() {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TheRapidHire",
    image: "https://therapidhire.com/images/logo.png",
    "@id": "",
    url: "https://therapidhire.com",
    telephone: "+91 9176282406",
    priceRange: "$29 - $49",
    address: {
      "@type": "PostalAddress",
      streetAddress: "51,Electronic Complex Pardesipura",
      addressLocality: "Indore",
      postalCode: "452007",
      addressCountry: "IN",
    },
  };
  const schemaLocalBusiness_JSON = JSON.stringify(schemaLocalBusiness);

  const schemaOrganization = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "TheRapidHire",
    url: "https://therapidhire.com/",
    sameAs: [
      "https://www.linkedin.com/company/therapidhire",
      "https://twitter.com/therapidhire_",
      "https://www.facebook.com/therapidhire/",
      "https://www.instagram.com/therapidhire_/",
    ],
    logo: "https://therapidhire.com/images/logo.png",
    description:
      "TheRapidHire Pvt. Ltd. is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis. With a mission to deliver quality services at a reasonable cost, TRH takes an agile, collaborative approach to create customized solutions across the digital value chain. Our deep expertise in infrastructure and applications management turns your ideas into reality. Our services include Web design, Web development, IT and Database, AWS, APP Development, Cloud Services, Database management, Cyber Security, and Payroll Management.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "51, Electronic Complex, Pardesipura  ",
      addressLocality: " Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452007",
      addressCountry: "India",
    },
  };
  const schemaOrganization_JSON = JSON.stringify(schemaOrganization);

 


  const schemaWebSite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "TheRapidHire",
    url: "https://www.therapidhire.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.therapidhire.com/blog{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaWebSite_JSON = JSON.stringify(schemaWebSite);

  const schemaFaq = {
    "@context": "http://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Q. What does Therapidhire do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TRH is a software development and IT outsourcing company specializing in the design & development of customized mobile and web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Q. Why Choose Therapidhire as a software development service provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Therapidhire is a well-known software and mobile app development company when it comes to custom software development. Numerous businesses have benefited from our long-term experience and expertise in providing diverse custom software development services in accordance with the most recent technological standards .Our software developers are experts in agile team deployment, custom-centric engagement models, strict quality measures, in-depth technical and domain expertise, and an understanding of various software development frameworks, programming languages, and platforms to deliver the best web software solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Q. As a software development firm, what software development services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer full-service software development, including custom software development, web app development, mobile app development, software testing, and other related services. Our robust software development services are completed in a clean manner to provide high-quality services.",
        },
      },
    ],
  };
  const schemaFaq_JSON = JSON.stringify(schemaFaq);

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">{schemaLocalBusiness_JSON}</script>
        <script type="application/ld+json">{schemaOrganization_JSON}</script>
        <script type="application/ld+json">{schemaWebSite_JSON}</script>
        <script type="application/ld+json">{schemaFaq_JSON}</script>
      </Helmet>

      <ScrollToTop />

      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Header />

          {(token && posthog.has_opted_out_capturing()) || // new
          posthog.has_opted_in_capturing() ? null : (
            <CookieBanner />
          )}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/aboutus" element={<Aboutus />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/letsconnect" element={<Contactus />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/technology" element={<Technology />}></Route>
            {/* <Route exact path="/pricing" element={<Pricing />}></Route> */}
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/careers" element={<Career />}></Route>
            <Route exact path="/privacy" element={<Privacypolicy />}></Route>
            <Route exact path="/:type" element={<Blogdetail />}></Route>
            <Route exact path="/applyjava" element={<Apply />}></Route>
            <Route exact path="/termsofservices" element={<Terms />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/profile/:id/" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword/:id/"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/verify/:id/" element={<Verifie />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/faq" element={<Faq />}></Route>
            <Route exact path="/applymern" element={<Applymern />}></Route>
            <Route exact path="/applymean" element={<Applymean />}></Route>
            <Route exact path="*" element={<Pagefound />}></Route>
            <Route exact path="/sitemap" element={<Sitemap />}></Route>
            <Route exact path="/cloudapplication" element={<CloudApplication/>}></Route>
            <Route exact path="/advancetech" element={<Advancedtech/>}></Route>
            <Route exact path="/userexperiencedesign" element={<Userexperience/>}></Route>
            <Route exact path="/digitalacceleration" element={<Digitalacceleration/>}></Route>
            <Route exact path="/productengineering" element={<Pengineering/>}></Route>
            <Route exact path="/androidappdevelopment" element={<Androidappdevelopment/>}></Route>
            <Route exact path="/flutterappdevelopment" element={<Flutterappdevelopment/>}></Route>
            <Route exact path="/iosappdevelopment" element={<Iosappdevelopment/>}></Route>
            <Route exact path="/reactnativeappdevelopment" element={<Reactnativeapp/>}></Route>
            <Route exact path="/rorappdevelopment" element={<Rorappdevelopment/>}></Route>
            <Route exact path="/angularjs" element={<Angularjs/>}></Route>
            <Route exact path="/merndevelopment" element={<Merndevelopment/>}></Route>
            <Route exact path="/meandevelopment" element={<Meandevelopment/>}></Route>
            <Route exact path="/javadevelopment" element={<Javadevelopment/>}></Route>
            <Route exact path="/mvcdevelopment" element={<Mvcdevelopment/>}></Route>
            <Route exact path="/pythondevelopment" element={<Pythondevelopment/>}></Route>
            <Route exact path="/reactjsdevelopment" element={<Reactjsdevelopment/>}></Route>
            <Route exact path="/artificialintelligencedevelopment" element={<Aiandml/>}></Route>
            <Route exact path="/datascience" element={<Datascience/>}></Route>
            <Route exact path="/iotdevelopment" element={<Iotdevelopment/>}></Route>
            <Route exact path="/lowcodedevelopmentservices" element={<Lowcodedevelopment/>}></Route>
            <Route exact path="/whatsappbusinesschatbot" element={<Whatsappchatbot/>}></Route>
            <Route exact path="/staffaugmentation" element={<Staffaugmentation/>}></Route>
            <Route exact path="/cybersecurity" element={<Cybersecurity/>}></Route>
            <Route exact path="/devops" element={<Devops/>}></Route>
            <Route exact path="/itoutsourcing" element={<Itoutsourcing/>}></Route>
            <Route exact path="/uiuxdesign" element={<Uiuxdesign/>}></Route>
            <Route exact path="/leadership" element={<Leadership/>}></Route>
            <Route exact path="/healthcare" element={<Healthcare/>}></Route>
            <Route exact path="/culture" element={<Culture/>}></Route>
            <Route exact path="/ecommerce" element={<Ecommerce/>}></Route>
            <Route exact path="/education" element={<Education/>}></Route>
            <Route exact path="/education" element={<Education/>}></Route>
            <Route exact path="/entertainment" element={<Entertainment/>}></Route>
            <Route exact path="/travel" element={<TravelandHospitality/>}></Route>
            <Route exact path="/publicsector" element={<Publisector/>}></Route>
            <Route exact path="/frontenapply" element={<Frontentapply/>}></Route>
            <Route exact path="/backapply" element={<BackEndapply/>}></Route>
            <Route exact path="/qaengineerapply" element={<Qaengineer/>}></Route>
            <Route exact path="/javaaapply" element={<Javaapply/>}></Route>

            <Route exact path="/reactapply" element={<Reactapply/>}></Route>

            <Route exact path="/telentapply" element={<Telentapply/>}></Route>


            <Route exact path="/businessapply" element={<Businessdevelopment/>}></Route>





































            

















            
          </Routes>
          <Footer />
          <Sidebar />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
