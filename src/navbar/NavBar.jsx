import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Toggle from '../components/darkmode/Toggle'

const NavBar = ({theme, toggleTheme}) => {
    return (
        <nav className='nav'>
            <Link to="/" className="nav__logo">
                <h1>JINGHUI MA</h1>
            </Link>
            <div className="nav__container">
                <Link to="/">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    )
}

export default NavBar