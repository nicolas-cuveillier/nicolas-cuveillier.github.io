import React from "react";
import UseAnimations from 'react-useanimations';

const openInNewTab = (url) => {

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}


const SocialMedia = () => {

    return (
        <div className="social-network">
            <UseAnimations className="social-media-item" animationKey="github" onClick={() => openInNewTab("https://github.com/nicolas-cuveillier")} loop={true} style={{width:"34px"}} />    
            <UseAnimations className="social-media-item" animationKey="linkedin" onClick={() => openInNewTab("https://www.linkedin.com/in/nicolas-cuveillier")} loop={true} style={{width:"34px"}} />    
            <UseAnimations className="social-media-item" animationKey="facebook" onClick={() => openInNewTab("https://github.com/nicolas-cuveillier")} loop={true} style={{width:"34px"}} />    
            <UseAnimations className="social-media-item" animationKey="download" onClick={() => openInNewTab("")} style={{width:"34px"}} />    
            
        </div>
    );
} 

export default SocialMedia;