import React,{ useContext } from 'react'
import "./comp.css"
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";
import BannerArea from "./BannerArea";
import ThemeToggler from "./Toggler"
const Navbar = () => {
    const theme = useContext(ThemeContext)[0];
const currectTheme = AppTheme[theme];
    return (
        <div style={{
            backgroundColor: `${currectTheme.backgroundColor}`,
            color: `${currectTheme.textColor}`,}}>
<div>
        <ul style={{
            backgroundColor: `${currectTheme.backgroundColor}`,
            color: `${currectTheme.textColor}`,}} >
  <li class="active">Home</li>
  <li>News</li>
  <li>Contact</li>
  <li>About</li>
</ul>
<ThemeToggler />
        </div>
        <BannerArea />
        </div>
    )
}

export default Navbar
