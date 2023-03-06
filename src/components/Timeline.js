import React from "react";

function Timeline() {
    const elems_left = document.getElementsByClassName("timeline-outerblock-left")
    const elems_right = document.getElementsByClassName("timeline-outerblock-right")
    window.addEventListener('scroll', function (){
        var scroll = window.scrollY - 190
        var idx = Math.floor(scroll / 120.25)
        idx = Math.min(4,idx)
        
        for (let i = 0; i < 4; i++) {
            if(i <= idx){
                i%2 === 0 ? 
                    i === 2 ? elems_left[1].classList.add("fade-left") : elems_left[i].classList.add("fade-left") 
                    : i === 3 ? elems_right[1].classList.add("fade-right") : elems_right[0].classList.add("fade-right")
            } else {
                i%2 === 0 ? 
                    i === 2 ? elems_left[1].classList.remove("fade-left") : elems_left[i].classList.remove("fade-left") 
                    : i === 3 ? elems_right[1].classList.remove("fade-right") : elems_right[0].classList.remove("fade-right")
            }
        }

    });


    return(
        <div className="ag-format-container">
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-left">
                    <h3>École Polytechnique Fédérale de Lausanne</h3>
                    <p>Bachelor in Communication Systems in the school of Computer and Communication with a GPA of 4.91/6.</p>
                    <div className="timeline-innerblock-left">2020<br></br>-<br></br>2023</div>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-right">
                    <div className="timeline-innerblock-right">2022<br></br>-<br></br>2023</div>
                    <h3>Instituto Superior Tecnico</h3>
                    <p>I spent a year aborad in Lisbon for the last year of my bachelor. </p>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-left">
                    <h3>Gap year</h3>
                    <p>I would like to take a year in order to develop professional skills during internships.</p>
                    <div className="timeline-innerblock-left">2023<br></br>-<br></br>2024</div>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-right">
                    <div className="timeline-innerblock-right">2024<br></br>-<br></br>2026</div>
                    <h3>École Polytechnique Fédérale de Zurich</h3>
                    <p>Things are not fixed but the EPFL's Cyber Security master linked with ETHZ is totally interesting me.</p>
                </div>
            </div>
        </div>
    )
}
export default Timeline;