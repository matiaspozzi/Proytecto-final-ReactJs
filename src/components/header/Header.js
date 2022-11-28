import React from "react";
import NavBar from "../navBar/NavBar"
import housemusic from "../img/housemusic.png"
import { Link } from "react-router-dom";



function Header(parameter) {
    

    return (
        <header id="mainAndHeader">
            <div>
                <Link to="/">
                    <img className="imgHouse" src={housemusic} alt="IconoHm" />
                </Link>
            </div>
            
            <NavBar />
            
        </header>
    )
}
export default Header
