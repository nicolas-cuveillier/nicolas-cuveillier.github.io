import React from "react";
import SocialMedia from "./SocialMedia";
/*import Lottie from "lottie-web";
import animationData from "../style/image/6879-linkedin-social-media-icon.json"

const defaultOptions = {
    loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
};
<Lottie options={defaultOptions} height={400} width={400}/>
*/


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