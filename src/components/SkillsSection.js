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
        <div name="section4" className="skills_page">
            <div className="skills-selection-container">

            </div>
            <div className="skills-items-container">
                <ul className="skills-items-list">
                    {data.map((e) => (<div key={e.title}><Skill data={e} /></div>))}
                </ul>
            </div>

        
        </div>
    )
}
export default SkillsSection;