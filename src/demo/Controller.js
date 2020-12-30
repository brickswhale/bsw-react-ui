import React from 'react';
import { useThemeProvider } from '../components/theme-provider/theme-provider';
import chroma from 'chroma-js';

const Controller = (props) => {
    let [ state, { setTheme } ]= useThemeProvider();
    let palette = ["lightShades", "lightAccent", "primary", "darkAccent", "darkShades"]
    return (
        <div>
            {
                palette.map((aKey,index)=>{
                    return (
                        <input key={index} type="color" id={`color${index}`} name="color" value={chroma(state.theme.color[aKey])} onChange={(e)=>{
                            setTheme({
                            ...state.theme, 
                            color: {
                                ...state.theme.color,
                                [aKey]: chroma(e.target.value)
                            } 
                            })
                        }} />
                    )
                })
            }

        </div>
    )
}

export default Controller;