import chroma from 'chroma-js';

import './css/global.css';
import './App.css';

import Button from './components/button/button';
// import ThemeProvider, { ThemeContext } from './components/theme-provider/theme-provider';
import ThemeProvider from "@bit/brickswhale.bsw-react-ui.theme-provider";

function App() {
  const theme = {
    color: {
      lightShades: "#F6F6F6",
      lightAccent: "#D2B659",
      primary: "#73BCE6",
      darkAccent: "#73708C",
      darkShades: "#3B73B4",
    },
    haha: {
      asd: "red"
    }
  }

  const baseColor = {
    white: "#FFFFFF",
    black: "#262626",
    grey: "#CCCCCC"
  }

  const Color = () => {
    let colors = Object.keys(theme.color);
    return (
      <div className="color">
        {
          colors.map((aColor, index)=>{
            let color = theme.color[aColor]
            let gradients = chroma.scale([color, 'white']).colors(6);
            gradients.pop();
            return (
              <div key={index}>
                <div className="colorName">{aColor}</div>
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

  const Typography = () => {
    const types = {
      h1: "",
    }
    return (
      <div>

      </div>
    )
  }

  const Buttons = () => {

    return (
      <div className="App-button">

          <Button size="xs">Click Me</Button>
          <Button size="sm">Click Me</Button>
          <Button size="default">Click Me</Button>
          <Button size="lg">Click Me</Button>
          <Button size="xl">Click Me</Button>


      </div>
    )
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <div className="section">
            <div className="section-header">
              Color
            </div>
            <div className="section-content">
              <Color/>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              Typography
            </div>
            <div className="section-content">
              <Typography/>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              Button
            </div>
            <div className="section-content">
              <Buttons/>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              
            </div>
            <div className="section-content">

            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
