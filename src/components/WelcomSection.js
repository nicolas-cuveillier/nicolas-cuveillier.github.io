import React from "react";
import SocialMedia from "./SocialMedia";
import UseAnimations from 'react-useanimations';


function WelcomPage(){

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
                    <UseAnimations className="download-cv-icon" animationKey="download" style={{width:"28px"}}></UseAnimations>  
                    <div className="mail-icon"></div>   
                </div>
                <div className="socialmedia_component">
                    <SocialMedia/>
                </div>
            </div>
        </section>
    )
}
export default WelcomPage;