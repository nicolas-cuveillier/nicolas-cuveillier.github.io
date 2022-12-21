import React from "react";
import skills from "../json/skills.json";
import { useState, useEffect } from "react";
import Skill from "./Skill";

function SkillsSection() {
    const [data, setData] = useState([])
    const [playOnce, setplayOnce] = useState(true)
    const [id, setId] = useState("all")
    
    useEffect(() => {
        if(playOnce) {
            setData(skills);
            setplayOnce(false);
        } 
        
        const elems = document.getElementsByClassName("skills-selectioner")
        for (var i = 0; i<3; i++) {
            elems[i].style.backgroundColor = ''
        }
        document.getElementById(id).style.backgroundColor = 'rgba(128, 128, 128, 1)'
        id === "all" ? setData(skills) : setData(() => skills.filter(e => e.type === id))

    },[playOnce, id, data]);

    return(
        <section name="section3" className="skills-page">
            <div className="skills-intro-container">
                <div className="skills-title-selection-container">
                    <div className="skills-title">Skills</div>
                    <div className="skills-selection-container">
                        <div className="skills-selectioner" id="tecnical" onClick={() => setId("tecnical")}>tecnical</div>
                        <div className="skills-selectioner" id="soft" onClick={() => setId("soft")}>soft</div>
                        <div className="skills-selectioner" id="all" onClick={() => setId("all")}>test</div>
                    </div>
                </div>
            </div>
            <div className="skills-items-container">
                <ul className="skills-items-list">
                    {data.map((e) => (<div key={e.title} className="skills-list-elem"><Skill data={e}/></div>))}
                </ul>
            </div>

        
        </section>
    )
}
export default SkillsSection;