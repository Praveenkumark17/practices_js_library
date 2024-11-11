import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();

    return(
        <>
        <h1>This is Login page</h1>
        <button onClick={()=>{navigate('/second')}}>Click to another page</button>
        </>
    );
}