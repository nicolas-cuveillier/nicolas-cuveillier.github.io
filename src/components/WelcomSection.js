import React from "react";
import SocialMedia from "./SocialMedia";


function WelcomPage(){
    return(
        <section name="section1" className="welcom_page">
            <div className="pict_component">
                <div className="principal_pict">
                </div>
                <div className="socialmedia_component">
                    <SocialMedia/>
                </div>
            </div>
        </section>
    )
}
export default WelcomPage;