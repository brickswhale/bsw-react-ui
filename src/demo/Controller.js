import React from 'react';
import { useThemeProvider } from '../components/theme-provider/theme-provider';
import chroma from 'chroma-js';

const Controller = (props) => {
    let [ state, { setTheme } ]= useThemeProvider();
    return (
        <div>
        <input type="color" id="color1" name="color" value={chroma(state.theme.color.primary)} onChange={(e)=>{
            setTheme({
            ...state.theme, 
            color: {
                ...state.theme.color,
                primary: chroma(e.target.value)
            } 
            })
        }} />
        </div>
    )
}

export default Controller;