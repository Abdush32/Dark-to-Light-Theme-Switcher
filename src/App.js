import React, { useState,useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AppTheme from "./color";
const App = () => {
    const theme = useContext(ThemeContext)[0];
    const currectTheme = AppTheme[theme];
const themeHook = useState("light");
return (
<ThemeContext.Provider value={themeHook}>
<div  style={{
    backgroundColor: `${currectTheme.backgroundColor}`,
    color: `${currectTheme.textColor}`,}}>
<Navbar  />
<Header />
<HeroSection />
</div>
</ThemeContext.Provider>
);
};

export default App;
