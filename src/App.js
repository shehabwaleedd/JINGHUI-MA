import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";
import ScrollUp from "./components/scrollup/ScrollUp";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <div className="App" id={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <NavBar theme={theme} toggleTheme={toggleTheme} isMobile={isMobile} setIsMobile={setIsMobile}/>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
              <Route path='/about' element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home  isMobile={isMobile}/>} />
            </Routes>
          </AnimatePresence>
          <ScrollUp />
          <Footer />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
