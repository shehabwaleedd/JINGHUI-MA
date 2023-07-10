import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";
import i18next from "i18next";
import MainRoutes from "./routes/MainRoutes";
import Toggle from "./components/darkmode/Toggle";
import ScrollUp from "./components/scrollup/ScrollUp";
import "./App.css";
import NavBar from "./navbar/NavBar";
export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');
  const [navOpen, setNavOpen] = useState(false)
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <div className="App" id={theme}>
        <NavBar />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <AnimatePresence>
              <MainRoutes isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible}  location={location} key={location.pathname} isMobile={isMobile} setIsMobile={setIsMobile} isAbout={isAbout} setIsAbout={setIsAbout} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
            </AnimatePresence>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
