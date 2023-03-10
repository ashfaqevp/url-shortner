import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import "../styles/footerStyles/footer.css";

function Footer() {
   return (
      <footer className="footer">
         <img className="logo-footer" src={logo} alt="logo" />
         <div className="footer-text">
            <div className="features">
               <h4>Features</h4>
               <p>Link Shortening</p>
               <p>Branded Links</p>
               <p>Analytics</p>
            </div>
            <div className="features">
               <h4>Resources</h4>
               <p>Blog</p>
               <p>Developers</p>
               <p>Support</p>
            </div>
            <div className="Company">
               <h4>Company</h4>
               <p>About</p>
               <p>Our Team</p>
               <p>Careers</p>
               <p>Contact</p>
            </div>
            <div className="social-media">
               <img src={facebook} alt="facebook" />
               <img src={twitter} alt="twitter" />
               <img src={pinterest} alt="pinterest" />
               <img src={instagram} alt="instagram" />
            </div>
         </div>
      </footer>
   );
}

export default Footer;
