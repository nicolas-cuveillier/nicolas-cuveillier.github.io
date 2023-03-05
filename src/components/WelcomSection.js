import React from "react";
import SocialMedia from "./SocialMedia";


function WelcomPage(){

    return(
        <section name="section1" className="welcom_page" >
          
            <div className="pict_component">
                <div className="presentation-container">
                    <h2>Hello !</h2>
                    <p>I'm Nicolas, a computer science student and here is a bit of my life.</p>
                    <p>I'm Nicolas, a computer science student and here is a bit of my life.</p>
                </div>
                <div className="socialmedia_component">
                    <SocialMedia/>
                </div>
            </div>
        </section>
    )
}
export default WelcomPage;