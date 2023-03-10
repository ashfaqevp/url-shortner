import React from "react";
import "../styles/advancedStatisticsStyles/advancedStatistics.css";
import brandTecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

function AdvancedStatisticsSection() {
   return (
      <section className="advanced-statistics">
         <h2>Advanced Statistics</h2>
         <p>
            Track how your links are performing across the web with our advanced statistics
            dashboard.
         </p>
         <div className="all-statistics">
            <div className="brand-recognition">
               <div className="statistic-image">
                  <img src={brandTecognition} alt="icon brand recognition" />
               </div>
               <div className="statistic-text">
                  <h3>Brand Recognition</h3>
                  <p>
                     Boost your brand recognition with each click. Generic links don't mean a thing.
                     Branded links help instil confidence in your content.
                  </p>
               </div>
            </div>
            <div className="detailed-records">
               <div className="statistic-image">
                  <img src={detailedRecords} alt="icon detailed records" />
               </div>
               <div className="statistic-text">
                  <h3>Detailed Records</h3>
                  <p>
                     Gain insights into who is clicking your links. Knowing when and where people
                     engage with your content helps inform better decisions.
                  </p>
               </div>
            </div>
            <div className="fully-customizable">
               <div className="statistic-image">
                  <img src={fullyCustomizable} alt="icon fully customizable" />
               </div>
               <div className="statistic-text">
                  <h3>Fully Customizable</h3>
                  <p>
                     Improve brand awareness and content discoverability through customizable links,
                     supercharging audience engagement.
                  </p>
               </div>
            </div>
            <div className="blue-line"></div>
         </div>
      </section>
   );
}

export default AdvancedStatisticsSection;
