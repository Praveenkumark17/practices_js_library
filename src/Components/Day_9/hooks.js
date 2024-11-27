import React, { useMemo, useRef, useState } from "react";

export default function Hooks(){

    //UseRef

    const input1 = useRef();

    const onRef = () =>{
        console.log('input:',input1.current.value);
    } 

    //Usememo

    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);

    const theme = {
        backgroundColor :dark?'black':'white',
        color:dark?'white':'black'
    }

    const slowfunction = (number) =>{
        console.log('slow function called:')
        for(let i=0;i<=number;i++){
            return number*2;
        }
    }

    const double = useMemo(()=>slowfunction(number),[number]);

    return(
        <>
        <h1 className="text-center">Hooks:</h1>
        <h3>UseRef:</h3>
        <div className="mb-5">
        <input type="text" ref={input1}/>
        <button onClick={onRef}>Use Ref</button>
        </div>
        <h3>UseMemo:</h3>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>{setDark(!dark)}}>Change</button>
        <div style={theme}><p>{double}</p></div>
        </>
    );
}