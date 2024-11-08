import React, { useState } from "react";

export default function Form(){

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');

    const [data,setData] = useState({
        name:'',
        email:''
    })

    const onhandlechange = (event) =>{
        event.preventDefault();

        // console.log('Name:',name);
        // console.log('Email:',email);
        console.log('Data:',data);
    }

    return(
        <>
        <form onSubmit={onhandlechange}>
            <h1>Registration Form:</h1>
            {/* <label>Name: <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}></input></label>
            <label>Email: <input type="text" value={email} onChange={(e)=>(setEmail(e.target.value))}></input></label> */}
            <label>Name: <input type="text" value={data.name} onChange={(e)=>(setData(pre=>{return{...pre,name:e.target.value}}))}></input></label>
            <label>Email: <input type="text" value={data.email} onChange={(e)=>(setData(pre=>{return{...pre,email:e.target.value}}))}></input></label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}