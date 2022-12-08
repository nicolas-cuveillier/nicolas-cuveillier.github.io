import React, { useState } from "react";

function Timeline() {
    const [height, setHeight] = useState("15%")
    const boxes = document.getElementsByClassName("ag-timeline-card_point")

    window.addEventListener("scroll", function(){
        //1070
        const epsilon = 1
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight - 1070;
        var scrolled = (winScroll / height ) * 100;
        setHeight(scrolled + "%")
        //TODO BETTER
        if(Math.abs(scrolled - 30) < epsilon){
            boxes[1].setAttribute("id", "js-ag-active")
        }
        if (Math.abs(scrolled - 60) < epsilon){
            boxes[2].setAttribute("id", "js-ag-active")
        }
        if (Math.abs(scrolled - 90) < epsilon){
            boxes[3].setAttribute("id", "js-ag-active")
        }
        if ((scrolled - 90) < 0 && Math.abs(scrolled - 90) > epsilon){
            boxes[3].removeAttribute("id")
        }
        if ((scrolled - 60) < 0 && Math.abs(scrolled - 60) > epsilon){
            boxes[2].removeAttribute("id")
        }
        if ((scrolled - 30) < 0 && Math.abs(scrolled - 60) > epsilon){
            boxes[1].removeAttribute("id")
        }
    });

    return(
        <div className="ag-timeline-block">
            <div className="ag-timeline_title-box">
                <div className="ag-timeline_tagline">Timeline</div>
            </div>
            <section className="ag-section">
                <div className="ag-format-container">
                <div className="js-timeline ag-timeline">
                    <div className="js-timeline_line ag-timeline_line">
                        <div className="js-timeline_line-progress ag-timeline_line-progress" style={{height: height,}}></div>
                    </div>
                    <div className="ag-timeline_list">

                        <div className="js-timeline_item ag-timeline_item_right">
                            <div className="ag-timeline-item_box">
                                <div></div>
                            </div>
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point" id="js-ag-active">2020</div>
                            </div>
                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_left">
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2022</div>                                
                            </div>
                            </div>

                            <div className="ag-timeline-item_box">

                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_right">
                            <div className="ag-timeline-item_box">

                            </div>
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2023</div>
                            </div>
                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_left">
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2024</div>
                            </div>
                            </div>
                            <div className="ag-timeline-item_box">
                                
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Timeline;