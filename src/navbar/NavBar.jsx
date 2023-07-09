import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <Link to="/" className="nav__logo">
                    <h1>JINGHUI MA</h1>
                </Link>
                <div className="nav__right">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar