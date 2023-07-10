import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav'>
            <Link to="/" className="nav__logo">
                <h1>JINGHUI MA</h1>
            </Link>
            <div className="nav__container">
                <Link to="/">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar