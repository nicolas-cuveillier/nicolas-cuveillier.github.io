import React from "react";

function Skill(props) {
    const skill = props.data
    
    return(
        <div className="skill-container">
            <div className="skill-img" style={{backgroundImage: "url(../src/style/image/python.png)"}}></div>
        </div>
    )
}

export default Skill;