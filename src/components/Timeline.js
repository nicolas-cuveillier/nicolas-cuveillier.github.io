import React from "react";

function Timeline() {
    return(
        <div className="ag-timeline-block">
            <div className="ag-timeline_title-box">
                <div className="ag-timeline_tagline">Timeline</div>
            </div>
            <section className="ag-section">
                <div className="ag-format-container">
                <div className="js-timeline ag-timeline">
                    <div className="js-timeline_line ag-timeline_line">
                        <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
                    </div>
                    <div className="ag-timeline_list">

                        <div className="js-timeline_item ag-timeline_item_right">
                            <div className="ag-timeline-item_box"></div>
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2021</div>
                            </div>
                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_left">
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2020</div>
                            <div className="ag-timeline-item_box_left"></div>
                            </div>
                            </div>
                            <div className="ag-timeline-item_box"></div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_right">
                            <div className="ag-timeline-item_box"></div>
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2020</div>
                            </div>
                            </div>
                        </div>

                        <div className="js-timeline_item ag-timeline_item_left">
                            <div className="ag-timeline-card_box">
                            <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">2019</div>
                            </div>
                            </div>
                            <div className="ag-timeline-item_box"></div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Timeline;