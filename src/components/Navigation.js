import { Link } from "react-scroll";
import React from "react";


const Navigation = () => {

    return (
        
        <div className={"navigation"} >
            <div className={"nav-item-container"}>
                <div className="nav-logo-container">Nicolas</div>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="section2" className="item" smooth={true} duration={500}>Education</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="section3" className="item" smooth={true} duration={600}>Skills</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="section4" className="item" smooth={true} duration={700}>Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Navigation;