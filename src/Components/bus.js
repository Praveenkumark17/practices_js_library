import React from "react";
import './bus.css';

export default function Bus(props){
    const {lapinfo} = props;
    return(
        <>
        <h1><span>{lapinfo.brand}</span> laptop having storage of <span>{lapinfo.storage}</span></h1>
        </>
    );
}