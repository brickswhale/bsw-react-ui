import React, { useState, useEffect, useMemo, createContext, useContext, useReducer } from "react";
import chroma from 'chroma-js';

let initialState = {
  theme: {
    color: {
      lightShades: "#F6F6F6",
      lightAccent: "#D2B659",
      primary: "#73BCE6",
      darkAccent: "#73708C",
      darkShades: "#3B73B4"
    }
  }
}

const ThemeContext = createContext(initialState);
export const useThemeProvider = () => {
  return useContext(ThemeContext);
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      // the outcome of setting theme here is when a new theme passed in with different key/css variable name, the previous variable will remain if new theme doesn't override, need to refresh the page to clear the runtime effect whenever new theme is provided
      return {
        ...prevState,
        theme: action.theme
      }
    default: 
      return prevState;
  }
}


const setCSSVariables = (theme, type="color") => {
  let themeCategories = Object.keys(theme);
  themeCategories.forEach((aCategory)=>{
    for (const value in theme[aCategory]) {
      let color = theme[aCategory][value];
      if (type == 'color') {
        // rgb
        let colorRGB = chroma(color).rgb();
        document.documentElement.style.setProperty(`--bsw-${aCategory}-${value}-rgb`, colorRGB);

        // contrast
        let contrastColor = "#FFFFFF";
        let contrastLevel = chroma.contrast(color, contrastColor);
        if (contrastLevel <= 4.5) {
          contrastColor = "#262626";
        }
        document.documentElement.style.setProperty(`--bsw-${aCategory}-${value}-contrast`, contrastColor);

        // darken
        let darkenColor = chroma(color).darken()
        document.documentElement.style.setProperty(`--bsw-${aCategory}-${value}-darken`, darkenColor);

        // brighten
        let brightenColor = chroma(color).brighten()
        document.documentElement.style.setProperty(`--bsw-${aCategory}-${value}-brighten`, brightenColor);

        // find success, warning, danger colors based on primary color
        if (value == "primary") {
          let colorHSL = chroma(color).hsl();
          let min = 0.5;
          let max = 0.7;
          let saturation = colorHSL[1] < min ? min : (colorHSL[1] > max ? max : colorHSL[1]);
          let lightness = colorHSL[2] < min ? min : (colorHSL[2] > max ? max : colorHSL[2]);

          let successColor = chroma([140, saturation, lightness], 'hsl')
          let warningColor = chroma([40, saturation, lightness], 'hsl')
          let dangerColor = chroma([0, saturation, lightness], 'hsl')
          document.documentElement.style.setProperty(`--bsw-${aCategory}-success`, successColor);
          document.documentElement.style.setProperty(`--bsw-${aCategory}-warning`, warningColor);
          document.documentElement.style.setProperty(`--bsw-${aCategory}-danger`, dangerColor);
        }
      }
      document.documentElement.style.setProperty(`--bsw-${aCategory}-${value}`, color);
    }
  })
};

function ThemeProvider(props) {
  const { theme=null, type="light", children } = props;
  // if (theme != null) {
  //   initialState['theme'] = theme
  // }

  const [state, dispatch] = useReducer(reducer, initialState);

  const methods = useMemo(()=>({
    setTheme: (newTheme) => {
      dispatch({ type: 'SET_THEME', theme: newTheme });
    }
  }),[]);

  useEffect(() => {
    if (state.theme != null) {
      setCSSVariables(state.theme);
    }
  },[state.theme]);

  useEffect(() => {
    if (theme != null) {
      methods.setTheme(theme);
    }
  },[theme]);

  return (
    <ThemeContext.Provider value={[state, methods]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;