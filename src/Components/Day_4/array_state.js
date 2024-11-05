import React, { useState } from "react";

export default function Arraystate(){

    const [list,setList] = useState(['list1','list2']);
    const [count,setCount] = useState(1);

    function updateCount(){
        const item = 'item'+count;
        setList(pre=>{return[...pre,item]});
        setCount(pre=>{return pre+1})
    }

    return(
        <>
        <h1>Array State :</h1>
        <button onClick={updateCount}>ADD List</button>

        <ul>
            {list.map((val,index)=><li key={index+1}>{val}</li>)}
        </ul>
        </>
    );
}