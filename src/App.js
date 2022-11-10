import { lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import CookieConsent from "react-cookie-consent";
import posthog from "posthog-js"; // new

import "./App.css";
//import "./rapidcss/bootstrap.min.css.";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";
import Sitemap from "./components/Sitemap";
import CookieBanner from "./components/CookieBanner";

const Home = lazy(() => import("./components/Home"));

//import Home from "./components/Home";

const Aboutus = lazy(() => import("./components/Aboutus"));
const Services = lazy(() => import("./components/Services"));
const Blog = lazy(() => import("./components/Blog"));
const Contactus = lazy(() => import("./components/Contactus"));
const Technology = lazy(() => import("./components/Technology"));
const Pricing = lazy(() => import("./components/Pricing"));
const Team = lazy(() => import("./components/Team"));
const Career = lazy(() => import("./components/Career"));
const Privacypolicy = lazy(() => import("./components/Privacypolicy"));
const Return = lazy(() => import("./components/Return"));
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
const Knowledge = lazy(() => import("./components/Knowledge"));
const Pagefound = lazy(() => import("./components/Pagefound"));
const JsonLd = lazy(() => import("./components/JsonLd"));
const cookies = new Cookies();
const token = cookies.get("token");

function App() {
  return (
    <div>
      <Helmet>
        <title>Software Development |IT outsourcing</title>
        <meta
          name="description"
          content="TheRapidHire Pvt Ltd is a CMMI Level-5 software development, IT outsourcing & HR company. We are a government-certified acclaimed organization providing"
        />
        <meta
          name="Keywords"
          content="Website Development, Cloud Services, Business Consulting,Software Development, It Services, Java, Php, Aws, Python, Wordpress, Blockchain, System Developer,IT outsourcing, hr outsourcing offshore development,,Mobile App Development, Minimum Viable Product,Data Engineering, New Product Development."
        />
        <meta name="msvalidate.01" content="C055A32E17CED1586FE0834E24BA50A7" />
      </Helmet>
      <ScrollToTop />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />

          {(token && posthog.has_opted_out_capturing()) || // new
          posthog.has_opted_in_capturing() ? null : (
            <CookieBanner />
          )}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/aboutus" element={<Aboutus />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/getaenquiry" element={<Contactus />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/technology" element={<Technology />}></Route>
            <Route exact path="/pricing" element={<Pricing />}></Route>
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/workwithus" element={<Career />}></Route>
            <Route exact path="/privacy" element={<Privacypolicy />}></Route>
            <Route exact path="/return" element={<Return />}></Route>
            <Route exact path="/:type" element={<Blogdetail />}></Route>
            <Route exact path="/apply" element={<Apply />}></Route>
            <Route exact path="/termsofservices" element={<Terms />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/profile/:id/" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword/:id/"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/verifiey/:id/" element={<Verifie />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route
              exact
              path="/forgotpassword"
              element={<Forgotpassword />}
            ></Route>
            <Route exact path="/faq" element={<Faq />}></Route>
            <Route exact path="/applymern" element={<Applymern />}></Route>
            <Route exact path="/applymean" element={<Applymean />}></Route>
            <Route exact path="/jsonld" element={<JsonLd />}></Route>
            <Route exact path="/knowlede" element={<Knowledge />}></Route>
            <Route exact path="*" element={<Pagefound />}></Route>
            <Route exact path="/sitemap" element={<Sitemap />}></Route>
          </Routes>
          <Footer />
          <Sidebar />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
