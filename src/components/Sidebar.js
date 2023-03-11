import React from "react";
import { useLocation } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';

function Sidebar(props) {
  const location = useLocation()

  return (
    <div>
      <div className="sidebar">
        <div className="social">
        
       

{location.pathname === "/fire" ?
  <ul>
            <li className="whatsap">
                     <ReactWhatsapp number="+91-9907657026" message="Hello, May I Help You !" class="whatsappbuttn">whatsapp <i className="fa fa-whatsapp" style={{color:"#25D366", marginRight:"-7px"}}></i></ReactWhatsapp>

            </li>         </ul> :
             <ul>
                 <li className="twit">
                 <a href="https://twitter.com/therapidhire_" target="_blank">  
                   Twitter <i className="fa fa-twitter "></i>
                 </a>
               </li>
               <li className="insta">
                 <a  
                   href="https://www.instagram.com/therapidhire_/"
                   target="_blank"
                 >
                   Instagram <i className="fa fa-instagram"></i>
                 </a>
               </li>
               <li className="linke">
                 <a
                   href="https://www.linkedin.com/company/therapidhire"
                   target="_blank"
                 >
                   Linkedin <i className="fa fa-linkedin"></i>
                 </a>
               </li>
               <li className="facebook">
                 <a href="https://www.facebook.com/therapidhire" target="_blank">
                   Facebook <i className="fa fa-facebook"></i>
                 </a>
               </li>
               <li className="youtube">
   
                 <a href="https://www.youtube.com/@therapidhire_" target="_blank">
                   Youtube <i className="fa fa-youtube-play" ></i>
                 </a>
               </li> </ul>}
 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
