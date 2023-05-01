import React from "react";
import SocialMedia from "./SocialMedia";
import UseAnimations from 'react-useanimations';
import cv from "../style/image/NCCV.pdf"

function WelcomPage(){

    const download = (filename) => {
        // Create a new link
        const anchor = document.createElement('a');
        anchor.href = cv;
        anchor.download = filename;
    
        // Append to the DOM
        document.body.appendChild(anchor);
    
        // Trigger `click` event
        anchor.click();
    
        // Remove element from DOM
        document.body.removeChild(anchor);
    }; 

    return(
        <section name="section1" className="welcom_page" >
          
            <div className="pict_component">
                <div className="presentation-container">
                    <h2>Hello !</h2>
                    <p id="p1">
                        I'm Nicolas, a computer science student and here is a bit of my life.</p>
                    <p id="p2">
                        I'm currently studying abroad in Portugal for the last year of my bachelor and I am looking for 
                        an internship either in Cybersecurity or Data Science.
                    </p>
                    <UseAnimations className="download-cv-icon" animationKey="pocket" style={{width:"28px",color:"black"}} onClick={() => {download("Nicolas_Cuveillier_CV.pdf")}}/> 
                    <p className="download-cv-text">curriculum vitae</p>
                     
                </div>
                <div className="socialmedia_component">
                    <SocialMedia/>
                </div>
            </div>
        </section>
    )
}
export default WelcomPage;