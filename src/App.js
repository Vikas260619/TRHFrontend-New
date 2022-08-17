import "./App.css";
//import "./rapidcss/bootstrap.min.css.";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contactus from "./components/Contactus";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Career from "./components/Career";
import Privacypolicy from "./components/Privacypolicy";
import Return from "./components/Return";
import Blogdetail from "./components/Blogdetail";
import Apply from "./components/Apply";
import Terms from "./components/Terms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Forgotpassword from "./components/Forgotpassword";
import Verifie from "./components/Verifie";

function App () {
  return (
    <div>
      <BrowserRouter>
      <Header/> 
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<Aboutus />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/technology" element={<Technology />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>

          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/privacy" element={<Privacypolicy />}></Route>
          <Route exact path="/return" element={<Return />}></Route>
          <Route exact path="/blogdetail/:id" element={<Blogdetail />}></Route>
          <Route exact path="/apply" element={<Apply />}></Route>
          <Route exact path="/terms" element={<Terms/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/profile/:id/" element={<Profile/>}></Route>
          <Route exact path="/forgotpassword/:id/" element={<Forgotpassword/>}></Route>
          <Route exact path="/verifiey/:id/" element={<Verifie/>}></Route>          
        </Routes>
        <Footer/>
        <Sidebar/>
      </BrowserRouter>
    </div>
  );
}
export default App;
