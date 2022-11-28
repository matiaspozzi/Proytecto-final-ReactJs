import React from 'react'
import cart from "../img/cart.svg"
import { Link } from "react-router-dom"
import CartWidget from "../main/cartWidget"

const Nav = () => {
    return (
        <nav className="orderNav">
            <Link className='underline' to="/products/controladordeaudio">Controladoras de sonido</Link>
            <Link className='underline' to="/products/monitoresdeaudio">Monitores de Audio</Link>
            <Link className='underline' to="/products/controladormidi">Controladores Midi</Link>
            <div>
            <Link to="/Carrito">
               <CartWidget />
            </Link>
            </div>
            
        </nav>
    )
}

export default Nav