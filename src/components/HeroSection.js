import React from "react";
import "../styles/heroSectionStyles/heroSection.css";
import hero from "../images/illustration-working.svg";
function HeroSection() {
   return (
      <section className="hero-section">
         <div className="hero-text">
            <h1>More than just shorter links</h1>
            <p>
               Build your brand's recognition and get detailed insights on how your links are
               performing.
            </p>
            <button className="getstarted-button">Get Started</button>
         </div>
         <div className="hero-image">
            <img src={hero} alt="illustration working" />
         </div>
      </section>
   );
}

export default HeroSection;
