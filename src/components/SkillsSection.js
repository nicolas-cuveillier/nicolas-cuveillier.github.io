import React from "react";
import skills from "../json/skills.json";
import { useState, useEffect } from "react";
import Skill from "./Skill";

function SkillsSection() {
    const [data, setdata] = useState([])
    const [playOnce, setplayOnce] = useState(true)

    useEffect(() => {
        if(playOnce) {
            setdata(skills);
            setplayOnce(false);
        }        
    },[playOnce]);

    return(
        <section name="section3" className="skills-page">
            <div className="skills-intro-container">
                <div className="skills-title-selection-container">
                    <div className="skills-title">Skills</div>
                    <div className="skills-selection-container"></div>
                </div>
            </div>
            <div className="skills-items-container">
                <ul className="skills-items-list">
                    {data.map((e) => (<div key={e.title}><Skill data={e} /></div>))}
                </ul>
            </div>

        
        </section>
    )
}
export default SkillsSection;