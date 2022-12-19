import React from "react";

function Skill(props) {
    const skill = props.data
    const image = skill.image
  
    return(
        <div className="skill-container">
            <div className="skill-img" style={{backgroundImage: `url(${require("../style/image/python.png")})`}}></div>
        </div>
    )
}

export default Skill;