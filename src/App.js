
import React, { useState } from 'react';

import './css/global.css';
import './App.css';

import ThemeProvider from './components/theme-provider/theme-provider';
// import ThemeProvider from "@bit/brickswhale.bsw-react-ui.theme-provider";

import ColorSection from './demo/ColorSection';
import ButtonSection from './demo/ButtonSection';
import TypographySection from './demo/TypographySection';
import Controller from './demo/Controller';

function App() {
  let theme = {
    color: {
      lightShades: "#F6F6F6",
      lightAccent: "#D2B659",
      primary: "red",
      darkAccent: "#73708C",
      darkShades: "#3B73B4"
    }
  }



  const Cart = (props) => {
    /*
      build a cart component with context and a provider
      addtocart
      submit cart

    */
  }
  


  return (
    <>
      <ThemeProvider theme={null}>
        <div className="box">
          <div className="wrapper">
            <div className="controller">
              <Controller/>
            </div>
            <div className="container">
              <div className="section">
                <div className="section-header">
                  Color
                </div>
                <div className="section-content">
                  <ColorSection/>
                </div>
              </div>

              <div className="section">
                <div className="section-header">
                  Button
                </div>
                <div className="section-content">
                  <ButtonSection/>
                </div>
              </div>

              <div className="section">
                <div className="section-header">
                  Typography
                </div>
                <div className="section-content">
                  <TypographySection/>
                </div>
              </div>

              <div className="section">
                <div className="section-header">
                  
                </div>
                <div className="section-content">

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </ThemeProvider>
    </>
  );
}

export default App;
