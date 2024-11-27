import React, { useContext } from "react";
import { ThemeContext } from "./context";

export default function User(){

    const {theme} = useContext(ThemeContext);

    const textstyle = {
        backgroundColor : theme === "light" ?'white':'black',
        color:theme === "light"?'black':'white'
    }

    return(
        <>
        <h1 style={textstyle}>User</h1>
        </>
    );
}