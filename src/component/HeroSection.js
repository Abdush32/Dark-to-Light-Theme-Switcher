import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";
import "./comp.css"

const HeroSection = () => {
const theme = useContext(ThemeContext)[0];
const currectTheme = AppTheme[theme];

return (
<div
style={{
padding: "18px",
backgroundColor: `${currectTheme.backgroundColor}`,
color: `${currectTheme.textColor}`,
textAlign: "center",
border:"1px solid gray"
}}
>
<h4>Designed by Abdush</h4>

</div>
);
};

export default HeroSection;