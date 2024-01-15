import React from 'react'
import './header.css'
import logoImg from './../../img/spaLogo.svg'

function Header() {
  return (
    <header className='header'>
        <div className="header__logo">
            <img src={logoImg} alt="logo" />
            <p className='logo__text'>Luxe Animal Spa</p>
        </div>
        <nav className="header__nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Spa Services</a></li>
                <li><a href="#">Book Appointment</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        <div className="header__icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bag-shopping"></i>
        <i class="fa-regular fa-user"></i>
        </div>
    </header>
  )
}

export default Header