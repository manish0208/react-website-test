import {NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = ()=>{
    return(
        <nav>
            <div className="links"><NavLink to="/"> Home </NavLink></div>
            <div className="links"><NavLink to="/projects"> Projects </NavLink></div>
            <div className="links"><NavLink to="/skills"> Skills </NavLink></div>
            <div className="links"><NavLink to="/contact"> Contact </NavLink></div>
            <div className="links"><NavLink to="/testimonial"> Testimonial </NavLink></div>
        </nav>
    );
}



export default Navbar;