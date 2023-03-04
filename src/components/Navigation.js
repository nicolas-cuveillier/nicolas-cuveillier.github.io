import { Link } from "react-scroll";
import React from "react";


const Navigation = () => {

    return (
        
        <div className={"navigation"} >
            <div className="nav-logo-container"></div>
            <ul className="nav">
                <li className="nav-list-item">
                    <div className="item-container">
                        <Link to="section2" className="item" smooth={true} duration={500}>Education</Link>
                    </div>
                </li>
                <li className="nav-list-item">
                    <div className="item-container">
                        <Link to="section3" className="item" smooth={true} duration={600}>Skills</Link>
                    </div>
                </li>
                <li className="nav-list-item">
                    <div className="item-container">
                        <Link to="section4" className="item" smooth={true} duration={700}>Projects</Link>
                    </div>
                </li>
            </ul>
        </div>
        
    );
};

export default Navigation;