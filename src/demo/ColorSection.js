import chroma from 'chroma-js';
import React from 'react';
import { useThemeProvider } from '../components/theme-provider/theme-provider';
const ColorSection = () => {
    let [ state ]= useThemeProvider();
    let theme = state.theme
    let prefix = "color"
    let colors = Object.keys(theme[prefix]);

    const baseColor = {
      white: "#FFFFFF",
      black: "#262626",
      grey: "#CCCCCC"
    }
    return (
      <div className="color">
        {
          colors.map((aColorKey, index)=>{
            let color = theme[prefix][aColorKey];
            let chromaColor = chroma(color)
            let gradients = chroma.scale([chromaColor, 'white']).colors(6);
            gradients.pop();
            return (
              <div key={index}>
                <div className="colorName">{aColorKey} {chromaColor.name()}</div>
                {
                  gradients.map((aColor,index)=>{
                    return <div key={index} className="colorBox" style={{backgroundColor: aColor}}></div>
                  })
                }
              </div>
            )
          })
        }

        <div>
          <div className="colorName">White</div>
          <div className="colorBox" style={{backgroundColor: baseColor.white}}></div>
 
          <div className="colorName">Black</div>
          <div className="colorBox" style={{backgroundColor: baseColor.black}}></div>

          <div className="colorName">Grey</div>
          <div className="colorBox" style={{backgroundColor: baseColor.grey}}></div>
        </div>
      </div>
    )
  }

  export default ColorSection;