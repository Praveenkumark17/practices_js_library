import React, { useEffect, useState } from "react";

export default function List({getitem}){

    const [item,setItem] = useState([]);

    useEffect(()=>{
        setItem(getitem());
        console.log('list work');
    },[getitem])

    return(
        <>
        {item.map((items)=>{
            return <p key={items}>{items}</p>
        })}
        </>
    );
}