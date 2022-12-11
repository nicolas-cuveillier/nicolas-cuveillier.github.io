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

    function handleSelection(id) {
        const elems = document.getElementsByClassName("skills-selectioner")
        for (var i = 0; i<3; i++) {
            elems[i].style.backgroundColor = ''
        }
        document.getElementById(id).style.backgroundColor = 'rgba(128, 128, 128, 1)'
        //setdata(data.filter(e => ))
    }

    return(
        <section name="section3" className="skills-page">
            <div className="skills-intro-container">
                <div className="skills-title-selection-container">
                    <div className="skills-title">Skills</div>
                    <div className="skills-selection-container">
                        <div className="skills-selectioner" id="select1" onClick={() => handleSelection("select1")}>tecnical</div>
                        <div className="skills-selectioner" id="select2" onClick={() => handleSelection("select2")}>soft</div>
                        <div className="skills-selectioner" id="select3" onClick={() => handleSelection("select3")}>test</div>
                    </div>
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