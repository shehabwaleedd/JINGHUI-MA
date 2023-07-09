import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Main from '../pages/home/Home';
import Home from '../pages/home/Home';


const MainRoutes = (Props) => {

    const location = useLocation();


    return (
        <Routes location={location} key={location.pathname} >
            <Route path='/about' element={<About  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default MainRoutes