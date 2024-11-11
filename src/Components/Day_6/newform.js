import React, { useState } from "react";

export default function Newform(){

    const [data,setData] = useState({
        name:'',
        email:'',
        mobile:'+91 ',
        gender:'',
        terms:false,
        language:'',
        address:''
    })

    const onhandlechange = (event) =>{
        event.preventDefault();
        console.log('Data:',data);
    }

    const onchange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;

        // setData(pre=>{return{...pre,[name]:value}})

        const {name,value,type,checked} = e.target;
        setData(pre=>{return{...pre,[name]:type==='checkbox'?checked:value}})

    }

    return(
        <>
        <form onSubmit={onhandlechange}>
            <h1>Registration Form:</h1>
            <label>Name: <input type="text" value={data.name} name="name" onChange={onchange}></input></label><br/>
            <label>Email: <input type="text" value={data.email} name="email" onChange={onchange}></input></label><br/>
            <label>Mobile: <input type="text" value={data.mobile} name="mobile" onChange={onchange}></input></label><br/>
            <label>Gender:</label>
            <label><input type="radio" value="male" name='gender' onChange={onchange}/>Male</label>
            <label><input type="radio" value="female" name='gender' onChange={onchange}/>Female</label><br/>
            <label>I accept Terms:<input type="checkbox" value={data.terms} name="terms" onChange={onchange}/> </label><br/>
            <label>Select Language:</label>
            <select value={data.language} name="language" onChange={onchange}>
                <option value={''}>Select Language</option>
                <option value={'HTML'}>HTML</option>
                <option value={'CSS'}>CSS</option>
                <option value={'Java'}>Java</option>
                <option value={'Java Script'}>Java Script</option>
            </select><br/>
            <label>Address:</label>
            <textarea name='address' value={data.address} onChange={onchange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}