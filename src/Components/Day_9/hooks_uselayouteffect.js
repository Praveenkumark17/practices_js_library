import React, { useLayoutEffect, useRef, useState } from "react";

export default function Uselayeffect(){

    const [height,setHeight] = useState(0);

    const divref = useRef();

    useLayoutEffect(()=>{
        const measured = divref.current.getBoundingClientRect().height;
        setHeight(measured);
    },[height])

    return(
        <>
            <h2 className="mt-5">UseLayoutEffect:</h2>
            <div ref={divref} style={{padding:'30px',backgroundColor:'red',width:'200px'}}>This is Red Box</div>
            <p>The measured height of the box: {height}</p>
        </>
    );

}