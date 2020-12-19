import React, { useState, useEffect, createContext, useReducer } from "react";


const themes = {
  dark: {
    "palette-color3": "#1ca086",
    separatorColor: "rgba(255,255,255,0.20)",
    textColor: "white",
    backgroundColor: "#121212",
    headerBackgroundColor: "rgba(255,255,255,0.05)",
    blockquoteColor: "rgba(255,255,255,0.20)",
    icon: "white"
  },
  light: {
    separatorColor: "rgba(0,0,0,0.08)",
    textColor: "black",
    backgroundColor: "white",
    headerBackgroundColor: "#f6f6f6",
    blockquoteColor: "rgba(0,0,0,0.80)",
    icon: "#121212"
  }
};

const initialState = {

}

export const ThemeContext = createContext(initialState);

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...prevState,
        sample: action.sample
      }
    default: 
      return prevState;
  }
}


const setCSSVariables = (theme) => {
  let themeCategories = Object.keys(theme);
  themeCategories.forEach((aCategory)=>{
    for (const value in theme[aCategory]) {
      document.documentElement.style.setProperty(`--${aCategory}-${value}`, theme[aCategory][value]);
    }
  })
};

function ThemeProvider(props) {
  const { theme=null, children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);


  const toggleTheme = () => {
    
  };

  useEffect(() => {
    if (theme != null) {
      setCSSVariables(theme);
    }
  },[theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;