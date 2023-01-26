import React from "react";

function Timeline() {
    const height = '60%'
    const elems = document.getElementsByClassName("ag-timeline-item_box")

    window.addEventListener('scroll', function (){
        var scroll = window.scrollY - 140
        var idx = Math.floor(scroll / 200)
        idx = Math.min(4,idx)
        
        for (let i = 0; i < 4; i++) {
            if(i <= idx){
                i%2 === 0 ? elems[i].classList.add("fade-left") : elems[i].classList.add("fade-right")
                elems[i].classList.add("active") 
            } else {
                i%2 === 0 ? elems[i].classList.remove("fade-left") : elems[i].classList.remove("fade-right")
                elems[i].classList.remove("active") 
            }
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
                                <h3>École Polytechnique Fédérale de Lausanne</h3>
                                <div className="ag-timeline-item-box_pict" id="pict_epfl"></div>
                                <p>Bachelor in Computer Science - 2020/2023</p>
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
                                <div className="ag-timeline-card_point" id="js-ag-active">2022</div>                                
                            </div>
                            </div>

                            <div className="ag-timeline-item_box">
                                <h3>Instituto Superior Tecnico</h3>
                                <div className="ag-timeline-item-box_pict" id="pict_tecnico"></div>
                                <p>Exchange year - 2022/2023</p>
                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_right">
                            <div className="ag-timeline-item_box">
                                <h3>Gap Year</h3>
                                <div className="ag-timeline-item-box_pict" id="pict_gap_year"></div>
                                <p>Interships - 2023/2024</p>
                            </div>
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point" id="js-ag-active">2023</div>
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
                                <h3>École Polytechnique Fédérale de Lausanne</h3>
                                <div className="ag-timeline-item-box_pict" id="pict_epfl_ethz"></div>
                                <p>Master in Cyber Security in collaboration with ETHZ - 2024/2025</p>
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