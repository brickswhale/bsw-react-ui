import React, { useState, useEffect, useMemo, createContext, useContext, useReducer } from "react";


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

export const ThemeContext = createContext(initialState);
export const useThemeProvider = () => {
  return useContext(ThemeContext);
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...prevState,
        theme: action.theme
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
  if (theme != null) {
    initialState['theme'] = theme
  }

  const [state, dispatch] = useReducer(reducer, {...initialState});

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