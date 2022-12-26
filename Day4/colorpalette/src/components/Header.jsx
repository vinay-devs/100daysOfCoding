import React from "react";
import "../css/headerStyle.css"

function Header(){
    return (
        <div>
        <div className="header">
            <h2>Click on the background to copy to clipboard</h2>
            <h1>Color Palette Generate</h1>
        </div>
        <div className="colorpalette"></div>
        </div>
    )
}

export default Header