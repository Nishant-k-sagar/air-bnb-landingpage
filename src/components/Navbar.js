import React from 'react';
import logo from '../img/Navbar/airbnb1.png'
import '../styleSheets/Navbar.css';

function Navbar (){
    return (
        <nav className='navbar'>
            <p><a href='https://www.airbnb.co.in/'><img src={logo} alt='airbnb-logo' className='nav--logo' /></a></p>
            <ul className='navbar-links'>
                <li className='item'><a href="#home" >Home</a></li>
                <li className='item'><a href="#about" >About</a></li>
                <li className='item'><a href="#services" >Services</a></li>
                <li className='item'><a href="#contact" >Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;