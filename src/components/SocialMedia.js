import React from "react";
import UseAnimations from 'react-useanimations';

const openInNewTab = (url) => {

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}


const SocialMedia = () => {

    return (
        <div className="social-network">
            <UseAnimations className="social-media-item" animationKey="github" onClick={() => openInNewTab("https://github.com/nicolas-cuveillier")} loop={true} style={{width:"38px",color:"white"}} autoplay={true}/>    
            <UseAnimations className="social-media-item" animationKey="linkedin" onClick={() => openInNewTab("https://www.linkedin.com/in/nicolas-cuveillier")} loop={true} style={{width:"44px",color:"white"}}autoplay={true} />    
            <UseAnimations className="social-media-item" animationKey="instagram" onClick={() => openInNewTab("https://www.instagram.com/nicolas_cuveillier")}  style={{width:"42px",color:"white"}} autoplay={true}/>
            <a className="mail-icon" href="mailto:nicolas.cuveillier@epfl.ch"> </a>      
        </div>
    );
} 

export default SocialMedia;