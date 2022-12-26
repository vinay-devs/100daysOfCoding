import React, { useEffect, useState } from "react";
import "../css/tile.css"

function Color(){
    const [colors,setColors]=useState([]);

    const fetchColor=async ()=>{
        const data=await fetch('http://colormind.io/api/',{
            method:"POST",
            body:JSON.stringify(
            {model:"default"}
            )
        }).then((result)=>result.json()).catch(
            console.log
        )
        
        setColors(data.result)    
    };
    console.log(colors);
    
    
    function tohex(c){
        let hex=c.toString(16);
        return hex;
    }
    
    function rgb(r,g,b){
        return "#"+tohex(r)+tohex(g)+tohex(b);
    }
    useEffect(()=>{
        fetchColor();
    },[]) 
    function generatePalette(){
        return fetchColor();
    }

    document.body.onkeyup = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32      
        ) {
         fetchColor();
        }
      }
    return(
<div>
        <div className="tile_grid">
       { colors.map((color,index)=>{
        return(
            <div className="tile" key={index} onClick={
                () => {navigator.clipboard.writeText(rgb(color.toString().split(',')[0],color.toString().split(',')[1],color.toString().split(',')[2]))}
            }>
                <div className="background" style={{backgroundColor:`rgb(${color.toString()})`}}>
                </div>
                <div className="hexaCode">
                    <p >{rgb(color.toString().split(',')[0],color.toString().split(',')[1],color.toString().split(',')[2])}</p>
                </div>
            </div>
           
      ) })}
        </div>
        <button onClick={generatePalette}>Generate Palette</button>
        </div>
    )
}

export default Color;