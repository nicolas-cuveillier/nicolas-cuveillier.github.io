import React from "react";


function ProjectSection() {
 //   <source src="" type="video/mp4" />
    return(
        <section name="section4" className="projects_page">
            <h1>Project : Insurance & Banking - NCMB</h1>
            <div className="project-content-container">
                <div className="project-content-video-container">
                    <div className="project-content-video-icon">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/37fvJs_g-iE" 
                            title="YouTube video player" 
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="project-content-text-container"></div>
            </div>
        </section>
    )
}
export default ProjectSection;