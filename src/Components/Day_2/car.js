import React from "react";
import Bus from "./bus";

export default function Car(){
    const lap = {
        brand:'HP',storage:'256 SSD'
    }
    const lapinfo = [
        {brand:'HP',storage:'256 SSD'},
        {brand:'Lenovo',storage:'256 SSD with 1TB HHD'},
        {brand:'Dell',storage:'512 SSD'},
        {brand:'Mac',storage:'256 SSD'},
    ]

    const array = [1,2,3,4,5,6,7,8,9];
    return(
        <>
        {lap.brand!=undefined && lap.storage!=undefined?<Bus lapinfo={lap}/>:null}

        <ul>
            {lapinfo.map((value)=>(<li key={value.brand}><Bus lapinfo={value}/></li>))}
        </ul>

        {array.map((value,index)=>(<h2 key={index}>{value}</h2>))}
        </>
    );
}