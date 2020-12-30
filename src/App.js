
import React, { useState } from 'react';

import './css/global.css';
import './App.css';

import HolyGrailLayout from './components/holygrail-layout/holygrail-layout';
import ThemeProvider from './components/theme-provider/theme-provider';
import Drawer from './demo/DrawerSection';
// import ThemeProvider from "@bit/brickswhale.bsw-react-ui.theme-provider";

import ColorSection from './demo/ColorSection';
import ButtonSection from './demo/ButtonSection';
import TypographySection from './demo/TypographySection';
import Controller from './demo/Controller';
import SectionContainer from './demo/draft-components/section-container';

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
  let mainTheme = 'light';



  const Cart = (props) => {
    /*
      build a cart component with context and a provider
      addtocart
      submit cart

    */
  }
  
  return (
    <ThemeProvider>
      <HolyGrailLayout
        header={
          <div>
            Header
            <Drawer/>
          </div>
        }
        footer={
          <div>footer</div>
        }
      >
        <SectionContainer>
          <div className="section">
            <div className="section-header">
              Color
            </div>
            <div className="section-content">
              <ColorSection/>
            </div>
          </div>
        </SectionContainer>
        
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
            Color matches

          </div>
          <div className="section-content">
          {
              ['white','light','dark','black'].map((aTheme,index)=>{
                return (
                  <div data-theme={aTheme} key={index} className="colorDemoContainer">
                    <div key={index} className={`colorDemoBox`}>{aTheme}</div>
                    {
                      ['1','2','3','4','5'].map((aSet,index)=>{
                        return <div key={index} className={`colorDemoBox bsw-color-set-${aSet}`}>{`bsw-color-set-${aSet}`}</div>
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            Grid layout

          </div>
          <div className="section-content">
            
          </div>
        </div>
        
      </HolyGrailLayout>
      
    </ThemeProvider>
  )

  return (
    <>
      <ThemeProvider theme={null}>
        <div className="box" data-theme={mainTheme}>
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
                  Color matches

                </div>
                <div className="section-content">
                {
                    ['white','light','dark','black'].map((aTheme,index)=>{
                      return (
                        <div data-theme={aTheme} key={index} className="colorDemoContainer">
                          <div key={index} className={`colorDemoBox`}>{aTheme}</div>
                          {
                            ['1','2','3','4','5'].map((aSet,index)=>{
                              return <div key={index} className={`colorDemoBox bsw-color-set-${aSet}`}>{`bsw-color-set-${aSet}`}</div>
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>

              <div className="section">
                <div className="section-header">
                  Grid layout

                </div>
                <div className="section-content">
                  <HolyGrailLayout>Contenttt</HolyGrailLayout>
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
