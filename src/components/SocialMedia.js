import React from "react";
import UseAnimations from 'react-useanimations';

const SocialMedia = () => {

    return (
        <div className="social-network">
            <UseAnimations className="social-media-item" animationKey="github" />    
            <UseAnimations className="social-media-item" animationKey="linkedin" />    
            <UseAnimations className="social-media-item" animationKey="facebook" />    
            <UseAnimations className="social-media-item" animationKey="download" />    
            
        </div>
    );
} 

export default SocialMedia;