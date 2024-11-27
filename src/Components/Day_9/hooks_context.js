import React, { useState } from "react";
import { ThemeContext } from "./context";
import User from "./user";

export default function Hookscontext(){

    const [theme,setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((pre)=>(pre==='light'?"dark":"light"))
    }

    return(
    <>
    <ThemeContext.Provider value={{theme}}>
        <h2>UseContext:</h2>
        <button onClick={toggleTheme}>Toogle Theme</button>
        <User/>
    </ThemeContext.Provider>
    </>
    );
}