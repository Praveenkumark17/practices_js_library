import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    const {id} = useParams()

    return(
        <>
        <h1>This is User page</h1>
        <h2>User Id:{id}</h2>
        </>
    );
}