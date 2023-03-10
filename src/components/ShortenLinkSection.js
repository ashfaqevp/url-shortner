import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/shortenLinkStyles/shortenLink.css";
function ShortenLinkSection() {
   const getSessionStorage = () => {
      let links = sessionStorage.getItem("links");
      if (links) {
         return JSON.parse(sessionStorage.getItem("links"));
      } else {
         return [];
      }
   };
   const httpRegex =
      /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
   const [link, setLink] = useState("");

   const [errorText, setErrorText] = useState(false);

   const [links, setLinks] = useState(() => getSessionStorage());

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!httpRegex.test(link)) {
         setErrorText(true);
      } else {
         setErrorText(false);
         const fetchData = async () => {
            try {
               await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`).then((response) => {
                  setLinks([...links, response.data.result]);
               });
            } catch (error) {
               console.error(error);
            }
         };
         fetchData();
      }
   };

   

   const handleLink = () => {
      if (httpRegex.test(link)) {
         setErrorText(false);
      }
   };

   const handleCopy = (e) => {
      navigator.clipboard.writeText(e.target.previousElementSibling.innerText);
      e.target.classList.remove("copy");
      e.target.classList.add("copied");
      e.target.innerText = "copied!";
   };

   useEffect(() => {
      sessionStorage.setItem("links", JSON.stringify(links));
   }, [links]);

   return (
      <div className="shorten-link-section">
         <div className="shorten-link">
            <form onSubmit={handleSubmit} className="form">
               <input
                  className={errorText ? "error" : ""}
                  type="text"
                  name="link"
                  placeholder="Shorten a link here..."
                  value={link}
                  onChange={(e) => {
                     setLink(e.target.value);
                     handleLink();
                  }}
               />
               <button className="form-button" type="submit">
                  Shorten It!
               </button>
            </form>
            {errorText ? <p className="error-text">Please add a link</p> : null}
         </div>
         <div className="links">
            {links?.map((item, index) => (
               <div key={index} className="link">
                  <div className="initial-link">{item.original_link}</div>
                  <div className="new-link">
                     <div className="theNewLink">{item.short_link}</div>
                     <button onClick={handleCopy} className={"newlink-button copy"}>
                        copy
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ShortenLinkSection;
