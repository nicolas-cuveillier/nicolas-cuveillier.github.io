import React from "react";

function Skill(props) {
    const skill = props.data
  
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="skill-img-container">
                        {skill.image.length !== 0 && <div className="skill-img" style={{backgroundImage: `url(${skill.image})`}}></div>}
                        {skill.image.length === 0 && <div className="skill-title">{skill.title}</div>}
                    </div>
                    <div className="skill-bar-container">
                        <div className="progress-light-grey" id={skill.title}>
                            <div className="progress-grey" style={{width:skill.percent }}></div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back">
                    <p>{skill.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;