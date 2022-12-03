import { Link } from "react-scroll";


const Navigation = () => {

    return (
        
        <div className={"navigation"} >
            <div className={"nav-item-container"}>
                <h1>Nicolas Cuveillier</h1>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="section1" className="item" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="section2" className="item" smooth={true} duration={600}>Education</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="section3" className="item" smooth={true} duration={700}>Skills and Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Navigation;