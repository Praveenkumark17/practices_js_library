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

        const newId = data.length > 0 ? Math.max(...data.map((user) => user.id)) + 1 : 1;

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            body: JSON.stringify(newdata),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
          .then((res) => res.json())
          .then((response) => {
            const updatedResponse = {...response,id:newId};
            setData((prev) => {
                const updateUser = [...prev,updatedResponse];
                console.log('updated data:', updateUser);
                return updateUser;
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          

        AppToster.show({
            message:"Data Added Successfull!!",
            intent:'success'
        })

        setNewdata({
            name:'',
            email:'',
            website:''
        })
    }

    const onHandlechange = (id,name,value) =>{

        setData((users)=>{
            return users.map(user=>{
                return user.id === id?{...user,[name]:value}:user;
            })
        })

    }


    //Update data

    const onUpdatedata = (id) =>{

        const user = data.find((user)=>user.id === id);
        if(user.id<=10){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
                method:'PUT',
                body:JSON.stringify(user),
                headers:{
                    "Content-Type":"application/JSON: charset-UTF-8",
                }
            })
            .then((res)=>res.json())
            .then((response)=>{
                AppToster.show({
                    message:'user updated successfully',
                    intent:'primary'
                })
            })
        }else{
            AppToster.show({
                message:'user updated successfully',
                intent:'primary'
            })
        }
    
    }

    //Delete user

    const onDeletedata = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"delete",
            headers:{
              "Content-Type":"application/JSON: charset-UTF-8",
            }
          })
          .then((response)=>response.json())
          .then(()=>{
            setData((users)=>{
              return users.filter(user=>user.id !==id)
            })
      
            AppToster.show({
              message:"user deleted successfully",
              intent:"danger",
              timeout:3000,
            })
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
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td><EditableText value={user.email} onChange={value=>{onHandlechange(user.id,'email',value)}}/></td>
                        <td><EditableText value={user.website} onChange={value=>{onHandlechange(user.id,'website',value)}}/></td>
                        <td>
                            <Button intent="primary" onClick={()=>onUpdatedata(user.id)}>Update</Button> <Button intent="danger" onClick={()=>onDeletedata(user.id)}>Delete</Button>
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