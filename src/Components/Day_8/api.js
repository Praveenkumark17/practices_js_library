import React, { useEffect, useState } from "react";
import './api.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button, EditableText, InputGroup, Toaster } from "@blueprintjs/core";

const AppToster = Toaster.create({
    position:"top"
})

export default function Api(){

    const [data,setData] = useState([]);

    const [newdata,setNewdata] = useState({
        name:'',
        email:'',
        website:''
    });

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>(res.json()))
        .then((response)=>( setData(response)))
    },[]);

    const onupdate = (e) =>{
        const {name,value} = e.target;

        setNewdata(pre=>({...pre,[name]:value}));
    }

    const onadd = () =>{

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            body: JSON.stringify(newdata),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
          .then((res) => res.json())
          .then((response) => {
            setData((prevData) => [...prevData, response]);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          

        AppToster.show({
            message:"Data Added Successfull!!"
        })

        setNewdata({
            name:'',
            email:'',
            website:''
        })
    }

    


    return(
        <>
        <div className="main">
            <table className="">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td><EditableText value={user.email}/></td>
                        <td><EditableText value={user.website}/></td>
                        <td>
                            <Button intent="primary">Edit</Button> <Button intent="danger">Delete</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                   <tr>
                    <td></td>
                    <td>
                    <InputGroup name="name" value={newdata.name} onChange={onupdate}/>
                    </td>
                    <td>
                    <InputGroup name="email" value={newdata.email} onChange={onupdate}/>
                    </td>
                    <td>
                    <InputGroup name="website" value={newdata.website} onChange={onupdate}/>
                    </td>
                    <td>
                    <Button intent="success" onClick={onadd}>ADD</Button>
                    </td>
                   </tr>
                </tfoot>
            </table>
        </div>
        </>
    );
}