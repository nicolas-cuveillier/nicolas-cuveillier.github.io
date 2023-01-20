import React from "react";

function Skill(props) {
    const skill = props.data
  
    return(
        <div className="skill-container">
            <div className="skill-img-container">
                <div className="skill-img" style={{backgroundImage: `url(${skill.image})`}}></div>
            </div>
            <div className="skill-bar-container">
                <div className="progress-light-grey" id={skill.title}>
                    <div className="progress-grey" style={{width:skill.percent }}></div>
                </div>
            </div>
        </div>
    )
}

export default Skill;