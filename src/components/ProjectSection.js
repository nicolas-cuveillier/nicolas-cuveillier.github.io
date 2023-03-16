import React from "react";

function ProjectSection() {
    return(
        <section name="section4" className="projects_page">
            <h1>Project : Insurance & Banking - NCMB</h1>
            <div className="project-content-container">
                <div className="project-content-text-container">
                        <p>
                            The idea of this project was to rebuild a simplified version of the network infrastructure of a bank composed of
                            a front-office, consisting of a public website enabling the clients to see the products and services offered by the 
                            bank, and a private website and mobile app giving the possibility to the clients to access their bank account 
                            information and subscribe to their products. We used VirtualBox to create 5 VMs according to the following roles 
                            : database server, web server, router 1, router 2, client.
                        </p>
                </div>
                <div className="project-content-video-container">
                    <div className="project-content-video-icon">
                        <iframe 
                            width="560" 
                            height="330" 
                            src="https://www.youtube.com/embed/37fvJs_g-iE" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="project-content-text-container">
                    <p>
                        Concerning the security, we implemented a firewall in each of the router creating two zones : an internal and 
                        totally safe one as well as a DMZ that contains the web server. All communications where encrypted using ssl and 
                        self-signed ssl certificates for simplification. The Challenge was to implement a Two-Factor Authentication in order 
                        to connect to the website using the mobile application. For that, we have created a protocol describe in the following
                        picture.
                    </p>
                </div>
            </div>
            <div className="website-footer">

            </div>
        </section>
    )
}
export default ProjectSection;