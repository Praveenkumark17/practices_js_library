import React, { useCallback, useState } from "react";
import List from "./list";

export default function Hookscallback(){
    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);

    const getitem = useCallback(()=>{
        return [number+1,number+2,number+3];
    },[number])

    const theme = {
        backgroundColor: dark?'black':'white',
        color:dark?'white':'black'
    }

    return(
        <div style={theme}>
            <h2>UseCallback:</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setDark(!dark)}>Change Theme</button>
            <List getitem={getitem}/>
        </div>
    );
    
}