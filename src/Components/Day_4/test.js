import React, { useState } from "react";

export default function Test(){

    // let [color,setColor] = useState('red');

    const [value,setValue] = useState({
        color:'red',
        food:'dosa'
    });

    function updateColor(){
        setValue(pre=>{return{...pre,color:'purple'}})
    }

    return(
        <>
            <h1>Function file :</h1>
            <h1 style={{color:value.color}}>My Favourite color is {value.color}.</h1>
            <button onClick={updateColor}>Color Change</button>
        </>
    );
}