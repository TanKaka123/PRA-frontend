
import "./navMobile.scss"
import {BtnNavMobile } from "../../icon/icon";
function navMobile() {
    return (
        <div className="navMobile">
               <nav>
        <h1 className="logo"><img src="./Logo.png" alt="logo" /></h1>
        <input type="checkbox" id="menuBtn"/>
        <label htmlFor="menuBtn" className="menuBtn">
            <BtnNavMobile/>
        </label>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#animal">Animal</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Admin</a></li>
        </ul>
    </nav>
    
    

        </div>
    );
}

export default navMobile;