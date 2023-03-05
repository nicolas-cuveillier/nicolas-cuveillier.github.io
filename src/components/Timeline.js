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
                    <div className="timeline-innerblock-left"></div>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-right">
                    <div className="timeline-innerblock-right"></div>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-left">
                    <div className="timeline-innerblock-left"></div>
                </div>
            </div>
            <div className="timeline-rowblock">
                <div className="timeline-outerblock-right">
                    <div className="timeline-innerblock-right"></div>
                </div>
            </div>
        </div>
    )
}
export default Timeline;